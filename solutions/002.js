const fetchWeather = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve({ 
            temp: 15,
            condition: 'Облачно' 
        });
    }, 1100);
});

const fetchExchangeRate = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(91.5);
    }, 700);
});

const  fetchTopHeadline = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve("Ученые обнаружили новый способ изучения асинхронности!");
    }, 1400);
});

function loadDashboardWidget() {
    Promise.all([
        fetchWeather(),
        fetchExchangeRate(),
        fetchTopHeadline()
    ])
    .then((results) => {
        const [weather, rate, topheadline] = results
        console.log(
           `
            Погода: ${weather.temp}°C, ${weather.condition}
            Курс USD/RUB: ${rate}
            Главная новость: ${topheadline}
            
            `
        )
    }).catch((error) => {
        console.error('Ошибка', error);
    });
}

loadDashboardWidget()
