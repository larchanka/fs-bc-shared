async function loadVideoPage(videoId) {
    console.log(`Загрузка страницы для видео ${videoId}...`);

    try {
        const [details, comments, related] = await Promise.all([
            fetchVideoDetails(),
            fetchComments(),
            fetchRelatedVideos(),
        ])

        console.log('--- Страница загружена полностью ---');
        console.log('Детали:', details);
        console.log('Комментарии:', comments);
        console.log('Похожие видео:', related);
        console.log('----------------------------------------');
    } catch (error) {
        console.error('--- Ошибка загрузки части страницы ---');
        console.error('Причина:', error.message);
    }
}

const fetchVideoDetails = (videoId) => {
    return new Promise((resolve, reject) => {
        if (0.9 >= Math.random()) {
            setTimeout(() => {
                resolve({ title: 'Глубокое погружение в асинхронный JavaScript', description: 'Разбираем event loop, промисы и async/await на пальцах.' })
            }, 1000)
        } else {
            reject(new Error('Не удалось загрузить детали видео'))
        }
    })
}

const fetchComments = (videoId) => {
    return new Promise((resolve, reject) => {
        if (0.7 >= Math.random()) {
            setTimeout(() => {
                resolve(['Отличное объяснение! Наконец-то понял event loop.', 'А как насчет Web Workers?', 'Лайк за async/await!'])
            }, 1500)
        } else {
            reject(new Error('Не удалось загрузить комментарии'))
        }
    })
}

const fetchRelatedVideos = (videoId) => {
    return new Promise((resolve, reject) => {
        if (0.95 >= Math.random()) {
            setTimeout(() => {
                resolve(['Что такое замыкания в JS?', 'Паттерны проектирования для начинающих'])
            }, 800)
        } else {
            reject(new Error('Не удалось загрузить похожие видео'))
        }
    })
}

loadVideoPage('12')
