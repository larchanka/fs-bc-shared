async function checkItemStock(itemName) {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      Math.random() < 0.9
        ? resole({ item: itemName, status: "in_stock" })
        : reject(new Error(`Товар '${itemName}' закончился`));
    }, 600);
  });
}

async function processPayment(orderInfo) {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      resole({ paymentId: orderInfo, status: "paid" });
    }, 1000);
  });
}

async function createOrder(paymentInfo) {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      resole({ orderId: paymentInfo, status: "created" });
    }, 500);
  });
}

async function placeOrder(items) {
  try {
    console.log("Проверка наличия");
    const promises = items.map((item) => checkItemStock(item));
    const resultCheckIItem = await Promise.all(promises);

    console.log(
      "Товар готов к оплате:",
      resultCheckIItem.map((x) => x.item).toString()
    );

    console.log("Оплата товар");
    const payment = await processPayment(resultCheckIItem);
    console.log("Оплачен", payment);

    const order = await createOrder(payment);
    console.log("Ваш заказ", order);
  } catch (error) {
    console.log("Ошибка", error.message);
  }
}

placeOrder(["яблоко", "банан", "молоко", "огурцы"]);
