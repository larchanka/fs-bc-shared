function isSuccessful(probability) {
    return Math.random() < probability / 100;
}

function fetchVideoDetails(videoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccessful(90)) {
                resolve({
                    title: 'Глубокое погружение в асинхронный JavaScript',
                    description: 'Разбираем event loop, промисы и async/await на пальцах.'
                });
            } else {
                reject(new Error('Не удалось загрузить детали видео'));
            }
        }, 1000);
    });
}

function fetchComments(videoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccessful(70)) {
                resolve([
                    'Отличное объяснение! Наконец-то понял event loop.',
                    'А как насчет Web Workers?',
                    'Лайк за async/await!'
                ]);
            } else {
                reject(new Error('Не удалось загрузить комментарии'));
            }
        }, 1500);
    });
}

function fetchRelatedVideos(videoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccessful(95)) {
                resolve([
                    'Что такое замыкания в JS?',
                    'Паттерны проектирования для начинающих'
                ]);
            } else {
                reject(new Error('Не удалось загрузить похожие видео'));
            }
        }, 800);
    });
}

async function loadVideoPage(videoId) {
    console.log(`Загрузка страницы для видео "${videoId}"...\n`);

    const [details, comments, related] = await Promise.allSettled([
        fetchVideoDetails(videoId),
        fetchComments(videoId),
        fetchRelatedVideos(videoId)
    ]);

    console.log(`--- Загрузка видео ID: ${videoId} завершена ---`);

    if (details.status === 'fulfilled') {
        const { title, description } = details.value;
        console.log('Видео:', title);
        console.log('Описание:', description);
    } else {
        console.error('Ошибка при загрузке видео:', detailsResult.reason.message);
    }

    if (comments.status === 'fulfilled') {
        console.log('Комментарии:', comments.value);
    } else {
        console.error('Ошибка при загрузке комментариев:', comments.reason.message);
    }

    if (related.status === 'fulfilled') {
        console.log('Похожие видео:', related.value);
    } else {
        console.error('Ошибка при загрузке похожих видео:', related.reason.message);
    }
}

loadVideoPage(123);
