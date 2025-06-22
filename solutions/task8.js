function fetchMessage() {
    return new Promise((resolve) => setTimeout(() => resolve('Сообщение загружено'), 1000));
}

function fetchStatuses() {
    return new Promise((resolve) => setTimeout(() => resolve('Статусы загружены'), 500));
}

function fetchStickers() {
    return new Promise((resolve) => setTimeout(() => resolve('Стикеры загружены'), 1500));
}

console.log('Начало загрузки данных чата');

// Todo. Если речь идёт о том, чтобы не показывать пользователя данные, до их загрузке, то правильнее будет делать:
// const fetchResult = await Promise.all(...)
Promise.all([fetchMessage(), fetchStatuses(), fetchStickers()])
    .then((fetchResult) => fetchResult.map((result) => console.log(result)));

console.log('Запрос на загрузку отправлен');
