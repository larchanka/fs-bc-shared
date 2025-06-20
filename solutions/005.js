function timeoutPromise(delay, message) {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error(message));
        }, delay);
    })
}

function fetchAlbumDetails(albumId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ 
                id: albumId,
                title: 'Синтаксический Сахар',
                artist: 'Нейросеть Нейронович',
                tracks: ['Асинхронная Баллада', 'Цикл Бесконечности', 'Баг в Матрице'] 
            });
        }, 0.8 * 1000);
    })
}

function fetchRecommendations(engineId, albumId) {
    return new Promise(resolve => {
        const min = 500;
        const max = 2000;
        const randomTime = Math.floor(Math.random() * (max - min + 1)) + min;                    
        setTimeout(() => {
            resolve({
                engine: engineId,
                similarAlbums: [
                    `Похожий альбом 1`, 
                    `Похожий альбом 2`,
                ]}
            );
        }, randomTime);
    })
}

async function loadAlbumPage(albumId, recommendationEngines, totalTimeout) {
    try {
    
        fastestRecommendationsPromise = Promise.race(
            recommendationEngines.map(engine => fetchRecommendations(engine, albumId))
        );

        const dataFetchPromise = Promise.all([
            fetchAlbumDetails(albumId),
            fastestRecommendationsPromise,
        ]);

        const result = await Promise.race([
            dataFetchPromise,
            timeoutPromise(
                totalTimeout,
                `Страница альбома ${albumId} не загрузилась за ${totalTimeout} мс`
            )
        ])

        const [albumDetails, recommendations] = result; // Результат Promise.all
        console.log('--- Страница альбома загружена ---');
        console.log('Альбом:', albumDetails.title, 'Исполнитель:', albumDetails.artist);
        console.log('Треки:', albumDetails.tracks);
        console.log(`Рекомендации (от ${recommendations.engine}):`, recommendations.similarAlbums);
    } catch (error) {
        console.error('--- Ошибка загрузки страницы альбома ---');
        console.error('Причина:', error.message);
    }
}

const engines = ['engine1', 'engine2', 'engine3', 'engine4', 'engine5'];

await loadAlbumPage(456, engines, 2500);
await loadAlbumPage(456, engines, 2000);
await loadAlbumPage(456, engines, 1500);
await loadAlbumPage(456, engines, 1000);
await loadAlbumPage(456, engines, 800);
await loadAlbumPage(456, engines, 600);
