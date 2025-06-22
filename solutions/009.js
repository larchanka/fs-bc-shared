const log = console.log
const rngTime = (min, max) => {
    return Math.random() * 1000 * (max - min) + min 
} //1.1 случайное время в заданном диапазоне (в секундах)

//race vs all
//Promise.all() - ждёт все promise, если хоть один отклоняется, то все отклоняется
//Promise.race() - ждёт первый выполненный promise, остальные игнорирует

//1 Три фунцции, которые возвращают промисы
const queryServer1 = async (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({server: "сервер 1", answer:`Ответ от сервера 1: ${data}`})
            reject('Запрос 1 отклонен')
        }, rngTime(0.5, 1.5))
    })
}

const queryServer2 = async (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({server: "сервер 2", answer:`Ответ от сервера 2: ${data}`})
            reject('Запрос 1 отклонен')
        }, rngTime(0.5, 1.5))
    })
}
const queryServer3 = async (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({server: "сервер 3", answer: `Ответ от сервера 3: ${data}`})
            reject('Запрос 1 отклонен')
        }, rngTime(0.5, 1.5))
    })
}

//2 Promise.race()
const startServer = async (data) => {
    try{
        const result = await Promise.race([
        queryServer1(data),
        queryServer2(data),
        queryServer3(data)
    ])
        //3 Выводим сообщение при первом успешном ответе от сервера
        log(`Используем ${result.server} для загрузки!`)
        log(result.answer) //выводим ответ от сервера
} catch (error) {
        log(error)
    }
}

//4 Сообщенька перед загрузкой
log("Ищем самый быстрый сервер...")
startServer("Запрос")