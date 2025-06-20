const userInfo = { name: 'Алекс Алгоритмов', bio: 'Строю будущее, по одному циклу за раз.' }
const userTweets = ['Коммичу в пятницу вечером. Что может пойти не так?', 'Баг или фича? 🤔 #программирование', 'Рефакторинг старого кода - это как археология.']
const userFollowers = 15000

const resolvedPromise = (data: unknown, delay: number) => new Promise((rs, rj) => setTimeout(() => rs(data), delay))

const fetchUserInfo = resolvedPromise.bind(null, userInfo, 1000)
const fetchUserTweets = resolvedPromise.bind(null, userTweets, 1500)
const fetchUserFollowers = resolvedPromise.bind(null, userFollowers, 500)

const loadUserProfile = async () => {
  try {
    const userInfoPromise = fetchUserInfo()
    const userTweetsPromise = fetchUserTweets()
    const userFollowersPromise = fetchUserFollowers()

    const userInfo = await userInfoPromise
    const userTweets = await userTweetsPromise
    const userFollowers = await userFollowersPromise

    console.log(`Имя: ${userInfo.name}`)
    console.log(`Био: ${userInfo.bio}`)
    console.log(`Твиты: ${userTweets.join(',')}`)
    console.log(`Подписчики: ${userFollowers}`)

    // return { userInfo, userTweets, userFollowers }
  }
  catch (error) {
    console.error(error)
  }
}
