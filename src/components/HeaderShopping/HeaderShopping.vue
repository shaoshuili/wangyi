<template>
     <header class="header">
         <span>购物车</span>
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
    text-align center
    line-height 45px
    font-size 20px
</style>

