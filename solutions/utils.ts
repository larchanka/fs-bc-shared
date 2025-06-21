export const resolvedPromise = <T,>(data: T, delay: number): Promise<T> => new Promise((rs) => setTimeout(() => rs(data), delay))
export const rejectedPromise = (message: string, delay: number): Promise<T> => new Promise((_, rj) => setTimeout(() => rj(new Error(message)), delay))

export const schrodingerPromise = (data: unknown, delay: number, errorMessage, successRate = 0.9) => new Promise((rs, rj) => {
  return setTimeout(() => Math.random() <= successRate ? rs(data) : rj(new Error(errorMessage)), delay)
})

export const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

export const generateId = () => Math.random().toString(36).slice(2)