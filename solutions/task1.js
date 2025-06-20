function fetchUserInfo() {
    return new Promise((resolve) => {
        setTimeout(
            () => resolve({ name: 'Борщ Великолепный', bio: 'Делает мир вкуснее' }),
            1 * 1000
        )
    });
}

function fetchUserTweets() {
    return new Promise((resolve) => {
        setTimeout(
            () => resolve(['С мясом или без?', 'Борщ со сметанкой согревает сердца']),
            1.5 * 1000
        )
    });
}

function fetchUserFollowers() {
    return new Promise((resolve) => {
        setTimeout(
            () => resolve(1000000),
            0.5 * 1000
        )
    })
}

async function loadUserProfile() {
    const userInfo = await fetchUserInfo();
    const userTweets = await fetchUserTweets();
    const userFollowers = await fetchUserFollowers();

    const resolveString = `Имя: ${userInfo.name}\n` + 
        `Био: ${userInfo.bio}\n` + 
        `Твиты: ${userTweets.join(', ')}\n` + 
        `Подписчики: ${userFollowers}`;

    console.log(resolveString);
}

await loadUserProfile();