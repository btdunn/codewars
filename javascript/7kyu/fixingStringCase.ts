export function solve(s: string) {
  const letters: string[] = s.split('')
  letters.map(letter => {
    if (letter == letter.toUpperCase()){
      console.log('upper')
    }
    if (letter == letter.toLowerCase()){
      console.log('lower')
    }
  })
  return 'ok'
}