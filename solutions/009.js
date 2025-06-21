function queryServer1() {
  return new Promise((resolve) => {
    const delay = 500 + Math.random() * 1000;
    setTimeout(() => {
      resolve("Ответ от сервера 1");
    }, delay);
  });
}

function queryServer2() {
  return new Promise((resolve) => {
    const delay = 500 + Math.random() * 1000;
    setTimeout(() => {
      resolve("Ответ от сервера 2");
    }, delay);
  });
}

function queryServer3() {
  return new Promise((resolve) => {
    const delay = 500 + Math.random() * 1000;
    setTimeout(() => {
      resolve("Ответ от сервера 3");
    }, delay);
  });
}


Promise.race([queryServer1(),queryServer2(),queryServer3()])
.then((data)=>{
    console.log(data)
    console.log("Используем "+ data[data.length-1] +" сервер для загрузки!"  );

})
