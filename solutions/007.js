console.log("Начало загрузки страницы видео");
new Promise(resolve => resolve()).then(res => console.log("Основная информация о видео загружена"))
setTimeout(()=> console.log("Список рекомендаций загружен"), 0);
console.log("Конец скрипта")

console.log("Начало загрузки страницы видео");
setTimeout(()=> console.log("Список рекомендаций загружен"), 0);
new Promise(resolve => resolve()).then(res => console.log("Основная информация о видео загружена"))
console.log("Конец скрипта")

