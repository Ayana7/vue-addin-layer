import testLayer from './layer.vue'
let test = {}
test.install = function (Vue, options) {
  Vue.prototype.$msg = 'Hello I am test.js'
  Vue.prototype.$myMethod = function (arr) {
    if (arr.length < 0) {
      return false
    } else {
      arr = arr.join('连接你我')
      return arr
    }
  }
  Vue.component(testLayer.name, testLayer) // testLayer.name 组件的name属性
}
export default test
