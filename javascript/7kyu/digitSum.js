function digitSum (str) {
  if(str.length > 1){
    let split = str.split('')
    let summed = split.reduce((total, number) => parseInt(total) + parseInt(number))
    return digitSum(summed.toString())
  }
  else if(str.length == 1) {
    return str
  }
}