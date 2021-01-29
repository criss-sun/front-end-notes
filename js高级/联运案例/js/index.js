// step 1: 根据menu的数据，动态生成一个二级联运菜单
// step 2: 实现动态增加、修改、删除菜单dom节点，同时保持dom结构与json保持同步
// step 3: 实现通过拖拽修改菜单结构（可使用jQuery插件），同时保持dom结构与json保持同步
// step 4: 在页面上有区域实时显示json数据
document.querySelector('.js-code').innerHTML = JSON.stringify(menu_data)
class Menu {
  constructor(node, data) {
    this.data = data
    // 模拟id
    this.newFoodId = 8
    this.menu_box = document.querySelector(node)
    this.getMenu()
  }
  getMenu() {
    // 外层for
    this.data.forEach(function (item) {
      const ul = document.createElement('ul')
      ul.innerHTML = `<h4>${item.name} <button class="addBtn" data-type_id=${item.type_id}>+</button></h4>`
      // 内层for
      item.food.forEach(function (food) {
        const li = document.createElement('li')
        li.innerHTML = `${food.name} <button class="delBtn" data-type_id=${item.type_id} data-food_id=${food.food_id}>-</button>`
        ul.appendChild(li)
      }.bind(this))
      this.menu_box.appendChild(ul)
    }.bind(this))
    this.getBtn()
  }
  getBtn() {
    const that = this
    const addBtn = document.querySelectorAll('.addBtn')
    const delBtn = document.querySelectorAll('.delBtn')
    // 添加按钮
    addBtn.forEach(function (btn) {
      btn.addEventListener('click', function () {
        that.data.some(function (item) {
          // this.dataset.type_id H5获取自定义属性的写法
          if (item.type_id == this.dataset.type_id) {
            const food = prompt('请输入要添加的菜品')
            if (food) {
              that.clearNode()
              item.food.push({ food_id: that.newFoodId++, name: food, price: "10" })
              that.getMenu()
              that.showJSON()
            }
            return true
          }
        }.bind(this))
      })
    })
    // 删除按钮
    delBtn.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const type_id = this.dataset.type_id
        const food_id = this.dataset.food_id
        that.data.some(function (menu) {
          if (menu.type_id == type_id) {
            const food_index = menu.food.findIndex(function (food) {
              return food.food_id == food_id
            })
            menu.food.splice(food_index, 1)
            that.clearNode()
            that.getMenu()
            that.showJSON()
            return true
          }
        })
      })
    })
  }
  // 清空节点
  clearNode() {
    this.menu_box.innerHTML = ''
  }
  // 更新json数据
  showJSON() {
    document.querySelector('.js-code').innerHTML = JSON.stringify(menu_data)
  }
}
const menu = new Menu('.menu-box', menu_data)

console.log(menu_data);