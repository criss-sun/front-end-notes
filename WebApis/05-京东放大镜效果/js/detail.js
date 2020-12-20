window.addEventListener('load', function () {
  var img = document.querySelector('.preview_img')
  var mask = document.querySelector('.mask')
  var big = document.querySelector('.big')
  img.addEventListener('mouseover', function () {
    mask.style.display = 'block'
    big.style.display = 'block'
  })
  img.addEventListener('mouseout', function () {
    mask.style.display = 'none'
    big.style.display = 'none'
  })
  img.addEventListener('mousemove', function (e) {
    var t = e.pageY - img.offsetTop - mask.offsetHeight / 2
    var l = e.pageX - img.offsetLeft - mask.offsetWidth / 2
    if (t < 0) t = 0
    else if (t > img.offsetHeight - mask.offsetHeight) t = img.offsetHeight - mask.offsetHeight
    if (l < 0) l = 0
    else if (l > img.offsetWidth - mask.offsetWidth) l = img.offsetWidth - mask.offsetWidth
    mask.style.top = t + 'px'
    mask.style.left = l + 'px'
    // t / (img.offsetHeight - mask.offsetHeight) = x / big.children[0].offsetHeight - big.offsetHeight
    // x = t * (big.children[0].offsetHeight - big.offsetHeight) / (img.offsetHeight - mask.offsetHeight)
    big.children[0].style.top = -t * (big.children[0].offsetHeight - big.offsetHeight) / (img.offsetHeight - mask.offsetHeight) + 'px'
    big.children[0].style.left = -l * (big.children[0].offsetWidth - big.offsetWidth) / (img.offsetWidth - mask.offsetWidth) + 'px'
  })
})