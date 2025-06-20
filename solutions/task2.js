function fetchWeather() {
    return new Promise((resolve, reject) => {
        return setTimeout(
            resolve({ temp: 22, condition: 'Вероятность осадков' }),
            1.1 * 1000
        )
    });
}

function fetchExchangeRate() {
    return new Promise((resolve, reject) => {
        return setTimeout(
            resolve(3.71),
            0.7 * 1000
        )
    });
}

function fetchTopHeadline() {
    return new Promise((resolve, reject) => {
        reject(' Ошибка большая');
        return setTimeout(
            resolve('European and Iranian officials to revive diplomacy as Trump delays decision'),
            1.4 * 1000
        )
    });
}

async function loadDashboardWidget() {
    Promise.all([
        fetchWeather(),
        fetchExchangeRate(),
        fetchTopHeadline(),
    ]).then(([weather, exchangeRate, topHeadline]) => {
        console.log('--- Данные для виджета (через .then) ---');
        console.log(`Погода: ${weather.temp}, ${weather.condition}`);
        console.log(`Курс USD/PL: ${exchangeRate}`);
        console.log(`Главная новость: ${topHeadline}`);
    }).catch((error) => {
        console.error(`Произошла ошибка: ${error}`);
    })
}

await loadDashboardWidget();