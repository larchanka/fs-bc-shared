function checkItemStock(itemName) {
    const timeout = Math.random() * 0.5 + 0.1;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const statusOk = Math.random() <= 0.9;
            if (statusOk) {
                resolve({ item: itemName, status: 'in_stock' });
            } else {
                reject(new Error(`Товар ${itemName} закончился`))
            }
        }, timeout);
    })
}

function processPayment(orderInfo) {
    return new Promise(resolve => {
        setTimeout(
            resolve({ paymentId: crypto.randomUUID(), status: 'paid' }),
            1 * 1000
        );
    })
}

function createOrder(paymentInfo) {
    return new Promise(resolve => {
        setTimeout(
            resolve({ orderId: crypto.randomUUID(), status: 'created' }),
            0.5 * 1000
        );
    })
}

async function placeOrder(items) {
    try {
        const itemsInStock = await Promise.all(items.map(item => checkItemStock(item.name)));
        const paymentInfo = await processPayment(itemsInStock);
        const orderInfo = await createOrder(paymentInfo);

        console.log(`Заказ успешно создан.\n Номер заказа: ${orderInfo.orderId}`);
    } catch (error) {
        console.error(error.message);
    }
}

const itemsInBasket = [
    { name: "Самокат", price: 1500 },
    { name: "Телевизор", price: 4500 },
    { name: "Детское кресло", price: 400 },
];

placeOrder(itemsInBasket);