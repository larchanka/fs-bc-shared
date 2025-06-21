'use strict';

const getRandomNumber = () => Math.random();

const fetchVideoDetails = async (videoId) => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getRandomNumber() < 0.9) {
        resolve({
          title: 'Глубокое погружение в асинхронный JavaScript',
          description:
            'Разбираем event loop, промисы и async/await на пальцах.',
        });
      } else {
        reject(new Error('Не удалось загрузить детали видео'));
      }
    }, 1000);
  });
};

const fetchComments = async (videoId) => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getRandomNumber() < 0.7) {
        resolve([
          'Отличное объяснение! Наконец-то понял event loop.',
          'А как насчет Web Workers?',
          'Лайк за async/await!',
        ]);
      } else {
        reject(new Error('Не удалось загрузить комментарии'));
      }
    }, 1500);
  });
};

const fetchRelatedVideos = async (videoId) => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getRandomNumber() < 0.95) {
        resolve([
          'Что такое замыкания в JS?',
          'Паттерны проектирования для начинающих',
        ]);
      } else {
        reject(new Error('Не удалось загрузить похожие видео'));
      }
    }, 800);
  });
};

const array = [fetchVideoDetails(), fetchComments(), fetchRelatedVideos()];

async function loadVideoPage(videoId) {
  try {
    await Promise.all(array)
      .then((values) => {
        const [videoDetails, comments, relatedVideos] = values;
        console.log(`Страница:
    Название и описание видео: ${videoDetails.title}, ${
          videoDetails.description
        }
    Комментарии: ${comments.map((comment) => comment)}
    Похожие видео: ${relatedVideos.map((rel) => rel)}
            `);
      })
      .catch();
  } catch (error) {
    console.error(
      `Часть данных загрузить не удалось по причине: ${error.message}`
    );
  }
}

loadVideoPage();
loadVideoPage();
loadVideoPage();
loadVideoPage();
