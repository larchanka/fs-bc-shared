function fetchUserInfo() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: 'Уктамбек Рустамбекович', bio: 'Строю нармална. Патключ нидорага' });
    }, 1000);
  });
}

function fetchUserTweets() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(['Да я здес', 'Нармална идот работа', 'Да эта абичний', 'Вот так будит']);
        }, 1500);
    });
}

function fetchUserFollowers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(3);
        }, 500);
    });
}

async function loadUserProfile() {
  console.log('Начинаем загрузку профиля...');
  const userInfo = await fetchUserInfo();
  const tweets = await fetchUserTweets();
  const followers = await fetchUserFollowers();

  console.log(`Имя: ${userInfo.name}`);
  console.log(`Био: ${userInfo.bio}`);
  console.log(`Твиты: ${tweets.join(', ')}`);
  console.log(`Подписчики: ${followers}`);
  console.log('Профиль загружен!');
}

loadUserProfile();


// Да, это практически копипаста того что было написано в самой задаче. Просто добавил немного юмора
