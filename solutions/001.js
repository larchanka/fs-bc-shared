const fetchUserInfo = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Алекс Алгоритмов',
        bio: 'Строю будущее, по одному циклу за раз.',
      });
    }, 1000);
  });
};

const fetchUserTweets = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        'Коммичу в пятницу вечером. Что может пойти не так?',
        'Баг или фича? 🤔 #программирование',
        'Рефакторинг старого кода - это как археология.',
      ]);
    }, 1500);
  });
};

const fetchUserFollowers = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(15000), 500);
  });
};

async function loadUserProfile() {
  const userInfo = await fetchUserInfo();
  console.log(`Имя: ${userInfo.name}`);
  console.log(`Био: ${userInfo.bio}`);

  const userTweets = await fetchUserTweets();
  console.log(`Твиты: ${userTweets.map((element) => element)}`);

  const userFollowers = await fetchUserFollowers();
  console.log(`Подписчики: ${userFollowers}`);
}

loadUserProfile();
