//1. Три асинхронные функции с заданной вероятностью сбоя
const fetchVideoDetails = (videoId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9) {
                resolve({ title: 'Глубокое погружение в асинхронный JavaScript', description: 'Разбираем event loop, промисы и async/await на пальцах.' })
            } else {
                reject(new Error('Не удалось загрузить данные видео'))
            } //а как в реальном проекте поток видео загружать? 
            // это только через специальные библиотеки для работы с flv или rtsp?
            //или есть какие-то встроенные механизмы в js и html? А есть ли они в React?
        }, 1000)
    })
}

//Я правильно понимаю, что с настоящей ссылкой этот запрос выглядил бы как-то так?
// const fetchVideoDetails = (videoId) => {
//     return new Promise((resolve, reject) => {
//         fetch(`https://www.youtube.com/v3/videos?id=${videoId}&key=YOUR_API_KEY&part=snippet`)
//             .then(response => {
//             })
//             .then(data => {          
//             })
//             .catch(error => {
//                 reject(error)
//             })
//     })
// }

const fetchComments = (videoId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.7) {
                resolve(['Отличное объяснение! Наконец-то понял event loop', 'А как насчёт Web Workers?', 'Лайк за async/await!'])
            } else {
                reject(new Error('Не удалось загрузить комментарии'))
            }
        }, 1500)
    })
}

const fetchRelatedVideos = (videoId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.95) {
                resolve(['Что такое замыкания в JS?', 'Паттерны проектирования для начинающих'])
            } else {
                reject(new Error('Не удалось загрузить похожие видео'))
            }
        }, 800)
    })
}

//2. Асинхронная функция для загрузки страницы
async function loadVideoPage(videoId) {
 //4. Обработка ошибок с помощью try-catch
    try { //3. Использую Promise.all для параллельной загрузки данных
        const [videoDetails, comments, relatedVideos] = await Promise.all([
            fetchVideoDetails(videoId),
            fetchComments(videoId),
            fetchRelatedVideos(videoId)
        ]) //5. Вывожу данные страницы
        console.log(`--- Данные для страницы видео ---
    Заголовок: ${videoDetails.title}
    Описание: ${videoDetails.description}
    Комментарии: ${comments.join('\n')}
    Рекомендованные видео: ${relatedVideos.join('\n')}
    ---------------------------------------------------------------------------`)
    } //6. Обработка ошибок
    catch (error) {
        console.error('Часть данных загрузить не удалось:', error.message)
        return
    }
}

//7. Размышления на тему Promise.allSettled:
//Promise.allSettled позволяет выполнить все промисы параллельно, но не прерывать выполнение, если один из промисов завершится с ошибкой.

//8. Не забываем вызвать функцию для загрузки страницы
loadVideoPage('12345')