function fetchMessages() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Сообщения загружены");
        }, 1000);
    });
}

function fetchStatuses() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Статусы загружены");
        }, 500);
    });
}

function fetchStickers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Стикеры загружены");
        }, 1500);
    });
}

console.log("Начало загрузки данных чата");
Promise.all([fetchMessages(), fetchStatuses(), fetchStickers()])
    .then((results) => {
        console.log(`${results.join(', ')}. Чат готов к отображению!`);
    });

console.log("Запрос на загрузку отправлен");

// Ожидаемый вывод:
// Начало загрузки данных чата (выполняется синхронно)
// Запрос на загрузку отправлен (выполняется синхронно)
// Сообщения загружены, Статусы загружены, Стикеры загружены. Чат готов к отображению! 
// (выполняется после всех асинхронных операций)
