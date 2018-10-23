<template>
  <header class="header">
       <a href="javascript:;" class="header_logo " >
         <span>网易严选</span>
       </a>
     <div class="header_search">
       <a href="javascript:;" class="header_item">
         <i class="iconfont icon-sousuo"></i>
         <span>搜索商品，共10086件</span>
       </a>
     </div>
  <!--   <a href="javascript:;" class="header_message " >
     <span class="item_icon">
       <i class="iconfont icon-message"></i>
     </span>
      <span>消息</span>
    </a>-->
   <!-- <a href="javascript:;" class="header_scan " >
      <span class="item_icon">
        <i class="iconfont icon-scan"></i>
      </span>
      <span>首页</span>
    </a>-->
  </header>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header
    background-color pink
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    line-height 45px
    text-align center
    .header_logo
      display block
      width 30%
      height 30px
      position absolute
      left 0px
      top 50%
      margin-right 5px
      transform translateY(-50%)
      line-height 30px
    .header_search
      width 70%
      height 30px
      border-radius 5px
      position absolute
      top 50%
      right 10px
      transform translateY(-50%)
      background yellow
      .header_item
        display block
        text-align center
        line-height 30px
     /* a
       position absolute
       left 15px
       top 0
      span
        text-align center
        line-height 30px*/
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

