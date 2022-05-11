const createRequestUrl = (fontFamily: string, text: string) =>
  `@import url('https://fonts.googleapis.com/css2?family=${fontFamily.replace(/\s/g, '+')}&text=${text}');`

export {
  createRequestUrl
} 