// alternative capitalization
function capitalize(s) {
    let output = []
    let split = s.split('');
    let evens = split.map((letter, i) => {
      if (i % 2 == 0) {
        return letter.toUpperCase();
      } else {
        return letter.toLowerCase();
      }
    });
    output.push(evens.join(''));
    let odds = split.map((letter, i) => {
      if (i % 2 != 0) {
        return letter.toUpperCase();
      } else {
        return letter.toLowerCase();
      }
    });
    output.push(odds.join(''));
    return output
  }