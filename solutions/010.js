const apiRequest = new Promise((resolve, reject) => {
  const success = Math.random() > 0.2;
  if (success) {
    resolve({ data: 'Пользователь найден' });
  } else {
    reject(new Error('404 Not Found'));
  }
});

Что такое Promise?
- Это объект, представляющий результат асинхронной операции, может быть доступен сейчас или в будущем (например, результат API-запроса).
