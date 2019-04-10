# gadUI 框架
[![Build Status](https://travis-ci.org/theecn/gad.svg?branch=master)](https://travis-ci.org/theecn/gad)
## 介绍
## 开始使用
注意：
1. IE8及以上均可使用，但是需要使用border-box,before、after也需要使用border-box)
2. 需要设置默认颜色变量，后续会改成SCSS变量，IE 15以上浏览器都支持此样式
 ```        
 :root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --button-active-bg: #eee;
    --border-color-hover: #666;
  }
 ```          
3.安装
 ```
 npm install -s gad-test-1234
 ```
4.引入
```
import {Button, ButtonGroup, Icon} from 'gad-test-1234'
import 'gad-test-1234/dist/index.css'
export default {
    name:'app',
    'gad-button':Button,
    'gad-buttonGroup':ButtonGroup,
    'gad-icon':Icon
}
```
## 文档
## 提问
## 变更记录
## 联系方式
## 贡献代码 
## 参考Element UI , 使用Vue
