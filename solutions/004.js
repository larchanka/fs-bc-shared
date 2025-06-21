async function checkItemStock(itemName) {
    return new Promise((resolve, reject) => {
        const randomMs = Math.random() * (0.6 - 0.1) + 0.1;
        setTimeout(() => {
            if (Math.random() < 0.9) {
                resolve({ item: itemName, status: "in_stock" });
            } else {
                reject(new Error(`Товар ${itemName} закончился.`));
            }
        }, randomMs);
    });
}

async function processPayment(orderInfo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9) {
                const paymentId = Math.ceil(Math.random() * (1000 - 1) + 1);
                resolve({ paymentId, items: orderInfo, status: 'paid' });
            } else {
                reject(new Error(`Товар платежа ${orderInfo}`));
            }
        }, 1000);
    });
}

async function createOrder(paymentInfo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderId = Math.ceil(Math.random() * (1000 - 1) + 1);
            resolve({ orderId, items: paymentInfo.items, status: 'created' });            
        }, 500);
    });
}

async function placeOrder(items) {
    try {
        const promises = items.map(item => checkItemStock(item));
        
        await Promise.all(promises);
        
        const resPayment = await processPayment(items);

        const newOrder = await createOrder(resPayment);
        console.log(newOrder);
    } catch (error) {
        console.log('Ошибка: ', error.message);
    }
    
    
}

await placeOrder(["Смартфон", "Ноутбук", "Телевизор", "Наушники"]);
