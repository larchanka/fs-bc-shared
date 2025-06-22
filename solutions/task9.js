function queryServer(serverNumber) {
    const timeout = Math.random() * 1000 + 500;

    return new Promise((resolve) => {
        setTimeout(() => resolve({
            server: serverNumber,
            message: `Ответ от сервера ${serverNumber}`
        }), timeout)
    });
}

const countServer = 3;
const promises = Array.from({length: countServer}, (_, i) => queryServer(i + 1));

console.log('Ищем самый быстрый сервер...');
try {
    Promise.race(promises).then((result) => {
        console.log(result.message);
        console.log(`Используем сервер номер ${result.server} для загрузки`);
    })
} catch (error) {
    console.error(error);
}

