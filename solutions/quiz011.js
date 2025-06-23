const promise = new Promise((resolve) => {
  resolve({ status: 200, body: 'OK' });
});

promise.then((response) => {
  console.log('Ответ сервера:', response.body);
});


// Что выведет код, если Promise выполнится успешно?

// Ответ: Ответ сервера: OK
