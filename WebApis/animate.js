function animate(obj, target, callback) {
  obj.timer && clearInterval(obj.timer)
  obj.timer = setInterval(function () {
    var step = (target - obj.offsetLeft) / 10
    step = step > 0 ? Math.ceil(step) : Math.floor(step)
    if (obj.offsetLeft === target) {
      clearInterval(obj.timer)
      callback && callback()
    }
    obj.style.left = obj.offsetLeft + step + 'px'
  }, 10)
}