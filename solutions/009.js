
function queryServer1() {
    const delay = Math.floor(Math.random() * 1000) + 500;
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`🟢 Сервер 1 ответил за ${delay}мс`);
            resolve("Ответ от сервера 1");
        }, delay);
    });
}

function queryServer2() {
    const delay = Math.floor(Math.random() * 1000) + 500; 
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`🟢 Сервер 2 ответил за ${delay}мс`);
            resolve("Ответ от сервера 2");
        }, delay);
    });
}

function queryServer3() {
    const delay = Math.floor(Math.random() * 1000) + 500; 
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`🟢 Сервер 3 ответил за ${delay}мс`);
            resolve("Ответ от сервера 3");
        }, delay);
    });
}

console.log("🔍 Ищем самый быстрый сервер...");

Promise.race([
    queryServer1(),
    queryServer2(),
    queryServer3()
]).then(firstAnswer => {
    console.log(`🏆 ${firstAnswer} - самый быстрый!`);
    console.log("🚀 Используем этот сервер для загрузки!");
}).catch(error => {
    console.error('Ошибка', error)
})
