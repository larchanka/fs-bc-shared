
const fetchFuncOrder = () => {
    async function checkItemStock(itemName){
        const item = { item: itemName, status: 'in_stock' };

        return await new Promise((resolve, reject) => {
            if(Math.random() < 0.9) {
                setTimeout(() => resolve(item), Math.random() * 500 + 100);
            }else {
                reject(new Error(`Товар '${itemName}' закончился`));
            }
        })
    }

    async function processPayment(orderInfo) {
        const payment = { paymentId: `${orderInfo.items} - ${orderInfo.total}$ `, status: 'paid' };
        return await new Promise((resolve) => setTimeout(() => resolve(payment), 1000));
    }

    async function createOrder(paymentInfo) {
       const order = { orderId: `${paymentInfo.paymentId}`, status: 'created' };
        return await new Promise((resolve) => setTimeout(() => resolve(order), 500));
    }

    return {checkItemStock, processPayment, createOrder};
}

const placeOrder = async (items) => {
    console.log(`Попытка оформить заказ для: ${items.join(', ')}`);
    try {
        const stockCheckPromises = items.map(item => fetchFuncOrder().checkItemStock(item));
        const stockResults = await Promise.all(stockCheckPromises);
        console.log('   Все товары в наличии:', stockResults.map(r => r.item));

        console.log('2. Обработка платежа...');
        const paymentInfo = await fetchFuncOrder().processPayment({ items, total: items.length * 100 });
        console.log(`   Платеж успешен: ID ${paymentInfo.paymentId}`);

        console.log('3. Создание заказа...');
        const orderInfo = await fetchFuncOrder().createOrder(paymentInfo);
        console.log(`   Заказ создан: ID ${orderInfo.orderId}`);

        console.log('--- Заказ успешно оформлен! ---');
    }catch(error) {
        console.error('--- Ошибка оформления заказа ---');
        console.error('Причина:', error.message);
    }
}

placeOrder(['губка', 'боб', 'мыло','Салфетки', 'Туалетная бумага', 'Пакеты для мусора','Щётка', 'Порошок', 'Освежитель', 'Мочалка'])

