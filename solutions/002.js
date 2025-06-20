function loadDashboardWidget() {
    console.log('Загрузка данных для виджета (используя .then)...');

    Promise.all([
        fetchWeather(),
        fetchExchangeRate(),
        fetchTopHeadline()
    ])
        .then(data)
        .catch(error => console.error(error))
}

const request = (data, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, delay);
    })
}

const data = ([weatherData, exchangeRate, topHeadline]) => {
    console.log('\n--- Данные для виджета (через .then) ---');
    console.log(`Погода: ${weatherData.temp}°C, ${weatherData.condition}`);
    console.log(`Курс USD/RUB: ${exchangeRate}`);
    console.log(`Главная новость: ${topHeadline}`);
    console.log('----------------------------------------');
}

const fetchWeather = () => {
    return request({ temp: 15, condition: 'Облачно' }, 1100)
}

const fetchExchangeRate = () => {
    return request(91.5, 700)
}

const fetchTopHeadline = () => {
    return request("Ученые обнаружили новый способ изучения асинхронности!", 1400)
}


loadDashboardWidget()
