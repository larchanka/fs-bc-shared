function fetchWeather() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ 
                temp: 15,
                condition: 'Облачно' 
            })
        }, 1.1 * 1000);
    });
}

function fetchExchangeRate() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(91.5)
        }, 0.7 * 1000);
    });
}

function fetchTopHeadline() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Ученые обнаружили новый способ изучения асинхронности!")
        }, 1.4 * 1000)
    })
}

async function loadDashboardWidget() {
    console.log('Загрузка данных для виджета (используя .then)...');
    const promises = [
        fetchWeather(),
        fetchExchangeRate(),
        fetchTopHeadline()
    ];

    try {
        const [weatherData, exchangeRate, topHeadline] = await Promise.all(promises)
        console.log(`Погода: ${weatherData.temp}°C, ${weatherData.condition}`);
        console.log(`Курс USD/RUB: ${exchangeRate}`);
        console.log(`Новость дня: ${topHeadline}`);                    
    } catch (error) {
        console.log("Ошибка при загрузке виджета: ", error)
    }
}

await loadDashboardWidget()
