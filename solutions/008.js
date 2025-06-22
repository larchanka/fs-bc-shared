const request = (data, delay) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve((data))
        }, delay)
    })
}

const api = {
    fetchMessages: () => request("Сообщения загружены", 1000),
    fetchStatuses: () => request("Статусы загружены", 500),
    fetchStickers: () => request("Стикеры загружены", 1500),

}

console.log("Начало загрузки данных чата")

Promise.all(Object.values(api).map(fn => fn()))
    .then(res => {
        console.log(res.join('\n'));
    })

console.log("Запрос на загрузку отправлен")
