//можно не проверять
function fetchUserInfo() {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          name: "Алекс Алгоритмов",
          bio: "Строю будущее, по одному циклу за раз.",
        }),
      1000
    );
  });
}

function fetchUserTweets() {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          "Коммичу в пятницу вечером. Что может пойти не так?",
          "Баг или фича? 🤔 #программирование",
          "Рефакторинг старого кода - это как археология.",
        ]),
      1500
    );
  });
}

function fetchUserFollowers() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1500), 500);
  });
}

async function loadUserProfile() {
  const userInfo = await fetchUserInfo();
  const userTweets = await fetchUserTweets();
  const userFollowers = await fetchUserFollowers();

  console.log(
    ` Имя: ${userInfo.name}\n Био: ${userInfo.bio}\n Твиты: ${userTweets}\n Подписчики: ${userFollowers}`
  );
}

loadUserProfile();
