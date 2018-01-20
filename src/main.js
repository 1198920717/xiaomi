// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import shouye from './pages/shouye.vue'
import fenlei from './pages/fenlei.vue'
import gouwuche from './pages/gouwuche.vue'
import wode from './pages/wode.vue'
import sousuo from './pages/sousuo.vue'
import denglu from './pages/denglu.vue'
import xiangqing from './pages/xiangqing.vue'
import shouye2 from './components/shouye2.vue'
import shouye3 from './components/shouye3.vue'
import shouye4 from './components/shouye4.vue'
import shouye5 from './components/shouye5.vue'
import shouye6 from './components/shouye6.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: shouye
},{
  path: '/fenlei',
  component: fenlei
},{
  path: '/gouwuche',
  component: gouwuche
},{
  path: '/wode',
  component: wode
},{
  path: '/sousuo',
  component: sousuo
},{
  path: '/denglu',
  component: denglu
},{
  path: '/xiangqing',
  component: xiangqing
},{
  path: '/shouye2',
  component: shouye2
},{
  path: '/shouye3',
  component: shouye3
},{
  path: '/shouye4',
  component: shouye4
},{
  path: '/shouye5',
  component: shouye5
},{
  path: '/shouye6',
  component: shouye6
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
