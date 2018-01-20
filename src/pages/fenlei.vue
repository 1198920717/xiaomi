<template>
  <div>
    <!-- 购物车 -->
    <x-header id="daohang" style="background-color:#eee; height:3.4rem;width: 100%;z-index:999; position: fixed;" @on-click-more="showMenus = true">
      <span>分类</span>
      <a slot="right">
        <router-link to="/sousuo">
          <x-icon type="ios-search" size="30"></x-icon>
        </router-link>
      </a>
    </x-header>
    <!--  -->
    <!-- <scroller lock-x @on-scroll="onScroll" height="-55px" ref="scrollerEvent" :scrollbar-x=false :bounce=true> -->
      <div class="box2">
        <p v-for="(t) in titles">{{t}}</p>
      </div>
      <!--  -->
      <section class="chanpin">
        <img class="chanpinimg" src="../assets/分类1.jpg" alt="">
        <section class="a">
          <span class="aa"></span>
          <span>手机</span>
          <span class="aa"></span>
        </section>
        <section class="b">
          <router-link to="/xiangqing">
            <section>
              <img src="../assets/分类2.png" alt="">
              <br>
              <span>红米5</span>
            </section>
            <section>
              <img src="../assets/分类4.png" alt="">
              <br>
              <span>红米5Plus</span>
            </section>
            <section>
              <img src="../assets/分类2.png" alt="">
              <br>
              <span>小米MIX 2</span>
            </section>
            <section>
              <img src="../assets/分类4.png" alt="">
              <br>
              <span>小米Note 3</span>
            </section>
            <section>
              <img src="../assets/分类2.png" alt="">
              <br>
              <span>小米6</span>
            </section>
            <section>
              <img src="../assets/分类4.png" alt="">
              <br>
              <span>小米5X</span>
            </section>
          </router-link>
        </section>
        <section class="a">
          <span class="aa"></span>
          <span>电视</span>
          <span class="aa"></span>
        </section>
        <section class="b">
          <router-link to="/xiangqing">
            <section>
              <img src="../assets/分类3.png" alt="">
              <br>
              <span>32英寸</span>
            </section>
            <section>
              <img src="../assets/分类3.png" alt="">
              <br>
              <span>43英寸</span>
            </section>
            <section>
              <img src="../assets/分类3.png" alt="">
              <br>
              <span>55英寸</span>
            </section>
          </router-link>
        </section>
        <section class="a">
          <span class="aa"></span>
          <span>电视</span>
          <span class="aa"></span>
        </section>
        <section class="b">
          <router-link to="/xiangqing">
            <section>
              <img src="../assets/分类5.png" alt="">
              <br>
              <span>32英寸</span>
            </section>
            <section>
              <img src="../assets/分类5.png" alt="">
              <br>
              <span>43英寸</span>
            </section>
            <section>
              <img src="../assets/分类5.png" alt="">
              <br>
              <span>55英寸</span>
            </section>
          </router-link>
        </section>
        <!--  -->
        <img class="chanpinimg" src="../assets/分类1.jpg" alt="">
        <section class="a">
          <span class="aa"></span>
          <span>手机</span>
          <span class="aa"></span>
        </section>
        <section class="b">
          <router-link to="/xiangqing">
            <section>
              <img src="../assets/分类2.png" alt="">
              <br>
              <span>红米5</span>
            </section>
            <section>
              <img src="../assets/分类4.png" alt="">
              <br>
              <span>红米5Plus</span>
            </section>
            <section>
              <img src="../assets/分类2.png" alt="">
              <br>
              <span>小米MIX 2</span>
            </section>
            <section>
              <img src="../assets/分类4.png" alt="">
              <br>
              <span>小米Note 3</span>
            </section>
            <section>
              <img src="../assets/分类2.png" alt="">
              <br>
              <span>小米6</span>
            </section>
            <section>
              <img src="../assets/分类4.png" alt="">
              <br>
              <span>小米5X</span>
            </section>
          </router-link>
        </section>
        <section class="a">
          <span class="aa"></span>
          <span>电视</span>
          <span class="aa"></span>
        </section>
        <section class="b">
          <router-link to="/xiangqing">
            <section>
              <img src="../assets/分类3.png" alt="">
              <br>
              <span>32英寸</span>
            </section>
            <section>
              <img src="../assets/分类3.png" alt="">
              <br>
              <span>43英寸</span>
            </section>
            <section>
              <img src="../assets/分类3.png" alt="">
              <br>
              <span>55英寸</span>
            </section>
          </router-link>
        </section>
        <section class="a">
          <span class="aa"></span>
          <span>电视</span>
          <span class="aa"></span>
        </section>
        <section class="b">
          <router-link to="/xiangqing">
            <section>
              <img src="../assets/分类5.png" alt="">
              <br>
              <span>32英寸</span>
            </section>
            <section>
              <img src="../assets/分类5.png" alt="">
              <br>
              <span>43英寸</span>
            </section>
            <section>
              <img src="../assets/分类5.png" alt="">
              <br>
              <span>55英寸</span>
            </section>
          </router-link>
        </section>

      </section>
    <!-- </scroller> -->

  </div>
</template>

<script>
  import { Scroller, Divider, Spinner, XHeader, Search, Tabbar, TabbarItem, Group, Cell, XButton } from 'vux'
  export default {
    components: {
      Scroller,
      Divider,
      Spinner,
      XHeader,
      Search,
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      XButton
    },
    data() {
      return {
        scrollTop: 0,
        titles: ['新品', '手机', '电视', '电脑', '家电', '路由', '智能', '儿童', '电源', '耳机', '音箱', '礼品', '生活', '米粉', '零售'],
      }
    },
    methods: {
      console() {
        console.log('click')
      },
      onScroll(pos) {
        this.scrollTop = pos.top
      }
    }
  }
</script>

<style>
  .chanpin {
    width: 78%;
    height: 100%;
    float: right;
    padding-top: 12%;
    padding-bottom: 20%;
  }

  .chanpinimg {
    width: 90%;
    height: 7rem;
    padding: 0.6rem;
  }

  .a {
    margin-left: 6rem;
  }

  .a .aa {
    display: inline-block;
    width: 2rem;
    height: 2px;
    background-color: #ccc;
  }

  .b {
    width: 100%;
    margin-top: 0.4rem;
  }

  .b section {
    width: 33.3%;
    float: left;
    text-align: center;
  }

  .b img {
    width: 4rem;
    height: 4rem;
    margin-left: 1rem;
    margin-top: 1rem;
  }

  .b span {
    width: 100%;
    font-size: 0.8rem;
    color: #555;
  }

  .box2 {
    position: fixed;
    width: 21%;
    border-right: 1px solid #eee;
    margin-top: 13%;
    float: left;
  }

  .box2 p {
    font-size: 0.8rem;
    display: inline-block;
    margin-top: 30%;
    margin-left: 33%;
    color: #444;
  }

  .vux-x-icon {
    fill: #ccc;
  }

  #daohang a {
    color: #555;
  }

  #daohang span {
    font-size: 1rem;
    color: #555;
  }
</style>