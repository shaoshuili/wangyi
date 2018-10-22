<template>
 <div class="app">
   <router-view/>
   <FooterGuide/>
 </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .app
   width 100%
   header 100%
   position relative
</style>
