//Иммитируем сбой сети
function isRequestSuccessful() {
  return Math.random() > 0.2; // 80% успех, 20% сбой
}

// Функция получения информации о пользователе
function fetchUserInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        //console.log(isRequestSuccessful())
      if (isRequestSuccessful()) {
        resolve({
        name: 'Алекс Алгоритмов',
        bio: 'Строю будущее, по одному циклу за раз.'
      });
      } else {
        reject(new Error("Не удалось загрузить информацию о пользователе"))
      }
    }, 1000); // 1 секунда задержки
  });
}

// Функция получения твитов пользователя
function fetchUserTweets() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isRequestSuccessful()) {
          resolve([
              'Коммичу в пятницу вечером. Что может пойти не так?',
              'Баг или фича? 🤔 #программирование',
              'Рефакторинг старого кода - это как археология.'
          ]);
      } else {
        reject(new Error("Не удалось загрузить твиты"))
      }
    }, 1500); // 1.5 секунды задержки
  });
}

// Функция получения количества подписчиков
function fetchUserFollowers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isRequestSuccessful()) {
          resolve(15000);
      }else{
      reject(new Error("Ошибка загрузки подписчиков"))
      }
    }, 500); // 0.5 секунды задержки
  });
}

// Основная функция загрузки профиля
async function loadUserProfile() {
    // Запускаем все три запроса параллельно
    try {
        const [userInfo, tweets, followers] = await Promise.all([
            fetchUserInfo(),
            fetchUserTweets(),
            fetchUserFollowers()
        ]);
        // Выводим результат в консоль в структурированном виде
        console.log(`Имя: ${userInfo.name}`);
        console.log(`Био: ${userInfo.bio}`);
        console.log(`Твиты: ${tweets.join(',')}`);
        console.log(`Подписчики: ${followers}`);


    } catch (error) {
        console.error("Ошибка при загрузке:", error.message)
    }

}


// Запускаем загрузку профиля
loadUserProfile();
