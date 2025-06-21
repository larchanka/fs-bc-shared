async function fetchAlbumDetails(albumId) {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      resole({
        id: albumId,
        title: "Синтаксический Сахар",
        artist: "Нейросеть Нейронович",
        tracks: ["Асинхронная Баллада", "Цикл Бесконечности", "Баг в Матрице"],
      });
    }, 800);
  });
}

function getDelay() {
  const random = Math.round(Math.random() * 10000);
  if (random > 500 || random < 2000) return random;
  getDelay();
}

async function fetchRecommendations(albumId, engineId) {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      resole({
        engine: engineId,
        album: [
          `Похожий альбом от ${albumId} 1`,
          `Похожий альбом от ${albumId} 2`,
        ],
      });
    }, getDelay());
  });
}

async function timeoutPromise(delay, message) {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      reject(new Error(message));
    }, delay);
  });
}

async function loadAlbumPage(albumId, recommendationEngines, totalTimeout) {
  try {
    const promises = recommendationEngines.map((item) =>
      fetchRecommendations(albumId, item)
    );
    //шаг А
    const fastestRecommendationsPromise = Promise.race(promises);

    //шан Б
    const dataFetchPromise = Promise.all([
      fetchAlbumDetails(albumId),
      fastestRecommendationsPromise,
    ]);

    //шаг В
    const overallTimeoutPromise = timeoutPromise(
      totalTimeout,
      `Страница альбома ${albumId} не загрузилась за ${totalTimeout} мс`
    );

    const result = await Promise.race([
      dataFetchPromise,
      overallTimeoutPromise,
    ]);

    const [albumInfo, recEngin] = result;
    console.log("Альбом:", albumInfo.title, "Исполнитель:", albumInfo.artist);
    console.log("треклист:", albumInfo.tracks.toString());
    console.log("рекомендации движок:", recEngin.engine);
  } catch (error) {
    console.log(error);
  }
}

const album = "какой-то альбом";
const engines = ["engine-A", "engine-B", "engine-C"];
const timeout = 2500;

loadAlbumPage(album, engines, timeout);
