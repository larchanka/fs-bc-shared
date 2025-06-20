const fetchFuncVideo = () => {
    async function fetchVideoDetails(videoId) {
        const Details = { title: 'Глубокое погружение в асинхронный JavaScript', description: 'Разбираем event loop, промисы и async/await на пальцах.' };

        return new Promise( (resolve, reject) => {
            if (Math.random() < 0.9) {
                setTimeout(() => {
                    resolve(Details);
                }, 1000);
            }else {
                reject (new Error('Сообщение об ошибке'));
            }
        })
    }
    async function fetchComments(videoId) {
        const Comments = ['Отличное объяснение! Наконец-то понял event loop.', 'А как насчет Web Workers?', 'Лайк за async/await!'];

        return new Promise( (resolve, reject) => {
            if (Math.random() < 0.7) {
                setTimeout(() => {
                    resolve(Comments);
                }, 1500);
            }else {
                reject (new Error('Не удалось загрузить детали видео'));
            }
        })
    }
    async function fetchRelatedVideos(videoId) {
        const Videos = ['Что такое замыкания в JS?', 'Паттерны проектирования для начинающих'];

        return new Promise( (resolve, reject) => {
            if (Math.random() < 0.95) {
                setTimeout(() => {
                    resolve(Videos);
                }, 800);
            }else {
                reject (new Error('Не удалось загрузить комментарии'));
            }
        })
    }

    return {fetchVideoDetails, fetchComments, fetchRelatedVideos}
}

const loadVideoPage = async (videoId) => {
    console.log(`Загрузка страницы для видео ${videoId}...`);
    try {
        await Promise.all([fetchFuncVideo().fetchVideoDetails(), fetchFuncVideo().fetchComments(), fetchFuncVideo().fetchRelatedVideos()])
            .then(values => {
                console.log(validationValuesVideo(values));
            })
    }catch(error) {
        console.error('--- Ошибка загрузки части страницы ---');
        console.error('Причина:', error.message);
    }
}

const validationValuesVideo = (values) => {
    return `
        ${values[0].title}
        ${values[0].description}
        Video : ${values[1]}
        ${values[2]}
    `
}

loadVideoPage('google.com');