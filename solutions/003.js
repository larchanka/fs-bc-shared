function fetchVideoDetails(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve({
          title: 'Глубокое погружение в асинхронный JavaScript',
          description:
            'Разбираем event loop, промисы и async/await на пальцах.',
        });
      } else reject(new Error('Не удалось загрузить детали видео'));
    }, 1000);
  });
}

function fetchComments(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) {
        resolve([
          'Отличное объяснение! Наконец-то понял event loop.',
          'А как насчет Web Workers?',
          'Лайк за async/await!',
        ]);
      } else reject(new Error('Не удалось загрузить комментарии'));
    }, 1500);
  });
}

function fetchRelatedVideos(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.95) {
        resolve([
          'Что такое замыкания в JS?',
          'Паттерны проектирования для начинающих',
        ]);
      } else reject(new Error('Не удалось загрузить похожие видео'));
    }, 800);
  });
}

async function loadVideoPage(videoId) {
  try {
    const [videoDetails, comments, releatedvideo] = await Promise.all([
      fetchVideoDetails(),
      fetchComments(),
      fetchRelatedVideos(),
    ]);
    console.log('Детали:', videoDetails);
    console.log('Комментарии:', comments);
    console.log('Похожие видео:', releatedvideo);
  } catch (error) {
    console.log('часть данных загрузить не удалось', error.message);
  }
}

loadVideoPage();
