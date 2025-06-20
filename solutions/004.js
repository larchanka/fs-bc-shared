async function checkItemStock(itemName) {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 500 + 100;
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve({ item: itemName, status: 'in_stock' });
      } else {
        reject(new Error(`Товар '${itemName}' закончился`));
      }
    }, delay);
  });
}

async function processPayment(orderInfo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ paymentId: 'PAY-' + Date.now(), status: 'paid' });
    }, 1000);
  });
}

async function createOrder(paymentInfo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ orderId: 'ORDER-' + Date.now(), status: 'created' });
    }, 500);
  });
}

async function placeOrder(items) {
  console.log(`Попытка оформить заказ для: ${items.join(', ')}`);
  try {
    console.log('1. Параллельная проверка наличия товаров...');
    const stockCheckPromises = items.map(item => checkItemStock(item));
    const stockResults = await Promise.all(stockCheckPromises);
    console.log('   Все товары в наличии:', stockResults.map(r => r.item));

    console.log('2. Обработка платежа...');
    const paymentInfo = await processPayment({ items, total: items.length * 100 });
    console.log(`   Платеж успешен: ID ${paymentInfo.paymentId}`);

    console.log('3. Создание заказа...');
    const orderInfo = await createOrder(paymentInfo);
    console.log(`   Заказ создан: ID ${orderInfo.orderId}`);

    console.log('--- Заказ успешно оформлен! ---');

  } catch (error) {
    console.error('--- Ошибка оформления заказа ---');
    console.error('Причина:', error.message);
  }
}

placeOrder(['Книга', 'Клавиатура', 'Настольная лампа']);
