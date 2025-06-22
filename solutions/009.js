function queryServer1() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
    setTimeout(() => {
      resolve("Ответ от сервера 1");
    }, delay);
  });
}

function queryServer2() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
    setTimeout(() => {
      resolve("Ответ от сервера 2");
    }, delay);
  });
}

function queryServer3() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
    setTimeout(() => {
      resolve("Ответ от сервера 3");
    }, delay);
  });
}

console.log("Ищем самый быстрый сервер...");

Promise.race([queryServer1(), queryServer2(), queryServer3()])
  .then((fastestResponse) => {
    console.log(fastestResponse);
    console.log("Используем этот сервер для загрузки!");
  });
