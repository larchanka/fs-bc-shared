async function fetchWeather() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ temp: 15, condition: 'Облачно' });
        }, 1100);
    });
}

async function fetchExchangeRate() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(91.5);
        }, 700);
    });
}

async function fetchTopHeadline() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Ученые обнаружили новый способ изучения асинхронности!");
        }, 1400);
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
            console.log(`Курс USD/RUB: ${exchangeRate}`);
            console.log(`Главная новость: ${topHeadline}`);
            console.log('\n-----------------------------------------');
        })
        .catch(error => { console.error('Ошибка при загрузке виджета:', error); })
}

loadDashboardWidget();
