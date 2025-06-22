async function queryServer1() {
    return new Promise((resolve, reject) => {
        const randomMs = Math.random() * (1500 - 500) + 500;
        setTimeout(() => {
            resolve("Ответ от сервера 1");
        }, randomMs);
    });
}

async function queryServer2() {
    return new Promise((resolve, reject) => {
        const randomMs = Math.random() * (1500 - 500) + 500;
        setTimeout(() => {
            resolve("Ответ от сервера 2");
        }, randomMs);
    });
}

async function queryServer3() {
    return new Promise((resolve, reject) => {
        const randomMs = Math.random() * (1500 - 500) + 500;
        setTimeout(() => {
            resolve("Ответ от сервера 3");
        }, randomMs);
    });
}


console.log("Ищем самый быстрый сервер...");

Promise.race([queryServer1(), queryServer2(), queryServer3()]).then(res => {
    console.log(res);
    console.log("Используем этот сервер для загрузки!");
})
