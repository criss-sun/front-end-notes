import _ from 'lodash';
import './style.css';
import Icon from './Q版泰坦头像.jpg'

function component() {
  var element = document.createElement('div');

  // lodash 是由当前 script 脚本 import 导入进来的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  // 将图像添加到我们现有的 div
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());