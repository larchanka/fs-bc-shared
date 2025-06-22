
    // Генерация случайной задержки от 500 до 1500 мс
function getRandomDelay() {
    const delay = Math.floor(Math.random() * 1000) + 500;
    {#console.log(`${delay}ms`);#}
      return delay;
}

// Функции, имитирующие запросы к разным серверам
function queryServer1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('1');
    }, getRandomDelay());
  });
}

function queryServer2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('2');
    }, getRandomDelay());
  });
}

function queryServer3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('3');
    }, getRandomDelay());
  });
}

// 2. Запуск поиска самого быстрого сервера
console.log("Ищем самый быстрый сервер...");

Promise.race([
  queryServer1(),
  queryServer2(),
  queryServer3()
])
  .then((fastestResponse) => {
    console.log(`Ответ от сервера ${fastestResponse}`);
  });
