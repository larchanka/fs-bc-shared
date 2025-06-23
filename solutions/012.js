fetch('/api/users')
  .then(response => response.json())
  .then(users => displayUsers(users));

Когда данные от сервера получены (Promise зарезолвился), мы их обрабатываем и отображаем.
Что делает метод .then() у Promise?
- Регистрирует колбэк, который выполнится при успешном завершении Promise
