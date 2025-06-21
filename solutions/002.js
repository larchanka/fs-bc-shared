async function fetchWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ time: 16, condition: 'Облачно' })
        }, 1100)
    });
}

async function fetchExchange() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(91.5)
        }, 800)
    });
}

async function fetchTopHeadline() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                reject("HTTP ERROR");
            }
            resolve("Ученые обнаружили новый способ изучения асинхронности!")
        }, 1400)
    });
}

function loadDashboardWidget() {
    const allPromises = Promise.all([fetchWeather(), fetchExchange(), fetchTopHeadline()]);

    allPromises.then(resulsts => {
        const [ weather, exchange, topheadline ]  = resulsts;
        console.log(
            `🌤️ Погода: ${weather.time}°C, ${weather.condition} ☁️
💵 Курс USD/RUB: ${exchange}
📰 Главная новость: ${topheadline} 🔬✨`
        )
    }).catch(rejected => {
        console.log(
`Произошла ошибка: ${rejected}`
        );
    });
}

loadDashboardWidget();
