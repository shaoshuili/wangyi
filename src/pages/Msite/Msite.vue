<template>
  <div class="msite">
    <HeaderLogo/>
    <section class="section_container">
       <!--nav-bar-->
       <ul class="nav_bar">
         <li>
           <span class="on">服装</span>
         </li>
         <li>
           <span>服装</span>
         </li>
         <li>
           <span>服装</span>
         </li>
         <li>
           <span>服装</span>
         </li>
         <li>
           <span>服装</span>
         </li>
         <li>
           <span>服装</span>
         </li>
       </ul>
       <!--轮播图-->
       <div class="swiper-container">
         <div class="swiper-wrapper">
           <div class="swiper-slide">
             <div class="img_container">
               <img src="../../common/images/1.jpg">
             </div>
           </div>
           <div class="swiper-slide">
             <div class="img_container">
               <img src="../../common/images/2.jpg">
             </div>
           </div>
           <div class="swiper-slide">
             <div class="img_container">
               <img src="../../common/images/3.jpg">
             </div>
           </div>
           <div class="swiper-slide">
             <div class="img_container">
               <img src="../../common/images/4.jpg">
             </div>
           </div>
         </div>
         <!-- Add Pagination -->
         <div class="swiper-pagination"></div>
       </div>
       <!--商家-->
       <div class="shop">
         <ul class="shop_serve">
           <li class="serve_item">
          <span class="item_icon">
          <i class="iconfont icon-sousuo"></i>
          </span>
             <span>网易自营品牌</span>
           </li>
           <li class="serve_item">
          <span class="item_icon">
          <i class="iconfont icon-sousuo"></i>
          </span>
             <span>30天无忧退换</span>
           </li>
           <li class="serve_item">
          <span class="item_icon">
          <i class="iconfont icon-sousuo"></i>
          </span>
             <span>48小时无忧退款</span>
           </li>
         </ul>
       </div>
       <section class="goods">
         <div class="goodsList"></div>
       </section>
       <!--header-->
       <header class="header_container">
         <div class="header_company">
           <a>
             <span>品牌制造商提供</span>
             <span>
             <i class="iconfont icon-friend"></i>
          </span>
           </a>
         </div>
         <div class="shopList">
           <ul class="start_price">
             <li class="shop_item">
               <img src="../../common/images/1.jpg">
             </li>
             <li class="shop_item">
               <img src="../../common/images/2.jpg">
             </li>
             <li class="shop_item">
               <img src="../../common/images/3.jpg">
             </li>
             <li class="shop_item">
               <img src="../../common/images/4.jpg">
             </li>
           </ul>
         </div>
       </header>
    </section>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import HeaderLogo from '../../components/HeaderLogo/HeaderLogo.vue'

  export default {
    mounted(){
     this.$nextTick(()=>{
       new Swiper(".swiper-container", {
         loop: true,
         pagination: {
           el: ".swiper-pagination"
         }
       });
       new BScroll('.section_container');
     })
    },
    components: {
      HeaderLogo
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .msite
    overflow hidden
    height 100%
    .section_container
      width 100%
      position absolute
      top 0
      left 0
      .nav_bar
        position fixed
        top 45px
        left 0
        width 100%
        height 30px
        background yellow
        display flex
        padding 5px
        line-height 30px
        li
          width 30px
          height 30px
          flex 1
          padding 0 5px
          .on
            display inline-block
            width 100%
            height 100%
            color red
          span:after
            content: '';
            left: 5px;
            bottom: 0;
            position: absolute;
            width: 40px;
            height: 2px;
            background-color: #b4282d;
      .swiper-container
        margin-top 87px
        width 100%
        height 200px
        .swiper-wrapper
          width 100%
          height 200px
        .swiper-pagination-bullet
          width 20px
          height 5px
          border-radius 0
        .swiper-pagination-bullet-active
           background deeppink
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .img_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 100%
                height 100%
      .shop
        width 100%
        height 36px
        background yellowgreen
        .shop_serve
          width 100%
          height 100%
          display flex
          .serve_item
            width 100%
            height 100%
            flex 1
            text-align center
            line-height 36px
            span
              font-size 12px
              .iconfont
                font-size 16px
                color		#B22222
      .header_container
        position relative
        width 100%
        height 293px
        .header_company
          width 100%
          height 55px
          background brown
          a
            display inline-block
            width 100%
            height 100%
            text-align center
            line-height 55px
            font-size 20px
            .iconfont
              font-size 20px
        .shopList
          position absolute
          top 55px
          left 0
          height 238px
          width 100%
          .start_price
            width 100%
            height 100%
            position absolute
            padding 0 7px
            .shop_item
              width 177.5px
              height 118px
              float left
              margin 2px
              img
                width 177.5px
                height 118px







</style>
