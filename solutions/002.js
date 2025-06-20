async function fetchWeather() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const response = { temp: 15, condition: 'Облачно' };
            resolve(response);
        }, 1100);
    });
}

async function fetchExchangeRate() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const response = 91.5;
            resolve(response);
        }, 700);
    });
}

async function fetchTopHeadline() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const response = "Ученые обнаружили новый способ изучения асинхронности!";
            resolve(response);
        }, 1400);
    });
}


function loadDashboardWidget() {
  const promises = [
    fetchWeather(),
    fetchExchangeRate(),
    fetchTopHeadline()
  ];

  Promise.all(promises)
    .then(results => {
      const [weatherData, exchangeRate, topHeadline] = results;
      console.log('\n--- Данные для виджета (через .then) ---');
      console.log(`Погода: ${weatherData.temp}°C, ${weatherData.condition}`);
      console.log(`Курс USD/RUB: ${exchangeRate}`);
      console.log(`Главная новость: ${topHeadline}`);
    })
    .catch(error => {
      reject(error);
      console.error('Ошибка при загрузке виджета:', error);
    });
}
loadDashboardWidget()
