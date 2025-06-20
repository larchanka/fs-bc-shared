function checkItemStock(itemName) {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
      // Обновленные данные погоды
      if(Math.random() < 0.9) resolve({ item: itemName, status: 'in_stock' });
      else reject(new Error(`Товар '${itemName}' закончился`));
  }, 100+Math.random()*500)// 0,1-0.6 секунда задержки
  
})}

function processPayment(orderInfo) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ paymentId: '...', status: 'paid' });
            
        }, 1000); // 1 секунда задержки
    });
}

function createOrder(paymentInfo) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ orderId: '...', status: 'created' });
            
        }, 500); // 0,5 секунда задержки
    });
}



async function placeOrder(items) {
    console.log('Формирование заказа...');
    
    try{
        const promises = items.map(item => checkItemStock(item));
        await Promise.all(promises);
    
        await processPayment(35);
        const order = await createOrder(78);
        console.log(`Заказ ${order.orderId} оформлен`);
    }
    catch(error)  {console.log(`Невозможно выполнить заказ: "${error.message}"`);
    }
}
placeOrder(["хлеб", "молоко","печенье"]); // Не забудь вызвать функцию
