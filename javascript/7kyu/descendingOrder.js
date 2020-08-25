function descendingOrder(n){
  const stringed = n.toString()
  const solutionString = stringed.split('').sort().reverse().join('')
  const final = parseInt(solutionString, 10)
  return final
}