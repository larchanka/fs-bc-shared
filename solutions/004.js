// Что нужно сделать:

//     Имитация проверки наличия: Создай асинхронную функцию checkItemStock(itemName).
//         Она принимает название товара (itemName) как строку.
//         Возвращает Promise.
//         Внутри промиса используй setTimeout для имитации задержки (случайное время от 0.1 до 0.6 секунды).
//         С вероятностью 90% (используй Math.random() < 0.9) промис должен успешно разрешаться (resolve) объектом { item: itemName, status: 'in_stock' }.
//         С вероятностью 10% промис должен отклоняться (reject) с ошибкой new Error(Товар '${itemName}' закончился).
//     Имитация других шагов: Создай еще две асинхронные функции (можно сделать их простыми, всегда успешными):
//         processPayment(orderInfo): Принимает информацию о заказе, ждет 1 секунду и разрешается (resolve) объектом с деталями платежа (например, { paymentId: '...', status: 'paid' }).
//         createOrder(paymentInfo): Принимает информацию об оплате, ждет 0.5 секунды и разрешается (resolve) объектом с деталями заказа (например, { orderId: '...', status: 'created' }).
//     Основная логика оформления заказа: Напиши главную асинхронную функцию placeOrder(items).
//         Она принимает массив строк items — список названий товаров в корзине.
//         Шаг 1: Параллельная проверка наличия:
//             Используя метод map для массива items, создай массив промисов, где каждый промис — это результат вызова checkItemStock(item) для соответствующего товара.
//             Используй Promise.all() для этого массива промисов. Дождись результата с помощью await. Promise.all будет ждать завершения всех проверок наличия.
//             Важно: Если хотя бы одна проверка checkItemStock завершится ошибкой (промис отклонится), то Promise.all тоже немедленно отклонится, и выполнение перейдет в блок catch.
//         Шаг 2: Обработка платежа (только если все товары в наличии):
//             Если Promise.all на предыдущем шаге успешно завершился, вызови await processPayment(...). Передай туда нужную информацию (например, список товаров и общую сумму).
//         Шаг 3: Создание заказа (только если оплата прошла):
//             Если processPayment успешно завершился, вызови await createOrder(...), передав результат оплаты.
//     Обработка ошибок: Всю логику внутри placeOrder (шаги 1, 2, 3) оберни в блок try...catch.
//         Блок catch должен перехватывать любые ошибки: как ошибку отсутствия товара от Promise.all, так и возможные (хотя в этом примере их нет) ошибки от processPayment или createOrder.
//     Вывод результата:
//         Если все шаги (проверка, оплата, создание) прошли успешно, выведи в консоль сообщение об успехе и ID созданного заказа.
//         Если на каком-то этапе произошла ошибка, выведи в консоль сообщение об ошибке, указывая причину (error.message).

function checkItemStock(itemName) {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * (600 - 100) + 100;
    setTimeout(() => {
      if (Math.random() <= 0.9) {
        resolve({ item: itemName, status: 'in_stock' });
      } else {
        reject(new Error(`Товар ${itemName} закончился`));
      }
    }, delay);
  });
}

function processPayment(orderInfo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ paymentId: '...', status: 'paid' })
    }, 1000)
  });
}

function createOrder(paymentInfo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ orderId: '...', status: 'created' });
    }, 500);
  });
}

async function placeOrder(items) {
  try {
    const stockCheck = items.map((item) => checkItemStock(item));
    const results = await Promise.all(stockCheck);
    console.log('Все товары в наличии:', results.map(r => r.item));
    console.log('2. Обработка платежа...');
    const paymentInfo = await processPayment({ items, total: items.length * 100 });
    console.log(`Платеж успешен: ID ${paymentInfo.paymentId}`);
    console.log('3. Создание заказа...');
    const orderInfo = await createOrder(paymentInfo);
    console.log(`Заказ создан: ID ${orderInfo.orderId}`);
    console.log('Заказ успешно оформлен!');
  }
  catch (error) {
    console.error(`Причина: ${error.message}`);
  }
}
