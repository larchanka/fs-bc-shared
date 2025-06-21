console.log("🔵 Начало загрузки данных чата");

function fetchMessages() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("💬 Сообщения загружаются...");
            resolve("📩 Сообщения загружены");
        }, 1000);
    });
}

function fetchStatuses() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("🟢 Статусы загружаются...");
            resolve("🟢 Статусы загружены");
        }, 500);
    });
}

function fetchStickers() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("🖼️ Стикеры загружаются...");
            resolve("🎨 Стикеры загружены");
        }, 1500);
    });
}

console.log("🚀 Запрос на загрузку отправлен");

Promise.all([
    fetchMessages(),
    fetchStatuses(),
    fetchStickers()
]).then(results => {
    console.log("📦 Результаты загрузки:", results);
    console.log("✅ Чат готов к отображению!");
});
