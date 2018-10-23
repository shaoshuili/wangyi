<template>
 <header class="header">
   <a href="javascript:;" class="header_item" @click="goMsite('/msite')" >
    <span class="item_icon">
      <i class="iconfont icon-home"></i>
    </span>
   </a>
   <a href="javascript:;" class="header_item " >
     <span>网易严选</span>
   </a>

    <a href="javascript:;" class="header_item">
     <span class="item_icon">
       <i class="iconfont icon-sousuo"></i>
     </span>
      <span class="item_icon">
      <i class="iconfont icon-gouwuche"></i>
      </span>
    </a>
 </header>
</template>
<script>
  export default {
    methods: {
      goMsite(path) {
        this.$router.replace(path);
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    background palegreen
    display flex
    flex 1
    .header_item
      display flex
      flex 1
      align-items center
      justify-content center
      span
        font-size 20px
        font-weight bold
      .iconfont
        font-size 25px
        &.icon-sousuo
         margin-right 10px
      .icon-home
        margin-right 10px
   /* .header_search
      width 90%
      height 30px
      background-color yellow
      border-radius 5px
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
      text-align center
      line-height 30px
      a
       position absolute
       left 15px
       top 0
*/
        /* <div class="header_search">
        <a href="javascript:;">
          <i class="iconfont icon-sousuo"></i>
        </a>
        <span>搜索商品，共10086件</span>
      </div>*/
     /* input
        background-color #F0F0F0
        display block
        position absolute
        width 50%
        left 80px
        top 50%
        padding 0 20px
        transform translateY(-50%)*/
   /* .header_message
      display flex
      flex-direction column
      align-items center
      width 15%
      position absolute
      right  3px
      top 50%
      transform translateY(-50%)
      span
        font-size 12px
        .iconfont
          font-size 30px
*/

</style>

