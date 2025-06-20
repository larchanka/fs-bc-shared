function fetchUserInfo () {
  return new Promise( resolve => {
    setTimeout ( () => {
      console.log('Возвращает Promise, через 1 секунду');
      resolve({ name: 'Алекс Алгоритмов', bio: 'Строю будущее, по одному циклу за раз.' });
    }, 1000);
  });
}


function fetchUserTweet () {
  return new Promise( resolve => {
    setTimeout ( () => {
      console.log('Возвращает Promise, через 1.5 секунды');
      resolve([
        'Коммичу в пятницу вечером. Что может пойти не так?',
        'Баг или фича? 🤔 #программирование',
        'Рефакторинг старого кода - это как археология.']);
    }, 1500);
  });
}


function fetchUserFollowers () {
  return new Promise ( resolve => {
    setTimeout ( () => {
      console.log('Возвращает Promise, через 0.5 секунды');
      resolve(15000);
    }, 500);
  });
}

async function loadUserProfile () {
  try {
    const [ userInfo, tweets, followers ] = await Promise.all([
      fetchUserInfo(),
      fetchUserTweet(),
      fetchUserFollowers()
    ]);

    console.log(`Имя: ${userInfo.name}`); console.log(`Био: ${userInfo.bio}`);
    console.log(`Твиты: ${tweets.join(', ')}`);
    console.log(`Подписчики: ${followers}`);
  }
  catch (error) {
        console.log("Ошибка при загрузке виджета: ", error);
      }
}

console.log('Start loading...');
loadUserProfile();
console.log('End loading...');
