// нужно одновременно загрузить несколько типов данных с сервера

// 1. Список последних сообщений.
// 2. Статусы пользователей в чате (онлайн/офлайн).
// 3. Набор стикеров, доступных в этом чате.

// хотим дождаться загрузки всех данных, прежде чем показывать пользователю полностью готовый чат

async function fetchMessages() { // 1 sec "Сообщения загружены"
    return new Promise((resolve) => {
        setTimeout(() => {
            // console.log("Сообщения загружены");
            resolve("Сообщения загружены");
        }, 1000);
    })
}

async function fetchStatuses() { // 500 ms "Статусы загружены"
    return new Promise((resolve) => {
        setTimeout(() => {
            // console.log("Статусы загружены");
            resolve("Статусы загружены");
        }, 500);
    });
}

async function  fetchStickers() { // 1.5 sec "Стикеры загружены"
    return new Promise((resolve) => {
        setTimeout(() => {
            // console.log("Стикеры загружены");
            resolve("Стикеры загружены");
        }, 1500);
    });
}


console.log("Начало загрузки данных чата")
Promise.all([fetchMessages(), fetchStatuses(), fetchStickers()])
    .then((result) => {
    console.log("Результат:");
    console.log(result);   
});
console.log("Запрос на загрузку отправлен")

// Начало загрузки данных чата
// Запрос на загрузку отправлен
// Результат:
// [ 'Сообщения загружены', 'Статусы загружены', 'Стикеры загружены' ]
