// filter list
function filter_list(l) {
    return l.filter(l => {
      if (typeof l == 'string') return null
      else return l || l === 0
    })
  }


