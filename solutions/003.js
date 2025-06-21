const answers = {
    fetchRelatedVideos: "Похожие видео: ",
    fetchComments: "Комментарии: ",
    fetchVideoDetails: "Детали: "
}


async function fetchVideoDetails(videoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9) {
                resolve({ title: 'Это лучший редактор кода, но не для тебя', description: 'Какой редактор кода выбрать? Выбор сегодня большой: VSCode, Jetbrains, Cursor, Windsurt, Vim, Sublime Text и много всякого еще.' })
            } else {
                reject(new Error('Не удалось загрузить детали видео'));
            }
        }, 1 * 1000)
    }); 
}

async function fetchComments(videoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.70) {
                resolve(['Я пишу на туалетной бумаге', 'Често говоря я уже устал создавать учетки для треал версии PyCharm 😂', 'Я лупой выжигаю обычно, так лучше запоминается'])
            } else {
                reject(new Error('Не удалось загрузить комментарии'));
            }
        }, 1.5 * 1000); 
    }); 
}

async function fetchRelatedVideos(videoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.95) {
                resolve(['Что такое замыкания в JS?', 'Паттерны проектирования для начинающих'])
            } else {
                reject(new Error('Не удалось загрузить похожие видео'));
            }
        }, 0.8 * 1000)
    }); 
}

async function loadVideoPage(videoId) {
    const promises = [fetchVideoDetails, fetchComments, fetchRelatedVideos];

    for (let promise of promises) {
        try {
            let res = await promise(videoId);
            if (res) {
                if (Array.isArray(res)) {
                    res = res.toString();
                }
                console.log(answers[promise.name], res);
            }
        } catch (error) {
            console.log(`Ошибка: ${error.message}`);
        }
    } 

}

await loadVideoPage(1);
