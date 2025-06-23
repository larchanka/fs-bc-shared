function fetchMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Сообщения загружены");
    }, 1 * 1000);
  });
}

function fetchStatuses() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Статусы загружены");
    }, 0.5 * 1000);
  });
}

function fetchStickers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Стикеры загружены");
    }, 1.5 * 1000);
  });
}

console.log("Начало загрузки данных чата");
Promise.all([fetchMessages(), fetchStatuses(), fetchStickers()]).then(
  (arrayOfPromises) => {
    console.log(arrayOfPromises.join(", "));
    console.log("Чат готов к отображению!");
  }
);
console.log("Запрос на загрузку отправлен");
