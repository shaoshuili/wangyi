<template>
     <header class="header">
       <div class="header_search">
         <a href="javascript:;">
           <i class="iconfont icon-sousuo"></i>
         </a>
         <span>搜索商品，共10086件</span>
       </div>
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
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    background palegreen
    .header_search
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
</style>

