<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHTML"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
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
    },
    enableHTML: {
      default: false,
      type: Boolean
    }
  },
  mounted() {
    this.fixStyle();
    this.operateClose();
  },
  methods: {
    operateClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.delay * 1000);
      }
    },
    fixStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.wrapper.getBoundingClientRect().height
        }px`;
      });
    },
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
    log() {
      console.log("text");
    }
  }
};
</script>
<style scoped lang = "scss">
$font-size: 14px;
$toast-min-height: 40px;
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
  min-height: $toast-min-height;
  line-height: 1.8;
  .message {
    padding: 8px 0;
  }
  > span {
    flex-shrink: 0;
    padding-left: 16px;
    /* padding-right:16px; */
  }
  > div.line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>
