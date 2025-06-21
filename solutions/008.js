function fetchMessages() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Сообщения загружены");
    }, 1000);
  });
}

function fetchStatuses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Статусы загружены");
    }, 500); 
  });
}

function fetchStickers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Стикеры загружены");
    }, 1500); 
  });
}
console.log("Начало загрузки данных чата")
Promise.all([fetchMessages(),fetchStatuses(),fetchStickers()])
.then((d)=>console.log(d)
)
.then(()=>console.log("Чат готов к отображению!"))
.catch((error)=>console.log(error)

)
console.log("Запрос на загрузку отправлен")
