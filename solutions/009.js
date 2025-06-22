function queryServer1() {
  return new Promise(res => {
    const delay = Math.random() * 1000 + 500;
    setTimeout(() => {
      res("Ответ от сервера 1");
    }, delay);
  })
}

function queryServer2(){
   return new Promise(res => {
    const delay = Math.random() * 1000 + 500;
    setTimeout(() => {
      res("Ответ от сервера 2");
    }, delay);
  })
}

function queryServer3(){
   return new Promise(res => {
    const delay = Math.random() * 1000 + 500;
    setTimeout(() => {
      res("Ответ от сервера 3");
    }, delay);
  })
}

const promises = [queryServer1(), queryServer2(), queryServer3()];

console.log("Ищем самый быстрый сервер...");

Promise.race(promises).then((result) => {
  console.log(result);
  console.log("Используем этот сервер для загрузки!")
})
