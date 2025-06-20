const fetchWeather = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve({ temp: 15, condition: 'Облачно' }), 1100);
  });
};

const fetchExchangeRate = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(91.5), 700);
  });
};

const fetchTopHeadline = () => {
  return new Promise((resolve, _) => {
    setTimeout(
      () => resolve('Ученые обнаружили новый способ изучения асинхронности!'),
      1400
    );
  });
};

function loadDashboardWidget() {
  const array = [fetchWeather(), fetchExchangeRate(), fetchTopHeadline()];

  Promise.all(array)
    .then((values) => {
      const [weather, exchange, headline] = values;
      console.log('--- Данные для виджета (через .then) ---');
      console.log(`Погода: ${weather.temp} °C, ${weather.condition}`);
      console.log(`Курс USD/RUB: ${exchange}`);
      console.log(`Главная новость: ${headline}`);
      console.log('----------------------------------------');
    })
    .catch((error) => console.error('Ошибка: ', error));
}

loadDashboardWidget();
