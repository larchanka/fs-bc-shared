console.log("Начало загрузки страницы видео");


new Promise((resolve, reject)=>{
    resolve("Основная информация о видео загружена")
}).then(res => console.log(res));

setTimeout(()=>{console.log("Список рекомендаций загружен")}, 0);
setTimeout(()=> {console.log("Конец скрипта")}, 0)
