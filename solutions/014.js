//Когда выполнится блок .finally()?

showLoadingIndicator();
fetch('/api/data')
  .then(res => console.log('Данные:', res))
  .catch(err => console.log('Ошибка:', err))
  .finally(() => hideLoadingIndicator());

  //Выполняется в любом случае: при успехе или ошибке.