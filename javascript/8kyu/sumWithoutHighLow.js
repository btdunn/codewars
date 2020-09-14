function sumArray(array) {
  if(array == null){
    return 0
  }
  const sorted = array.sort((a, b) => a - b)
  sorted.pop()
  sorted.shift()
  return sorted.reduce((a, b) => a + b, 0)
}