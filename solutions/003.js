function fetchVideoDetails(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      const successChance = 0.9; 
      
      if (randomValue < successChance) {
        resolve({
          title: 'Глубокое погружение в асинхронный JavaScript', description: 'Разбираем event loop, промисы и async/await на пальцах.'
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
      const randomValue = Math.random();
      const successChance = 0.7; 
      
      if (randomValue < successChance) {
        resolve([
          'Отличное объяснение! Наконец-то понял event loop.', 'А как насчет Web Workers?', 'Лайк за async/await!'
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
      const randomValue = Math.random();
      const successChance = 0.95; 
      
      if (randomValue < successChance) {
        resolve([
          'Что такое замыкания в JS?', 'Паттерны проектирования для начинающих'
        ]);
      } else {
        reject(new Error('Не удалось загрузить похожие видео'));
      }
    }, 800); 
  });
}

async function loadVideoPage(videoId) {
  console.log(`Загрузка страницы для видео ${videoId}...`);
  
  try {
    const [videoDetails, comments, relatedVideos] = await Promise.all([
      fetchVideoDetails(videoId),
      fetchComments(videoId),
      fetchRelatedVideos(videoId)
    ]);
  
    console.log('--- Страница загружена полностью ---');
    console.log('Детали:', videoDetails);
    
    console.log('Комментарии:', comments);
    
    console.log('Похожие видео:', relatedVideos);
    
  } catch (error) {
    console.log('Не удалось загрузить часть данных для страницы видео.');
    console.log(`Причина: ${error.message}`);
  }
}

loadVideoPage('videoID-3123');
