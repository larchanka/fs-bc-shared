function generateNumber(len) {
  const resultNumbers = [];
  for (let index = 0; index < len; index++) {
    resultNumbers.push(Math.round(Math.random() * 10));
  }
  return resultNumbers.join('');
}

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
          'Баг в Матрице'],
      });
    }, 0.8 * 1000);
  });
}

function fetchRecommendations(engineId, albumId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        engine: engineId,
        similarAlbums: [
          `Похожий на альбом ${albumId} #1`,
          `Похожий на альбом ${albumId} #2`,
          `Похожий на альбом ${albumId} #3`,
          `Похожий на альбом ${albumId} #4`,
        ],
      });
      
    }, (Math.random() * (2 - 0.5) + 0.5) * 1000 );
  });
}

function timeoutPromise(delay, message) {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject(new Error(message));
    }, delay);
  });
}

async function loadAlbumPage(albumId, recommendationEngines, totalTimeout) {
  try {
    const fastestRecommendationsPromise = Promise.race(
      recommendationEngines.map(engineId => fetchRecommendations(engineId, albumId))
    );

    const dataFetchPromise = Promise.all([
      fetchAlbumDetails(albumId),
      fastestRecommendationsPromise,
    ]);

    const overallTimeoutPromise = timeoutPromise(totalTimeout, `Страница альбома ${albumId} не загрузилась за ${totalTimeout} мс`);

    const result = await Promise.race([
      dataFetchPromise,
      overallTimeoutPromise
    ]);

    const [albumDetails, recommendations] = result;
    console.log('--- Страница альбома загружена ---');
    console.log(`Альбом: ${albumDetails.title}`);
    console.log(`Исполнитель: ${albumDetails.artist}`);
    console.log('Треки:', albumDetails.tracks);
    console.log(`Рекомендации (от ${recommendations.engine}):`, recommendations.similarAlbums);

  } catch (error) {
    console.error('--- Ошибка загрузки страницы альбома ---');
    console.error('Причина:', error.message);
  }
}

loadAlbumPage('du421', ['engine-A', 'engine-B', 'engine-C'], 2500);
