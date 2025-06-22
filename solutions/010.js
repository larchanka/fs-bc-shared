async function postTweet(tweetText) {
  return new Promise((res, rej) => {
    const chanceValue = Math.random();
    
    setTimeout(() => {
      if (chanceValue <= 0.7) {
        res(`Твит '${tweetText}' успешно опубликован!`);
      } else {
        rej(new Error("Ошибка сети при публикации"));
      }
    }, 1000);
  });
}

async function publish() {
  try {
    const result = await postTweet("Мой первый твит с async/await!");
    console.log(result);
  } catch (error) {
    console.log(error.message)
  } finally {
    console.log("Операция публикации завершена (успех или ошибка)")
  }
}

console.log('Публикация твита...');
publish();
