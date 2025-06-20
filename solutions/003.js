function fetchVideoDetails(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = 0.9 > Math.random();

      isSuccess
        ? resolve({
            title: "Глубокое погружение в асинхронный JavaScript",
            description:
              "Разбираем event loop, промисы и async/await на пальцах.",
          })
        : reject(new Error("Не удалось загрузить детали видео"));
    }, 1000);
  });
}

function fetchComments(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = 0.7 > Math.random();

      isSuccess
        ? resolve([
            "Отличное объяснение! Наконец-то понял event loop.",
            "А как насчет Web Workers?",
            "Лайк за async/await!",
          ])
        : reject(new Error("Не удалось загрузить комментарии"));
    }, 1500);
  });
}

function fetchComments(videoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = 0.95 > Math.random();

      isSuccess
        ? resolve([
            "Что такое замыкания в JS?",
            "Паттерны проектирования для начинающих",
          ])
        : reject(new Error("Не удалось загрузить похожие видео"));
    }, 800);
  });
}

async function loadVideoPage(videoId) {
  console.log(`Загрузка страницы для видео ${videoId}...`);
  try {
    const [details, comments, related] = await Promise.all([
      fetchVideoDetails(videoId),
      fetchComments(videoId),
      fetchComments(videoId),
    ]);

    console.log("--- Страница загружена полностью ---");
    console.log("Детали:", details);
    console.log("Комментарии:", comments);
    console.log("Похожие видео:", related);
  } catch (error) {
    console.error("--- Ошибка загрузки части страницы ---");
    console.error("Причина:", error.message);
  }
}

loadVideoPage(1);
