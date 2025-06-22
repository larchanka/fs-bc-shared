'use strict';

const products = ['Product_1', 'Product_2', 'Product_3'];

const checkItemStock = async (itemName) => {
  return await new Promise((resolve, reject) => {
    const randomTimeout = () => Math.floor(Math.random() * 501) + 100;

    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve({ item: itemName, status: 'in_stock' });
      } else {
        reject(new Error(`Товар ${itemName} закончился`));
      }
    }, randomTimeout());
  });
};

function processPayment(orderInfo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(orderInfo);
    }, 1000);
  });
}

function createOrder(paymentInfo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ orderId: '873', status: 'created' });
    }, 500);
  });
}

async function placeOrder(items) {
  try {
    const arrayPromises = items.map((item) => checkItemStock(item));
    const goods = await Promise.all(arrayPromises);
    console.log(
      'Список товаров: ',
      goods.map((g) => g.item)
    );
    const paymentInfo = await processPayment({
      orderList: products,
      totalCost: 5000,
    });
    console.log(
      `Оплачены товары:${paymentInfo.orderList.map(
        (order) => ' ' + order
      )} на сумму: ${paymentInfo.totalCost}`
    );
    const readyOrder = await createOrder(paymentInfo);

    if (`${readyOrder.status}` === 'created') {
      console.log(`Заказ номер ${readyOrder.orderId} создан!`);
    }
  } catch (error) {
    console.error('Заказ не оформлен! Ошибка: ', error.message);
  }
}

placeOrder(products);
