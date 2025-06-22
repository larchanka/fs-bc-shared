async function fetchAlbumDetails(albumId) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
                id: albumId,
                title: 'Синтаксический Сахар',
                artist: 'Нейросеть Нейронович',
                tracks: ['Асинхронная Баллада', 'Цикл Бесконечности', 'Баг в Матрице']
            });
    }, 800); // Задержка 0.8 sec.

});
};

// engineId - это условное название системы рекомендаций (например, 'engine-A', 'engine-B')
async function fetchRecommendations(engineId, albumId) {
    const delay = Math.floor(Math.random() * 1500) + 500; // Random delay from 500 to 2000 milliseconds
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve([`Похожий альбом от ${engineId} 1`, `Похожий альбом от ${engineId} 2`]);
            resolve({
                engine: engineId,
                similarAlbums: [`Похожий альбом от ${engineId} 1`, `Похожий альбом от ${engineId} 2`]
            });
        }, delay); // Задержка 0.5 - 2 sec. 

    })
}

async function timeoutPromise(delay, message) {
    return new Promise((reject) => {
        setTimeout(() => {
            reject(new Error(message));
        }, delay);
    });
};

// albumId - ID альбома (просто строка).
// recommendationEngines - массив строк с ID движков рекомендаций (например, ['engine-A', 'engine-B', 'engine-C']).
// totalTimeout - общее время ожидания в мс (например, 2500).

async function loadAlbumPage(albumId, recommendationEngines, totalTimeout) {
  try {
    // Промис для самых быстрых рекомендаций
    // const fastestRecommendationsPromise = Promise.race(
    //   recommendationEngines.map(engineId => fetchRecommendations(engineId, albumId))
    // );
    const promises = recommendationEngines.map(engineId => fetchRecommendations(engineId, albumId));
    const fastestRecommendationsPromise = Promise.race(
       promises
     );    

    // Промис для загрузки деталей и самых быстрых рекомендаций
    const dataFetchPromise = Promise.all([
      fetchAlbumDetails(albumId),
      fastestRecommendationsPromise // Передаем промис!
    ]);

    // Промис для таймаута
    const overallTimeoutPromise = timeoutPromise(totalTimeout, `Страница альбома ${albumId} не загрузилась за ${totalTimeout} мс`);

    // Финальное соревнование: данные ИЛИ таймаут
    const result = await Promise.race([
      dataFetchPromise,
      overallTimeoutPromise
    ]);

    // Если мы здесь, dataFetchPromise успел
    const [albumDetails, recommendations] = result; // Результат Promise.all
    console.log('--- Страница альбома загружена ---');
    console.log('Альбом:', albumDetails.title, 'Исполнитель:', albumDetails.artist);
    console.log('Треки:', albumDetails.tracks);
    console.log('--- Рекомендации ---');
    console.log(`Рекомендации (от ${recommendations.engine}):`, recommendations.similarAlbums);

  } catch (error) {
    console.error('--- Ошибка загрузки страницы альбома ---');
    console.error('Причина:', error.message);
  }
}

const albumId = 'album-12345';
const recommendationEngines = ['engine-A', 'engine-B', 'engine-C'];
const totalTimeout = 2500; // 2.5 seconds

loadAlbumPage(albumId, recommendationEngines, totalTimeout);
