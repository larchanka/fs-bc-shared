// функция публикации нового поста (твита) в веб-интерфейсе Twitter,
// которая имитирует возможный сбой, и правильно может обработать оба исхода: успех и ошибку
// синтаксис async/await и конструкцию try...catch

async function postTweet(tweetText) {
return new Promise((resolve, reject) => {
    const rnd = Math.random()
    setTimeout(() => {
        if (rnd < 0.7) {
            resolve(`Твит '${tweetText}' успешно опубликован!`);
        } else {
            reject(new Error("Ошибка сети при публикации"));
        }
    }, 1000);
});
}

async function publish() {
    try {
        const post = await postTweet("Мой первый твит с async/await!");
        console.log(post);
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("Операция публикации завершена (успех или ошибка)");
    }
}

publish()

// Результат:
// Твит 'Мой первый твит с async/await!' успешно опубликован!
// Операция публикации завершена (успех или ошибка)
// или
// Ошибка сети при публикации
// Операция публикации завершена (успех или ошибка)
