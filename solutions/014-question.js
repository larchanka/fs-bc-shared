showLoadingIndicator();
fetch('/api/data')
  .then(res => console.log('Данные:', res))
  .catch(err => console.log('Ошибка:', err))
  .finally(() => hideLoadingIndicator());

//Когда выполнится блок .finally()?

//Выполнится в любом случае: при успехе, и при ошибке

  
