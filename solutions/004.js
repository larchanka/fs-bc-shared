function isSuccessful(probability) {
    return Math.random() < probability / 100;
}

async function checkItemStock(itemName) {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 500 + 100;
        setTimeout(() => {
            if (isSuccessful(90)) {
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
            resolve({ paymentId: 'pay_' + Date.now(), status: 'paid' });
        }, 1000);
    });
}

async function createOrder(paymentInfo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ orderId: 'order_' + Date.now(), status: 'created' });
        }, 500);
    });
}

async function placeOrder(items) {
    console.log(`Попытка оформить заказ для: ${items.join(', ')}`);
    let step = '';

    try {
        step = 'проверки наличия товаров';
        console.log('1. Параллельная проверка наличия товаров...');
        const stockCheckPromises = items.map(item => checkItemStock(item));
        const stockResults = await Promise.all(stockCheckPromises);
        console.log('   Все товары в наличии:', stockResults.map(r => r.item));

        step = 'обработки платежа';
        console.log('2. Обработка платежа...');
        const paymentInfo = await processPayment({ items, total: items.length * 100 });
        console.log(`   Платеж успешен: ID ${paymentInfo.paymentId}`);

        step = 'создания заказа';
        console.log('3. Создание заказа...');
        const orderInfo = await createOrder(paymentInfo);
        console.log(`   Заказ создан: ID ${orderInfo.orderId}`);

        console.log('--- Заказ успешно оформлен! ---');
    } catch (error) {
        console.error('--- Ошибка оформления заказа ---');
        console.error(`Ошибка на этапе: ${step}`);
        console.error('Причина:', error.message);
    }
}

placeOrder(['Книга', 'Клавиатура', 'Настольная лампа']);
