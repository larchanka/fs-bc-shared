function fetchMessages() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Сообщения загружены');
    }, 1 * 1000);
  });
}

function fetchStatuses() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Статусы загружены');
    }, 0.5 * 1000);
  });
}
function fetchStickers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Стикеры загружены');
    }, 1.5 * 1000);
  });
}

console.log("Начало загрузки данных чата");

Promise.all([ fetchMessages(), fetchStatuses(), fetchStickers() ])
  .then(data => {
    console.log(data.join("\n"), "\nЧат готов к отображению!");
  })
  .catch(err => console.log('Ошибка: ', err));

console.log("Запрос на загрузку отправлен");
