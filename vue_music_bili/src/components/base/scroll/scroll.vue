<template>
  <div ref="scroll">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom";

import ScrollBar from "@better-scroll/scroll-bar";
BScroll.use(ScrollBar);
BScroll.use(ObserveDOM);
export default {
  name: "scroll",

  mounted() {
    new BScroll(this.$refs.scroll, {
      scrollY: true,
      // scrollbar: true
      observeDOM: true 
    });
  },
};
</script>

<style lang="scss" scoped>
</style>