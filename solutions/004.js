function generateNumber(len) {
  const resultNumbers = [];
  for (let index = 0; index < len; index++) {
    resultNumbers.push(Math.round(Math.random() * 10));
  }
  return resultNumbers.join('');
}

function checkItemStock(itemName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() < 0.9;

      if (isSuccess) {
        resolve({ 
          item: itemName,
          price: Number(generateNumber(3)).valueOf(),
          status: 'in_stock',
        });
      } else {
        reject(new Error(`Товар '${itemName}' закончился`));
      }
      
    }, (Math.random() * (0.6 - 0.1) + 0.1) * 1000 );
  });
}

function processPayment(orderInfo) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ paymentId: generateNumber(5), sum: orderInfo.total, status: 'paid' });
    }, 1.0 * 1000);
  });
}

function createOrder(paymentInfo) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ orderId: generateNumber(3), status: 'created' });
    }, 0.5 * 1000);
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
    const paymentInfo = await processPayment({ 
      items,
      total: stockResults.reduce((accum, curr) => accum + curr.price, 0),
    });
    console.log(`   Платеж на сумму ${paymentInfo.sum} руб. успешен: ID ${paymentInfo.paymentId}`);

    console.log('3. Создание заказа...');
    const orderInfo = await createOrder(paymentInfo);
    console.log(`   Заказ создан: ID ${orderInfo.orderId}`);

    console.log('--- Заказ успешно оформлен! ---');

  } catch (error) {
    console.error('--- Ошибка оформления заказа ---');
    console.error('Причина:', error.message);
  }
}


placeOrder([
  'Авоська',
  'Аудиокассета',
  'Чепчик',
  'Ящик',
  'Хрящик',
  'Физалис',
  'Топинамбур',
]);
