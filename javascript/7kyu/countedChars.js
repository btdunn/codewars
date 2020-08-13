function getStrings(city){
  countObj = {}
  letters = city.toLowerCase().split("")
  letters.map(function(element){
    if (countObj.hasOwnProperty(element)){
      countObj[element] = countObj[element] + '*' 
    } else {
      countObj[element] = '*';
    }
  })
  const countedArr = Object.entries(countObj)
  const counted = ""
  countedArr.forEach(function(element){
    console.log(element + counted)
  })
  return counted
}

//returns a count using asteriks for each character in the string: c:**, h:*, i:* etc.