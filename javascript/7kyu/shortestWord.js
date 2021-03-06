function findShort(s){
  let words = s.split(' ')
  let shortest = words.reduce((shorty, current) => {
    return shorty.length < current.length ? shorty : current;
  })
  return shortest.length
}