function postTweet(tweetText){
    return new Promise((resolve, reject) => {
  setTimeout(()=> {if(Math.random()<0.7) resolve(`Твит '${tweetText}' успешно опубликован!`);
      else reject(new Error("Ошибка сети при публикации"));
  },1000)})
}

async function publish(){
    try{
        const res = await postTweet("Мой первый твит с async/await!");
        console.log(res)
    }
    catch(error)
    {
        console.log(error.message)
    }
    finally
    {
        console.log("Операция публикации завершена (успех или ошибка)")
        
    }
}
publish()
