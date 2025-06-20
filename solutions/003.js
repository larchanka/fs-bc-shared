// Что нужно сделать:

//     Создай три асинхронные функции, имитирующие запросы. Каждая из них должна иметь некоторую вероятность сбоя. Для имитации случайного сбоя используй Math.random() внутри setTimeout. Если сгенерированное случайное число меньше заданной вероятности успеха (например, 0.9 для 90% успеха), вызывай resolve с данными. В противном случае — вызывай reject с объектом ошибки new Error('Сообщение об ошибке').
//         fetchVideoDetails(videoId): Возвращает Promise. С вероятностью 90% через 1 секунду разрешается (resolve) объектом { title: 'Глубокое погружение в асинхронный JavaScript', description: 'Разбираем event loop, промисы и async/await на пальцах.' }. С вероятностью 10% отклоняется (rejects) с ошибкой new Error('Не удалось загрузить детали видео').
//         fetchComments(videoId): Возвращает Promise. С вероятностью 70% он через 1.5 секунды разрешается (resolve) массивом комментариев ['Отличное объяснение! Наконец-то понял event loop.', 'А как насчет Web Workers?', 'Лайк за async/await!']. С вероятностью 30% он отклоняется (rejects) с ошибкой new Error('Не удалось загрузить комментарии') через то же время.
//         fetchRelatedVideos(videoId): Возвращает Promise. С вероятностью 95% через 0.8 секунды разрешается (resolve) массивом названий видео ['Что такое замыкания в JS?', 'Паттерны проектирования для начинающих']. С вероятностью 5% отклоняется (rejects) с ошибкой new Error('Не удалось загрузить похожие видео').
//     Напиши async function loadVideoPage(videoId).
//     Внутри loadVideoPage используй Promise.all() для одновременного запуска всех трех функций fetch*.
//     Используй try...catch для обработки общей ошибки, если Promise.all будет отклонен (из-за сбоя в любой из функций fetch*).
//     В блоке try после await Promise.all() выведи все успешно загруженные данные (название, описание, комментарии, похожие видео).
//     В блоке catch выведи сообщение о том, что часть данных загрузить не удалось, и укажи причину (error.message).
//     Важно: Подумай, как Promise.all ведет себя при ошибке одного из промисов. Что произойдет с результатами остальных? Как можно было бы улучшить обработку, чтобы всегда получать результаты успешно выполненных запросов (подсказка: Promise.allSettled, но его реализовывать не нужно, достаточно упомянуть в размышлениях или посмотреть в подсказках).

// Почему задача полезна?

// Эта задача учит работать с ситуациями, когда не все идет по плану при параллельной загрузке. Promise.all отлично подходит для ускорения, но он "падает" целиком при первой же ошибке. В реальных интерфейсах часто лучше показать пользователю хоть что-то, чем вообще ничего. Понимание ограничений Promise.all и знание о существовании альтернатив вроде Promise.allSettled (который ждет выполнения всех промисов, независимо от их исхода) позволяет создавать более надежные и отказоустойчивые приложения. Ты учишься не просто запускать задачи параллельно, но и грамотно обрабатывать частичные сбои, что важно для сложных интерфейсов.

function fetchVideoDetails(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isFailed = Math.random() >= 0.9;
      if (!isFailed) {
        resolve({
          title: 'Глубокое погружение в асинхронный JavaScript',
          description: 'Разбираем event loop, промисы и async/await на пальцах.'
        });
      } else {
        reject(new Error('Не удалось загрузить детали видео'));
      }
    }, 1000); 
  });
}

function fetchComments(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isFailed = Math.random() >= 0.7;
      if (!isFailed) {
        resolve(['Отличное объяснение! Наконец-то понял event loop.', 'А как насчет Web Workers?', 'Лайк за async/await!']);
      } else {
        reject(new Error("Не удалось загрузить комментарии"));
      }
    }, 1500);
  });
}

function fetchRelatedVideos(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isFailed = Math.random() >= 0.95;
      if (!isFailed) {
        resolve(['Что такое замыкания в JS?', 'Паттерны проектирования для начинающих']);
      } else {
        reject(new Error("Не удалось загрузить похожие видео."));
      }
    }, 800);
  });
}


async function loadVideoPage(videoId) {
  try {
    const [videoDetails, videoComments, videoRelated] = await Promise.all([fetchVideoDetails(videoId), fetchComments(videoId), fetchRelatedVideos(videoId)]);
    console.log("Загрузка произведена успешно!");
    console.log(`Название: ${videoDetails.title}`);
    console.log(`Описание: ${videoDetails.description}`);
    console.log(`Комментарии: ${videoComments.join(", ")}`);
    console.log(`Похожие видео: ${videoRelated.join(", ")}`);
  } catch (error) {
      console.error("Произошла ошибка загрузки.");
      console.error(`Причина: ${error}`);
  }
}
