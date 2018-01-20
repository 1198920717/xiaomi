<template>
    <div>
        <div class="a">
            <div class="a-1">
                <img src="../assets/电视1.jpg" alt="">
            </div>
            <div class="a-3">
                <div>
                    <img src="../assets/电视2.jpg" alt="">
                </div>
                <div>
                    <img src="../assets/电视1.jpg" alt="">
                </div>
                <div>
                    <img src="../assets/电视2.jpg" alt="">
                </div>
                <div>
                    <img src="../assets/电视1.jpg" alt="">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
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
                showList1: true,
                scrollTop: 0,
                onFetching: false,
                bottomCount: 20,
             
                index01: 0,
                index: 0,
                results: [],
                index: 0,
                getBarWidth: function (index) {
                    return (index + 1) * 22 + 'px'
                }
            }
        }
    }
</script>

<style lang="less" scoped>
     .a{
        margin: 0;
        padding-top: 5.1rem;
    }
    .a-2 {
        margin-top: -0.33rem;
        width: 100%;
    }

    .a-2 img {
        width: 20%;
        height: 100%;
        float: left;
    }

    .a-1 img {
        width: 100%;
        height: 100%;
    }

    .a-3 img {
        margin-top: -0.5rem;
        width: 100%;
        height: 100%;
    }
</style>