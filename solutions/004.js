async function checkItemStock(itemName) {
  return new Promise((resolve, reject) => {
// const dilay = Math.floor(Math.random() * 2000) + 1000; // случайная задержка от 1 до 3 секунд
const delay = Math.floor(Math.random() * 500) + 100; // Random delay from 100 to 600 milliseconds
    setTimeout(() => {
      const stock = Math.random() > 0.1; // 90% вероятность наличия товара
      if (stock) {
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
        const payment = { paymentId: '...', status: 'paid' };
        resolve(payment);
    }, 1000);
  });
}

async function createOrder(paymentInfo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const order = { orderId: '...', status: 'created' };
            resolve(order);
        }, 500);
    });
}

// массив строк items — список названий товаров в корзине
async function placeOrder(items) {
    console.log(`Попытка оформить заказ для: ${items.join(', ')}`);
    try {
        console.log('1. Параллельная проверка наличия товаров...');
        // Запускаем проверки параллельно для всех товаров
        const promises = items.map(item => checkItemStock(item));
        const stockResults = await Promise.all(promises);
        // Если мы здесь, значит Promise.all успешно разрешился
        console.log('   Все товары в наличии:', stockResults.map(r => r.item));
        
        console.log('2. Обработка платежа...');
        // stockResults = [{ item: itemName, status: 'in_stock' }, {}, ...]
        // processPayment принимает список товаров и общую сумму
        const paymentInfo = await processPayment({ items, total: items.length * 100 });
        console.log(`   Платеж успешен: ID ${paymentInfo.paymentId}`);
    
        console.log('3. Создание заказа...');
        // createOrder принимает { paymentId: '...', status: 'paid' }
        const orderInfo = await createOrder(paymentInfo);
        console.log(`   Заказ создан: ID ${orderInfo.orderId}`);

        console.log('--- Заказ успешно оформлен! ---');

    } catch (error) {
        console.error('--- Ошибка оформления заказа ---');
        console.error('Причина:', error.message);
        // Здесь можно добавить логику для определения этапа ошибки,
        // но для начала достаточно общего сообщения.
    }
}

const goods = [
  "Молоко",
  "Хлеб",
  "Яйца",
  "Картофель",
  "Макароны"
]

placeOrder(goods);
