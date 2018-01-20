<template>
    <div class="body">
        <!-- 轮播图 -->
        <swiper id="lunbo" :list="demo03_list" auto height="412.5px" style="z-index:9;" dots-class="custom-bottom" dots-position="center"></swiper>
        <div class="a">
            <img src="../assets/返回1.png" alt="" onclick="window.history.go(-1)">
        </div>
        <div class="b">
            <img src="../assets/分享.png" alt="">
        </div>
        <div class="c">
            <img src="../assets/领券减30元.png" alt="">
        </div>
        <div class="d">
            <img src="../assets/详情立即购买.jpg" alt="">
        </div>
        <div class="e">
            <span class="e-1">红米5A 轻巧长续航</span>
            <br>
            <span class="e-2"> [手机品牌限时特惠:用券立减30元，可享小米分期最高6期免息]</span>
            <br>
            <span class="e-3">
                <b>￥599</b>
            </span>
        </div>
        <div class="f">
            <span class="f-1">领券</span>
            <div class="f-2">
                <span>
                    <b> 红米5A 30元优惠券</b>
                </span>
            </div>
            <img class="f-3" src="../assets/前进.png" alt="">
        </div>
        <div class="g">
            <div class="g-1">
                <span class="g-1-1">已选</span>
                <div class="g-1-2">
                    <span>红米5A 铂银灰 16GB x1</span>
                </div>
                <img class="f-3" src="../assets/前进.png" alt="">
            </div>
            <div class="g-1">
                <span class="g-1-1">送至</span>
                <div class="g-1-2">
                    <span>北京市 东城区 有现货</span>
                </div>
                <img class="f-3" src="../assets/前进.png" alt="">
            </div>
            <div class="g-1">
                <div class="g-1-3">
                    <span>支持7天无理由退货</span>
                </div>
            </div>
        </div>
        <div class="h">
            <img src="../assets/用户评论.png" alt="">
        </div>
        <div class="i">
            <div class="i-1"><span>概述</span></div>
            <div class="i-1"><span>参数</span></div>
            <div class="i-1"><span>意外险</span></div>
        </div>
        <div class="j">
            <img src="../assets/产品详情1.jpg" alt="">
            <img src="../assets/产品详情2.jpg" alt="">
            <img src="../assets/产品详情3.jpg" alt="">
            <div class="j-1"><span>查看全部图文详情></span></div>
        </div>

    </div>
</template>
<script>
    const imgList = [
        require('../assets/详情轮播图1.jpg'),
        require('../assets/详情轮播图2.jpg'),
        require('../assets/详情轮播图3.jpg'),
        require('../assets/详情轮播图4.jpg'),
    ]
    const demoList = imgList.map((one, index) => ({
        url: 'javascript:',
        img: one
    }))
    import { Scroller, Spinner, LoadMore, Tab, TabItem, Sticky, GroupTitle, Divider, Swiper, SwiperItem, Search, Tabbar, TabbarItem, Group, Cell, XButton } from 'vux'
    export default {
        components: {
            Scroller,
            Spinner,
            GroupTitle,
            Tab,
            TabItem,
            Sticky,
            Divider,
            Search,
            Tabbar,
            TabbarItem,
            Group,
            Cell,
            XButton,
            Swiper,
            SwiperItem,
            LoadMore
        },
        data() {
            return {
                demo03_list: demoList,
            }
        }
    }
</script>

<style scoped>
    .body {
        background-color: #eee;
    }
    .a {
        position: relative;
        width: 2rem;
        height: 2rem;
        background-color: #444;
        border-radius: 50%;
        margin-top: -25rem;
        margin-left: 1rem;
        z-index: 999999;
    }
    .a img {
        width: 1.5rem;
        height: 1.5rem;
        padding: 0.25rem;
    }
    .b {
        position: relative;
        width: 2rem;
        height: 2rem;
        background-color: #444;
        border-radius: 50%;
        margin-top: -2.3rem;
        margin-left: 20.7rem;
        z-index: 999999;
    }
    .b img {
        width: 1.5rem;
        height: 1.5rem;
        padding: 0.25rem;
    }
    .c {
        position: relative;
        border-radius: 50%;
        margin-top: 17rem;
        margin-left: 19rem;
        z-index: 999999;
    }
    .c img {
        width: 3.3rem;
        height: 3.3rem;
        padding: 0.25rem;
    }
    .d img {
        padding-top: 2.1rem;
        width: 100%;
        height: 100%;
    }
    .e {
        background-color: white;
        margin-top: -0.3rem;
    }
    .e-1 {
        font-size: 1.2rem;
        padding-left: 5%;
    }
    .e-2 {
        display: inline-block;
        width: 85%;

        font-size: 0.8rem;
        color: rgb(255, 74, 0);
        padding-left: 6%;
    }
    .e-3 {
        font-size: 1.6rem;
        color: #ff6700;
        padding-left: 4%;

    }
    .f {
        width: 100%;
        height: 2.3rem;
        border-top: 1px solid #ccc;
        background-color: white;
    }
    .f-1 {
        font-size: 0.9rem;
        color: #666;
        line-height: 2.3rem;
        float: left;
        padding-left: 1rem;
    }
    .f-2 {
        float: left;
        text-align: center;
        background-color: #f66;
        width: 35%;
        height: 1rem;
        margin-top: 0.7rem;
        line-height: 0.8rem;
        margin-left: 1rem;
    }
    .f-2 span {
        font-size: 0.7rem;
        color: white;
    }
    .f-3 {
        padding-top: 0.2rem;
        width: 2rem;
        height: 2rem;
        line-height: 1.5rem;
        float: right;
    }
    .g {
        position: relative;
        margin-top: 0.3rem;
    }
    .g-1{
        width: 100%;
        height: 2.3rem;
        border-top: 1px solid #ccc;
        background-color: white;
    }
    .g-1-1{
        font-size: 0.9rem;
        color: #666;
        line-height: 2.3rem;
        float: left;
        padding-left: 1rem;
    }
    .g-1-3 span{
        color: #666;
        font-size: 0.7rem;
        padding-left: 17%;
    }
    .g-1-2 {
        float: left;
        width: 50%;
        height: 1rem;
        margin-top: 0.7rem;
        line-height: 0.8rem;
        margin-left: 1rem;
    }
    .g-1-2 span {
        font-size: 0.9rem;
        color: #777;
    }
    .h img{
        margin-top: 0.5rem;
    }
    .i{
        width: 100%;
        height: 3rem;
        background-color: white;
    }
    .i div{
        width: 33.3%;
        height: 100%;
        float: left;
        text-align: center;
        line-height: 3rem;
        font-size: 0.8rem;
        color: #333;
    }
    .j img{
        width: 100%;
        height: 100%;
    }
    .j-1{
        width: 100%;
        height: 3rem;
        background-color: white;
        margin-bottom: 3.4rem;
    }
    .j-1 span{
        margin-left: 35%;
        text-align: center;
        line-height: 3rem;
        font-size: 0.8rem;
        color: #ff6700;
    }
</style>