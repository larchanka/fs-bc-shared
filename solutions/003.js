async function fetchVideoDetails(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const videoDetails = {
            title: 'Глубокое погружение в асинхронный JavaScript',
            description: 'Разбираем event loop, промисы и async/await на пальцах.' };
        // Генерирует случайное число от 0 до 1.
        // Условие Math.random() < 0.1 обеспечивает 10% вероятность ошибки.
        if (Math.random() < 0.1) { // 10% вероятность ошибки
        reject(new Error('Не удалось загрузить детали видео'));
      } else {
        resolve(videoDetails);
    }
    }, 1000);
  });
}

async function fetchComments(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const comments = ['Отличное объяснение! Наконец-то понял event loop.', 'А как насчет Web Workers?', 'Лайк за async/await!'];
        // Генерирует случайное число от 0 до 1.
        // Условие Math.random() < 0.3 обеспечивает 30% вероятность ошибки.
        if (Math.random() < 0.3) { // 30% вероятность ошибки
        reject(new Error('Не удалось загрузить комментарии'));
      } else {
        resolve(comments);
    }
    }, 1500);
  });
}

async function fetchRelatedVideos(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const relatedVideos = ['Что такое замыкания в JS?', 'Паттерны проектирования для начинающих'];
        // Генерирует случайное число от 0 до 1.
        // Условие Math.random() < 0.05 обеспечивает 5% вероятность ошибки.
        if (Math.random() < 0.05) { // 5% вероятность ошибки
        reject(new Error('Не удалось загрузить похожие видео'));
      } else {
        resolve(relatedVideos);
    }
    }, 800);
  });
}


async function loadVideoPage(videoId) {
const promises = [fetchVideoDetails(videoId), fetchComments(videoId), fetchRelatedVideos(videoId)];

// https://learn.javascript.ru/promise-api
// может принимать любой перебираемый объект, но обычно используется массив
// промис завершится, когда завершится весь переданный список промисов, и его результатом будет массив их результатов
// порядок элементов массива в точности соответствует порядку исходных промисов
// Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершается с этой ошибкой

    try {
        await Promise.all(promises)
            .then(([videoDetails,comments,relatedVideos]) => {
            console.log(`* Video:\n${videoDetails.title} ,\n${videoDetails.description}`);
            console.log(`* Comments:\n${comments.join(`\n`)}`);
            console.log(`* Related videos:\n${relatedVideos.join(`\n`)}`);
        })    
    } catch (error) {
        console.error('Часть данных загрузить не удалось:', error.message);
    }
}

loadVideoPage(12);

// Метод Promise.allSettled всегда ждёт завершения всех промисов. В массиве результатов будет
// {status:"fulfilled", value:результат} для успешных завершений,
//  {status:"rejected", reason:ошибка} для ошибок.
// Массив results в строке (*) будет таким:
// [
//  {status: 'fulfilled', value: ...объект ответа...},
//  {status: 'fulfilled', value: ...объект ответа...},
//  {status: 'rejected', reason: ...объект ошибки...}
// ]
