console.log("Начало загрузки страницы видео");
new Promise((resolve, reject) => {
    return resolve("Основная информация o видео загружена");
}).then(d=>console.log(d))
    
setTimeout(() => {
    console.log("Список рекомендаций загружен");
    
}, 0);
 console.log( "Конец скрипта");
 
