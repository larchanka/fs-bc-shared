//1. Имитация проверки наличия товара
const checkItemStock = async (itemName) => {
    itemName = String(itemName) //преобразуем в строку
    return new Promise((resolve, reject) => {
        const randomTime = Math.random() * 500 + 100; // случайное время от 100 до 600 мс
        setTimeout(() => {
            if (Math.random() < 0.9) {
                resolve({ item: itemName, status: 'in_stock' })
            } else {
                reject(new Error(`Товар '${itemName}' закончился`))
            }
        }, randomTime)
    })
}

//2. Имитация других шагов
const processPayment = (orderInfo) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                paymentId: `pay_${Math.random().toString(36).substring(2, 10)}`,
                status: 'paid',
                items: orderInfo.items,
                total: orderInfo.total
            });
        }, 1000)
    });
};

const createOrder = (paymentInfo) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                orderId: `ord_${Math.random().toString(36).substring(2, 10)}`,
                status: 'created',
                paymentId: paymentInfo.paymentId,
                items: paymentInfo.items
            })
        }, 500)
    })
}

//3. Основная функция оформления заказа
async function placeOrder(items) {
    console.log(`Попытка оформить заказ для: ${items.join(', ')}`)
    try {
        console.log('1. Параллельная проверка наличия товаров...')
        const stockCheckPromises = items.map(item => checkItemStock(item))
        const stockResults = await Promise.all(stockCheckPromises)
        console.log('   Все товары в наличии:', stockResults.map(r => r.item))

        console.log('2. Обработка платежа...')
        const paymentInfo = await processPayment({
            items: items,
            total: items.length * 100 // просто пример расчета суммы
        });
        console.log(`   Платеж успешен: ID ${paymentInfo.paymentId}`)

        console.log('3. Создание заказа...')
        const orderInfo = await createOrder(paymentInfo)
        console.log(`   Заказ создан: ID ${orderInfo.orderId}`)

        console.log('--- Заказ успешно оформлен! ---')
        return orderInfo
    } catch (error) {
        console.error('--- Ошибка оформления заказа ---')
        console.error('Причина:', error.message)
        throw error // пробрасываем ошибку дальше
    }
}

//4. Тестирование функции
(async () => {
    // Тест 1: Успешный заказ
    console.log('\n=== Тест 1: Все товары в наличии ===')
    await placeOrder(['книга', 'клавиатура', 'лампа']).catch(() => {})

    // Тест 2: Один товар отсутствует
    console.log('\n=== Тест 2: Один товар отсутствует ===')
    await placeOrder(['книга', 'мышь', 'монитор']).catch(() => {})

    // Тест 3: Большой заказ
    console.log('\n=== Тест 3: Большой заказ ===')
    await placeOrder([
        'книга', 'тетрадь', 'ручка', 
        'карандаш', 'ластик', 'линейка'
    ]).catch(() => {})
})() //5. Самовызываемая функция для запуска тестов