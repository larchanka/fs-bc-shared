//Когда выполнится блок .finally()?
showLoadingIndicator();
fetch('/api/data')
  .then(res => console.log('Данные:', res))
  .catch(err => console.log('Ошибка:', err))
  .finally(() => hideLoadingIndicator());

// Ответ: Выполнится в любом случае: и при успехе, и при ошибке