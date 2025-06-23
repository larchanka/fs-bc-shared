//Что выведет код, если Promise будет отклонен?
const promise = new Promise((resolve, reject) => {
  reject(new Error('Сервер недоступен'));
});

promise
  .then(result => console.log('Успех:', result))
  .catch(error => console.log('Ошибка сети:', error.message));

// Ответ: Ошибка сети: Сервер недоступен