console.log('Начало загрузки страницы видео');

new Promise(resolve => resolve('Основная информация о видео загружена'))
    .then(response => {
        console.log(response)
    })

setTimeout(() => {
    console.log('Список рекомендаций загружен')
    console.log('Конец скрипта')
}, 0)
