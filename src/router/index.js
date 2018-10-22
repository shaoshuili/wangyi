
import Vue from 'vue';
import VueRouter from 'vue-router';


import Msite from '../pages/Msite/Msite.vue';
import Sort from '../pages/Sort/Sort.vue';
import Discren from '../pages/Discren/Discren.vue';
import Shopping from '../pages/Shopping/Shopping.vue';
import Profile from '../pages/Profile/Profile.vue';


Vue.use(VueRouter);


export default new VueRouter({
  routes:[
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/sort',
      component: Sort
    },
    {
      path: '/discren',
      component: Discren
    },
    {
      path: '/shopping',
      component: Shopping
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/',
      redirect: '/Msite'
    },
  ]
})
