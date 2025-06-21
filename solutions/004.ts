import { resolvedPromise, schrodingerPromise, randomNumber, generateId } from './utils'

const placeOrder = async (items: string[]) => {
  try {
    // console.log(`Попытка оформить заказ для: ${items.join(', ')}`);
    // console.log('1. Параллельная проверка наличия товаров...');
    // Запускаем проверки параллельно для всех товаров
    const stockResults = await Promise.all(items.map(checkItemStock))
    // Если мы здесь, значит Promise.all разрешился успешно
    // console.log('   Все товары в наличии:', stockResults.map(r => r.item));
    // console.log('2. Обработка платежа...');
    const paymentResult = await processPayment(items);
    // console.log('   Платеж успешен:', paymentResult);
    // console.log('3. Создание заказа...');
    const orderInfo = { ...paymentResult, items };
    const orderResult = await createOrder(orderInfo);
    console.log('   Заказ успешно создан:', orderResult);
  } catch (error) {
    console.error('Произошла ошибка:', error.message);
  }
}
const checkItemStock = (itemName: string) => {
  return schrodingerPromise({ item: itemName, status: 'in_stock' }, randomNumber(100, 600), `Товар '${itemName}' закончился`, 0.9)
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     const isInStock = Math.random() < 0.9
  //     if (isInStock) resolve({ item: itemName, status: 'in_stock' })
  //     else reject(new Error(`Товар '${itemName}' закончился`))
  //   }, randomNumber(100, 600));
  // });
}


type Payment = {
  paymentId: string
  status: string
}

const processPayment = (orderInfo: unknown): Promise<Payment> =>
  resolvedPromise({ paymentId: generateId(), status: 'paid' }, 1000)

const createOrder = (paymentInfo: unknown) => resolvedPromise({ orderId: generateId(), status: 'created' }, 500)

placeOrder(['бутылка кефира', 'полбатона', 'бананы', 'конфеты' ])

