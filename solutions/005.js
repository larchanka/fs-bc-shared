async function fetchAlbumDetails(albumId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: albumId,
        title: 'Синтаксический Сахар',
        artist: 'Нейросеть Нейронович',
        tracks: ['Асинхронная Баллада', 'Цикл Бесконечности', 'Баг в Матрице']
      });
    }, 800);
  });
}

async function fetchRecommendations(engineId, albumId) {
  const delay = Math.random() * 1500 + 500;
  return new Promise(resolve => {
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

function timeoutPromise(delay, message) {
  return new Promise((_, reject) => {
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
      fastestRecommendationsPromise
    ]);

    const overallTimeoutPromise = timeoutPromise(totalTimeout, `Страница альбома "${albumId}" не загрузилась за ${totalTimeout} мс`);

    const result = await Promise.race([
      dataFetchPromise,
      overallTimeoutPromise
    ]);

    const [albumDetails, recommendations] = result;

    console.log('--- Страница альбома загружена ---');
    console.log('Альбом:', albumDetails.title);
    console.log('Исполнитель:', albumDetails.artist);
    console.log('Треки:', albumDetails.tracks.join(', '));
    console.log(`Рекомендации (от ${recommendations.engine}):`, recommendations.similarAlbums);
  } catch (error) {
    console.error('--- Ошибка загрузки страницы альбома ---');
    console.error('Причина:', error.message);
  }
}

const albumId = 'album-42';
const engines = ['engine-A', 'engine-B', 'engine-C'];
const timeout = 2500;

loadAlbumPage(albumId, engines, timeout);
