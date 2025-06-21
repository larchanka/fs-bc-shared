async function checkItemStock(itemName) {
    const delay = Math.random() * 500 + 100;
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9) {
                resolve({ 
                    item: itemName, 
                    status: 'in_stock' 
                });
            } else {
                reject(new Error(`Товар '${itemName}' закончился`));
            }
        }, delay);
    });
}

function processPayment(orderInfo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ 
                paymentId: 'pay_' + Math.random().toString(36).slice(2, 9),
                status: 'paid',
                items: orderInfo.items, 
                total: orderInfo.total 
            });
        }, 1000);
    });
}

function createOrder(paymentInfo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                orderId: 'ord_' + Math.random().toString(36).slice(2, 9),
                status: 'created',
                paymentId: paymentInfo.paymentId, 
                items: paymentInfo.items, 
                total: paymentInfo.total 
            });
        }, 500);
    });
}

async function placeOrder(items) {
    console.log(`Попытка оформить заказ для: ${items.join(', ')}`);
    try {
 
        console.log('1. Параллельная проверка наличия товаров...');
        const stockResults = await Promise.all(items.map(checkItemStock));
        console.log('   Все товары в наличии:', stockResults.map(r => r.item));
   
        console.log('2. Обработка платежа...');
        const paymentInfo = await processPayment({ 
            items: stockResults, 
            total: items.length * 1000 
        });
        console.log(`   Платеж успешен: ID ${paymentInfo.paymentId}, Сумма: ${paymentInfo.total} руб`);
    
        
        console.log('3. Создание заказа...');
        const orderInfo = await createOrder(paymentInfo);
        console.log(`   Заказ создан: ID ${orderInfo.orderId}`);
        console.log(`   Список товаров: ${orderInfo.items.map(i => i.item).join(', ')}`);
    
        console.log('--- Заказ успешно оформлен! ---');
        return orderInfo;
    
    } catch (error) {
        console.error('--- Ошибка оформления заказа ---');
        console.error('Причина:', error.message);
        throw error;
    }
}


