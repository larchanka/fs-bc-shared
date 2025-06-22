function getRandomDelay() {
    return Math.floor(Math.random() * 1000) + 500; // Случайное время от 500 до 1500 мс
}

function queryServer1() {
    return new Promise((resolve) => {
        const delay = getRandomDelay();
        setTimeout(() => {
            resolve("Ответ от сервера 1");
        }, delay);
    });
}

function queryServer2() {
    return new Promise((resolve) => {
        const delay = getRandomDelay();
        setTimeout(() => {
            resolve("Ответ от сервера 2");
        }, delay);
    });
}

function queryServer3() {
    return new Promise((resolve) => {
        const delay = getRandomDelay();
        setTimeout(() => {
            resolve("Ответ от сервера 3");
        }, delay);
    });
}

console.log("Ищем самый быстрый сервер...");
Promise.race([queryServer1(), queryServer2(), queryServer3()])
    .then((result) => {
        console.log(`Первый полученный ответ: ${result}. Используем этот сервер для загрузки!`);
    });