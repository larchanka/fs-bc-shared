function fetchMessages() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Сообщения загружены");
    }, 1000);
  });
}

function fetchStatuses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Статусы загружены");
    }, 500);
  });
}

function fetchStickers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Стикеры загружены");
    }, 1500);
  });
}

 console.log("Начало загрузки данных чата");

const allData = Promise.all([
  fetchMessages(),
  fetchStatuses(),
  fetchStickers()
]);

console.log("Запрос на загрузку отправлен");

allData.then((results) => {
  console.log(results); // массив результатов в том порядке, как переданы в const allData, даже если данные получены не по очереди
  console.log("Чат готов к отображению!");
});
