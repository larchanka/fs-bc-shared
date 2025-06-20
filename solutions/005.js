async function fetchAlbumDetails(albumId) {
    // const isSuccess = Math.random() < 0.9;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: albumId, title: 'Синтаксический Сахар', artist: 'Нейросеть Нейронович', tracks: ['Асинхронная Баллада', 'Цикл Бесконечности', 'Баг в Матрице'] });
        }, 800);
    })
}

async function fetchRecommendations(engineId, albumId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([`Похожий альбом от ${engineId} 1`, `Похожий альбом от ${engineId} 2`]);
        }, Math.random() * 1500 + 500);
    })
}

async function timeoutPromise(delay, message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            reject(new Error(message));
        }, delay);
    })
}

async function loadAlbumPage(albumId, recommendationEngines, totalTimeout) {
    try {
        // Промис для самых быстрых рекомендаций
        const fastestRecommendationsPromise = Promise.race(recommendationEngines.map(engine => fetchRecommendations(engine, albumId)));

        // Промис для загрузки деталей И самых быстрых рекомендаций
        const dataFetchPromise = Promise.all([fetchAlbumDetails(albumId), fastestRecommendationsPromise]);

        // Промис для таймаута
        const overallTimeoutPromise = timeoutPromise(totalTimeout, `Страница альбома ${albumId} не загрузилась за ${totalTimeout} мс`);

        // Финальное соревнование: данные ИЛИ таймаут
        const raceResult = await Promise.race([dataFetchPromise, overallTimeoutPromise]);
        const [albumDetails, recommendations] = raceResult;
        console.log('--- Страница альбома загружена ---');
        console.log('Альбом:', albumDetails.title, 'Исполнитель:', albumDetails.artist);
        console.log('Треки:', albumDetails.tracks);
        console.log(`Рекомендации (от ${recommendations.engine}):`, recommendations.similarAlbums);
    } catch (error) {
        console.error('--- Ошибка загрузки страницы альбома ---');
        console.error('Причина:', error.message);
    }
}

let albumId = '12345'
let recommendationEngines = ['engine-A', 'engine-B', 'engine-C'];
let totalTimeout = 2500;

loadAlbumPage(albumId, recommendationEngines, totalTimeout);
