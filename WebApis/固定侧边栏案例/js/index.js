window.addEventListener('DOMContentLoaded', function () {
  var scrollBar = document.querySelector('.scroll')
  var box = document.querySelector('.box')
  document.addEventListener('scroll', function () {
    if (window.pageYOffset >= box.offsetTop) {
      scrollBar.style.position = 'fixed'
      scrollBar.style.top = 910 - box.offsetTop + 'px'
    } 
    else {
      scrollBar.style.position = 'absolute'
      scrollBar.style.top = '910px'
    }
  })
})