function fetchMessages() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Сообщения загружены");
    }, 1000);
  });
}

function fetchStatuses() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Статусы загружены");
    }, 500);
  });
}

function fetchStickers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Стикеры загружены");
    }, 1500);
  });
}

console.log("Начало загрузки данных чата"); //1

const promises = [fetchMessages(), fetchStatuses(), fetchStickers()];

Promise.all(promises)
  .then(results => {
    console.log(results); //3 массив с результатами в порядке: сообщения, статусы, стикеры
    console.log("Чат готов к отображению!"); //4
  });

console.log("Запрос на загрузку отправлен"); //2