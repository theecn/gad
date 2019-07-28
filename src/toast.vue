<template>
  <div class="toast">
    <slot></slot>
    <div class="line"></div>
    <span v-if="closeButton.text" @click="onClose">{{closeButton.text}}</span>
  </div>
</template>
<script>
export default {
  name: "gad-toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 3
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.delay * 1000);
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    },
    log(){
        console.log('text')
    }
  }
};
</script>
<style scoped lang = "scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgb(0, 0, 0);
.toast {
  font-size: $font-size;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  color: #fff;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgb(0, 0, 0);
  padding: 0 16px;
  height: $toast-height;
}
div.line {
  height: 100%;
  border-left: 1px solid #666;
  margin-left: 16px;
  margin-right: 16px;
}
</style>
