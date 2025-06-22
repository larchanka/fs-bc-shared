const readline = require('readline') //захотел промпт

const log = console.log // я единственный у себя в компании, кто пишет на js, поэтому не у кого даже спросить
//А это вообще норм log в переменную выносить?
//с error тоже так делаю. Правда в production уже отдельной библиотекой logger использую, которая пишет в файл
const sec = 1000
//кстати, какую библиотеку для работы с telegram рекомендуете?
//Я вот на Grammy остановился, когда бота для компании писал, 
// но есть ощущения, что библиотеки на Python подходят больше

//0 Эмитация promt в node.js (Функция для интерактивного ввода)
const prompt = (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close()
            resolve(answer)
        })
    })
}

//1 Три функции, возрващающие Promise
const fetchMessages = (newMesseges) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Сообщения загружены: ${newMesseges}`)
            reject('Упс, сообщения не загрузились')
        }, sec)
    })
}

const fetchStatuses = (newStatuses) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Статусы загружены: ${newStatuses}`)
            reject('Упс, со статусом что-то не так')
        }, 0.5 * sec)
    })
}

const fetchStickers = (newStickers) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Стикеры загружены: ${newStickers}`)
            reject('😵‍💫')
        }, 1.5 * sec)
    })
}
//2 Promise.all
const loadChat = async (message, status, sticker) => {
    //делаем совсем по красоте
    try {
        //4.1 "Начало загрузки данных чата",
    log('Начало загрузки данных чата')
    const promises = [fetchMessages(message), fetchStatuses(status), fetchStickers(sticker)]
    const results = await Promise.all(promises)
    //4.2 "Запрос на загрузку отправлен"
    log('Запрос на загрузку отправлен')
    //3 Вывести в консоль массив результатов, полученных с помощью Promise.all
    log(results) 
    }
    catch (error) {
        log('Произошла ошибка:', error)
    } 
}

//Extra главная функция для запуска
const main = async () => {
    try {
        const message = await prompt('Введите сообщение: ')
        const status = await prompt('Введите ваш статус: ')
        const sticker = await prompt('Введите стикер: ')
        
        await loadChat(message, status, sticker)
    } catch (error) {
        log('Произошла ошибка:', error)
    }
}
// Запуск программы
main()