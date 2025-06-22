const PromiseHooks = require("./PromiseHooks")

const fetchFuncTweets = () => {
    function postTweet(tweetText) {
        return PromiseHooks(
            1000,
            `Твит ${tweetText} успешно опубликован!`,
            "Ошибка сети при публикации",
            Math.random() > 0.3);
    }

    return {postTweet};
}

const publish = async () => {
    console.log("⏳ Публикация твита...");
    let isSuccess = false;
    try {
        const result = await fetchFuncTweets().postTweet("Мой первый твит с async/await!")
        console.log(result);
        isSuccess = true;
    }catch (e) {
        console.error(e.message);
    }finally {
        console.log(`Операция публикации завершена ${isSuccess ? 'успех' : 'ошибка'}`);
    }
};

publish()