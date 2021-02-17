function switcheroo(x){
  let split = x.split('')
  let final = split.map(letter => {
    if(letter == 'a'){
      return letter = 'b'
    }
    if(letter == 'b'){
      return letter = 'a'
    }
    if(letter == 'c'){
      return letter
    }
  })
  return final.join('')
}