<template>
  <div>
    <!-- 购物车 -->
    <x-header id="daohang" style="background-color:#eee; height:3.4rem;width:100%;z-index:999; position: fixed;top: 0rem; " @on-click-more="showMenus = true">
      <span>购物车</span>
      <a slot="right" href="/a">
        <router-link to="/sousuo">
          <x-icon type="ios-search" size="30"></x-icon>
        </router-link>
      </a>
    </x-header>
    <!-- 去登陆 -->
    <group id="group1">
      <cell is-link title="登陆后享受更多优惠" link="/denglu">
        <span>去登陆</span>
      </cell>
    </group>
    <!-- 去逛逛 -->
    <div class="gouwu">
      <img src="../assets/ERP_购物车.png" alt="">
      <span>购物车还是空的</span>
      <div class="kuang">
        <span class="zi">去逛逛</span>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="cai">
      <img src="../assets/猜你喜欢.jpg" alt="">
    </div>
    <!-- 商品 -->
    <div class="shangpin">
      <router-link to="/xiangqing">
        <div>
          <img src="../assets/手机1.jpg" alt="">
          <span class="a">红米Note 5A 32GB</span>
          <span class="b">￥799</span>
        </div>
        <div>
          <img src="../assets/手机2.jpg" alt="">
          <span class="a">红米Note 5A 32GB</span>
          <span class="b">￥799</span>
        </div>
        <div>
          <img src="../assets/手机3.jpg" alt="">
          <span class="a">红米Note 5A 32GB</span>
          <span class="b">￥799</span>
        </div>
        <div>
          <img src="../assets/手机4.jpg" alt="">
          <span class="a">红米Note 5A 32GB</span>
          <span class="b">￥799</span>
        </div>
        <div>
          <img src="../assets/手机1.jpg" alt="">
          <span class="a">红米Note 5A 32GB</span>
          <span class="b">￥799</span>
        </div>
        <div>
          <img src="../assets/手机2.jpg" alt="">
          <span class="a">红米Note 5A 32GB</span>
          <span class="b">￥799</span>
        </div>
        <div>
          <img src="../assets/手机3.jpg" alt="">
          <span class="a">红米Note 5A 32GB</span>
          <span class="b">￥799</span>
        </div>
        <div>
          <img src="../assets/手机4.jpg" alt="">
          <span class="a">红米Note 5A 32GB</span>
          <span class="b">￥799</span>
        </div>
        <div>
          <img src="../assets/手机1.jpg" alt="">
          <span class="a">红米Note 5A 32GB</span>
          <span class="b">￥799</span>
        </div>
        <div>
          <img src="../assets/手机2.jpg" alt="">
          <span class="a">红米Note 5A 32GB</span>
          <span class="b">￥799</span>
        </div>
        <div>
          <img src="../assets/手机3.jpg" alt="">
          <span class="a">红米Note 5A 32GB</span>
          <span class="b">￥799</span>
        </div>
        <div>
          <img src="../assets/手机4.jpg" alt="">
          <span class="a">红米Note 5A 32GB</span>
          <span class="b">￥799</span>
        </div>
      </router-link>
    </div>
    <div class="kongbai"></div>
  </div>
</template>

<script>
  import { XHeader, Search, Tabbar, TabbarItem, Group, Cell, XButton } from 'vux'
  export default {
    components: {
      XHeader,
      Search,
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      XButton
    },
    methods: {
      onItemClick() {
        console.log('on item click')
      }
    }
  }
</script>

<style scoped>
  .shangpin {
    position: relative;
    top: -1.4rem;
  }

  .shangpin div {
    width: 50%;
    height: 16rem;
    float: left;
  }

  .shangpin img {
    width: 100%;
    height: 12rem;
    margin-left: 0.2rem;
  }

  .shangpin .a {
    display: inline-block;
    margin-left: 0.7rem;
    font-size: 0.95rem;
    color: #444;
  }

  .shangpin .b {
    display: inline-block;
    margin-left: 0.5rem;
    font-size: 1.1rem;
    color: orange;
  }

  .vux-x-icon {
    fill: #555;
  }

  #daohang a {
    color: #555;
  }

  #daohang span {
    font-size: 1rem;
    color: #555;
  }

  #group1 {
    height: 3rem;
    padding-top: 2rem;
    margin: 0;
  }

  #group1 span {
    font-size: 0.95rem;
    color: #777;
  }

  .gouwu {
    margin-top: 1rem;
    width: 100%;
    height: 5rem;
    background-color: #eee;
    position: relative;
  }

  .gouwu img {
    width: 3rem;
    height: 3rem;
    float: left;
    margin-top: 0.5rem;
    margin-left: 3.5rem;
  }

  .gouwu span {
    float: left;
    line-height: 4rem;
    margin-left: 0.5rem;
    color: #777;
    font-size: 0.9rem;
  }

  .kuang {
    width: 4rem;
    height: 1.6rem;
    border: 1px solid #ccc;
    float: left;
    margin-top: 1.2rem;
    margin-left: .5rem;
  }

  .kuang .zi {
    margin-top: -1.2rem;
    color: black;
  }

  .cai img {
    width: 100%;
    height: 4.5rem;
    position: relative;
    top: -1.3rem;
  }
  .kongbai{
    position: relative;
    width: 100%;
    height: 4rem;
    margin-top: 94rem;
  }
</style>