function fetchMessages() {
  return new Promise(res => {
    setTimeout(() => {
      res("Сообщения загружены");
    }, 1000)
  })
}

function fetchStatuses() {
  return new Promise(res => {
    setTimeout(() => {
      res("Статусы загружены");
    }, 500)
  })
}

function fetchStickers() {
  return new Promise(res => {
    setTimeout(() => {
      res("Стикеры загружены");
    }, 1500)
  })
}

const promises = [fetchMessages(), fetchStatuses(), fetchStickers()];

console.log("Начало загрузки данных чата");
console.log("Запрос на загрузку отправлен");
    
Promise.all(promises).then(results => {
  console.log(results);
  console.log("Чат готов к отображению!");
}).catch(error => {
  console.error("Ошибка при загрузке данных чата:", error);
});
