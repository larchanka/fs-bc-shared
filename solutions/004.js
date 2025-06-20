function checkItemStock(itemName) {                
    return new Promise((resolve, reject) => {
        const min = 100;
        const max = 600;
        const randomTime = Math.floor(Math.random() * (max - min + 1)) + min;
        setTimeout(() => {
            if (Math.random() <= 0.9) {
                resolve({
                    item: itemName,
                    status: 'in_stock',
                });
            } else {
                reject(new Error(`Товар "${itemName}" закончился.`))
            }
        }, randomTime)
    });
}

function processPayment(orderInfo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ paymentId: '...', status: 'paid' });
        }, 1000);

    })
}

function createOrder(paymentInfo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ orderId: '...', status: 'created' });
        }, 1000);
    })
}

async function placeOrder(items) {
    try {
        console.log('1. Параллельная проверка наличия товаров...');
        const stockResults = await Promise.all(items.map((item) => checkItemStock(item)));                                        
        console.log('   Все товары в наличии:', stockResults.map(r => r.item).join(', '));

        console.log('2. Обработка платежа...');                            
        const paymentInfo = await processPayment({
            items: items,
            totalPrice: items.length * 100
        });
        console.log(`   Платеж успешен: ID ${paymentInfo.paymentId}`);

        console.log('3. Создание заказа...');
        const orderInfo = await createOrder(paymentInfo);

        console.log(`   Заказ создан: ID ${orderInfo.orderId}`);
        console.log('--- Заказ успешно оформлен! ---');

    } catch (error) {
        console.error('--- Не удалось оформить заказ ---');
        console.error('Причина:', error.message);
    }
}

let items = ['Яблоки', 'Апельсины', 'Груши', 'Мандарины', 'Бананы'];
await placeOrder(items);

items = ['Яблоки', 'Апельсины', 'Груши', 'Мандарины', 'Бананы', 'Киви'];
await placeOrder(items);

items = ['Яблоки', 'Апельсины', 'Груши', 'Мандарины', 'Бананы', 'Киви', 'Лимоны'];
await placeOrder(items);
