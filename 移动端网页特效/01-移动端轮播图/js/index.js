window.addEventListener('DOMContentLoaded', function () {
    var focus = document.querySelector('.focus')
    var ul = focus.children[0]
    var ol = focus.children[1]
    var index = 0
    var flag = false
    ul.appendChild(ul.children[0].cloneNode(true))
    ul.insertBefore(ul.children[ul.children.length - 2].cloneNode(true), ul.children[0])
    var timer = setInterval(() => {
        index++
        ul.style.transition = 'all .5s'
        ul.style.transform = 'translateX(-' + index * focus.offsetWidth + 'px)'
    }, 2000);
    ul.addEventListener('transitionend', function () {
        // index = index > 3 ? 3 : index
        // ol.children[index - 1].classList.remove('current')
        ol.querySelector('.current').classList.remove('current')
        if (index >= ul.children.length - 2) {
            index = 0
            ul.style.transition = ''
            ul.style.transform = 'translateX(0)'
        }
        else if (index < 0) {
            index = 2
            ul.style.transition = ''
            ul.style.transform = 'translateX(-' + index * focus.offsetWidth + 'px)'
        }
        ol.children[index].classList.add('current')
    })
    var startX = 0
    var moveX = 0
    ul.addEventListener('touchstart', function (e) {
        clearInterval(timer)
        startX = e.targetTouches[0].pageX
    })
    ul.addEventListener('touchmove', function (e) {
        e.preventDefault()
        flag = true
        moveX = e.targetTouches[0].pageX - startX
        ul.style.transition = 'none'
        var translatex = - index * focus.offsetWidth + moveX
        ul.style.transform = 'translateX(' + translatex + 'px)'
    })
    ul.addEventListener('touchend', function () {
        if (flag) {
            if (Math.abs(moveX) > 50) {
                if (moveX > 0) {
                    index--
                }
                else {
                    index++
                }
                var translatex = - index * focus.offsetWidth
                ul.style.transition = 'all .5s'
                ul.style.transform = 'translateX(' + translatex + 'px)'
            } else {
                var translatex = - index * focus.offsetWidth
                ul.style.transition = 'all .5s'
                ul.style.transform = 'translateX(' + translatex + 'px)'
            }
        }
        clearInterval(timer)
        setInterval(() => {
            index++
            ul.style.transition = 'all .5s'
            ul.style.transform = 'translateX(-' + index * focus.offsetWidth + 'px)'
        }, 2000);
    })
})
