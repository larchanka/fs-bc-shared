// Что нужно сделать:

//     Создай три асинхронные функции, имитирующие запросы к разным API с помощью setTimeout и Promise (можно использовать код из предыдущих версий задачи):
//         fetchWeather(): Возвращает Promise, который через 1.1 секунды разрешается (resolve) объектом { temp: 15, condition: 'Облачно' }.
//         fetchExchangeRate(): Возвращает Promise, который через 0.7 секунды разрешается (resolve) числом, например, 91.5.
//         fetchTopHeadline(): Возвращает Promise, который через 1.4 секунды разрешается (resolve) строкой, например, "Ученые обнаружили новый способ изучения асинхронности!".
//     Напиши функцию loadDashboardWidget(). Важно: Эта функция не должна быть async.
//     Внутри loadDashboardWidget():

//         Используй Promise.all() для одновременного запуска всех трех функций fetch*. Promise.all() вернет новый промис.

//         К промису, возвращенному Promise.all(), примени метод .then(). Передай в .then() функцию обратного вызова (callback), которая будет выполнена, когда все три запроса успешно завершатся. Эта функция получит массив с результатами.

//         Внутри колбэка .then() обработай массив результатов и выведи данные в консоль в структурированном виде, например:

//         --- Данные для виджета (через .then) ---
//         Погода: 15°C, Облачно
//         Курс USD/RUB: 91.5
//         Главная новость: Ученые обнаружили новый способ изучения асинхронности!
//         ----------------------------------------

function fetchWeather() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ temp: 15, condition: 'Облачно' });
    }, 1100);
  }
}


function fetchTopHeadline() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ученые обнаружили новый способ изучения асинхронности!");
    }, 1400);
  }
}

function fetchExchangeRate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(91.5);
    }, 700);
  }
}

function loadDashboardWidget() {
  Promise.all([fetchWeather(), fetchTopHeadline(), fetchExchangeRate()])
  .then(response => {
    console.log(`Погода: ${response[0].temp}, ${response[0].condition}`);
    console.log(`Курс USD/RUB: ${response[2]}`);
    console.log(`Главная новость: ${response[1]}`);  
  })
  .catch((error) => {
    throw new Error(`Error. Status code: ${error}`);
  });
}
