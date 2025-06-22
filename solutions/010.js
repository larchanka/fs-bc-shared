async function postTweet(tweetText) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.7) {
                resolve(`Твит ${tweetText} успешно опубликован!`);
            } else {
                reject(new Error("Ошибка сети при публикации"));
            }
        }, 1 * 1000);
    });
}

async function publish() {
    try {
        console.log('---------------------------------');
        const newPostResult = await postTweet("Мой первый твит с async/await!");
        console.log('Результат публикации:');
        console.log(newPostResult);
    } catch (error) {
        console.log('Ошибка при публикации:');
        console.log(error.message);
    } finally {
        console.log("Операция публикации завершена ( успех или ошибка )");
        console.log('---------------------------------');
    }
}

publish();
publish();
publish();
