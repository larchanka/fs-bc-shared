function queryServer1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ответ от сервера 1");
    }, Math.random() * 1000 + 500);
  });
}

function queryServer2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ответ от сервера 2");
    }, Math.random() * 1000 + 500);
  });
}

function queryServer3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ответ от сервера 3");
    }, Math.random() * 1000 + 500);
  });
}

Promise.race([queryServer1(), queryServer2(), queryServer3()]).then(
  (result) => {
    console.log(`${result} - Используем этот сервер для загрузки!`);
  }
);
