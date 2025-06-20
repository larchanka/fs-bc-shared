// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function fetchUserInfo() {
  return new Promise(resolve => {
    setTimeout(() => {
      // Обновленные данные пользователя
      resolve({ name: 'Алекс Алгоритмов', bio: 'Строю будущее, по одному циклу за раз.' });
    }, 1000); // 1 секунда задержки
  });
}

function fetchUserTweets() {
    return new Promise(resolve => {
        setTimeout(() => {
            // Обновленные примеры твитов
            resolve(['Коммичу в пятницу вечером. Что может пойти не так?', 'Баг или фича? 🤔 #программирование', 'Рефакторинг старого кода - это как археология.']);
        }, 1500); // 1.5 секунды задержки
    });
}

function fetchUserFollowers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(150);
        }, 500); // 0.5 секунды задержки
    });
}

async function loadUserProfile() {
  console.log('Начинаем загрузку профиля...');
  const userInfo = await fetchUserInfo();
  const tweets = await fetchUserTweets();
  const followers = await fetchUserFollowers();

  // Вывод обновленных данных
  console.log(`Имя: ${userInfo.name}`);
  console.log(`Био: ${userInfo.bio}`);
  // Используем join для красивого вывода твитов
  console.log(`Твиты: ${tweets.join(', ')}`);
  console.log(`Подписчики: ${followers}`);
  console.log('Профиль загружен!');
}

loadUserProfile(); // Не забудь вызвать функцию
