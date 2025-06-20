function fetchUserInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Алекс Алгоритмов',
        bio: 'Строю будущее, по одному циклу за раз.',
      });
    }, 1*1000);
  });
}

function fetchUserTweets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        'Коммичу в пятницу вечером. Что может пойти не так?',
        'Баг или фича? 🤔 #программирование',
        'Рефакторинг старого кода - это как археология.',
      ]);
    }, 1,5*1000);
  });
}

function fetchUserFollowers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(15000);
    }, 500); 
  });
}

async function loadUserProfile() {
  try {
    const userInfo = await fetchUserInfo();
    const userTweets = await fetchUserTweets();
    const userFollowers = await fetchUserFollowers();

    console.log(`Твиты:`);
    userTweets.forEach((tweet, index) => {
      console.log(`${index + 1}: ${tweet}`);
    });
    console.log(`Имя: ${userInfo.name}`);
    console.log(`Биография: ${userInfo.bio}`);
    console.log(`Количество подписчиков: ${userFollowers}`);
    
  } catch (error) {
    console.error("Произошла ошибка при загрузке профиля:", error);
  }
}

loadUserProfile(); 
/*Твиты:
main.js:40 1: Коммичу в пятницу вечером. Что может пойти не так?
main.js:40 2: Баг или фича? 🤔 #программирование
main.js:40 3: Рефакторинг старого кода - это как археология.
main.js:42 Имя: Алекс Алгоритмов
main.js:43 Биография: Строю будущее, по одному циклу за раз.
main.js:44 Количество подписчиков: 15000*/
