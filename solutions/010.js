function postTweet(tweetText) {
  // Я понимаю что данная функция это скорее имитация fetch, но я решил сделать ее скорее оберткой
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      // Поскольку по-факту у нас тут может быть какая-то обработка, которая зафейлиться,
      // то этот блок тоже стоит оборачивать в try-catch
      // На Q&A-сессии люди спрашивали когда использовать try-catch а когда then-catch,
      // просто не понимая что сравнивают теплое с мягким.
      try {
        // вот тут у нас как будто вызов функции, которая возвращает промис
        const isSuccess = Math.random() < 0.9;

        if (isSuccess) {
          resolve(`Твит '${tweetText}' успешно опубликован!`);
        } else {
          
        }
      } catch (error) {
        reject(new Error('Ошибка сети при публикации'));
      }
    }, 1 * 1000 );
  });
}

async function publish() {
  
}
