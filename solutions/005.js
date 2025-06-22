async function fetchAlbumDetails(albumId) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          id: albumId,
          title: "Синтаксический Сахар",
          artist: "Нейросеть Нейронович",
          tracks: [
            "Асинхронная Баллада",
            "Цикл Бесконечности",
            "Баг в Матрице",
          ],
        }),
      800
    );
  });
}

async function fetchRecommendations(engineId, albumId) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>
      resolve(
        {
          similarAlbums: [
            `Похожий альбом  от ${engineId} 1`,
            `Похожий альбом  от ${engineId} 2`,
          ],
          engine: engineId,
        },
        Math.random() * 1500 + 500
      )
    );
  });
}

async function timeoutPromise(delay, message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(message)), delay);
  });
}

async function loadAlbumPage(albumId, recommendationEngines, totalTimeout) {
  try {
    // Промис для самых быстрых рекомендаций
    const fastestRecommendationsPromise = Promise.race(
      recommendationEngines.map((engineId) =>
        fetchRecommendations(engineId, albumId)
      )
    );

    // Промис для загрузки деталей И самых быстрых рекомендаций
    const dataFetchPromise = Promise.all([
      fetchAlbumDetails(albumId),
      fastestRecommendationsPromise, // Передаем промис!
    ]);

    // Промис для таймаута
    const overallTimeoutPromise = timeoutPromise(
      totalTimeout,
      `Страница альбома ${albumId} не загрузилась за ${totalTimeout} мс`
    );

    // Финальное соревнование: данные ИЛИ таймаут
    const result = await Promise.race([
      dataFetchPromise,
      overallTimeoutPromise,
    ]);

    // Если мы здесь, dataFetchPromise успел
    const [albumDetails, recommendations] = result; // Результат Promise.all
    console.log("--- Страница альбома загружена ---");
    console.log(
      "Альбом:",
      albumDetails.title,
      "Исполнитель:",
      albumDetails.artist
    );
    console.log("Треки:", albumDetails.tracks);
    console.log(
      `Рекомендации (от ${recommendations.engine}):`,
      recommendations.similarAlbums
    );
  } catch (error) {
    console.error("--- Ошибка загрузки страницы альбома ---");
    console.error("Причина:", error.message);
  }
}

const recommendationEnginesArray = ["engine-A", "engine-B", "engine-C"];

loadAlbumPage("albumId", recommendationEnginesArray, 2500);
