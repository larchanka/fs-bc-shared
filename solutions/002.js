function fetchWeather() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ temp: 15, condition: 'Облачно' });
    }, 1.1 * 1000);
  });
}

function fetchExchangeRate() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(87.9);
    }, 0.7 * 1000);
  });
}

function fetchTopHeadline() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Британские инженеры забыли прежнюю беспомощность в игнорировании синхронности!");
    }, 1.4 * 1000);
  });
}

function loadDashboardWidget() {
  console.log('Загрузка данных для виджета (используя .then)...');
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
      console.log(`Курс USD/RUB:: ${exchangeRate}`);
      console.log(`Главная новость: : ${topHeadline}`);
      console.log('-------------------------------\n');
      
    })
    .catch(error => {
      console.log('Ошибка при загрузке виджета:', error);
    });
}

loadDashboardWidget();

