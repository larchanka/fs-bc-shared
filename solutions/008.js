async function fetchMessages() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Сообщения загружены');
        }, 1000);
    })
}

async function fetchStatuses() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Статусы загружены');
        }, 500);
    })
}

async function fetchStickers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Стикеры загружены');
        }, 1500);
    })
}

const promises = [fetchMessages(), fetchStatuses(), fetchStickers()];

try {
    console.log("Начало загрузки данных чата");
    await Promise.all(promises)
        .then(results => {
            console.log(results);
            console.log('Чат готов к отображению!');
        })
    console.log("Запрос на загрузку отправлен");
} catch (error) {
    console.log('Ошибка: ', error);
}
