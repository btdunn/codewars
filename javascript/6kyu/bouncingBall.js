function bouncingBall(h,  bounce,  window) {
  if(bounce >= 1 || bounce === 0){
    return -1
  }
  if(h > window){
    h*=bounce
  }
  if(h < window){
    return 1
  } else {
    return 2 + bouncingBall(h, bounce, window)
  }
}