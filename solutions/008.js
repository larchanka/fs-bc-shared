function myFetch(msgs, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(msgs)
        }, delay)
    })
}

const API = {
    async fetchMessages() {
        return myFetch('Сообщения загружены', 1000);
    },

    async fetchStatuses() {
        return myFetch('Статусы загружены', 500);
    },

    async fetchStickers() {
        return myFetch('Стикеры загружены', 1500);
    },
};

async function loadChat() {    
        console.log("Начало загрузки данных чата")
        Promise.all([
            API.fetchMessages(),
            API.fetchStatuses(),
            API.fetchStickers(),
        ]).then(response => {
            console.log(response.join(', '));
            console.log("Чат готов к отображению!");
        }) // По хоршему бы надо сюда catch прицепить, но мне лень :)
        console.log("Запрос на загрузку отправлен");    
}

loadChat()
