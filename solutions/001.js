
const fetchUserInfo = new Promise((resolve, reject)=>{
setTimeout(()=> resolve({ name: 'Алекс Алгоритмов', bio: 'Строю будущее, по одному циклу за раз.' }), 1 * 1000) //1000ms
});
const fetchUserTweets = new Promise((resolve, reject)=>{
setTimeout(()=> resolve(['Коммичу в пятницу вечером. Что может пойти не так?', 'Баг или фича? 🤔 #программирование', 'Рефакторинг старого кода - это как археология.']), 1.5 * 1000) //1000ms
});
const fetchUserFollowers = new Promise((resolve, reject)=>{
setTimeout(()=> resolve(15000), 0.5 * 1000) //1000ms
});

async function loadUserProfile(){
    try {
        console.log('Начинаем загрузку профиля...');
        const userInfo = await fetchUserInfo;
        const userTweets = await fetchUserTweets;
        const userFollowers = await fetchUserFollowers;
        if (userInfo) {
            console.log(`
Имя: ${userInfo.name}
Био: ${userInfo.bio}
Твиты: ${userTweets}
Подписчики: ${userFollowers}
                `);
        }   
        console.log('Профиль загружен!');
    } catch (error) {
        console.log( "Error: " + error);
    }
}
 loadUserProfile()
