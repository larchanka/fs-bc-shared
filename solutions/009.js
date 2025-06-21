async function queryServer1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Ответ от сервера 1');
        }, Math.random() * 1000 + 500);
    })
}

async function queryServer2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Ответ от сервера 2');
        }, Math.random() * 1000 + 500);
    })
}

async function queryServer3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Ответ от сервера 3');
        }, Math.random() * 1000 + 500);
    })
}

const promises = [queryServer1(), queryServer2(), queryServer3()];

try {
    console.log("Ищем самый быстрый сервер...");
    await Promise.race(promises)
        .then(result => {
            console.log(result);
            console.log('Используем этот сервер для загрузки!');
        })
} catch (error) {
    console.log('Ошибка: ', error);
}
