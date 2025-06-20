async function checkItemStock(itemName) {
    const isSuccess = Math.random() < 0.9;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccess) {
                resolve({ item: itemName, status: 'in_stock' });
            } else {
                reject(new Error(`Товар ${itemName} закончился`))
            }
        }, Math.random() * 500 + 100); //случайное время от 0.1 до 0.6 секунды
    })
}

async function processPayment(orderInfo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ paymentId: '...', status: 'paid' });
        }, 1000);
    })
}

async function createOrder(paymentInfo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ orderId: '...', status: 'created' });

        }, 500);
    })
}

async function placeOrder(items) {
    console.log(`Попытка оформить заказ для: ${items.join(', ')}`);
    try {
        console.log('1. Параллельная проверка наличия товаров...');
        // Запускаем проверки параллельно для всех товаров
        const stockCheckPromises = items.map(item => checkItemStock(item));
        const stockResults = await Promise.all(stockCheckPromises);
        // Если мы здесь, значит Promise.all успешно разрешился
        console.log('   Все товары в наличии:', stockResults.map(result => result.item));

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

placeOrder(['table', 'chair']);
placeOrder(['book', 'pencil']);
placeOrder(['coffee', 'tee']);
