async function checkItemStock(itemName) {   
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 500 + 100; // случайное время от 0.1 до 0.6 секунды
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
            resolve({
                paymentId: 'pay_' + Math.random().toString(36).substr(2, 9),
                status: 'paid',
                orderInfo
            });
        }, 1000);
    });
}

async function createOrder(paymentInfo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                orderId: 'order_' + Math.random().toString(36).substr(2, 9),
                status: 'created',
                paymentInfo
            });
        }, 500);
    });
}

async function placeOrder(items) {
    try {
        // Шаг 1: Проверка наличия всех товаров параллельно
        const stockResults = await Promise.all(
            items.map(item => checkItemStock(item))
        );
        console.log('Все товары в наличии:', stockResults);

        // Шаг 2: Обработка платежа
        // Для примера сумма — просто количество товаров * 100
        const orderInfo = {
            items: stockResults.map(res => res.item),
            total: stockResults.length * 100
        };
        const paymentResult = await processPayment(orderInfo);
        console.log('Платеж успешно обработан:', paymentResult);

        // Шаг 3: Создание заказа
        const orderResult = await createOrder(paymentResult);
        console.log('Заказ успешно создан:', orderResult);

        return orderResult;
    } catch (error) {
        console.log('Ошибка при оформлении заказа:', error.message);
    }
}

// Пример использования функции
(async () => {
    const items = ['item1', 'item2', 'item3'];
    const orderResult = await placeOrder(items);
})();