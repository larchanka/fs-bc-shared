function fetchWeather() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                temp: 15,
                condition: 'Облачно'
            });
        }, 1100);
    })
}

function fetchExchangeRate() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(91.5);
        }, 700);
    });
}

function fetchTopHeadline() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Ученые обнаружили новый способ изучения асинхронности!');
        }, 1400);
    });
}

async function loadDashboardWidget() {

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
      console.log('----------------------------------------\n');
    })
    .catch(error => {
      console.error('Ошибка при загрузке виджета: ', error);
    });
}

loadDashboardWidget();