window.addEventListener('DOMContentLoaded', function () {
  var arrow_l = document.querySelector('.arrow-l')
  var arrow_r = document.querySelector('.arrow-r')
  var focus = document.querySelector('.focus')
  var ul = focus.querySelector('ul')
  var ol = focus.querySelector('.circle')
  var num = 0
  var flag = true
  focus.addEventListener('mouseover', function () {
    arrow_l.style.display = 'block'
    arrow_r.style.display = 'block'
    timer && clearInterval(timer)
    timer = null
  })
  focus.addEventListener('mouseout', function () {
    arrow_l.style.display = 'none'
    arrow_r.style.display = 'none'
    timer = setInterval(function () {
      arrow_r.click()
    }, 2000)
  })
  for (var i = 0; i < ul.children.length; i++) {
    var li = document.createElement('li')
    ol.appendChild(li)
  }
  ol.children[0].className = 'current'
  var clone_li = ul.children[0].cloneNode(true)
  ul.appendChild(clone_li)

  for (let i = 0; i < ol.children.length; i++) {
    ol.children[i].addEventListener('click', function () {
      if (flag) {
        flag = !flag
        num = i
        for (let i = 0; i < ol.children.length; i++) {
          ol.children[i].className = ''
        }
        this.className = 'current'
        animate(ul, -focus.offsetWidth * i, function () { flag = true })
      }
    })
  }

  arrow_l.addEventListener('click', function () {
    if (flag) {
      flag = !flag
      if (num === 0) {
        num = ul.children.length - 1
        ul.style.left = -focus.offsetWidth * num + 'px'
      }
      num--
      for (let i = 0; i < ol.children.length; i++) {
        ol.children[i].className = ''
      }
      ol.children[num].className = 'current'
      animate(ul, -focus.offsetWidth * num, function () { flag = true })
    }
  })
  arrow_r.addEventListener('click', function () {
    if (flag) {
      flag = !flag
      if (num === ul.children.length - 1) {
        num = 0
        ul.style.left = 0
      }
      num++
      (function (num) {
        for (let i = 0; i < ol.children.length; i++) {
          ol.children[i].className = ''
        }
        if (num == ul.children.length - 1) num = 0
        ol.children[num].className = 'current'
      })(num)
      animate(ul, -focus.offsetWidth * num, function () { flag = true })
    }
  })
  var timer = setInterval(function () {
    arrow_r.click()
  }, 2000)
})

