// Функция для получения погоды
function fetchWeather() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ temp: 15, condition: "Облачно" });
		}, 1100);
	});
}

// Функция для получения курса доллара
function fetchExchangeRate() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(91.5);
		}, 700);
	});
}

// Функция для получения главной новости
function fetchTopHeadline() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Ученые обнаружили новый способ изучения асинхронности!");
		}, 1400);
	});
}

// Функция для загрузки данных виджета
function loadDashboardWidget() {
	console.log("Загрузка данных для виджета ");

	const promises = [fetchWeather(), fetchExchangeRate(), fetchTopHeadline()];

	Promise.all(promises)
		.then((results) => {
			const [weatherData, exchangeRate, topHeadline] = results;

			console.log("\n--- Данные для виджета (через .then) ---");
			console.log(`Погода: ${weatherData.temp}°C, ${weatherData.condition}`);
			console.log(`Курс USD/RUB: ${exchangeRate}`);
			console.log(`Главная новость: ${topHeadline}`);
			console.log("----------------------------------------");
		})
		.catch((error) => {
			console.error("Ошибка при загрузке виджета:", error);
		});
}


loadDashboardWidget();
