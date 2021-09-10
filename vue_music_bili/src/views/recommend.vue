<template>
  <div class="recommend-container">
    <Scroll class="scroll-container">
      <div>
        <div class="slider-container">
          <Slider :sliders="banners" v-if="banners.length"></Slider>
        </div>
        <div class="playlist-container">
          <h1 class="title">{{ title }}</h1>
          <div class="playlist" v-for="item in playlist" :key="item.id">
            <div class="playlist-item">
              <img v-lazy="item.coverImgUrl" alt="" class="pic" />
              <div class="text">
                <div class="text1">{{ item.name }}</div>
                <div class="text2">{{ item.copywriter }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import { getBanner, getPlaylist } from "../server/recommend";
import Slider from "@/components/base/slider/slider";
import Scroll from "@/components/base/scroll/scroll";

export default {
  name: "recommend",
  components: { Slider, Scroll },
  data() {
    return {
      banners: [],
      playlist: [],
      title: "歌单推荐",
    };
  },
  async created() {
    const bannerRes = await getBanner();
    // console.log(bannerRes);
    const playlistRes = await getPlaylist();
    // console.log(playlistRes);
    this.banners = bannerRes;
    this.playlist = playlistRes;
  },
};
</script>

<style lang="scss" scoped>
.recommend-container{
  position: fixed;
  top: 88px;
  bottom: 0;
  width: 100%;
.scroll-container {
  // height: 530px;
  height: 100%;
  overflow: hidden;
  .slider-container {
    overflow: hidden;
  }
  .playlist-container {
    .title {
      color: $color-theme;
      text-align: center;
      margin: 10px 0;
    }
    .playlist {
      .playlist-item {
        display: flex;
        // justify-content: center;
        align-items: center;
        margin: 10px 0;
        .pic {
          width: 50px;
          margin: 0 15px 0 19px;
        }
        .text {
          height: 40px;
          position: relative;
          font-size: 8px;
          // flex: 1;
          width: 260px;

          .text1 {
            width: 100%;
            color: rgb(253, 253, 253);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .text2 {
            width: 100%;
            position: absolute;
            bottom: 0px;
            color: rgba(234, 237, 240, 0.801);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
}

</style>