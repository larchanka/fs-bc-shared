    // 1. Проверка наличия товара (с имитацией случайной задержки и возможной ошибкой)
function checkItemStock(itemName) {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 500 + 100; // от 100 до 600 мс
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve({ item: itemName, status: 'in_stock' });
      } else {
        reject(new Error(`Товар '${itemName}' закончился`));
      }
    }, delay);
  });
}

// 2. Имитация обработки платежа (всегда успешна)
function processPayment(orderInfo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        paymentId: 'pay_' + Math.random().toString(36).slice(2),
        status: 'paid',
        amount: orderInfo.total,
      });
    }, 1000);
  });
}

// 3. Имитация создания заказа (всегда успешна)
function createOrder(paymentInfo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        orderId: 'order_' + Math.random().toString(36).slice(2),
        status: 'created',
        paymentId: paymentInfo.paymentId,
      });
    }, 500);
  });
}

// 4. Основная логика оформления заказа
async function placeOrder(items) {
  console.log(`🛒 Оформление заказа для товаров: ${items.join(', ')}\n`);

  try {
    // Шаг 1: Параллельная проверка наличия
    console.log('🔍 1. Проверка наличия товаров...');
    const stockPromises = items.map(item => checkItemStock(item));
    const stockResults = await Promise.all(stockPromises);
    console.log('✅ Все товары в наличии:', stockResults.map(r => r.item).join(', '));

    // Шаг 2: Обработка платежа
    console.log('\n💳 2. Обработка платежа...');
    const totalAmount = items.length * 100; // допустим, 100 за товар
    const paymentInfo = await processPayment({ items, total: totalAmount });
    console.log(`✅ Платеж прошел. ID: ${paymentInfo.paymentId}, Сумма: ${paymentInfo.amount}₽`);

    // Шаг 3: Создание заказа
    console.log('\n📦 3. Создание заказа...');
    const orderInfo = await createOrder(paymentInfo);
    console.log(`✅ Заказ успешно создан! ID заказа: ${orderInfo.orderId}`);

    console.log('\n🎉 --- Заказ успешно оформлен ---\n');

  } catch (error) {
    console.error('\n❌ --- Ошибка оформления заказа ---');
    console.error('Причина:', error.message);
    console.error('----------------------------------\n');
  }
}
