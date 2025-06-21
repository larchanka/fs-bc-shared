
async function postTweet(tweetText) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() <= 0.7) {
                resolve(`Твит "${tweetText}" успешно опубликован!`)
            } else {
                reject(new Error("Ошибка сети при публикации"))
            }
        }, 1000)
    });
}

async function publish() {
    try {
        const tweetText = "Мой первый твит с async/await!"
        console.log("🔄 Пытаемся опубликовать твит...")
        
        const result = await postTweet(tweetText)
        console.log("✅", result)
        
    } catch (error) {
        console.error("❌ Ошибка:", error.message)
        
    } finally {
        console.log("🏁 Операция публикации завершена (успех или ошибка)")
    }
}

publish()
