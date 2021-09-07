<template>
  <div class="tab">
    <router-link
      class="tab-item"
      v-for="tab in tabs"
      :key="tab.path"
      :to="tab.path"
    >
      <span class="tab-link">{{ tab.name }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {
      tabs: [
        {
          name: "推荐",
          path: "/recommend",
        },
        {
          name: "歌手",
          path: "/singer",
        },
        {
          name: "排行榜",
          path: "/top-list",
        },
        {
          name: "搜索",
          path: "/search",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.tab {
  height: 40px;
  line-height: 40px;
  display: flex;

  .tab-item {
    flex: 1;
    text-align: center;
    .tab-link {
      font-size: $font-size-medium;
      color: $color-text;
      padding: 5px;
    }
    &.router-link-active{
      .tab-link {
        color: $color-theme;
        border-bottom: 2px solid $color-theme;
      }
    }
  }
}
</style>