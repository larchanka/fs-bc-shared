async function loadUserProfile() {
    const [info, tweets, followers] = await Promise.all([
        fetchUserInfo(),
        fetchUserTweets(),
        fetchUserFollowers(),
    ]);

    console.log(`Имя: ${info.name}`);
    console.log(`Био: ${info.bio}`);
    console.log(`Твиты: ${tweets.join(' ')}`);
    console.log(`Подписчики: ${followers}`);
}

const request = (data, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), delay)
    })
}

const fetchUserInfo = () => {
    return request({ name: 'Алекс Алгоритмов', bio: 'Строю будущее, по одному циклу за раз.' }, 1000)
}

const fetchUserTweets = () => {
    return request(['Коммичу в пятницу вечером. Что может пойти не так?',
        'Баг или фича? 🤔 #программирование',
        'Рефакторинг старого кода - это как археология.'], 1500)
}

const fetchUserFollowers = () => {
    return request(15000, 500)
}

loadUserProfile()
