export const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  console.log(data)
  return JSON.parse(data)
}

export const setItem = (key, value) => {
  const data = typeof value === 'object' ? JSON.stringify(value) : value
  window.localStorage.setItem(key, data)
}

export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}
