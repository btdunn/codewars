function squareDigits(num){
  const stringed = num.toString().split('')
  const squaredEach = stringed.map(n => n * n)
  const squaredFull = squaredEach.join('')
  return +squaredFull
}