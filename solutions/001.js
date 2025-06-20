function fetchUserInfo() {
  return new Promise((resolve, reject) =>
    setTimeout(
      resolve({
        name: "Алекс Алгоритмов",
        bio: "Строю будущее, по одному циклу за раз.",
      }),
      1 * 1000
    )
  );
}

function fetchUserTweets() {
  return new Promise((resolve, reject) =>
    setTimeout(
      resolve([
        "Коммичу в пятницу вечером. Что может пойти не так?",
        "Баг или фича? 🤔 #программирование",
        "Рефакторинг старого кода - это как археология.",
      ]),
      1.5 * 1000
    )
  );
}

function fetchUserFollowers() {
  return new Promise((resolve, reject) =>
    setTimeout(resolve(15000), 0.5 * 1000)
  );
}

async function loadUserProfile() {
  const userInfo = await fetchUserInfo();
  const userTweets = await fetchUserTweets();
  const userFollowers = await fetchUserFollowers();
  console.log(`Имя: ${userInfo.name}
Био: ${userInfo.bio}
Твиты: ${userTweets.join(" ")}
Подписчики: ${userFollowers}`);
}

loadUserProfile();
