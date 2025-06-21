// Что нужно сделать:

// Создай три функции, имитирующие запрос к разным серверам. Каждая возвращает Promise: ◦ queryServer1(): Разрешается через случайное время от 500 до 1500 мс со строкой "Ответ от сервера 1". ◦ 
// queryServer2(): Разрешается через случайное время от 500 до 1500 мс со строкой "Ответ от сервера 2". ◦ queryServer3(): Разрешается через случайное время от 500 до 1500 мс со строкой 
// "Ответ от сервера 3". ◦ Используй setTimeout и Math.random() для генерации случайной задержки в указанном диапазоне.
// Используй Promise.race(), чтобы запустить все три запроса одновременно.

// Когда первый из промисов успешно завершится, выведи в консоль его результат (строку с именем ответившего сервера) и сообщение "Используем этот сервер для загрузки!".
// Добавь console.log("Ищем самый быстрый сервер...") перед запуском Promise.race().

function createOurPromise(message) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {resolve(message)}, Math.random() * (1500 - 500) + 500);
  });
}

function queryServer1() {
  return createOurPromise("Ответ от сервера 1");
}

function queryServer2() {
  return createOurPromise("Ответ от сервера 2");
}

function queryServer3() {
  return createOurPromise("Ответ от сервера 3");
}

const ourServers = [queryServer1(), queryServer2(), queryServer3()]

console.log("Ищем быстрый сревер для загрузки...");
const fastestQuery =  Promise.race(ourServers).then((result) => console.log(`${result}\nИспользуем этот сервер для загрузки! :)`));



// 1. Нахождение самого быстрого промиса будет выполнено как микротаска. Потому выполнится последним
