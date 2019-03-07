<template>
  <div class="toast" ref="toastPosition" :class="{active: toastHidden}">
    <div class="toast-warpper">{{text}}</div>
  </div>
</template>
<script>
export default {
  name: "test-toast",
  data() {
    return {
      text: "",
      toastHidden: false
    };
  },
  created() {
    // this.layerPlugin()
  },
  components: {},
  methods: {
    layerPlugin(msg, time = 1000) {
      this.text = msg;
      this.toastHidden = true;
      setTimeout(() => {
        this.toastHidden = false;
      }, time);
    }
  }
};
</script>
<style>
.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 10px 15px;
  transform: translate(-50%, -50%);
  font-size: 12px;
  line-height: 1.2;
  text-align: center;
  background: #303133;
  border-radius: 4px;
  color: #fff;
  transition: all 0.3s;
  z-index: -1;
  opacity: 0;
}
.toast.active {
  opacity: 1;
  z-index: 11;
}
</style>
