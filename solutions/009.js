const PromiseHooks = require('./PromiseHooks');

const fetchFuncServer = () => {
    function queryServer1() {
        return PromiseHooks(Math.random() * 1000 + 500, "Ответ от сервера 1")

    }
    function queryServer2() {
        return PromiseHooks(Math.random() * 1000 + 500, "Ответ от сервера 2")

    }
    function queryServer3() {
        return PromiseHooks(Math.random() * 1000 + 500, "Ответ от сервера 3")
    }

    return {queryServer1, queryServer2, queryServer3};
}

const resolveResults = () => {
    console.log("Ищем самый быстрый сервер...");
    try {
        Promise.race([fetchFuncServer().queryServer1(), fetchFuncServer().queryServer2(), fetchFuncServer().queryServer3()])
            .then(result => {
                console.log(result);
                console.log("Используем этот сервер для загрузки!");
            });
    }catch (e) {
        new Error(e.message);
    }
}

resolveResults();