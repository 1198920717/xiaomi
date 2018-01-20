<template>
    <div>
        <!-- 轮播图 -->
        <router-link to="/xiangqing">
            <swiper auto height="200px" style="margin-top:5.1rem">
                <swiper-item class="black">
                    <img src="../assets/轮播图1.jpg" alt="">
                </swiper-item>
                <swiper-item class="black">
                    <img src="../assets/轮播图2.jpg" alt="">
                </swiper-item>
                <swiper-item class="black">
                    <img src="../assets/轮播图1.jpg" alt="">
                </swiper-item>
                <swiper-item class="black">
                    <img src="../assets/轮播图4.jpg" alt="">
                </swiper-item>
            </swiper>
        </router-link>
        <!-- 功能 -->
        <div class="a">
            <div>
                <img src="../assets/米粉卡.jpg" alt="">
            </div>
            <div>
                <img src="../assets/新品发布.jpg" alt="">
            </div>
            <div>
                <img src="../assets/以旧换新.jpg" alt="">
            </div>
            <div>
                <img src="../assets/物流查询.jpg" alt="">
            </div>
        </div>
        <!-- 产品详情 -->
        <router-link to="/shouye3">
            <div class="b">
                <div class="b-a">
                    <div class="b-a-a">
                        <img src="../assets/产品4.jpg" alt="">
                    </div>
                    <div class="b-a-b">
                        <div class="b-a-b-a">
                            <img src="../assets/产品3.jpg" alt="">
                        </div>
                        <div class="b-a-b-b">
                            <img src="../assets/产品1.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="b-b">
                    <img src="../assets/产品2.jpg" alt="">
                </div>
            </div>
            <div class="c">
                <img src="../assets/首页明星单品1.jpg" alt="">
                <img src="../assets/首页明星单品2.jpg" alt="">
                <img src="../assets/首页明星单品3.jpg" alt="">
                <img src="../assets/首页明星单品4.jpg" alt="">
            </div>
            <div class="d">
                <span>更多新品 ></span>
            </div>
        </router-link>
    </div>
</template>

