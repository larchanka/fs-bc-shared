import { resolvedPromise, generateId, randomNumber } from "./utils"

type AlbumDetails = {
  id: string
  title: string
  artist: string
  tracks: string[]
}
// 1. Имитация загрузки деталей альбома
const fetchAlbumDetails = async (albumId: string): Promise<AlbumDetails> => {
  const albumDetails: AlbumDetails = {
    id: albumId,
    title: 'Синтаксический Сахар',
    artist: 'Нейросеть Нейронович',
    tracks: ['Асинхронная Баллада', 'Цикл Бесконечности', 'Баг в Матрице'],
  }
  return await resolvedPromise(albumDetails, 800)
}

type Recommendations = {
  engine: string
  data: string[]
}
// 2. Имитация запроса рекомендаций
const fetchRecommendations = async (engineId: string, albumId: string): Promise<Recommendations> => {
  const recommendations: Recommendations = {
    engine: engineId,
    data: [`Похожий альбом от ${engineId} 1`, `Похожий альбом от ${engineId} 2`],
  }
  return await resolvedPromise(recommendations, randomNumber(500, 2000))
}

// 3. Имитация таймаута
const timeoutPromise = (delay: number, message: string): Promise<never> => new Promise((_, rj) => {
  setTimeout(() => rj(new Error(message)), delay)
})

const loadAlbumPage = async (albumId: string, recommendationEngines: string[], totalTimeout: number) => {
  try {
    // Промис для загрузки деталей альбома
    const albumDetailsPromise = fetchAlbumDetails(albumId)

    // Промис для загрузки самых быстрых рекомендаций
    const fastestRecommendationsPromise = Promise
      .race(recommendationEngines.map(engineId => fetchRecommendations(engineId, albumId)))

    const dataFetchPromise = Promise.all([albumDetailsPromise, fastestRecommendationsPromise])
    const overallTimeoutPromise = timeoutPromise(
      totalTimeout,
      `Страница альбома ${albumId} не загрузилась за ${totalTimeout} мс`,
    )

    // Финальное соревнование: данные или таймаут
    const fastestRecommendations = await Promise.race([
      dataFetchPromise,
      overallTimeoutPromise,
    ])

    // Если запрос не упал и таймаут не вышел, то идём дальше
    const [albumDetails, recommendations] = fastestRecommendations
    console.log('--- Страница альбома загружена ---')
    console.log('Альбом:', albumDetails.title, 'Исполнитель:', albumDetails.artist);
    console.log('Треки:', albumDetails.tracks.join(', '));
    console.log(`Рекомендации (от ${recommendations.engine}):`, recommendations.data);
  } catch (error) {
    if (error instanceof Error) {
      console.error('--- Ошибка загрузки страницы альбома ---');
      console.error('Причина:', error.message);
    }
  }
}



loadAlbumPage(generateId(), ['engine-A', 'engine-B', 'engine-C'], 2500)
