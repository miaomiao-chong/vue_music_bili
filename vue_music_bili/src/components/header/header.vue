<template>
  <div class="headerContainer">
    <img class="image" src="./logo.png" alt="">
    <h1 class="title">{{title}}</h1>
  </div>
</template>

<script>
 
  export default {
     name: 'Header',
     data() {
       return {
         title: 'White Bear Music'
       }
     }
  }
</script>

<style lang="scss" scoped>
.headerContainer {
  width:100%;
  height: 50px;
  background: $color-theme;
  display: flex;
  justify-content: center;
  align-items: center;
  .image{
    height: 45px;
    margin-right: 5px;
  }
  .title{
    font-size: $font-size-large;
  }
}
</style>