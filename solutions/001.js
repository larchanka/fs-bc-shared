const fetchUserInfo = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve({ 
            name: 'Алекс Алгоритмов',  
            bio: 'Строю будущее, по одному циклу за раз.'  
        });
    }, 1000);
});

const fetchUserTweets = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            'Коммичу в пятницу вечером. Что может пойти не так?', 
            'Баг или фича? 🤔 #программирование', 
            'Рефакторинг старого кода - это как археология.'
        ]);
    }, 1500);
});

const fetchUserFollowers = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(15000);
    }, 500);
});

async function loadUserProfile() {
    try {
       const userInfo =  await fetchUserInfo()
       const tweets =  await fetchUserTweets()
       const followers =  await fetchUserFollowers()

       console.log('Имя:', userInfo.name)
       console.log('Био:', userInfo.bio)
       console.log('Твиты:', tweets.join(','))
       console.log('Подписчики:', followers)
    } catch (error) {
        console.error('Ошибка загрузки:', error);
    }
}

loadUserProfile()
