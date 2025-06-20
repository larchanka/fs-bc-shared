function fetchVideoDetails(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() < 0.9;

      if (isSuccess) {
        resolve({ 
          id: videoId,
          title: 'Глубокое погружение в асинхронный JavaScript',
          description: 'Разбираем event loop, промисы и async/await на пальцах.',
        });
      } else {
        reject(new Error('Ошибка загрузки видео'));
      }
      
    }, 1 * 1000);
  });
}

function fetchComments(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() < 0.7;

      if (isSuccess) {
        resolve([
          'Отличное объяснение! Наконец-то понял event loop.',
          'А как насчет Web Workers?',
          'Лайк за async/await!',
        ]);
      } else {
        reject(new Error('Не удалось загрузить комментарии'));
      }
    }, 1.5 * 1000);
  });
}

function fetchRelatedVideos(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() < 0.95;

      if (isSuccess) {
        resolve([
          'Что такое замыкания в JS?',
          'Паттерны проектирования для начинающих',
        ]);
      } else {
        reject(new Error('Не удалось загрузить комментарии'));
      }
    }, 0.8 * 1000);
  });
}

async function loadVideoPage(videoId) {
  console.log(`Загрузка данных страницы видеоролика #${videoId}`);

  try {
    const [details, comments, related] = await Promise.all([
      fetchVideoDetails(videoId),
      fetchComments(videoId),
      fetchRelatedVideos(videoId)
    ]);
    console.log('--- Данные страницы загружены полностью ---');
    console.log(`Название: ${details.title}`);
    console.log(`Описание: ${details.description}`);
    console.log('Комментарии:', comments);
    console.log('Похожие видео:', related);
    
  } catch (error) {
    console.error('--- Ошибка загрузки части данных страницы ---');
    console.error('Причина:', error.message);
  }

}

loadVideoPage();
