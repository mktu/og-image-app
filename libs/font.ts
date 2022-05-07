const createRequestUrl = (fontFamily: string) =>
  `@import url('https://fonts.googleapis.com/css2?family=${fontFamily.replace(/\s/g, '+')}&display=swap');`

export {
  createRequestUrl
} 