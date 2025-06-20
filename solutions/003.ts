export const schrodingerPromise = (data: unknown, delay: number, errorMessage, successRate = 0.9) => new Promise((rs, rj) => {
  return setTimeout(() => Math.random() <= successRate ? rs(data) : rj(new Error(errorMessage)), delay)
})


const fetchVideoDetails = async (videoId: string) =>schrodingerPromise(
  { title: 'Глубокое погружение в асинхронный JavaScript', description: 'Разбираем event loop, промисы и async/await на пальцах.' },
  1000,
  'Не удалось загрузить детали видео',
  0.9
)

const fetchComments = async (videoId: string) => schrodingerPromise(
  ['Отличное объяснение! Наконец-то понял event loop.', 'А как насчет Web Workers?', 'Лайк за async/await!'],
  1500,
  'Не удалось загрузить комментарии',
  0.7
)

const fetchRelatedVideos = async (videoId: string) => schrodingerPromise(
  ['Что такое замыкания в JS?', 'Паттерны проектирования для начинающих'],
  800,  
  'Не удалось загрузить похожие видео',
  0.95
)

const loadVideoPage = async (videoId: string) => {
  try {
    const [videoDetails, comments, relatedVideos] = await Promise.all([fetchVideoDetails(videoId), fetchComments(videoId), fetchRelatedVideos(videoId)])
    console.log('--- Страница загружена полностью ---')
    console.log('Детали:', videoDetails)
    console.log('Комментарии:', comments) 
    console.log('Похожие видео:', relatedVideos)
  } catch (error) {
    if (error instanceof Error) {
      console.error('--- Ошибка загрузки части страницы ---')
      console.error('Причина:', error.message)  
    }
  }
}

