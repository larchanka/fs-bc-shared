function fetchAlbumDetails(albumId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: albumId,
        title: 'Синтаксический Сахар',
        artist: 'Нейросеть Нейронович',
        tracks: ['Асинхронная Баллада', 'Цикл Бесконечности', 'Баг в Матрице'],
      });
    }, 800);
  });
}

function fetchRecommendations(engineId, albumId) {
  return new Promise((resolve) => {
    const delay = Math.random() * 1500 + 500;
    setTimeout(() => {
      resolve({
        engine: engineId,
        similarAlbums: [`Похожий альбом от ${engineId} 1`, `Похожий альбом от ${engineId} 2`],
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
  console.log(`\nЗагрузка страницы альбома ${albumId}...`);
  console.log(`Используем движки рекомендаций: ${recommendationEngines.join(', ')}`);
  console.log(`Общий таймаут: ${totalTimeout} мс`);

  try {
    const fastestRecommendationsPromise = Promise.race(
      recommendationEngines.map((engineId) => fetchRecommendations(engineId, albumId)),
    );

    const dataFetchPromise = Promise.all([
      fetchAlbumDetails(albumId),
      fastestRecommendationsPromise,
    ]);

    const overallTimeoutPromise = timeoutPromise(
      totalTimeout,
      `Страница альбома ${albumId} не загрузилась за ${totalTimeout} мс`,
    );

    const [albumDetails, recommendations] = await Promise.race([
      dataFetchPromise,
      overallTimeoutPromise,
    ]);

    console.log('\n--- Страница альбома загружена ---');
    console.log(`Альбом: "${albumDetails.title}"`);
    console.log(`Исполнитель: ${albumDetails.artist}`);
    console.log('Треки:', albumDetails.tracks.join(', '));
    console.log(
      `Рекомендации (от ${recommendations.engine}):`,
      recommendations.similarAlbums.join(', '),
    );

    return { albumDetails, recommendations };
  } catch (error) {
    console.error('\n--- Ошибка загрузки страницы альбома ---');
    console.error('Причина:', error.message);
    throw error;
  }
}

(async () => {
  // Первый тест с 3 движками и таймаутом 2.5 секунды
  await loadAlbumPage('album123', ['engine-A', 'engine-B', 'engine-C'], 2500).catch(() => {});

  // Второй тест с 1 медленным движком и коротким таймаутом
  setTimeout(async () => {
    await loadAlbumPage('album456', ['slow-engine'], 1000).catch(() => {});
  }, 3000);
})();

