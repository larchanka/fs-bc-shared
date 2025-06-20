//можно не проверять
function fetchWeather() {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          temp: 15,
          condition: "Облачно",
        }),
      1100
    );
  });
}

function fetchExchangeRate() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(91.5), 700);
  });
}

function fetchTopHeadline() {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve("Ученые обнаружили новый способ изучения асинхронности!"),
      1400
    );
  });
}

function loadDashboardWidget() {
  const data = Promise.all([
    fetchWeather(),
    fetchExchangeRate(),
    fetchTopHeadline(),
  ]);

  data.then(([weather, exchangeRate, topHeadline]) => {
    console.log(`
    --- Данные для виджета (через .then) ---
    Погода: ${weather.temp}°C, ${weather.condition}
    Курс USD/RUB: ${exchangeRate}
    Главная новость: ${topHeadline}
    ----------------------------------------
      
      `);
  });
}

loadDashboardWidget();
