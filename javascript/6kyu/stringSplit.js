function solution(str){
  let letters = str.split('')
  let duos = []
  let counter = 0
  while(letters.length/2 > duos.length){
    let two = letters.slice([counter], [counter + 2]).join('')
    duos.push(two)
    counter += 2
  }
 if(duos.length !== letters.length/2){
   let single = duos.pop([duos.length - 1])
   let altered = single += '_'
   duos.push(altered)
   return duos
 }
 else{
   return duos
 }
}