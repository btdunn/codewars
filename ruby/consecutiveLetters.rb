def solve st
  numbers = st.bytes
  sorted = numbers.sort
  if sorted.length < numbers.length
    return false
    elsif
  lastNum = sorted[0]
  sorted[1, sorted.count].each do |n|
    if lastNum + 1 != n
      return false
      end
    lastNum = n
  end
  true
  end
end