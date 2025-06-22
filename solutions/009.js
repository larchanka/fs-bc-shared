function queryServer(serverName) {
  const minT = 0.5, maxT = 1.5;
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Ответ от сервера ${serverName}`);
    }, (Math.random() * (maxT - minT) + minT) * 1000);
  });
}

const serverQueries = [];
for (let index = 1; index <= 3; index++) {
  serverQueries.push(queryServer(index.toString()));
}

console.log("Ищем самый быстрый сервер...")

Promise.race(serverQueries)
  .then(result => {
    console.log(result);
    console.log('Используем этот сервер для загрузки!');
  })
  .catch(err => console.log('Ошибка: ', err));
