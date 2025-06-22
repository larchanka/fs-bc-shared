    // Функция, которая имитирует публикацию твита
async function postTweet(tweetText) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) {
        resolve(`Твит '${tweetText}' успешно опубликован!`);
      } else {
        reject(new Error("Ошибка сети при публикации"));
      }
    }, 1000); // 1 секунда задержки
  });
}

// Основная функция, которая публикует твит с обработкой ошибок
async function publish() {
    let postStatus = 'unknown_error';
  try {
    const result = await postTweet("Мой первый твит с async/await!");
    postStatus = 'Успех';
    console.log(result);
  } catch (error) {
    postStatus = 'Ошибка';
    console.error("Ошибка:", error.message);
  } finally {

    console.log(`Операция публикации завершена: '${postStatus}'`);
  }
}

// Запуск
publish();
