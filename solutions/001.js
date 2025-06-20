function fetchUserInfo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'Алекс Алгоритмов',
                bio: 'Строю будущее, по одному циклу за раз.'
            });
        }, 1000);
    });
}

function fetchUserTweets() {
    return new Promise((resolve) => {
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
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(15000);
        }, 500);
    });
}

async function loadUserProfile() {
    try {
        const userInfo = await fetchUserInfo();
        const userTweets = await fetchUserTweets();
        const userFollowers = await fetchUserFollowers();

        console.log(`Имя: ${userInfo.name}`);
        console.log(`Биография: ${userInfo.bio}`);
        console.log(`Количество подписчиков: ${userFollowers}`);
        console.log('Последние твиты:');
        userTweets.forEach((tweet, index) => {
            console.log(`${index + 1}. ${tweet}`);
        });
    } catch (error) {
        console.error('Ошибка при загрузке данных пользователя:', error);
    }
}

// Запуск функции для загрузки профиля пользователя
loadUserProfile();
