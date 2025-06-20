function fetchVideoDetails(videoId) {
  return new Promise ( (resolve, reject) => {
    setTimeout ( () => {
      const isSucceed = Math.random() < 0.9;
      if ( isSucceed ) {
        resolve({
          title: 'Глубокое погружение в асинхронный JavaScript',
          description: 'Разбираем event loop, промисы и async/await на пальцах.'
        });
      } else {
        reject( new Error('Не удалось загрузить детали видео') );
      }
    }, 1000);
  });
}


function fetchComments(videoId) {
  return new Promise ( (resolve, reject ) => {
    setTimeout ( () => {
      const isSucceed = Math.random() < 0.7;
      if ( isSucceed ) {
        resolve([
          'Отличное объяснение! Наконец-то понял event loop.',
          'А как насчет Web Workers?', 'Лайк за async/await!'
        ]);
      } else {
        reject(new Error('Не удалось загрузить комментарии'));
      }
    }, 1500);
  });
}


function fetchRelatedVideos(videoId) {
  return new Promise ( (resolve, reject) => {
    setTimeout ( () => {
      const isSucceed = Math.random() < 0.95;
      if ( isSucceed ) {
        resolve ([
          'Что такое замыкания в JS?',
          'Паттерны проектирования для начинающих'
        ]);
      } else {
        reject( new Error('Не удалось загрузить похожие видео') );
      }
    }, 800);
  });
}


async function loadVideoPage(videoId) {
  const [ videoDetailsPromise, commentsPromise, relatedVideosPromise ] = await Promise.allSettled([
    fetchVideoDetails(videoId),
    fetchComments(videoId),
    fetchRelatedVideos(videoId)
  ]);

  //console.log([ videoDetails, comments, relatedVideos ]);

  if ( videoDetailsPromise.status === 'fulfilled' ) {
    const videoDetails = videoDetailsPromise.value;
    console.log(videoDetails.title);
    console.log(videoDetails.description);
  } else {
    console.log(videoDetailsPromise.reason.message);
  }

  console.log('\nКомментарии:');
  if ( commentsPromise.status === 'fulfilled' ) {
    const comments = commentsPromise.value;
    comments.map( с => console.log(с) );
  } else {
    console.log(commentsPromise.reason.message);
  }

  console.log('\nРекомендованные видео:');
  if ( relatedVideosPromise.status === 'fulfilled' ) {
    const relatedVideos = relatedVideosPromise.value;
    relatedVideos.map( v => console.log(v) );
  } else {
    console.log(relatedVideosPromise.reason.message);
  }
}


console.log('Start loading...');
loadVideoPage(123);
console.log('End loading...');
