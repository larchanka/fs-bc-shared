// приложение для скачивания файлов
// приложение может пытаться скачать файл одновременно с нескольких серверов (зеркал) и
// использовать тот, который ответит первым

// симулировать этот процесс:
// запустить "запросы" к трем разным серверам и определить, какой из них "ответил" быстрее
// Promise.race

// три функции, имитирующие запрос к разным серверам

async function queryServer1() {
    return new Promise((resolve) => {
        const delay = (Math.random() * 1000) + 500  ; // случайная задержка от 500 до 1500 ms.
        setTimeout(() => {
            resolve("Ответ от сервера 1");
        }, delay);
    });
}

async function queryServer2() {
    return new Promise((resolve) => {
        const delay = (Math.random() * 1000) + 500  ; // случайная задержка от 500 до 1500 ms.
        setTimeout(() => {
            resolve("Ответ от сервера 2");
        }, delay);
    });
}

async function queryServer3() {
    return new Promise((resolve) => {
        const delay = (Math.random() * 1000) + 500  ; // случайная задержка от 500 до 1500 ms.
        setTimeout(() => {
            resolve("Ответ от сервера 3");
        }, delay);
    });
}

console.log("Ищем самый быстрый сервер...")

Promise.race([
    queryServer1(),
    queryServer2(),
    queryServer3()
]).then((result) => {
    console.log(result);
    console.log("Используем этот сервер для загрузки!");
});
