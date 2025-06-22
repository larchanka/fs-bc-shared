const request = (data, delayMin, delayMax) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data)
        }, delayMin + Math.random() * delayMax)
    })
}

const queryServer1 = () => {
    return request("Ответ от сервера 1", 500, 1000)
}
const queryServer2 = () => {
    return request("Ответ от сервера 2", 500, 1000)
}
const queryServer3 = () => {
    return request("Ответ от сервера 3", 500, 1000)
}

console.log("Ищем самый быстрый сервер...")

Promise.race([queryServer1(), queryServer2(), queryServer3()]).then((value) => {
    console.log(value)
    console.log("Используем этот сервер для загрузки!")
})
