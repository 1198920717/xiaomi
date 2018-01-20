<template>
  <div id="app">
    <transition :name="guodu">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

    <tabbar id="aaa">
      <tabbar-item link="/">
        <img slot="icon" src="./assets/首页.png">
        <img slot="icon-active" src="./assets/首页 (1).png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/fenlei">
        <img slot="icon" src="./assets/诊断记录.png">
        <img slot="icon-active" src="./assets/诊断记录 (1).png">
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item link="/gouwuche">
        <img slot="icon" src="./assets/ERP_购物车.png">
        <img slot="icon-active" src="./assets/ERP_购物车 (1).png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item link="/wode">
        <img slot="icon" src="./assets/我的.png">
        <img slot="icon-active" src="./assets/我的 (1).png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>

  </div>
</template>

<script>
  import $ from 'jquery';
  import { Search, Tabbar, TabbarItem, Group, Cell, XButton } from 'vux'
  export default {
    components: {
      Search,
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      XButton
    },
     data() {
      return {
        guodu: 'guodu',
        scrollWatch: true
      }
    },
    mounted() {
      $(window).scrollTop(0);
      $(window).on('scroll', () => {
        if (this.scrollWatch) {
        }
      })
    },
    destroyed() {
      this.scrollWatch = false;
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }

  #aaa {
    position: fixed;
    bottom: 0;
  }

  .guodu-enter-active,
  .guodu-leave-active {
    position: absolute;
    width: 100%;
    transition: all 0.5s ease;
  }

  .guodu-enter {
    transform: translate(100%);
  }

  .guodu-leave {
    transform: translate(0);
  }

  .guodu-leave-to {
    transform: translate(-100%);
  }
</style>