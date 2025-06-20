const fetchFuncTwitter = () => {
    async function fetchUserInfo() {
        const Info = {
            name: 'Алекс Алгоритмов',
            bio: 'Строю будущее, по одному циклу за раз.'
        };
        return new Promise(resolve => setTimeout(() => resolve(Info), 1000));
    }

    async function fetchUserTweets() {
        const Tweets = ['Коммичу в пятницу вечером. Что может пойти не так?', 'Баг или фича? 🤔 #программирование', 'Рефакторинг старого кода - это как археология.'];
        return new Promise(resolve => setTimeout(() => resolve(Tweets), 1500));
    }

    async function fetchUserFollowers() {
        const Followers = 15000;
        return new Promise(resolve => setTimeout(() => resolve(Followers), 500));
    }

    return {fetchUserInfo, fetchUserTweets, fetchUserFollowers};
}

const loadUserProfile = () => {
    Promise.all([fetchFuncTwitter().fetchUserInfo(), fetchFuncTwitter().fetchUserTweets(), fetchFuncTwitter().fetchUserFollowers()]).then(values => {
        console.log(validationValuesWidget(values));
    });
}

const validationValuesWidget = (values) => {
    return`
        Имя: ${values[0].name}
        Био: ${values[0].bio}
        Твиты: ${values[1]}
        Подписчики: ${values[2]}    
    `
}

loadUserProfile();
// я бы еще написал везде export чтоб переиспользовать, но это нужно package.json создавать с типом модуль так что на словах только
// Также добавил пропы в fetchFunc туда ссылки можно передавать для запросов