function fetchVideoDetails(videoId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const ratio = Math.random();
            if(ratio > 0.9) reject(new Error('Невозможно получить детали видео'));
            else resolve({title: 'Глубокое что-то там....', description:'JS - это не просто'});
        }, 1000);
    });
}

function fetchComments(videoId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const ratio = Math.random();
            if(ratio > 0.7) reject(new Error('Невозможно получить коментарии'));
            else resolve(['Ничего не понимаю, но очень интересно', 'Java мне как-то ближе', 'Даешь react!!!']);
        },1500);
    });
}

function fetchRelatedVideos(videoId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ratio = Math.random();
            if(ratio > 0.95) reject(new Error('Не удалось загрузить похожие видео'));
            else resolve(['Что такое замыкания в JS?', 'Паттерны проектирования для начинающих']);
        }, 800);
    });
}

async function loadVideoPage(videoId){
    console.log(`Загрузка страницы видео ${videoId}`); 
    try{
        const [details, comments, related] = await Promise.all([
            fetchVideoDetails(videoId), // 10% фейлов
            fetchComments(videoId), // 30% фейлов
            fetchRelatedVideos(videoId) // 5% фейлов
        ]);
        console.log('--- Страница загружена полностью ---');
        console.log('Детали:', details);
        console.log('Комментарии:', comments);
        console.log('Похожие видео:', related);
        console.log('---------------------------------');
    } catch (error) {
    console.error('--- Ошибка загрузки страницы ---');
    console.error('Причина:', error.message);
  }
    
}

loadVideoPage(1);
