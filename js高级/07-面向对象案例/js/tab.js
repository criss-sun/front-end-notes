let that
let index = 3

class Tab {
  constructor(id) {
    that = this
    this.main = document.querySelector(id)
    this.updateNode()
    this.init()
    this.addTab()
  }

  updateNode() {
    this.ul = this.main.querySelector('.fisrstnav').children[0]
    this.tabscon = this.main.querySelector('.tabscon')
    this.lis = this.ul.querySelectorAll('li')
    this.tabadd = this.main.querySelector('.tabadd')
    this.remove = this.ul.querySelectorAll('.icon-guanbi')
  }

  init() {
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].setAttribute('data-index', i)
      this.lis[i].addEventListener('click', this.toggleTab)
      this.lis[i].children[0].addEventListener('dblclick', this.editTab)
      this.remove[i].addEventListener('click', this.removeTab)
      this.tabscon.children[i].addEventListener('dblclick', this.editTab)
    }
  }

  toggleTab() {
    that.main.querySelector('.liactive').classList.remove('liactive')
    this.classList.add('liactive')
    that.tabscon.querySelector('.conactive').classList.remove('conactive')
    that.tabscon.children[this.dataset.index].classList.add('conactive')
  }

  addTab() {
    this.tabadd.children[0].addEventListener('click', function () {
      const li = document.createElement('li')
      index++
      li.innerHTML = '<span>测试' + index + '</span><span class="iconfont icon-guanbi"></span>'
      that.main.querySelector('.liactive').classList.remove('liactive')
      li.classList.add('liactive')
      that.ul.appendChild(li)
      const section = document.createElement('section')
      that.tabscon.querySelector('.conactive').classList.remove('conactive')
      section.classList.add('conactive')
      section.innerHTML = '测试' + index
      that.tabscon.appendChild(section)
      that.updateNode()
      that.init()
    })
  }

  removeTab(e) {
    e.stopPropagation()
    const index = this.parentNode.dataset.index
    if (index == 0) {
      that.lis[1] && that.lis[1].click()
    }
    else if (that.lis[index].classList.contains('liactive')) {
      that.lis[index - 1] && that.lis[index - 1].click()
    }
    that.lis[index].remove()
    that.tabscon.children[index].remove()
    that.updateNode()
    that.init()
  }

  editTab() {
    this.innerHTML = '<input type="text" value="' + this.innerHTML + '">'
    const input = this.children[0]
    input.select()
    input.addEventListener('blur', function () {
      this.parentNode.innerHTML = this.value
    })
    input.addEventListener('keyup', function (e) {
      if (e.keyCode == 13) {
        this.blur()
      }
    })
  }
}

new Tab('#tab')