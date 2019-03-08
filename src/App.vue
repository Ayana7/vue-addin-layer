<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button @click="childrenFun">点击测试layer插件</button>
    <vue-addin-layer ref="layer"></vue-addin-layer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      testArr: [1,2,4]
    }
  },
  created() {
    console.log(this.$myMethod(this.testArr))
  },
  methods: {
    childrenFun() {
      this.$refs.layer.layerPlugin('我是弹出层',3000)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
