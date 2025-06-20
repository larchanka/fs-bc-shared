import { resolvedPromise } from './utils'

const fetchWeather = resolvedPromise.bind(null, { temp: 15, condition: 'Облачно' }, 1000)
const fetchExchangeRate = resolvedPromise.bind(null, 91.5, 700)
const fetchTopHeadline = resolvedPromise.bind(null, 'Ученые обнаружили новый способ изучения асинхронности!', 1400)

const loadDashboardWidget = () => Promise.all([fetchWeather(), fetchExchangeRate(), fetchTopHeadline()])
  .then(([weatherData, exchangeRate, topHeadline]) => {
    console.log('\n--- Данные для виджета (через .then) ---')
    console.log(`Погода: ${weatherData.temp}°C, ${weatherData.condition}`)
    console.log(`Курс USD/RUB: ${exchangeRate}`)
    console.log(`Главная новость: ${topHeadline}`)
    console.log('----------------------------------------')
  })
  .catch((error) => {
    console.error('Ошибка при загрузке виджета:', error)
  })

// loadDashboardWidget()