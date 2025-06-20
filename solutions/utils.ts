export const resolvedPromise = (data: unknown, delay: number) => new Promise((rs, rj) => setTimeout(() => rs(data), delay))

export const schrodingerPromise = (data: unknown, delay: number, errorMessage, successRate = 0.9) => new Promise((rs, rj) => {
  return setTimeout(() => Math.random() <= successRate ? rs(data) : rj(new Error(errorMessage)), delay)
})