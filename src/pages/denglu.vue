<template>
    <div>
        <div class="body">
            <div class="header6">
                <img src="../assets/登录小米.png" alt="">
                <br>
                <span>小米帐号登录</span>
            </div>
            <div class="shuru">
                <div class="shuru1">
                    <div>
                        <span>+86</span>
                    </div>
                    <input type="text" value="手机号码">
                </div>
                <div class="shuru2">
                    <input type="text" value="短信验证码">
                    <div>
                        <span>获取验证码</span>
                    </div>
                </div>
            </div>
            <div class="denglu">
                <div class="lan">
                    <span>立即登录/注册</span>
                </div>
                <div class="bai">
                    <span>用户名密码登录</span>
                </div>
            </div>
            <div class="xuxian">
                <span>其他方式登录</span>
            </div>
            <div class="qita">
                <img src="../assets/其他方式登录.png" alt="">
            </div>
            <div class="ziti">
                <span>简体</span> | <span>繁体</span> | <span>English</span> | <span>常见问题</span> 
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
    .body {
        width: 100%;
        height: 39rem;
        background-color: #eee;
    }

    .header6 {
        width: 100%;
        height: 20%;
        text-align: center;
        padding-top: 10%;
    }

    .header6 img {
        width: 13.5%;
        height: 40%;
    }

    .header6 span {
        font-size: 1.2rem;
        color: #333;
        display: inline-block;
        padding-top: 1rem;
    }

    .shuru {
        width: 89.5%;
        height: 13.6%;
        background-color: white;
        margin: 0 auto;
        border-radius: 15px;
    }

    .shuru div {
        width: 100%;
        height: 50%;
    }

    .shuru2 {
        border-top: 1px solid #ddd;
    }

    .shuru1 div {
        display: inline-block;
        width: 15%;
        height: 100%;
        text-align: center;
        border-right: 1px solid #ddd;
    }

    .shuru1 div span {
        display: inline-block;
        padding-top: 0.5rem;
        font-size: 0.7rem;
    }

    .shuru1 input {
        width: 80%;
        height: 90%;
        border: none;
        font-size: 1rem;
        color: #777;
    }

    .shuru2 div {
        display: inline-block;
        width: 32%;
        height: 100%;
        text-align: center;
        border-left: 1px solid #ddd;
    }

    .shuru2 div span {
        display: inline-block;
        padding-top: 0.5rem;
        font-size: 0.8rem;
        color: blue;
    }

    .shuru2 input {
        border-radius: 15px;
        padding-left: 1rem;
        width: 60%;
        height: 90%;
        border: none;
        font-size: 1rem;
        color: #777;
    }

    .denglu {
        width: 100%;
        height: 26%;
    }

    .denglu .lan {
        position: relative;
        margin: 1.5rem auto;
        width: 88.8%;
        height: 26%;
        background-color: #33b4ff;
        border-radius: 25px;
    }

    .denglu .lan span {
        position: absolute;
        padding-left: 7rem;
        padding-top: 0.5rem;
        color: white;
    }

    .denglu .bai {
        margin: 0 auto;
        width: 88.8%;
        height: 26%;
        background-color: white;
        border-radius: 25px;
    }

    .denglu .bai span {
        position: absolute;
        padding-left: 7rem;
        padding-top: 0.5rem;
    }

    .xuxian {
        border-top: 1px dashed #bdbdbd;
        padding-top: 10px;
    }

    .xuxian span {
        position: absolute;
        width: 5rem;
        font-size: 0.4rem;
        color: #b0b0b0;
        display:inline-block;
        background-color: #eee;
        margin-left: 40%;
        margin-top: -5.5%;
        text-align: center;
    }
    .qita{
        padding-top: 1rem;
        width: 100%;
        height: 10%;
    }
    .ziti{
        width: 70%;
        height: 5%;
        text-align: center;
        padding-left: 15%;
        padding-top: 2rem;
    }
    .ziti span{
        padding-left: 3%;
        padding-right: 3%;
        font-size: 0.9rem;
        color: #777;
    }
</style>