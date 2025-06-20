function fetchVideoDetails(videoId) {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
      // Обновленные данные погоды
      if(Math.random() < 0.9) resolve({ title: 'Глубокое погружение в асинхронный JavaScript', description: 'Разбираем event loop, промисы и async/await на пальцах.' });// 1,1 секунда задержки
      else reject(new Error('Не удалось загрузить детали видео'));
  }, 1000)
  
})}

function fetchComments(videoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Обновленные примеры курса доллара к рублю
            if(Math.random() <0.7) resolve(['Отличное объяснение! Наконец-то понял event loop.', 'А как насчет Web Workers?', 'Лайк за async/await!']);
            else reject(new Error('Не удалось загрузить комментарии'))
        }, 1500); // 1.5 секунды задержки
    });
}

function fetchRelatedVideos(videoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random()<0.95) resolve(['Что такое замыкания в JS?', 'Паттерны проектирования для начинающих']);
            else reject(new Error('Не удалось загрузить похожие видео'))
        }, 800); // 0.8 секунды задержки
    });
}

async function loadVideoPage(videoId) {
    console.log('Загрузка страницы видео');
    try{
    const [details, comments, related] = await Promise.all([fetchVideoDetails(videoId), fetchComments(videoId), fetchRelatedVideos(videoId)]); 
        
        console.log('--- Страница загружена полностью ---');
        console.log('Детали:', details);
        console.log('Комментарии:', comments);
        console.log('Похожие видео:', related);
    }
    catch(error)  {console.log(`Часть данных загрузить не удалось по причине: "${error.message}"`);}
    console.log('Конец загрузки');
}
const videoId =35;
loadVideoPage(videoId); // Не забудь вызвать функцию
