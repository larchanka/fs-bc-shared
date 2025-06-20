async function fetchAlbumDetails(albumId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: albumId,
                title: 'Синтаксический Сахар',
                artist: 'Нейросеть Нейронович',
                tracks: [
                    'Асинхронная Баллада',
                    'Цикл Бесконечности',
                    'Баг в Матрице'
                ]
            });
        }, 800);
    });
}

async function fetchRecommendations(engineId, albumId) {
    return new Promise((resolve) => {
        const delay = 500 + Math.random() * 1500;
        setTimeout(() => {
            resolve([
                `Похожий альбом от ${engineId} 1`,
                `Похожий альбом от ${engineId} 2`,
                `(ответ от движка: ${engineId})`
            ]);
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
    // Шаг А: Получение самых быстрых рекомендаций
    const fastestRecommendationsPromise = Promise.race(
        recommendationEngines.map(engineId => fetchRecommendations(engineId, albumId).then(recs => ({ engineId, recs })))
    );

    // Шаг Б: Параллельная загрузка основных данных
    const dataFetchPromise = Promise.all([
        fetchAlbumDetails(albumId),
        fastestRecommendationsPromise
    ]);

    // Шаг В: Реализация общего таймаута с обработкой ошибок
    try {
        const [albumDetails, recommendations] = await Promise.race([
            dataFetchPromise,
            timeoutPromise(totalTimeout, 'Timeout while loading album page')
        ]);
        // Выводим детали альбома
        console.log('Альбом:', albumDetails.title);
        console.log('Исполнитель:', albumDetails.artist);
        console.log('Треки:', albumDetails.tracks.join(', '));
        // Выводим рекомендации и движок
        console.log(`Рекомендации от движка "${recommendations.engineId}":`, recommendations.recs.join(', '));
    } catch (error) {
        // Выводим сообщение об ошибке
        console.log('Ошибка:', error.message);
    }
}

// Пример вызова функции
loadAlbumPage('album123', ['engine1', 'engine2', 'engine3'], 1000)
    .then(() => console.log('Загрузка завершена'))
    .catch(error => console.error('Ошибка при загрузке страницы:', error.message));