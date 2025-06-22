module.exports = function PromiseHooks(delay, message, errorMsg = "ERROR" , boolean = true) {
    return new Promise((resolve, reject) => {
        if (boolean) {
            setTimeout(() => resolve(message), delay);
        }else {
            setTimeout(() => reject(new Error(errorMsg)), delay);
        }
    })
}