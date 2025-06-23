// Когда выполнится блок .finally()?

// Независимо от того, успешно ли прошел API-запрос или нет, нам нужно скрыть индикатор загрузки.

// showLoadingIndicator();
// fetch('/api/data')
//   .then(res => console.log('Данные:', res))
//   .catch(err => console.log('Ошибка:', err))
//   .finally(() => hideLoadingIndicator());

-----

// Выполнится в любом случае: и при успехе, и при ошибке
  
