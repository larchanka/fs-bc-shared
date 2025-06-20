// Что нужно сделать:

//     Создай три асинхронные функции, имитирующие запросы к серверу с помощью setTimeout и Promise:
//         fetchUserInfo(): Возвращает Promise, который через 1 секунду разрешается (resolve) объектом { name: 'Алекс Алгоритмов', bio: 'Строю будущее, по одному циклу за раз.' }.
//         fetchUserTweets(): Возвращает Promise, который через 1.5 секунды разрешается (resolve) массивом строк (твитов), например ['Коммичу в пятницу вечером. Что может пойти не так?', 'Баг или фича? 🤔 #программирование', 'Рефакторинг старого кода - это как археология.'].
//         fetchUserFollowers(): Возвращает Promise, который через 0.5 секунды разрешается (resolve) числом подписчиков, например 15000.
//     Напиши функцию loadUserProfile(), которая вызывает эти три функции.
//     Используя async/await, дождись выполнения всех трех запросов.
//     Выведи в консоль полученные данные в структурированном виде, например:

// Имя: Алекс Алгоритмов
// Био: Строю будущее, по одному циклу за раз.
// Твиты: Коммичу в пятницу вечером. Что может пойти не так?,Баг или фича? 🤔 #программирование,Рефакторинг старого кода - это как археология.
// Подписчики: 15000

function fetchUserInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: 'Алекс Алгоритмов', bio: 'Строю будущее, по одному циклу за раз.' });
    }, 1000);
  }
}

function fetchUserTweets() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['Коммичу в пятницу вечером. Что может пойти не так?', 'Баг или фича? 🤔 #программирование', 'Рефакторинг старого кода - это как археология.']);
    }, 1500);
  }
}

function fetchUserFollowers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1500);
    }, 500);
  }
}

async function loadUserProfile() {
  const userData = await fetchUserInfo();
  const userTweets = await fetchUserTweets();
  const followersNumber = await fetchUserFollowers();
  console.log(`Имя: ${userData.name}`);
  console.log(`Био: ${userData.bio}`);
  console.log(`Твиты: ${userTweets.join(" ,")}`);
  console.log(`Подписчики: ${followersNumber}`);
}
