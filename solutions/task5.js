function fetchAlbumDetails(albumId) {
    return new Promise(resolve => {
        setTimeout(
            () => resolve({ 
                id: albumId,
                title: 'Синтаксический Сахар',
                artist: 'Нейросеть Нейронович',
                tracks: ['Асинхронная Баллада', 'Цикл Бесконечности', 'Баг в Матрице'] 
            }),
            0.8 * 1000
        );
    })
}

function fetchRecommendations(engineId, albumId) {
    const timeout = Math.random() * (2 - 0.5) + 0.5;

    return new Promise(resolve => {
        setTimeout(
            () => resolve([`Похожий альбом от ${engineId} 1`, `Похожий альбом от ${engineId} 2`]),
            timeout
        );
    })
}

function timeoutPromise(delay, message) {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error(message)), delay);
    })
}

async function loadAlbumPage(albumId, recommendationEngines, totalTimeout) {
    try {
        const recommendationPromises = recommendationEngines.map(engine => fetchRecommendations(engine, albumId));
        const fastestRecommendationsPromise = Promise.any(recommendationPromises);
        const dataFetchPromise = Promise.all([fetchAlbumDetails(albumId), fastestRecommendationsPromise]);
        const dataAlbum = await Promise.race([dataFetchPromise, timeoutPromise(totalTimeout, 'Время для обработки закончилось')]);

        console.log(dataAlbum); 
    } catch (error) {
        console.error(error.message);
    }
    
}

const albumId = 'album';
const recommendationEngines = ['engine-A', 'engine-B', 'engine-C'];
const timeout = 0.5 * 1000;
loadAlbumPage(albumId, recommendationEngines, timeout);