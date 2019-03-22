import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import bar from '@/components/nav/header'
import footerBar from '@/components/nav/footer'
import xingceMenu from '@/components/test/xingce_menu'
import shenlunMenu from '@/components/test/shenlun_menu'
import login from '@/components/nav/login'
import xingceSprint from '@/components/test/xingce_menu_sprint'
import xingceSpecial from '@/components/test/xingce_menu_special'
import xingceTest from '@/components/test/xingce_test'
import news from '@/components/news/news'
import newsDetail from '@/components/news/news_detail'
import learnData from '@/components/learn/learn_data'
import learnVideo from '@/components/learn/learn_video'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/bar',
      name: 'bar',
      component: bar
    },
    {
      path: '/footerBar',
      name: 'footerBar',
      component: footerBar
    },
    {
      path: '/xingceMenu',
      name: 'xingceMenu',
      component: xingceMenu
    },
    {
      path: '/shenlunMenu',
      name: 'shenlunMenu',
      component: shenlunMenu
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/xingceSprint',
      name: 'xingceSprint',
      component: xingceSprint
    },
    {
      path: '/xingceSpecial',
      name: 'xingceSpecial',
      component: xingceSpecial
    },
    {
      path: '/xingceTest',
      name: 'xingceTest',
      component: xingceTest
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: newsDetail
    },
    {
      path: '/learnData',
      name: 'learnData',
      component: learnData
    },
    {
      path: '/learnVideo',
      name: 'learnVideo',
      component: learnVideo
    }
  ]
})
