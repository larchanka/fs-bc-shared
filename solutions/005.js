function fetchAlbumDetails(albumId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: albumId,
        title: 'Синтаксический Сахар',
        artist: 'Нейросеть Нейронович',
        tracks: [
          'Асинхронная Баллада',
          'Цикл Бесконечности',
          'Баг в Матрице',
        ],
      });
    }, 800); // 0.8 секунды
  });
}

function fetchRecommendations(engineId, albumId) {
  const delay = Math.random() * 1500 + 500; // от 0.5 до 2 секунд

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        engine: engineId,
        similarAlbums: [
          `Похожий альбом от ${engineId} 1`,
          `Похожий альбом от ${engineId} 2`,
        ],
      });
    }, delay);
  });
}


function timeoutPromise(delay, message) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(message));
    }, delay);
  });
}


async function loadAlbumPage(albumId, recommendationEngines, totalTimeout) {
  try {
    console.log(`Загрузка страницы альбома '${albumId}'...`);

    // A. Самые быстрые рекомендации
    const fastestRecommendationsPromise = Promise.race(
      recommendationEngines.map((engineId) =>
        fetchRecommendations(engineId, albumId)
      )
    );

    // B. Параллельно загружаем детали альбома и ждем любые рекомендации
    const dataFetchPromise = Promise.all([
      fetchAlbumDetails(albumId),
      fastestRecommendationsPromise,
    ]);

    // C. Общий таймаут
    const overallTimeoutPromise = timeoutPromise(
      totalTimeout,
      `Страница альбома '${albumId}' не загрузилась за ${totalTimeout} мс`
    );

    // D. Финальный результат или ошибка таймаута
    const [albumDetails, recommendations] = await Promise.race([
      dataFetchPromise,
      overallTimeoutPromise,
    ]);

    // Успешная загрузка
    console.log('--- Страница альбома загружена ---');
    console.log('Альбом:', albumDetails.title);
    console.log('Исполнитель:', albumDetails.artist);
    console.log('Треки:', albumDetails.tracks);
    console.log(`Рекомендации (от ${recommendations.engine}):`, recommendations.similarAlbums);

  } catch (error) {
    console.error('--- Ошибка загрузки страницы альбома ---');
    console.error('Причина:', error.message);
  }
}
