
function fetchWeather(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                temp: 17, 
                condition: 'Дождливо'
            });
        }, 1100);
    });
}

function fetchExchangeRate(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(78.5)
        }, 700);
    });
}

function fetchTopHeadline(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Ученые опять изобрели вечный двигатель')
        }, 1400)
    });
}

function loadDashboardWidget(){
    console.log('Загрузка данных');
    
    const promises = [
        fetchWeather(),
        fetchExchangeRate(),
        fetchTopHeadline(),
    ];
    
    Promise.all(promises)
        .then(results => {
            const [weatherData, exchangeRate, topHeadline] = results;
            console.log('---Данные виджета---');
            console.log(`Погода: ${weatherData.temp}°C, ${weatherData.condition}`);
            console.log(`Курс обмена: ${exchangeRate}`);
            console.log(`Главная новость: ${topHeadline}`);
            console.log('------------------------');
        })
        .catch(error => {
            console.error('Ошибка при загрузке виджета: ', error);
        });
    
    
}

loadDashboardWidget();
