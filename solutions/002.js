function fetchWeather() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ temp: 15, condition: 'Облачно' });
    }, 1100);
  });
}

function fetchExchangeRate() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(91.5);
    }, 700);
  });
}

function fetchTopHeadline() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ученые обнаружили новый способ изучения асинхронности!");
    }, 1400);
  });
}

function loadDashboardWidget() {
    return Promise.all([
        fetchWeather(),
        fetchExchangeRate(),
        fetchTopHeadline()
    ]).then(([weather, exchangeRate, headline]) => {
        console.log('--- Данные для виджета (через .then) ---');
        console.log(`Погода: ${weather.temp}°C, ${weather.condition}`);
        console.log(`Курс USD/RUB: ${exchangeRate}`);
        console.log(`Главная новость: ${headline}`);
        console.log('----------------------------------------');
    }).catch((error) => {
        console.error('Ошибка при загрузке данных для виджета:', error);
    });
}

loadDashboardWidget();