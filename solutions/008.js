const PromiseHooks = require('./PromiseHooks');

const fetchFuncTelegram = () => {
    function fetchMessages(delay) {
        return PromiseHooks(delay, "Сообщения загружены");
    }

    function fetchStatuses(delay) {
        return PromiseHooks(delay, "Статусы загружены");
    }

    function fetchStickers(delay) {
        return PromiseHooks(delay, "Стикеры загружены");
    }

    return {fetchMessages, fetchStatuses, fetchStickers};
}

const resolveResults = () => {
    console.log("Начало загрузки данных чата");
    try {
        Promise.all([fetchFuncTelegram().fetchMessages(1000), fetchFuncTelegram().fetchStatuses(500), fetchFuncTelegram().fetchStickers(1500)])
            .then(result => {
                console.log(result.join("\n"));
                console.log("Чат готов к отображению!");
            })
    }catch (e) {
        new Error(e.message);
    }
}

resolveResults();