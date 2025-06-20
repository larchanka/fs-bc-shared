function fetchVideoDetails(viedoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() <= 0.9) {
                resolve({ 
                    title: 'Глубокое погружение в асинхронный JavaScript',
                    description: 'Разбираем event loop, промисы и async/await на пальцах.' 
                });
            } else {
                reject(new Error('Не удалось загрузить детали видео'));
            }                        
        }, 1000)
    })
}

function fetchComments(videoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() <= 0.7) {
                resolve(['Отличное объяснение! Наконец-то понял event loop.', 'А как насчет Web Workers?', 'Лайк за async/await!'])
            } else {
                reject(new Error('Не удалось загрузить комментарии'));
            }
        }, 1.5 * 1000);
    })
}

function fetchRelatedVideos(videoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() <= 0.95) {
                resolve(['Что такое замыкания в JS?', 'Паттерны проектирования для начинающих'])
            } else {
                reject(new Error('Не удалось загрузить похожие видео'));
            }
        }, 0.8 * 1000);
    })
}

async function loadVideoPage(videoId) {
    console.log(`Загрузка страницы для видео ${videoId}...`);
    try {
        const [details, comments, related] = await Promise.all([
            fetchVideoDetails(videoId),
            fetchComments(videoId),
            fetchRelatedVideos(videoId)
        ]);
        
        console.log('--- Страница загружена полностью ---');
        console.log('Детали:', details.description);
        console.log('Комментарии:', comments.join(', '));
        console.log('Похожие видео:', related.join(', '));
        
    } catch (error) {
        console.error('--- Ошибка загрузки части страницы ---');
        console.error('Причина:', error.message);
    }
}

await loadVideoPage(123);
