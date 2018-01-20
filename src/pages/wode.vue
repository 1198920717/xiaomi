<template>
  <div>
    <!-- 头部 -->
    <router-link to="/denglu">
      <div class="header">
        <img src="../assets/登录注册.png" alt="">
        <span>登录/注册</span>
      </div>
    </router-link>
    <!--  -->
    <group class="group1">
      <cell is-link title="我的订单" link="/denglu">全部订单</cell>
    </group>
    <!--  -->
    <div class="suoyin">
      <div>
        <img src="../assets/待付款.png" alt="">
        <span>待付款</span>
      </div>
      <div>
        <img src="../assets/待收货.png" alt="">
        <span>待收货</span>
      </div>
      <div>
        <img src="../assets/扳手.png" alt="">
        <span>退换修</span>
      </div>
    </div>
    <!--  -->
    <group class="group2" label-width="6em" label-margin-right="2em" label-align="right">
      <router-link to="/denglu">
        <img src="../assets/会员福利.png" alt="">
        <cell is-link title="会员福利" link="/component/pullup"></cell>
        <img src="../assets/我的优惠.png" alt="">
        <cell is-link title="我的优惠" link="/component/pulldown"></cell>
      </router-link>
    </group>
    <!--  -->
    <group class="group2" label-width="6em" label-margin-right="2em" label-align="right">
      <router-link to="/denglu">
        <img src="../assets/服务中心.png" alt="">
        <cell is-link title="服务中心" link="/component/pullup"></cell>
        <img src="../assets/小米之家.png" alt="">
        <cell is-link title="小米之家" link="/component/pulldown"></cell>
      </router-link>
    </group>
    <!--  -->
    <group class="group2" label-width="6em" label-margin-right="2em" label-align="right">
      <router-link to="/denglu">
        <img src="../assets/F码通道.png" alt="">
        <cell is-link title="F码通道" link="/component/pullup"></cell>
      </router-link>
    </group>
    <!--  -->
    <group class="group2" label-width="6em" label-margin-right="2em" label-align="right">
      <router-link to="/denglu">
        <img src="../assets/设置.png" alt="">
        <cell is-link title="设置" link="/component/pullup"></cell>
      </router-link>
    </group>

  </div>
</template>

<script>

  import { XInput, Search, Tabbar, TabbarItem, Group, Cell, XButton } from 'vux'
  export default {
    components: {
      XInput,
      Search,
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      XButton
    }
  }

</script>

<style>
  .header {
    position: relative;
    width: 100%;
    height: 5.2rem;
    background-color: #f37d0f;
  }

  .header img {
    width: 3rem;
    height: 3rem;
    margin-top: 1rem;
    margin-left: 1rem;
  }

  .header span {
    font-size: .8rem;
    position: absolute;
    color: white;
    margin-top: 2rem;
    margin-left: .5rem;
  }

  .group1 {
    position: relative;
    top: -1.3rem;
  }

  .suoyin {
    position: relative;
    margin-top: -1.3rem;
    width: 100%;
    height: 6rem;
    background-color: white;
  }

  .suoyin div {
    width: 33%;
    height: 5.5rem;
    float: left;
    text-align: center;
    line-height: 5.5rem;
  }

  .suoyin img {
    position: absolute;
    width: 2rem;
    height: 2rem;
    margin-top: 1.5rem;
  }

  .suoyin span {
    display: inline-block;
    width: 3rem;
    height: 2rem;
    margin-top: 1.5rem;
    margin-left: -.5rem;
    font-size: 0.7rem;
  }

  .group2 img {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    margin-top: 0.6rem;
    margin-left: 0.8rem;
  }
  .group2 p{
    color: #333;
  }
</style>