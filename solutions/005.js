//переделанная
const log = console.log
const sec = 1000
//2.2
const rng = (min, max) => {
    return (Math.random() * (max - min ) + min) * 1000
}

//1 имитация загрузки деталей альбома 
const fetchAlbumDetails = (albumId) => {
    // 1.1
    return new Promise((resolve, reject) => {
        // 1.2
        setTimeout(() => {
            resolve({
                id: albumId, // а нельзя ли просто одно имя ключа и значения задать и написать просто один раз albumId?
                title: "Синтаксический сахар",
                artist: "Нейросеть Нейронович",
                tracks: ["Асинхронная Баллада", "Цикл Бесконечности", "Баг в Матрице"]
            })
        }, 0.8 * sec)
    })
}

//2 Имитация запроса рекомендаций
const fetchRecommendations = (engineId, albumId) => {
    //2.2
    return new Promise(resolve => {
        setTimeout(() => {
        resolve({
            engine: engineId, // 2.1 какой движок ответил
            albumId: albumId,
            similarAlbums: [
            `Похожий альбом 1 от ${engineId}`,
            `Похожий альбом 2 от ${engineId}`
            ]
        }, rng(0.5, 2) * sec)
    })
})
}

//3 Имитация таймаута
const timeoutPromise = (delay, message) => { //вроде ж синхронная должна быть, не перепутал?
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error(message))
        }, delay)
    })
}

//4 Основная логика загрузки страницы
const loadAlbumPage = async (albumId, recommendationEngines, totalTimeout) => {
    //4.1 - 4.3:
    log(`ID альбома: ${albumId} 
ID движков рекомендаций: ${recommendationEngines}
Общее время ожидания в мс: ${totalTimeout}`) 
    // 5 
    // А
    const fastestRecommendationsPromise = Promise.race(
        recommendationEngines.map(engineId => {
            // каждый движок стартует с случайной задержкой 0-200мс
            const startDelay = Math.random() * 200
            
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(fetchRecommendations(engineId, albumId))
                }, startDelay)
            }).then(promise => promise)
        })
    )    
    // Б
    const dataFetchPromise = Promise.all([
        fetchAlbumDetails(albumId),      
        fastestRecommendationsPromise   
      ])
    // 6 try catch
    try {
        // 5 В
        const result = await Promise.race([
            dataFetchPromise,
            timeoutPromise(totalTimeout, `Превышено время ожидания ${totalTimeout}мс`)
        ])
        
        const [albumDetails, recommendations] = result
        
        log('Детали альбома:', albumDetails)
        log('Треклист:', albumDetails.tracks)
        log(`Рекомендации от движка ${recommendations.engine}:`, recommendations.similarAlbums)
        
    } catch (error) {
        log('Произошла ошибка:', error.message)
    }
}

//7 вывод результата
loadAlbumPage(
    'album-123', 
    ['engine-A', 'engine-B', 'engine-C'], 
    2500
)