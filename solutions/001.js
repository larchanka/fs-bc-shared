async function fetchUserInfo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const response = { name: 'Алекс Алгоритмов', bio: 'Строю будущее, по одному циклу за раз.' };
            resolve(response);
        }, 1000);
    });
}

async function fetchUserTweets() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const response = ['Коммичу в пятницу вечером. Что может пойти не так?', 'Баг или фича? 🤔 #программирование', 'Рефакторинг старого кода - это как археология.'];
            resolve(response);
        }, 1500);
    });
}

async function fetchUserFollowers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const response = 15000;
            resolve(response);
        }, 500);
    });
}


async function loadUserProfile() {
    try {
        const userInfo = await fetchUserInfo();
        console.log(`Имя: ${userInfo.name}`);
      console.log(`Био: ${userInfo.bio}`);
        const userTweets = await fetchUserTweets();
        console.log(`Твиты: ${userTweets}`);
        const userFollowers = await fetchUserFollowers();
        console.log(`Подписчики: ${userFollowers}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
loadUserProfile();
