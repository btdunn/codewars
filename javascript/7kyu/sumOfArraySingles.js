function repeats(arr){
  let singles = arr.filter((n) => {
    return arr.filter((n1) => {
      return n1 == n
    })
  })
};