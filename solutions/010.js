const request = (cb, ms = 1000) =>
    new Promise((resolve, reject) =>
        setTimeout(() => cb(resolve, reject), ms)
    );

const postTweet = (tweetText) =>
    request((resolve, reject) => {
        Math.random() < 0.7
            ? resolve(`Твит '${tweetText}' успешно опубликован!`)
            : reject(new Error('Ошибка сети при публикации'));
    }, 1000);

async function publish() {
    try {
        const result = await postTweet('Мой первый твит с async/await!');
        console.log(result);
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log('Операция публикации завершена (успех или ошибка)');
    }
}

publish();