<script>
    import shouye2 from '../components/shouye2';
    import shouye3 from '../components/shouye3';
    const imgList = [
        require('../assets/轮播图1.jpg'),
        require('../assets/轮播图2.jpg'),
        require('../assets/轮播图3.jpg'),
        require('../assets/轮播图4.jpg')
    ]

    import { Scroller, Spinner, LoadMore, Tab, TabItem, Sticky, GroupTitle, Divider, Swiper, SwiperItem, Search, Tabbar, TabbarItem, Group, Cell, XButton } from 'vux'
    const list = () => ['推荐', '手机', '智能', '电视', '电脑', '全面屏']
    export default {

        props: ['listImg'],
        components: {
            shouye2,
            shouye3,
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
                currentTab: 'shouye2',
                showList1: true,
                scrollTop: 0,
                onFetching: false,
                bottomCount: 20,

                index01: 0,
                list2: list(),
                demo2: '美食',
                index: 0,
                results: [],
                value: '搜索商品名称',
                index: 0,
                titles: ['推荐', '手机', '智能', '电视', '电脑', '全面屏', '生活周边', '盒子', '艺术'],
                getBarWidth: function (index) {
                    return (index + 1) * 22 + 'px'
                }
            }
        },
        methods: {
            toggleTab: function (tab) {
                this.currentTab = tab; // tab 为当前触发标签页的组件名
            },

            setFocus() {
                this.$refs.search.setFocus()
            },
            switchTabItem(index) {
                console.log('on-before-index-change', index)
                this.$vux.loading.show({
                    text: 'loading'
                })
                setTimeout(() => {
                    this.$vux.loading.hide()
                    this.index01 = index
                }, 1000)
            },
            onItemClick(index) {
                console.log('on item click:', index)
            },
            addTab() {
                if (this.list2.length < 5) {
                    this.list2 = list().slice(0, this.list2.length + 1)
                }
            },
            removeTab() {
                if (this.list2.length > 1) {
                    this.list2 = list().slice(0, this.list2.length - 1)
                }
            },
            next() {
                if (this.index === this.list2.length - 1) {
                    this.index = 0
                } else {
                    ++this.index
                }
            },
            prev() {
                if (this.index === 0) {
                    this.index = this.list2.length - 1
                } else {
                    --this.index
                }
            },
            onScrollBottom() {
                if (this.onFetching) {
                    // do nothing
                } else {
                    this.onFetching = true
                    setTimeout(() => {
                        this.bottomCount += 10
                        this.$nextTick(() => {
                            this.$refs.scrollerBottom.reset()
                        })
                        this.onFetching = false
                    }, 2000)
                }
            },
            onScroll(pos) {
                this.scrollTop = pos.top
            },
            onCellClick() {
                window.alert('cell click')
            },
            onClickButton() {
                window.alert('click')
            },
            changeList() {
                this.showList1 = false
                this.$nextTick(() => {
                    this.$refs.scroller.reset({
                        top: 0
                    })
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/center.less';
    .black img{
        width: 100%;
    }
    .clear {
        clear: both;
    }

    .zong {
        width: 100%;
        /* height: 5rem; */
        position: fixed;
        top: 0;
        z-index: 99999;
    }

    #toubu {
        position: fixed;
        width: 100%;
        background-color: #eee;
        z-index: 888;
    }

    #abc {
        position: relative;
        z-index: 777;
    }

    #toubu img {
        margin-left: 1rem;
    }

    #lunbo {
        width: 100%;
        margin: 0 auto;
        padding-top: 5rem;
    }

    .search {
        position: relative;
        border: 1px solid #ccc;
        color: #ccc;
        width: 16rem;
        padding: 0.25rem;
        margin-top: 0.3rem;
        margin-bottom: 0.25rem;
        border-radius: 3px;
        margin-left: 3.6rem;
        background-color: white;
    }

    .xiaomi {
        width: 1.6rem;
        height: 1rem;
        float: left;
        padding-top: 1rem;
    }

    .xiaoren {
        width: 1.3rem;
        height: 1.3rem;
        float: right;
        margin-top: -2rem;
        margin-right: 1rem;
    }

    .search img {
        width: 0.8rem;
        height: 0.8rem;
    }

    .box1 {
        width: 150%;
        /* height: 2.5rem; */
        background: #efeff4;
        font-size: 0.9rem;
        white-space: nowrap;
        margin-top: 2.7rem;
    }

    .box1-item {
        margin-left: 1rem;
        display: inline-block;
        padding: 0 .4rem;
        color: rgb(116, 116, 116);
        line-height: 37px;
        border-bottom: 2px solid rgba(237, 91, 0, 0)
    }

    .active-6-1 {
        color: rgb(241, 245, 8) !important;
        border-color: rgb(252, 232, 55) !important;
    }

    .active-6-2 {
        color: #04be02 !important;
        border-color: #04be02 !important;
    }

    .active-6-3 {
        color: rgb(55, 174, 252) !important;
        border-color: rgb(55, 174, 252) !important;
    }

    .a {
        width: 100%;
        height: 100%;
        margin: 0;
    }

    .a div {
        width: 25%;
        height: 25%;
        background-color: red;
        float: left;

    }

    .a img {
        width: 100%;
        height: 100%;
        float: left;
    }

    .b {
        width: 100%;
        height: 100%;
        float: left;
    }

    .b .b-a {
        width: 100%;
        height: 100%;
        float: left;
    }

    .b .b-b {
        width: 100%;
        height: 100%;
        /* margin-bottom: 3rem; */
    }

    .b .b-b img {
        width: 100%;
        height: 100%;
        float: left;
        margin: 0;
    }

    .b .b-a .b-a-a img {
        width: 100%;
        height: 100%;
        float: left;
        margin: 0;
    }

    .b .b-a .b-a-a {
        width: 50%;
        height: 100%;
        float: left;
    }

    .b .b-a .b-a-b {
        width: 50%;
        height: 100%;
        float: right;
    }

    .b .b-a .b-a-b .b-a-b-a {
        width: 100%;
        height: 50%;
    }

    .b .b-a .b-a-b .b-a-b-a img {
        width: 100%;
        height: 100%;
        margin: 0;
    }

    .b .b-a .b-a-b .b-a-b-b {
        width: 100%;
        height: 50%;
        margin-top: -0.2rem;
    }

    .b .b-a .b-a-b .b-a-b-b img {
        width: 100%;
        height: 100%;
        margin: 0;
    }
    .c{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .c img {
        width: 100%;
        height: 100%;
    }

    .d {
        width: 100%;
        height: 3rem;
        margin-bottom: 3.3rem;
        text-align: center;
        line-height: 3rem;
        border-top: 1px solid #ccc;
    }

    .d span {
        color: #666;
    }
</style>