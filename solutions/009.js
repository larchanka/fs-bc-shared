function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function myFetch(msgs, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(msgs)
        }, delay)
    })
}

const queryServer1 = () => myFetch('queryServer1', randInt(500, 1500));
const queryServer2 = () => myFetch('queryServer2', randInt(500, 1500));
const queryServer3 = () => myFetch('queryServer3', randInt(500, 1500));            

console.log("Ищем самый быстрый сервер...")

Promise.race([
    queryServer1(),
    queryServer2(),
    queryServer3()
]).then((response) => {
    console.log(response);
    console.log('Используем этот сервер для загрузки!')
});
