import '@/css/common.css'
import '@/css/list/list.css'

import '@/common/util'

console.log('this is list page')

// js引入b文件夹下的图片 es6语法测试
let img = document.querySelector('#myImg');
// var img = document.querySelector('#myImg');
img.src = require('./../../images/b/b.png');
