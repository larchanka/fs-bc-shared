// 1. 
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

// 2. 
function processPayment(orderInfo) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        paymentId: 'pay_' + Date.now(),
        status: 'paid'
      });
    }, 1000); // 1 секунда
  });
}

// 3. 
function createOrder(paymentInfo) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        orderId: 'ord_' + Date.now(),
        status: 'created'
      });
    }, 500); // 0.5 секунды
  });
}

// 4. 
async function placeOrder(items) {
  console.log(`\nПопытка оформить заказ для товаров: ${items.join(', ')}`);
  try {
    //  Параллельная проверка наличия
    console.log('1. Проверяем наличие всех товаров...');
    const availabilityPromises = items.map(item => checkItemStock(item));
    const availabilityResults = await Promise.all(availabilityPromises);
    console.log('   Все товары в наличии:', availabilityResults.map(r => r.item).join(', '));

    // Обработка платежа
    console.log('2. Обрабатываем платёж...');
    const paymentInfo = await processPayment({ items });
    console.log(`   Платёж успешно завершён, paymentId=${paymentInfo.paymentId}`);

    //  Создание заказа
    console.log('3. Создаём заказ...');
    const orderInfo = await createOrder(paymentInfo);
    console.log(`   Заказ успешно создан, orderId=${orderInfo.orderId}`);

    console.log('Заказ оформлен успешно!');
  } catch (error) {
    console.error('Ошибка оформления заказа:', error.message);
  }
}
