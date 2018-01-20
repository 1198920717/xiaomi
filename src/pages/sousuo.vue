<template>
    <div>
        <div class="headera">
            <img class="headerimg1" src="../assets/返回.png" alt="" onclick="window.history.go(-1)">
            <input type="text" value="搜索商品名称">
            <img class="headerimg2" src="../assets/搜索2.png" alt="">
        </div>
        <div class="span">
            <span>热门搜索</span>
        </div>
        <img class="img" src="../assets/搜索img.jpg" alt="">
        <div class="footer">
            <div>
                <span>红米5 新品</span>
            </div>
            <div>
                <span>电视32英寸</span>
            </div>
            <div>
                <span>净水器厨下</span>
            </div>
            <div>
                <span>小米MAX 2</span>
            </div>
            <div>
                <span>小米笔记本Pro</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .headera {
        width: 100%;
        height: 3rem;
        background-color: #eee;
    }

    .headera img {
        width: 8%;
        height: 60%;
    }

    .headera .headerimg1 {
        padding: 2.5%;
    }

    .headera .headerimg2 {
        padding: 2.5%;
        float: right;
    }

    .headera input {
        position: absolute;
        width: 73%;
        height: 1.8rem;
        border: 1px solid #ddd;
        display: inline-block;
        margin-top: 0.6rem;
        font-size: 1rem;
        padding-left: 0.5rem;
        color: #777;
    }
    .span{
        padding: 3%;
        font-size: 0.8rem;
        color: #777;
    }
    .img{
        width: 100%;
        height: 100%;
    }
    .footer div{
        font-size: 0.8rem;
        color: #555;
        text-align: center;
        padding-left: 2%;
        padding-right: 2%;
        padding-top: 1.3%;
        padding-bottom: 1.3%;
        border: 1px solid #ccc;
        float: left;
        margin-top: 1.7%;
        margin-left: 4%;
    }
</style>