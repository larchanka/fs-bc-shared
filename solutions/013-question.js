const promise = new Promise((resolve, reject) => {
  reject(new Error('Сервер недоступен'));
});

promise
  .then(result => console.log('Успех:', result))
  .catch(error => console.log('Ошибка сети:', error.message));

//Что выведет код, если Promise будет отклонен?

​//Ошибка сети: Сервер недоступен
