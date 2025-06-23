/**
 * Что выведет код, если Promise выполнится успешно?
 * API вернуло успешный ответ. Что мы получим?
 */

const promise = new Promise((resolve) => {
  resolve({ status: 200, body: 'OK' });
});

promise.then((response) => {
  console.log('Ответ сервера:', response.body);
});

// Ответ сервера: ОК
