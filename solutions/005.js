'use strict';

const fetchAlbumDetails = async (albumId) => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve({
        id: albumId,
        title: 'Синтаксический Сахар',
        artist: 'Нейросеть Нейронович',
        tracks: ['Асинхронная Баллада', 'Цикл Бесконечности', 'Баг в Матрице'],
      });
    }, 800);
  });
};

const fetchRecommendations = async (engineId, albumId) => {
  return new Promise((resolve, _) => {
    const randomTimeout = Math.floor(Math.random() * 1501) + 500;

    setTimeout(() => {
      resolve([
        `Похожий альбом от ${engineId} 1`,
        `Похожий альбом от ${engineId} 2`,
      ]);
    }, randomTimeout);
  });
};

function timeoutPromise(delay, message) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(message));
    }, delay);
  });
}

async function loadAlbumPage(albumId, recommendationEngines, totalTimeout) {
  const fastestRecommendationsPromise = Promise.race(
    recommendationEngines.map((engine) => fetchRecommendations(engine, albumId))
  );

  const dataFetchPromise = Promise.all([
    fetchAlbumDetails(albumId),
    fastestRecommendationsPromise,
  ]);

  try {
    const [album, recommendation] = await Promise.race([
      dataFetchPromise,
      timeoutPromise(totalTimeout, 'Данные не успели загрузиться.'),
    ]);

    console.log(`Альбом номер: ${album.id},
Название альбома: ${album.title},
Исполниель: ${album.artist},
Композиции: ${album.tracks.map((track) => ' ' + track)},
Рекомендации: ${recommendation.join(', ')}
        `);
  } catch (error) {
    console.error('Ошибка', error.message);
  }
}

loadAlbumPage('456', ['engine-A', 'engine-B', 'engine-C'], 2500);
