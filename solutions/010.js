async function postTweet(tweetText) {
    const isSuccess = Math.random() < 0.7;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccess) {
                resolve("Твит '{tweetText}' успешно опубликован!");
            } else {
                reject(Error("Ошибка сети при публикации"))
            }
        }, 1000);
    })
}

async function publish() {
    try {
        const result = await postTweet("Мой первый твит с async/await!");
        console.log(result);

    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Операция публикации завершена (успех или ошибка)");

    }
}

publish();
