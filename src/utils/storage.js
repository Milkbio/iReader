import Storage from 'web-storage-cache'

const storage = new Storage()

export function setLocalStorage(key, value) {
  return storage.set(key, value)
}

export function getLocalStorage(key) {
  return storage.get(key)
}

export function removeLocalStorage(key, value) {
  return storage.delete(key)
}

export function clearLocalStorage() {
  return storage.clear()
}

export function setBookObject(filename, key, value) {
  let book = getLocalStorage(`${filename}-info`)
  if (!book) book = {}
  book[key] = value
  setLocalStorage(`${filename}-info`, book)
}

export function getBookObject(filename, key) {
  let book = getLocalStorage(`${filename}-info`)
  if (book) return book[key]
  return null
}

export function getFontFamily(filename) {
  return getBookObject(filename, 'fontFamily')
}

export function saveFontFamily(filename, font) {
  return setBookObject(filename, 'fontFamily', font)
}
