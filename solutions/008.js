async function fetchMessages() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Сообщения загружены.");
        }, 1 * 1000);
    });
}

async function fetchStatuses() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve("Статусы загружены");
        }, 0.5 * 1000);
    });
}

async function fetchStickers() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Стикеры загружены");
        }, 1.5 * 1000)
    });
}

console.log("Начало загрузки данных чата");
Promise.all([fetchMessages(), fetchStatuses(), fetchStickers()]).then(res => {
    console.log(res);
    console.log("Чат готов к отображению!");
});
console.log("Запрос на загрузку отправлен");
