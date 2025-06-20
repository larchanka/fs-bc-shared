async function fetchVideoDetails(videoId) {
    const isSuccess = Math.random() < 0.9;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccess) {
                resolve({ title: 'Глубокое погружение в асинхронный JavaScript', description: 'Разбираем event loop, промисы и async/await на пальцах.' });
            } else {
                reject(new Error('Не удалось загрузить детали видео'))
            }
        }, 1000);
    })
}

async function fetchComments(videoId) {
    const isSuccess = Math.random() < 0.7;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccess) {
                resolve(['Отличное объяснение! Наконец-то понял event loop.', 'А как насчет Web Workers?', 'Лайк за async/await!']);
            } else {
                reject(new Error('Не удалось загрузить комментарии'))
            }
        }, 1500);
    })
}

async function fetchRelatedVideos(videoId) {
    const isSuccess = Math.random() < 0.95;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccess) {
                resolve(['Что такое замыкания в JS?', 'Паттерны проектирования для начинающих']);
            } else {
                reject(new Error('Не удалось загрузить похожие видео'))
            }
        }, 800);
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
        console.log('Детали:', details);
        console.log('Комментарии:', comments);
        console.log('Похожие видео:', related);
    } catch (error) {
        console.error('--- Ошибка загрузки части страницы ---');
        console.error('Причина:', error.message);
        // Мы не имеем доступа к результатам успешных промисов здесь
        // с использованием Promise.all

        // Чтобы получить результаты даже при частичных сбоях, в реальном коде часто используют Promise.allSettled([...]). Он возвращает массив объектов, описывающих результат каждого промиса ({status: 'fulfilled', value: ...} или {status: 'rejected', reason: ...}).
    }
}

loadVideoPage(videoID);
loadVideoPage(videoID);
loadVideoPage(videoID);
