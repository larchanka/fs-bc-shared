async function fetchUserInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userInfo = {
        name: 'Алекс Алгоритмов',
        bio: 'Строю будущее, по одному циклу за раз.',
      };
      resolve(userInfo);
    }, 1000);
  });
}

async function fetchUserTweets() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const tweets = [
            'Коммичу в пятницу вечером. Что может пойти не так?',
            'Баг или фича? 🤔 #программирование',
            'Рефакторинг старого кода - это как археология.'
        ];
        resolve(tweets);
        }, 1500);
    });
}

fetchUserFollowers = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const followers = 1500;
            resolve(followers);
        }, 500);
    });
}

async function loadUserProfile() {
    const userInfo = await fetchUserInfo();
    const userTweets = await fetchUserTweets();
    const userFollowers = await fetchUserFollowers();
    console.log(`Имя: ${userInfo.name}`);
    console.log(`Твиты: ${userTweets.join(',')}`); // userTweets[0], userTweets[1], userTweets[2]
    console.log(`Подписчики: ${userFollowers}`);
}

loadUserProfile();

