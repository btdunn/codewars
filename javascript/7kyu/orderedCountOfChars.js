var orderedCount = function (text) {
  const splitUp = text.split('')
  const counted = []
  splitUp.forEach(count => counted[count] = (counted[count] || 0)+1);
  return counted;
}