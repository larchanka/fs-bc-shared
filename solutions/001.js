function fetchUserInfo() {
    return new Promise((resolve) => {
        setTimeout(
            () => {
                resolve({
                    name: 'Алекс Алгоритмов',
                    bio: 'Строю будущее, по одному циклу за раз.'
                })
            }, 1000);
    });
}

function fetchUserTweets() {
    return new Promise((resolve) => {
        setTimeout(
            () => {
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
        setTimeout(
            () => {
                resolve(15000);
            }, 500);
    });
}

async function loadUserProfile() {
    try {
        const [userInfo, userTweets, userFollowers] = await Promise.all([
            fetchUserInfo(),
            fetchUserTweets(),
            fetchUserFollowers()
        ]);

        console.log(`Имя: ${userInfo.name}`);
        console.log(`Био: ${userInfo.bio}`);
        console.log(`Твиты: ${userTweets.join(', ')}`);
        console.log(`Подписчики: ${userFollowers}`);

    } catch (error) {
        console.error('Ошибка при загрузке профиля: ', error);
    }
}

loadUserProfile();