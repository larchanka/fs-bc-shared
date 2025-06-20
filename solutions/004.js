function checkItemStock(itemName) {
   return new Promise ( (resolve, reject) => {
     setTimeout ( () => {
       if ( Math.random() < 0.9 ) {
         resolve({ item: itemName, status: 'in_stock' });
       } else {
         reject(new Error(`Товар ${itemName} закончился`));
       }
     }, Math.random() * 0.6 * 100);
   });
 }

 function processPayment(orderInfo) {
   return new Promise ( resolve => {
     setTimeout ( () => {
       console.log('Payment processing 1s');
       resolve({ paymentId: '...', status: 'paid' });
     }, 1000);
   });
 }

 function createOrder(paymentInfo) {
   return new Promise ( resolve => {
     setTimeout ( () => {
       console.log('Order creating 0.5s');
       resolve({ orderId: '123987', status: 'created' });
     }, 500);
   });
 }


async function placeOrder(items) {
  try {
    const checkStatus = await Promise.all(items.map ( i => checkItemStock(i)));
    console.log('Checking items comleted successfully');
    const paymentInfo = await processPayment({ items: items, total: 100 });
    const { orderId, status } = ( paymentInfo.status === 'paid' ) && await createOrder(paymentInfo);
    console.log(`Order ${orderId} ${status}`);
  }
  catch (err) {
    console.log(err.message);
  }

}


console.log('Proceed to checkout...');
placeOrder( ['01', '02', '100']);
