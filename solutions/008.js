function myFetch(message, timeout){
  return new Promise(resolve => {
  setTimeout(()=> {resolve(message);},timeout)})
}
function fetchMessages(){
  return myFetch("Сообщения загружены", 1000);
}
function fetchStatuses(){
  return myFetch("Статусы загружены", 500);
}
function fetchStickers(){
  return myFetch("Стикеры загружены", 1500);
}

Promise.all([fetchMessages(), fetchStatuses(), fetchStickers()]).then(arr => {console.log(arr); console.log("Чат готов к отображению!")});
