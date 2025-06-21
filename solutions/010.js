async function postTweet(tweetText) {
  return new Promise((resolve, reject) => {
    const success = Math.random() < 0.7;
    setTimeout(() => {
      if (success) {
        resolve(`Твит '${tweetText}' успешно опубликован!`);
      } else {
        reject(new Error("Ошибка сети при публикации"));
      }
    }, 1000);
  });
}

async function publish() {
    let res = false
  try {
    const result = await postTweet("Мой первый твит c async/await!");
    console.log(result);
        res = true
  } catch (error) {
    console.error("Ошибка:", error.message);
  } finally {
    console.log("Операция публикации завершена:  " + `${res ? "успех" : "ошибка"}`);
  }
}
publish();
