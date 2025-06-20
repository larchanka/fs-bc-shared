 function checkItemStock(itemName) {
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

 function processPayment(orderInfo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const paymentId = `pay_${new Date().toISOString().replace(/[-:T.]/g, '')}`;
      resolve({
        paymentId,
        status: 'paid',
        amount: orderInfo.items.length * 100,
      });
    }, 1000);
  });
}

 function createOrder(paymentInfo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        orderId: `order_${Date.now()}`,
        status: 'created',
        paymentId: paymentInfo.paymentId,
      });
    }, 500);
  });
}

 async function placeOrder(items) {
  console.log(`\nПопытка оформить заказ для: ${items.join(', ')}`);
  try {   
    console.log('1. Параллельная проверка наличия товаров...');
    const stockResults = await Promise.all(items.map((item) => checkItemStock(item)));
    console.log('Все товары в наличии:', stockResults.map((r) => r.item).join(', '));
 
    console.log('2. Обработка платежа...');
    const paymentInfo = await processPayment({ items });
    console.log(
      `Платеж успешен (ID: ${paymentInfo.paymentId}, сумма: ${paymentInfo.amount} руб.)`,
    );

      console.log('3. Создание заказа...');
    const orderInfo = await createOrder(paymentInfo);
    console.log(`Заказ создан (ID: ${orderInfo.orderId})`);

    console.log('--- Заказ успешно оформлен! ---');
    return orderInfo;
  } catch (error) {
    console.error('--- Ошибка оформления заказа ---');
    console.error('Причина:', error.message);
    throw error;
  }
}

 (async () => {
  await placeOrder([
    'Книга "JavaScript для профессионалов"',
    'Беспроводная клавиатура',
    'Настольная лампа',
  ]).catch(() => {});

  setTimeout(async () => {
    await placeOrder(['Игровая мышь', 'Коврик для мыши', 'USB-хаб']).catch(() => {});
  }, 3000);
})();
