function fetchWeather() {
  return new Promise(resolve => {
    setTimeout(() => {
      // Обновленные данные погоды
      resolve({ temp: 15, condition: 'Облачно' }, 1100); // 1,1 секунда задержки
  });
})}

function fetchExchangeRate() {
    return new Promise(resolve => {
        setTimeout(() => {
            // Обновленные примеры курса доллара к рублю
            resolve(91.5);
        }, 700); // 0.7 секунды задержки
    });
}

function fetchTopHeadline() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Ученые обнаружили новый способ изучения асинхронности!");
        }, 1400); // 1.4 секунды задержки
    });
}

function loadDashboardWidget() {
    console.log('Загрузка данных для виджета (используя .then)...');
    return Promise.all([fetchWeather(), fetchExchangeRate(), fetchTopHeadline()]).then(arr => console.log(`
        Погода: ${arr[0].temp}°C, ${arr[0].condition}
        Курс USD/RUB: ${arr[1]}
        Главная новость: ${arr[2]}`)).catch(error => `Загрузка не удалась: ${error}`);    

}

loadDashboardWidget(); // Не забудь вызвать функцию
