export function solve(s: string) {
  const letters: string[] = s.split('')
  let lCount: number = 0
  let uCount: number = 0

  letters.map(letter => {
    if (letter == letter.toUpperCase()){
      uCount++
    }
    if (letter == letter.toLowerCase()){
      lCount++
    }
  })
  if (lCount >= uCount){
    return s.toLowerCase()
  }
  if(uCount > lCount){
    return s.toUpperCase()
  }
}