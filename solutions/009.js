function serverResponse(numServer){
  return new Promise(resolve => {
  setTimeout(()=> {resolve(`Ответ от сервера ${numServer}`);}, 500 +Math.random()*1000)})
}
console.log("Ищем самый быстрый сервер...")
Promise.race([serverResponse(1), serverResponse(2), serverResponse(3)]).then(arr => {console.log(arr); console.log("Используем этот сервер для загрузки!")});
