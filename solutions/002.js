function fetchWeather() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ temp: 15, condition: 'Облачно' });
        }, 1100); 
    });
}

function fetchExchangeRate() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(93.5);
        }, 700); 
    });
}

function fetchTopHeadline() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Решена задача №2");
        }, 1400); 
    });
}

function loadDashboardWidget() {
    Promise.all([
        fetchWeather(),
        fetchExchangeRate(),
        fetchTopHeadline()
    ]).then((widgets) => {
        const [weather, exchangeRate, headline] = widgets;
        
        console.log("--- Данные для виджета (через .then) ---");
        console.log(`Погода: ${weather.temp}°C, ${weather.condition}`);
        console.log(`Курс USD/RUB: ${exchangeRate}`);
        console.log(`Главная новость: ${headline}`);
        console.log("----------------------------------------");
    }).catch((error) => {
        console.error("Ошибка при загрузке данных виджета:", error);
    });
}

console.log("Загрузка виджетов...");
loadDashboardWidget();
