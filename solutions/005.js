const fetchFuncMusic = () => {
    async function fetchAlbumDetails(albumId) {
        const album = { id: albumId, title: 'Синтаксический Сахар', artist: 'Нейросеть Нейронович', tracks: ['Асинхронная Баллада', 'Цикл Бесконечности', 'Баг в Матрице']};
        return await new Promise(resolve => setTimeout(() => resolve(album), 800));
    }

    async function fetchRecommendations(engineId, albumId) {
        const recommendations = {engine: engineId, similarAlbums: albumId};
        return await new Promise(resolve => setTimeout(() => resolve(recommendations), Math.random() * (2000 - 500) + 500));
    }

    async function timeoutPromise(delay, message) {
        return await new Promise(reject => setTimeout(() => reject(new Error(message)), delay));
    }

    return {fetchAlbumDetails, fetchRecommendations, timeoutPromise}
}

const loadAlbumPage = async (albumId, recommendationEngines, totalTimeout) => {
    try {
        const fastestRecommendationsPromise = Promise.race(
            recommendationEngines.map(engineId => fetchFuncMusic().fetchRecommendations(engineId, albumId))
        );

        const dataFetchPromise = Promise.all([
            fetchFuncMusic().fetchAlbumDetails(albumId),
            fastestRecommendationsPromise
        ]);

        const overallTimeoutPromise = fetchFuncMusic().timeoutPromise(totalTimeout, `Страница альбома ${albumId} не загрузилась за ${totalTimeout} мс`);

        const result = await Promise.race([
            dataFetchPromise,
            overallTimeoutPromise
        ]);

        const [albumDetails, recommendations] = result;
        console.log('--- Страница альбома загружена ---');
        console.log('Альбом:', albumDetails.title, 'Исполнитель:', albumDetails.artist);
        console.log('Треки:', albumDetails.tracks);
        console.log(`Рекомендации (от ${recommendations.engine}):`, recommendations.similarAlbums);
    }catch(err) {
        console.error('--- Ошибка загрузки страницы альбома ---');
        console.error(err.message);
    }
}

loadAlbumPage('123456', ['engine-A', 'engine-B', 'engine-C'], 2500);