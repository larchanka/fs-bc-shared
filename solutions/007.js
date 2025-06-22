console.log("Начало загрузки страницы видео");

Promise.resolve().then(() => {
  console.log("Основная информация о видео загружена");
});

setTimeout(() => {
  console.log("Список рекомендаций загружен");
}, 0);

console.log("Конец скрипта");
