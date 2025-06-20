export const resolvedPromise = (data: unknown, delay: number) => new Promise((rs, rj) => setTimeout(() => rs(data), delay))
