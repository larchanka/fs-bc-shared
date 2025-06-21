// Что нужно сделать:

// Создай асинхронную функцию postTweet(tweetText), которая имитирует отправку твита на сервер.
// Внутри postTweet создай Promise, который: ◦ С вероятностью 70% (используй Math.random()) успешно разрешается (resolve) 
// через 1 секунду со строкой "Твит '{tweetText}' успешно опубликован!". ◦ С вероятностью 30% отклоняется (reject) через 1 секунду с 
// объектом Error("Ошибка сети при публикации"). ◦ Используй setTimeout для имитации задержки.

  
// Создай основную асинхронную функцию publish().
// Внутри publish() вызови postTweet("Мой первый твит с async/await!") с использованием await внутри блока try.
// В блоке try после await выведи в консоль успешный результат, полученный от postTweet.
// В блоке catch перехвати возможную ошибку от postTweet и выведи ее сообщение в консоль (error.message).
// В блоке finally (необязательно, но полезно) выведи сообщение "Операция публикации завершена (успех или ошибка)".
// Вызови функцию publish() для запуска процесса. Запусти скрипт несколько раз, чтобы увидеть оба исхода (успех и ошибку).



async function postTweet(tweetText) {
  return new Promise((resolve, reject) => {
    const isSucces = Math.random() > 0.3;
    if (isSucces) {
      setTimeout(() => {
        resolve(`Твит "${tweetText}" успешно опубликован!`)
      }, 1000);
    } else {
      setTimeout(() => {
        reject(new Error("Ошибка сети при публикации"))
      }, 1000);
    }
  })
}

async function publish() {
  let result;
  try {
    const queryResult = await postTweet("Мой первый твит с async/await!");
    console.log(queryResult);
    result = "Успех";
  } catch (error) {
    console.log(`Произошла ошибка при загрузке: ${error.message} ;(`);
    result = "Ошибка"
  } 
  finally {
    console.log(`Операция публикации завершена (${result})`);
  }
}

publish()
publish()
publish()
