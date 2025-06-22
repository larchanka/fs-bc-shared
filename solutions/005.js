async function loadAlbumPage(albumId, recommendationEngines, totalTimeout) {
    try {
        const fastestRecommendationsPromise = Promise.race(
            recommendationEngines.map(engineId => fetchRecommendations(engineId, albumId))
        );

        const dataFetchPromise = Promise.all([
            fetchAlbumDetails(albumId),
            fastestRecommendationsPromise
        ]);

        const overallTimeoutPromise = timeoutPromise(totalTimeout, `Страница альбома ${albumId} не загрузилась за ${totalTimeout}мс`);

        const result = await Promise.race([
            dataFetchPromise,
            overallTimeoutPromise
        ]);

        const [albumDetails, recommendations] = result;
        console.log('--- Страница альбома загружена ---');
        console.log('Альбом:', albumDetails.title, 'Исполнитель:', albumDetails.artist);
        console.log('Треки:', albumDetails.tracks);
        console.log(`Рекомендации (от ${recommendations.engine}):`, recommendations.similarAlbums);

        return {
            albumDetails,
            recommendations
        };

    } catch (error) {
        console.error('--- Ошибка загрузки страницы альбома ---');
        console.error('Причина:', error.message);
    }
}

const timeoutPromise = (delay, message) => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error(message));
        }, delay);
    });
}

const fetchAlbumDetails = (albumId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: albumId,
                title: 'Название альбома',
                artist: 'Исполнитель',
                tracks: ['Трек 1', 'Трек 2', 'Трек 3']
            });
        }, 800);
    });
}

const fetchRecommendations = (engineId, albumId) => {
    const delay = 500 + Math.random() * 1500;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                engine: engineId,
                similarAlbums: [
                    'альбом 1',
                    'альбом 2',
                    'альбом 3'
                ]
            });
        }, delay);
    });
}

