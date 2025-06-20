//на эту задачу уже не оставалось особо времени, потому в основном нагенерил её
//задачи интересные, потому постараюсь на выходных самостоятельно разобраться и сделать
//не совсем понял на счёт сроков, потому на всякий случай кидаю хотя бы такой вариант

// 1. Имитация загрузки деталей альбома
async function fetchAlbumDetails(albumId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: albumId,
          title: 'Синтаксический Сахар',
          artist: 'Нейросеть Нейронович',
          tracks: ['Асинхронная Баллада', 'Цикл Бесконечности', 'Баг в Матрице']
        });
      }, 800); // 0.8 секунды
    });
  }
  
  // 2. Имитация запроса рекомендаций
  async function fetchRecommendations(engineId, albumId) {
    return new Promise((resolve) => {
      // Случайная задержка от 0.5 до 2 секунд
      const delay = Math.random() * 1500 + 500;
      
      setTimeout(() => {
        resolve({
          engine: engineId,
          similarAlbums: [
            `Похожий альбом от ${engineId} 1`,
            `Похожий альбом от ${engineId} 2`,
            `Похожий альбом от ${engineId} 3`
          ]
        });
      }, delay);
    });
  }
  
  // 3. Функция таймаута
  function timeoutPromise(delay, message) {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error(message));
      }, delay);
    });
  }
  
  // 4. Основная логика загрузки страницы альбома
  async function loadAlbumPage(albumId, recommendationEngines, totalTimeout) {
    console.log(`🎵 Начинаем загрузку страницы альбома ${albumId}...`);
    console.log(`⏱️  Общий таймаут: ${totalTimeout} мс`);
    console.log(`🔧 Движки рекомендаций: ${recommendationEngines.join(', ')}`);
    
    try {
      // Шаг А: Получение самых быстрых рекомендаций
      const fastestRecommendationsPromise = Promise.race(
        recommendationEngines.map(engineId => fetchRecommendations(engineId, albumId))
      );
      
      // Шаг Б: Параллельная загрузка основных данных
      const dataFetchPromise = Promise.all([
        fetchAlbumDetails(albumId),
        fastestRecommendationsPromise
      ]);
      
      // Шаг В: Реализация общего таймаута
      const overallTimeoutPromise = timeoutPromise(
        totalTimeout, 
        `Страница альбома ${albumId} не загрузилась за ${totalTimeout} мс`
      );
      
      // Финальное соревнование: данные ИЛИ таймаут
      const result = await Promise.race([
        dataFetchPromise,
        overallTimeoutPromise
      ]);
      
      // Если мы здесь, dataFetchPromise успел завершиться
      const [albumDetails, recommendations] = result;
      
      console.log('\n✅ --- Страница альбома загружена ---');
      console.log(`🎼 Альбом: "${albumDetails.title}"`);
      console.log(`🎤 Исполнитель: ${albumDetails.artist}`);
      console.log(`📝 Треки:`);
      albumDetails.tracks.forEach((track, index) => {
        console.log(`   ${index + 1}. ${track}`);
      });
      console.log(`💡 Рекомендации (от ${recommendations.engine}):`);
      recommendations.similarAlbums.forEach((album, index) => {
        console.log(`   ${index + 1}. ${album}`);
      });
      
    } catch (error) {
      console.log('\n❌ --- Ошибка загрузки страницы альбома ---');
      console.error(`🚫 Причина: ${error.message}`);
    }
  }
  
  // Функция для демонстрации работы
  async function runDemo() {
    console.log('='.repeat(60));
    console.log('🎵 ДЕМОНСТРАЦИЯ МУЗЫКАЛЬНОГО СЕРВИСА');
    console.log('='.repeat(60));
    
    // Тест 1: Успешная загрузка с достаточным таймаутом
    console.log('\n📋 ТЕСТ 1: Успешная загрузка (таймаут 3000 мс)');
    console.log('-'.repeat(50));
    await loadAlbumPage(
      'album-123',
      ['engine-A', 'engine-B', 'engine-C'],
      3000
    );
    
    // Небольшая пауза между тестами
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Тест 2: Таймаут (слишком короткое время ожидания)
    console.log('\n📋 ТЕСТ 2: Таймаут (таймаут 500 мс)');
    console.log('-'.repeat(50));
    await loadAlbumPage(
      'album-456',
      ['engine-X', 'engine-Y'],
      500
    );
    
    // Небольшая пауза между тестами
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Тест 3: Пограничный случай
    console.log('\n📋 ТЕСТ 3: Пограничный случай (таймаут 1500 мс)');
    console.log('-'.repeat(50));
    await loadAlbumPage(
      'album-789',
      ['engine-Fast', 'engine-Slow', 'engine-Medium'],
      1500
    );
  }
  
  // Запуск демонстрации
  runDemo().then(() => {
    console.log('\n🏁 Демонстрация завершена!');
  });
 