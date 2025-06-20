function fetchUserInfo() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'Алекс Алгоритмов',
        bio: 'Строю будущее, по одному циклу за раз.'
      });
    }, 1000); // Задержка 1 секунда
  });
}

function fetchUserTweets() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        'Коммичу в пятницу вечером. Что может пойти не так?',
        'Баг или фича? 🤔 #программирование',
        'Рефакторинг старого кода - это как археология.'
      ]);
    }, 1500); // Задержка 1.5 секунды
  });
}

function fetchUserFollowers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(15000);
    }, 500); // Задержка 0.5 секунды
  });
}

async function loadUserProfile() {
  console.log('Начинаем загрузку профиля...');

  // Параллельная загрузка всех данных
  const [userInfo, tweets, followers] = await Promise.all([
    fetchUserInfo(),
    fetchUserTweets(),
    fetchUserFollowers()
  ]);

  // Вывод результата
  console.log(`Имя: ${userInfo.name}`);
  console.log(`Био: ${userInfo.bio}`);
  console.log(`Твиты: ${tweets.join(', ')}`);
  console.log(`Подписчики: ${followers}`);
  console.log('Профиль загружен!');
}

loadUserProfile();
