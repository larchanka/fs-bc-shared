console.log('Начало загрузки страницы видео');

new Promise((resolve) => { resolve(); })
    .then(console.log('Основная информация о видео загружена')
    )

setTimeout(() => { console.log('Список рекомендаций загружен'); }, 0);

console.log('Конец скрипта');
