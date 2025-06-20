function fetchVideoDetails(videoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const statusOk = Math.random() <= 0.9
            if (statusOk) {
                resolve({ title: 'Глубокое погружение в асинхронный JavaScript', description: 'Разбираем event loop, промисы и async/await на пальцах.' })
            } else {
                reject(new Error('Не удалось загрузить видео!'))
            }
        }, 1 * 1000)
    })
}

function fetchComments(videoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const statusOk = Math.random() <= 0.7
            if (statusOk) {
                resolve([
                    'Отличное объяснение! Наконец-то понял event loop.', 
                    'А как насчет Web Workers?', 
                    'Лайк за async/await!'
                ])
            } else {
                reject(new Error('Не удалось загрузить комментарии!'))
            }
        }, 1.5 * 1000)
    })
}

function fetchRelatedVideos(videoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const statusOk = Math.random() <= 0.95
            if (statusOk) {
                resolve([
                    'Что такое замыкания в JS?', 
                    'Паттерны проектирования для начинающих'
                ])
            } else {
                reject(new Error('Не удалось загрузить похожие видео!'))
            }
        }, 0.8 * 1000)
    })
}

async function loadVideoPage(videoId) {
    try {
        const [videoDetails, comments, relatedVideos] = await Promise.all([
            fetchVideoDetails(videoId),
            fetchComments(videoId),
            fetchRelatedVideos(videoId)
        ])

        console.log(`Название видео:  ${videoDetails.title}`);
        console.log(`Описание видео:  ${videoDetails.description}`);
        console.log(`Комментарии:  ${comments.join(', ')}`);
        console.log(`Похожие видео:  ${relatedVideos.join(', ')}`);
    } catch (error) {
        console.error(`Часть данных не удалось загрузить: ${error.message}`);
    }
}

loadVideoPage(1);