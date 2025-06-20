function fetchAlbumDetails(albumId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: albumId, title: 'Синтаксический Сахар', artist: 'Нейросеть Нейронович', tracks: ['Асинхронная Баллада', 'Цикл Бесконечности', 'Баг в Матрице'] });
            
        }, 800); // 1 секунда задержки
    });
}


function fetchRecommendations(engineId, albumId) {
  return new Promise(resolve => {
     setTimeout(() => {
      // Рекомендации
      resolve([`Похожий альбом от ${engineId} 1`, `Похожий альбом от ${engineId} 2`]);
     
  }, 500+Math.random()*1500)// 0,1-0.6 секунда задержки
  
})}

function timeoutPromise(delay, message) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(new Error(message));
            
        }, delay); // 1 секунда задержки
    });
}

async function loadAlbumPage(albumId, recommendationEngines, totalTimeout) {
    const promises = recommendationEngines.map(engineId => fetchRecommendations(engineId, albumId));
    const fastestRecommendationsPromise = Promise.race(promises);
    const dataFetchPromise = Promise.all([fetchAlbumDetails(albumId), fastestRecommendationsPromise]);
    try{
    const res = await Promise.race([dataFetchPromise,timeoutPromise(totalTimeout, `Загрузка длится более ${totalTimeout/1000} секунд`)]);
    
    console.log('Детали альбома ',res[0]);
    console.log('Рекомендации ',res[1]);
    }
    catch(error) {console.log(`Загрузка не состоялась по причине "${error.message}"`)}
    
}



loadAlbumPage("КиШ", ["google", "engine-B", "recommendService"],2500)
