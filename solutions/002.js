//Иммитируем сбой сети
function isRequestSuccessful(chance = 0.2) {
  return Math.random() > chance;
}

    // Имитация запроса на получение погоды
function fetchWeather() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(isRequestSuccessful()){
        resolve({ temp: 15, condition: 'Облачно' });
      }else {
          reject(new Error("Погода не загрузилась.."));
      }
    }, 1100); // 1.1 секунды
  });
}

// Имитация запроса на получение курса доллара
function fetchExchangeRate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(isRequestSuccessful(0.3)) {
            resolve(91.5);
        }else{
            reject(new Error("Курс доллара недоступен"));
        }
    }, 700); // 0.7 секунды
  });
}

// Имитация запроса на получение главной новости
function fetchTopHeadline() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(isRequestSuccessful()) {
            resolve('Ученые обнаружили новый способ изучения асинхронности!');
        }else{
            reject(new Error("Новостей не поступило"));
        }
    }, 1400); // 1.4 секунды
  });
}

// Загрузка данных для дашборд-виджета (используя .then)
function loadDashboardWidget() {
  console.log('Загрузка данных для виджета (используя .then)...');

  Promise.all([fetchWeather(), fetchExchangeRate(), fetchTopHeadline()])
    .then((results) => {
      const [weatherData, exchangeRate, topHeadline] = results;

      console.log('\n--- Данные для виджета (через .then) ---');
      console.log(`Погода: ${weatherData.temp}°C, ${weatherData.condition}`);
      console.log(`Курс USD/RUB: ${exchangeRate}`);
      console.log(`Главная новость: ${topHeadline}`);
      console.log('----------------------------------------\n');
    })
    .catch((error) => {
      console.error('Ошибка при загрузке виджета:', error);
    });
}

// Вызов функции
loadDashboardWidget();
