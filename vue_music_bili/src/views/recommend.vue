<template>
  <div>
    1111
  </div>
</template>

<script>
  import {getBanner, getPlaylist} from '../server/recommend'
  export default {
    name: 'recommend',
    async created(){
      const bannerRes = await getBanner()
      console.log(bannerRes);
      const playlistRes = await getPlaylist()
      console.log(playlistRes);
    }
  }
</script>

<style lang="scss" scoped>

</style>