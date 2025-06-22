async function postTweet(tweetText) {
  return new Promise((resolve, reject) => {

    const isSuccess = Math.random() < 0.7;

    setTimeout(() => {
      if (isSuccess) {
        resolve(`Твит '${tweetText}' успешно опубликован!`);
      } else {
        reject(new Error("Ошибка сети при публикации"));
      }
    }, 1000);
  });
}

async function publish() {
  try {
    const result = await postTweet("Мой первый твит с async/await!");
    console.log(result);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Операция публикации завершена (успех или ошибка)");
  }
}

publish();
