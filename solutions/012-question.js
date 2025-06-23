​fetch('/api/users')
  .then(response => response.json())
  .then(users => displayUsers(users));

//Что делает метод .then() у Promise?

​//Регистрирует callback, который выполнится при успешном завершении Promise
