<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" @click="goto('/msite')" :class="{on:$route.path === '/msite'}">
    <span class="item_icon">
      <i class="iconfont icon-shouye"></i>
    </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/sort')"
       :class="{on:$route.path === '/sort'}">
    <span class="item_icon">
      <i class="iconfont icon-liebiaofenlei"></i>
    </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/discren')"
       :class="{on:$route.path === '/discren'}">
    <span class="item_icon">
      <i class="iconfont icon-shitu"></i>
    </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/shopping')"
       :class="{on:$route.path === '/shopping'}">
    <span class="item_icon">
      <i class="iconfont icon-gouwuche"></i>
    </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goPush('/profile')"
       :class="{on:$route.path === '/profile'}">
    <span class="item_icon">
      <i class="iconfont icon-gerenzhongxin"></i>
    </span>
      <span>个人</span>
    </a>
  </footer>
</template>
<script>
  export default {
    data(){
      return{
        isShow: true
      }
    },
    methods :{
      goto (path){
        this.$router.push(path);
      },
      goPush(path){
        this.$router.go(path)
      },
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer_guide
    width 100%
    height 50px
    position fixed
    left 0
    bottom 0
    display flex
    .guide_item
      flex 1
      display flex
      flex-direction column
      align-items center
      justify-content center
      margin 5px
      &.on
        color red
      span
        font-size 18px
        .iconfont
          font-size 30px
</style>

