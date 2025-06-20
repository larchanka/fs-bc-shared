// Что нужно сделать:

//     Имитация загрузки деталей альбома: Создай асинхронную функцию fetchAlbumDetails(albumId).
//         Возвращает Promise.
//         Через 0.8 секунды разрешается (resolve) объектом { id: albumId, title: 'Синтаксический Сахар', artist: 'Нейросеть Нейронович', tracks: ['Асинхронная Баллада', 'Цикл Бесконечности', 'Баг в Матрице'] }.
//     Имитация запроса рекомендаций: Создай асинхронную функцию fetchRecommendations(engineId, albumId).
//         engineId - это условное название системы рекомендаций (например, 'engine-A', 'engine-B').
//         Возвращает Promise.
//         Промис разрешается (resolve) через случайное время (от 0.5 до 2 секунд) массивом строк (названия похожих альбомов), например [\Похожий альбом от ${engineId} 1, Похожий альбом от ${engineId} 2]. Укажи в результате, какой движок дал ответ.
//     Имитация таймаута: Создай функцию timeoutPromise(delay, message).
//         Возвращает Promise, который через delay миллисекунд отклоняется (rejects) с ошибкой new Error(message).
//     Основная логика загрузки страницы: Напиши async function loadAlbumPage(albumId, recommendationEngines, totalTimeout).
//         albumId - ID альбома (просто строка).
//         recommendationEngines - массив строк с ID движков рекомендаций (например, ['engine-A', 'engine-B', 'engine-C']).
//         totalTimeout - общее время ожидания в мс (например, 2500).
//     Внутри loadAlbumPage:
//         Шаг А: Получение самых быстрых рекомендаций:
//             Используй Promise.race() и метод map для массива recommendationEngines, чтобы одновременно запустить fetchRecommendations для всех движков.
//             Сохрани промис, возвращаемый Promise.race, в переменную (например, fastestRecommendationsPromise). Этот промис разрешится результатом от самого быстрого движка.
//         Шаг Б: Параллельная загрузка основных данных:
//             Используй Promise.all() для одновременного запуска:
//                 Загрузки деталей альбома (fetchAlbumDetails(albumId)).
//                 Ожидания самых быстрых рекомендаций (fastestRecommendationsPromise из шага А).
//             Сохрани промис, возвращаемый Promise.all, в переменную (например, dataFetchPromise). Он разрешится, когда и детали, и самые быстрые рекомендации будут получены.
//         Шаг В: Реализация общего таймаута:
//             Создай промис таймаута с помощью timeoutPromise(totalTimeout, '...').
//             Используй Promise.race() для "соревнования" между промисом загрузки данных (dataFetchPromise из шага Б) и промисом таймаута.
//             Дождись результата этого финального Promise.race с помощью await.
//     Обработка ошибок: Оберни логику шага В (финальный await Promise.race(...)) в блок try...catch.
//     Вывод результата:
//         Если dataFetchPromise успел завершиться до таймаута, выведи в консоль детали альбома, треклист и рекомендации (указав, от какого движка они пришли).
//         Если сработал таймаут (или произошла другая ошибка), выведи сообщение об ошибке из блока catch.

function fetchAlbumDetails(albumId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: albumId, title: 'Синтаксический Сахар', artist: 'Нейросеть Нейронович', tracks: ['Асинхронная Баллада', 'Цикл Бесконечности', 'Баг в Матрице'] });
    }, 800);
  });
}
function fetchRecommendations(engineId, albumId) {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * (2000 - 500) + 500;
    setTimeout(() => {
      resolve({
        engine: engineId,
        similarAlbums: [`Похожий альбом от ${engineId} 1`, `Похожий альбом от ${engineId} 2`]});
    }, delay);
  });
}

function timeoutPromise(delay, message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(message))
    }, delay);
  });
}

async function loadAlbumPage(albumId, recommendationEngines, totalTimeout) {
  try {
    const fastestRecommendationsPromise = Promise.race(recommendationEngines.map((engine) => fetchRecommendations(engine, albumId)));
    const dataFetchPromise = Promise.all([fetchAlbumDetails(albumId), fastestRecommendationsPromise]);
  
    const ourTimeoutPromise = timeoutPromise(totalTimeout, `Страница альбома ${albumId} не загрузилась за ${totalTimeout} мс`);
    const result = await Promise.race([dataFetchPromise, ourTimeoutPromise]);
    const [albumDetails, recommendations] = result; 
    console.log(`Альбом: ${albumDetails.title}, Исполнитель: ${albumDetails.artist}`);
    console.log(`Треки: ${albumDetails.tracks}`);
    console.log(`Рекомендации от ${recommendations.engine}: ${recommendations.similarAlbums}`);
  } catch (error) {
    console.error('Причина:', error.message);
  }
}
