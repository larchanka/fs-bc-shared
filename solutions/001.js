// 1.
function fetchUserInfo() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'Алекс Алгоритмов',
        bio: 'Строю будущее, по одному циклу за раз.'
      });
    }, 1000);
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
    }, 1500);
  });
}

function fetchUserFollowers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(15000);
    }, 500);
  });
}

// 2. 
async function loadUserProfile() {
  try {
    const [info, tweets, followers] = await Promise.all([
      fetchUserInfo(),
      fetchUserTweets(),
      fetchUserFollowers()
    ]);

    console.log(`Имя: ${info.name}`);
    console.log(`Био: ${info.bio}`);
    console.log(`Твиты: ${tweets.join(', ')}`);
    console.log(`Подписчики: ${followers}`);
  } catch (error) {
    console.error('Ошибка при загрузке профиля:', error);
  }
}

// 3.
loadUserProfile();


