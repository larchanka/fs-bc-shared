function postTweet(tweetText) {
    return new Promise(function(resolve, reject) {
        if (Math.random() < 0.7) {
            resolve(`Твит '${tweetText}' успешно опубликован!`);
        } else {
            reject('Ошибка сети при публикации');
        }
    })
}

async function publish() {                
    let success = false
    try {                    
        const response = await postTweet('Мой первый твит с async/await!');
        success = true
        console.log(response);        
    } catch (error) {
        console.error(error);
    } finally {
        console.log(`Публикация твита завершена - ${(success) ? 'успешно' : 'с ошибкой'}`);
    }
}

publish();
