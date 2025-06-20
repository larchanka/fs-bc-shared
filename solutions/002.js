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
      resolve('Ученые обнаружили новый способ изучения асинхронности!');
    }, 1400);
  });
}

function loadDashboardWidget() {
  return Promise.all([fetchWeather(), fetchExchangeRate(), fetchTopHeadline()]);
}

loadDashboardWidget()
  .then((response) => {
    const [weather, rate, news] = response;
    console.log('Погода:', `${weather.temp}C, ${weather.condition}`);
    console.log('Курс USD/RUB:', rate);
    console.log('Главная новость:', news);
  })
  .catch((error) => console.log('ошибка', error));
