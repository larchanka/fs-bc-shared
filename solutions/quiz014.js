// Что делает метод .then() у Promise?

// Когда данные от сервера получены (Promise зарезолвился), мы их обрабатываем и отображаем.


// fetch('/api/users')
//   .then(response => response.json())
//   .then(users => displayUsers(users));

// Регистрирует колбэк, который выполнится при успешном завершении Promise
