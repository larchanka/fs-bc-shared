function fetchVideoDetails(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve({
          title: 'Глубокое погружение в асинхронный JavaScript',
          description: 'Разбираем event loop, промисы и async/await на пальцах.',
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
      if (Math.random() < 0.7) {
        resolve([
          'Отличное объяснение! Наконец-то понял event loop.',
          'А как насчет Web Workers?',
          'Лайк за async/await!',
        ]);
      } else {
        reject(new Error('Не удалось загрузить комментарии'));
      }
    }, 1500);
  });
}

function fetchRelatedVideos(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.95) {
        resolve(['Что такое замыкания в JS?', 'Паттерны проектирования для начинающих']);
      } else {
        reject(new Error('Не удалось загрузить похожие видео'));
      }
    }, 800);
  });
}

async function loadVideoPage(videoId) {
  console.log(`\nЗагрузка страницы для видео ${videoId}...`);

  try {
    const [details, comments, related] = await Promise.all([
      fetchVideoDetails(videoId),
      fetchComments(videoId),
      fetchRelatedVideos(videoId),
    ]);

    console.log('--- Страница загружена полностью ---');
    console.log('Детали видео:', details.title, '-', details.description);
    console.log('Комментарии:', comments.join(' | '));
    console.log('Похожие видео:', related.join(', '));
  } catch (error) {
    console.error('--- Ошибка загрузки части страницы ---');
    console.error('Причина:', error.message);
    console.error('(При использовании Promise.all мы не видим успешные результаты)');
  }
}

loadVideoPage('video1');
setTimeout(() => loadVideoPage('video2'), 2000);
setTimeout(() => loadVideoPage('video3'), 4000);
