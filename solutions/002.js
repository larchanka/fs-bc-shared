async function fetchWeather() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const weather = { temp: 15, condition: 'Облачно' };
      resolve(weather);
    }, 1100);
  });
}

async function fetchExchangeRate() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const exchangeRate = 91.5;
        resolve(exchangeRate);
        }, 700);
    });
}

fetchTopHeadline = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const topHeadline = "Ученые обнаружили новый способ изучения асинхронности!";
            resolve(topHeadline);
        }, 1400);
    });
}

function loadDashboardWidget() {
const promises = [fetchWeather(), fetchExchangeRate(), fetchTopHeadline()];
Promise.all(promises)
    .then(([weather,exchangeRate,topHeadline]) => {
        console.log(`Погода: ${weather.temp}°C, ${weather.condition}`);
        console.log(`Курс USD/RUB: ${exchangeRate}`);
        console.log(`Главная новость: ${topHeadline}`);
    }).catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
    })
}

loadDashboardWidget();
