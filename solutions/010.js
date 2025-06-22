const log = console.log
const sec = 1000
//извинияюсь, что не использую точки с запятой, но я так приучил себя специально
//тк ai всегда ставит их и я всегда вижу, где я скопировал, а где сам писал

//1 имитация твита на сервер
const postTweet = async (tweetText) => {
    //2 promise с твитом и задержкой
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (Math.random() < 0.7) ? 
                resolve(`Твит "${tweetText}" успешно опубликован!`) : 
                reject("Ошибка сети при публикации")      
        }, sec)
    })
}

//3 основная асинхронная функция
const publish = async () => {
    try {
        // 4 вызов функции postTweet
        const callPostTweet = await postTweet("Мой первый твит с async/await!")
        //5 успешный await
        log("Успешный успех:", callPostTweet)
    } catch (error) {
        //6 ошибка
        log("Неуспех:", error.message)
    } finally {
        //7 завершение
        log("Операция публикации завершена (успех или ошибка)") 
        //честно говоря, не совсем понимаю, как fanally работает
        //он выполняется, когда не пришёл любой ответ, чтобы завершить и не переполнять память?
    }
}

//8 запуск
publish()

//finally выполняется всегда, для чего?