function queryServer1() {
  const delay = Math.random() * 1000 + 500;
  return new Promise((resolve) => {
    setTimeout(() => resolve('Ответ от сервера 1'), delay);
  });
}

function queryServer2() {
  const delay = Math.random() * 1000 + 500;
  return new Promise((resolve) => {
    setTimeout(() => resolve('Ответ от сервера 2'), delay);
  });
}

function queryServer3() {
  const delay = Math.random() * 1000 + 500;
  return new Promise((resolve) => {
    setTimeout(() => resolve('Ответ от сервера 3'), delay);
  });
}

console.log('Ищем самый быстрый сервер...');

Promise.race([queryServer1(), queryServer2(), queryServer3()]).then((result) => {
  console.log(result);
  console.log('Используем этот сервер для загрузки!');
});
