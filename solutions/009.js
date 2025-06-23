'use strict';

function queryServer1() {
  return new Promise((resolve) => {
    const random = Math.floor(Math.random() * 1001) + 500;

    setTimeout(() => {
      resolve('Ответ от сервера 1');
    }, random);
  });
}

function queryServer2() {
  return new Promise((resolve) => {
    const random = Math.floor(Math.random() * 1001) + 500;

    setTimeout(() => {
      resolve('Ответ от сервера 2');
    }, random);
  });
}

function queryServer3() {
  return new Promise((resolve) => {
    const random = Math.floor(Math.random() * 1001) + 500;

    setTimeout(() => {
      resolve('Ответ от сервера 3');
    }, random);
  });
}

console.log('Ищем самый быстрый сервер...');

Promise.race([queryServer1(), queryServer2(), queryServer3()]).then(
  (server) => {
    console.log(server);
    console.log('Используем этот сервер для загрузки!');
  }
);
