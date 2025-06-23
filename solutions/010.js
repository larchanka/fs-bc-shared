function postTweet(tweetText) {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.7;
    if (isSuccess) {
      setTimeout(
        () => resolve(`Твит ${tweetText} успешно опубликован!`),
        1 * 1000
      );
    } else {
      setTimeout(
        () => reject(new Error("Ошибка сети при публикации")),
        1 * 1000
      );
    }
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
