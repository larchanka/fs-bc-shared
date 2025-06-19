const fetchWeather = new Promise((resolve, reject)=>{
setTimeout(()=> resolve({ temp: 15, condition: 'Облачно' }), 1.1 * 1000) //1000ms
});
const fetchExchangeRate = new Promise((resolve, reject)=>{
setTimeout(()=> resolve(91.5), 0.7 * 1000) //1000ms
});
const fetchTopHeadline = new Promise((resolve, reject)=>{
setTimeout(()=> resolve("Ученые обнаружили новый способ изучения асинхронности!"), 1.4 * 1000) //1000ms
});

function loadDashboardWidget(){
Promise.all([fetchWeather,fetchExchangeRate,fetchTopHeadline]).then((res)=>{
    console.log(`
--- Данные для виджета (через .then) ---
Погода: ${res[0].temp}, ${res[0].condition}
Курс USD/RUB: ${res[1]}
Главная новость: ${res[2]}
----------------------------------------`)
}).catch(Error=>console.log("Error:" + Error))
}

loadDashboardWidget()
