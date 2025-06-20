function fetchWeather() {
  return new Promise ( (resolve, reject) => {
    setTimeout ( () => {
      console.log('Waiting 1.1s...');
      resolve({ temp: 15, condition: 'Облачно' });
      reject(new Error('Rejected from Weather api'));
    }, 1100);
  });
}

function fetchExchangeRate() {
  return new Promise ( resolve => {
    setTimeout ( () => {
      console.log('Waiting 0.7s...');
      resolve(91.5);
    }, 700);
  });
}

function fetchTopHeadline() {
  return new Promise ( resolve => {
    setTimeout ( () => {
      console.log('Waiting 1.4s ...');
      resolve("Ученые обнаружили новый способ изучения асинхронности!");
    }, 1400);
  });
}


function loadDashboardWidget () {
  Promise.all([fetchWeather(), fetchExchangeRate(), fetchTopHeadline()])
    .then(
      result => {
        const [ weatherReport, exchangeRate, topHeadline ] = result;
        console.log(`Погода: ${weatherReport.temp}°C, ${weatherReport.condition}`);
        console.log(`Курс USD/RUB: ${exchangeRate}`);
        console.log(`Главная новость: ${topHeadline}`);
      }
    )
    .catch(err => console.log(err.message));
}



console.log('Start loading...');
loadDashboardWidget();
console.log('End loading...');
