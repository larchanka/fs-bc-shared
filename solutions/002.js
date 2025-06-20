//1. Три асинхронные фунцкции
async function fetchWeather() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                temp: 15,
                condition: 'Облачно'
            })
        }, 1100)
    })
}

async function fetchExchangeRate() {
    return new Promise(resolve => {
        setTimeout(() => {
            const min = 50 // как в 2014
            const max = 250 // надеюсь, максимальное значение
            const randomNumber = Math.random() * (max - min) + min //случайное число от 50 до 250
            const roundedNumber = parseFloat(randomNumber.toFixed(1)) // Округление до одного знака после запятой
            resolve(roundedNumber)
        }, 700)
    });
}
// долго вспоминал синтаксис трелочной асинхронной функции
const fetchTopHeadline = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Учёные обнаружили новый способ изучения асинхронности!')
        }, 1400)
    })
}
//2. синхронная функция
const loadDashboardWidget = () => {
    //3. Вызов асинхронных функций через Promise.all
    Promise.all([fetchWeather(), fetchExchangeRate(), fetchTopHeadline()])
        .then(([weather, exchangeRate, topHeadline]) => {
            console.log(`--- Данные для виджета (через .then) ---
    Погода: ${weather.temp}°C, ${weather.condition}
    Курс USD/RUB: ${exchangeRate}
    Главная новость: ${topHeadline}
---------------------------------------------------------------------------` )
        }) //если не сдвинуть к началу, то не красиво получается
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error)
        })
}

loadDashboardWidget()