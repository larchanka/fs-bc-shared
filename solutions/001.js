function fetchUserInfo() {
    return new Promise(resolve => {
        setTimeout(() => {        
        resolve({ name: 'Алекс Алгоритмов', bio: 'Строю будущее, по одному циклу за раз.' });
        }, 1000);
    });
}

function fetchUserTweets() {
    return new Promise(resolve => {
        setTimeout(() => {            
            resolve(['Коммичу в пятницу вечером. Что может пойти не так?', 'Баг или фича? 🤔 #программирование', 'Рефакторинг старого кода - это как археология.']);
        }, 1500);
    });
}

function fetchUserFollowers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(150);
        }, 500);
    });
}

async function loadUserProfile() {
    console.log('Начинаем загрузку профиля...');
    const userInfo = await fetchUserInfo();
    const tweets = await fetchUserTweets();
    const followers = await fetchUserFollowers();
  
    console.log(`Имя: ${userInfo.name}`);
    console.log(`Био: ${userInfo.bio}`);  
    console.log(`Твиты: ${tweets.join(', ')}`);
    console.log(`Подписчики: ${followers}`);
    console.log('Профиль загружен!');
}

await loadUserProfile();
