
//Иммитируем сбой сети
function isRequestSuccessful(chance = 0.2) {
    // return Math.random() < 1;
    return Math.random() < chance;

}

    // Имитация запроса к серверу для получения информации о видео
function fetchVideoDetails(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isRequestSuccessful(0.9)) {
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

// Имитация запроса к серверу для получения комментариев
function fetchComments(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isRequestSuccessful(0.7)) {
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

// Имитация запроса к серверу для получения похожих видео
function fetchRelatedVideos(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isRequestSuccessful(0.95)) {
        resolve([
          'Что такое замыкания в JS?',
          'Паттерны проектирования для начинающих',
        ]);
      } else {
        reject(new Error('Не удалось загрузить похожие видео'));
      }
    }, 800);
  });
}

// Основная функция загрузки страницы видео
async function loadVideoPage(videoId) {
  console.log(`🔄 Загрузка страницы для видео "${videoId}"...\n`);

  try {
    const [details, comments, related] = await Promise.all([
      fetchVideoDetails(videoId),
      fetchComments(videoId),
      fetchRelatedVideos(videoId),
    ]);

    console.log('✅ --- Страница загружена полностью ---');
    console.log(`🎬 Название: ${details.title}`);
    console.log(`📝 Описание: ${details.description}`);
    console.log(`💬 Комментарии:`);
    comments.forEach((comment, i) => console.log(`  ${i + 1}. ${comment}`));
    console.log(`📺 Похожие видео: ${related.join(', ')}`);
    console.log('---------------------------------------\n');
  } catch (error) {
    console.error('❌ --- Ошибка загрузки части страницы ---');
    console.error('Причина:', error.message);
    console.error('-----------------------------------------\n');
  }
}

// Пример вызова
loadVideoPage('abc123');
