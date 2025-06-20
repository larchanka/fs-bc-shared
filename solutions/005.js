// 1. 
function fetchAlbumDetails(albumId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: albumId,
        title: 'Синтаксический Сахар',
        artist: 'Нейросеть Нейронович',
        tracks: [
          'Асинхронная Баллада',
          'Цикл Бесконечности',
          'Баг в Матрице'
        ]
      });
    }, 800); // 0.8 секунды
  });
}

// 2. 
function fetchRecommendations(engineId, albumId) {
  return new Promise(resolve => {
    // случайная задержка от 500 до 2000 мс
    const delay = Math.random() * 1500 + 500;
    setTimeout(() => {
      resolve({
        engine: engineId,
        similarAlbums: [
          `Похожий альбом от ${engineId} 1`,
          `Похожий альбом от ${engineId} 2`
        ]
      });
    }, delay);
  });
}

// 3. 
function timeoutPromise(delay, message) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(message));
    }, delay);
  });
}

// 4. 
async function loadAlbumPage(albumId, recommendationEngines, totalTimeout) {
  console.log(`\nОткрываем страницу альбома "${albumId}"...`);

  // A. Самые быстрые рекомендации
  const fastestRecommendationsPromise = Promise.race(
    recommendationEngines.map(engineId => fetchRecommendations(engineId, albumId))
  );

  // B. Параллельная загрузка 
  const dataFetchPromise = Promise.all([
    fetchAlbumDetails(albumId),
    fastestRecommendationsPromise
  ]);

  // C. Общее ограничение по времени
  const overallTimeoutPromise = timeoutPromise(
    totalTimeout,
    `Страница альбома "${albumId}" не загрузилась за ${totalTimeout} мс`
  );

  try {
    // соревнование: либо данные, либо таймаут
    const [albumDetails, recommendations] = await Promise.race([
      dataFetchPromise,
      overallTimeoutPromise
    ]);

    console.log('--- Страница альбома загружена успешно ---');
    console.log(`Альбом: ${albumDetails.title}`);
    console.log(`Исполнитель: ${albumDetails.artist}`);
    console.log('Треки:', albumDetails.tracks);
    console.log(`Рекомендации (от ${recommendations.engine}):`, recommendations.similarAlbums);
  } catch (error) {
    console.error('--- Ошибка загрузки страницы альбома ---');
    console.error('Причина:', error.message);
  }
}
