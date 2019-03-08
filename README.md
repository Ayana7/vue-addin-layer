# vue-addin-layer
vue layer插件

## Installation

`npm install vue-l-lazyload`

## Usage
### A simple way:
```javascript
import vueAddinPlayer from './lib/index.js'
Vue.use(vueAddinPlayer);
```
```html
<vue-addin-layer></vue-addin-layer>
```

### A more configurable way:
```javascript
import vueAddinPlayer from './lib/index.js'
Vue.use(vueAddinPlayer);
```
```html
<div>
  <button @click="childrenFun">点击测试layer插件</button>
  <vue-addin-layer ref="layer"></vue-addin-layer>
</div>


childrenFun() {
  this.$refs.layer.layerPlugin('我是弹出层',3000)
}
```

### Methods
<table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th style="width: 100px;">名称</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>layerPlugin</td>
            <td>function(msg, time)</td>
            <td>接收两个参数，第一个是文字描述，第二个值显示时长，默认1000</td>
        </tr>
    </tbody>
</table>

For detailed explanation on how things work, consult the [docs for vue-addin-layer](https://github.com/Ayana7/vue-addin-layer).

