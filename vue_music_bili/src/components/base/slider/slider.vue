<template>
  <div class="slide" ref="slide">
    <div class="slide-group">
      <div class="slide-page" v-for="item in sliders" :key="item">
        <img :src="item.pic" alt="" srcset="" />
      </div>
    </div>
    <!-- 小圆点 -->
    <div class="dots-wrapper">
      <span
        class="dot"
        v-for="(item,index) in sliders"
        :key="index"
        :class="{ active: currentPageIndex ===index}"
      ></span>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Slide from "@better-scroll/slide";

BScroll.use(Slide);
export default {
  name: "slider",
  props:{
    sliders:{
      type:Array
    }
  },
  data() {
    return {
      // 测试
      // sliders: [
      //   "https://img-home.csdnimg.cn/images/20210909031505.jpg",
      //   "https://img-blog.csdnimg.cn/img_convert/6c956a22014acaf17ca57e0fb6f83f36.png?x-oss-process=image/resize,m_fixed,h_200",
      //   "https://img-blog.csdnimg.cn/a53f389be3894e35a6e4f66311b8e5ed.jpg?x-oss-process=image/resize,m_fixed,h_200",
      //   "https://img-blog.csdnimg.cn/306d4f9ef4084c8ab4d1b3c94ae3a6d7.png?x-oss-process=image/resize,m_fixed,h_200",
      // ],
      currentPageIndex: 0,
    };
  },
  mounted() {
    this.slide = new BScroll(this.$refs.slide, {
      scrollX: true,
      scrollY: false,
      slide: true,
      momentum: false,
      bounce: false,
      probeType: 3,
    });
    this.slide.on("slideWillChange", (page) => {
      this.currentPageIndex = page.pageX;
    });
  },
};
</script>

<style lang="scss" scoped>
.slide {
  // height: 100px;
  position: relative;
  .slide-group {
    width: 100%;
    // height: 100px;
    overflow: hidden;
    // display: flex;
    // flex-wrap: nowrap;
    white-space: nowrap;
    .slide-page {
      width: 100%;
      // height: 100px;
      display: inline-block;
      img {
        // height: 100px; 
        width: 100%;
      }
    }
  }
  .dots-wrapper{
    position:absolute;
    height: 20px;
    display: flex;
    left:50%;
    bottom: 5px;
    transform: translateX(-50%);
    .dot{
      display: block;
      width:9px;
      height:9px;
      border-radius: 50%;
      margin: 0 8px;
      background: rgb(182, 180, 180);
    }
    .active{
      background: white;
    }
  }
}
</style>