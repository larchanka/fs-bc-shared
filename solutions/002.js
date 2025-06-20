const fetchFuncWidget = () => {
    async function fetchWeather() {
        const weather = { temp: 15, condition: 'Облачно' };
        return new Promise((resolve) => setTimeout(() => resolve(weather), 1100));
    }

    async function fetchExchangeRate() {
        const exchangeRate = 91.5;
        return new Promise((resolve) => setTimeout(() => resolve(exchangeRate), 700));
    }

    async function fetchTopHeadline() {
        const topHeadline = "Ученые обнаружили новый способ изучения асинхронности!";
        return new Promise((resolve) => setTimeout(() => resolve(topHeadline), 1400));
    }

    return {fetchWeather, fetchExchangeRate, fetchTopHeadline};
}

const loadDashboardWidget = () => {
    Promise.all([fetchFuncWidget().fetchWeather(), fetchFuncWidget().fetchExchangeRate(), fetchFuncWidget().fetchTopHeadline()]).then(values => {
        console.log(validationValuesWidget(values));
    })
}

const validationValuesWidget = (values) => {

    return`
    ---------------- WIDGET ----------------
        Погода: ${values[0].temp}°C, ${values[0].condition}
        Курс USD/RUB : ${values[1]}
        Главная новость: ${values[2]}
    ----------------------------------------
    `
}

loadDashboardWidget();