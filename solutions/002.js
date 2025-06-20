function fetchWeather() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ temp: 15, condition: 'Облачно' });
    }, 1100); // Задержка 1.1 секунды
  });
}

function fetchExchangeRate() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(91.5);
    }, 700); // Задержка 0.7 секунды
  });
}

function fetchTopHeadline() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Ученые обнаружили новый способ изучения асинхронности!');
    }, 1400); // Задержка 1.4 секунды
  });
}

function loadDashboardWidget() {
  console.log('Загрузка данных для виджета (используя .then)...');
  
  Promise.all([
    fetchWeather(),
    fetchExchangeRate(),
    fetchTopHeadline()
  ])
  .then(([weatherData, exchangeRate, topHeadline]) => {
    console.log('\n--- Данные для виджета (через .then) ---');
    console.log(`Погода: ${weatherData.temp}°C, ${weatherData.condition}`);
    console.log(`Курс USD/RUB: ${exchangeRate}`);
    console.log(`Главная новость: ${topHeadline}`);
    console.log('----------------------------------------');
  })
  .catch(error => {
    console.error('Ошибка при загрузке виджета:', error);
  });
}

loadDashboardWidget();
