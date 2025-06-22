function postTweet(tweetText) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) {
        resolve(`Твит '${tweetText}' успешно опубликован!`);
      } else {
        reject(new Error('Ошибка сети при публикации'));
      }
    }, 1 * 1000 );
  });
}

async function publish() {
  try {
    const result = await postTweet('Мой первый твит с async/await!');
    console.log(result);
    
  } catch (error) {
    console.log(error.message);
    
  } finally {
    console.log('Операция публикации завершена (успех или ошибка)');
  }

}

publish();
