async function checkItemStock(itemName){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            Math.random() < 0.9? res({ item: itemName, status: 'in_stock' }): rej(new Error(`Товар '${itemName}' закончился`));
        },  Math.random() * 500 + 100);
    })
}

function processPayment(orderInfo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ paymentId: '23232wdf33e3eeqe' + Date.now(), status: 'paid' });
    }, 1 * 1000); //1000ms
  });
}

function createOrder(paymentInfo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ orderId: 'h88chsHDH*ssdfhsdfdhfse3@#@' + Date.now(), status: 'created' });
    }, 0.5 *1000); //1000ms
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

placeOrder(['Coca-cola', 'Beef', 'Milk']);
