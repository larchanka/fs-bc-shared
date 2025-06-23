const promise = new Promise((resolve, reject) => {
  reject(new Error('Сервер недоступен'));
});

promise
  .then(result => console.log('Успех:', result))
  .catch(error => console.log('Ошибка сети:', error.message));


// Когда выполнится блок .finally()?

// Ответ: Ошибка сети: Сервер недоступен


