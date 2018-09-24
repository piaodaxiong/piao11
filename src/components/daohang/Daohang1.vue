<template>
    <div id="shouhang">
        <div class="juzhong1">
            <div class="shouhang_zuo">
                <span>紫一商城欢迎您！</span>
                <span id="saoma" @mouseover="Mouseover1()" @mouseout="Mouseout1()" class="el-icon-mobile-phone">扫码关注公众号</span>
                <img v-show="img_1" src="https://www.ziyimall.com/images/app1.jpg" alt="">
            </div>
            <div class="shouhang_you">
                <a href="javascript:;">登录</a>丨
                <a href="javascript:;">我的订单</a>丨
                <div @mouseover="Mouseover2()" @mouseout="Mouseout2()" class="gerenzhongxin">
                    <a href="javascript:;">个人中心 <span class="el-icon-caret-bottom"></span></a><br>
                    <div v-show="xl" class="gerenzhongxin2"><a href="javascript:;">个人中心 <span class="el-icon-caret-top"></span></a></div>
                    <div v-show="xl" class="gerenzhongxin_xuanxiang">
                        <a href="javascript:;">我的积分</a><br>
                        <a href="javascript:;">我收藏的商品</a><br>
                        <a href="javascript:;">我关注的品牌</a>
                    </div>
                </div>丨
                <span>客服热线：<span class="dianhua"> 400-189-1399</span></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'daohang1',
        data() {
            return {
                img_1: false,
                xl: false,
            };
        },
        methods: {
            Mouseover1() {
                // alert('xxxxxxxx')
                this.img_1 = true;
            },
            Mouseout1() {
                this.img_1 = false;
            },
            Mouseover2() {
                // alert('xxxxxxxx')
                this.xl = true;
            },
            Mouseout2() {
                this.xl = false;
            }
        }
    };
</script>

<style>
    #shouhang {
        background-color: #f2f2f2;
        color: #333;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #shouhang * {
        font-size: 12px;
    }

    .juzhong1 {
        margin: 0 auto;
        width: 1200px;
        position: relative;
    }

    .shouhang_zuo {
        width: 20%;
        line-height: 30px;
        position: relative;
    }

    #saoma {
        color: #8e38c0;
        margin-left: 10px;
    }

    .shouhang_zuo>img {
        width: 120px;
        height: 120px;
        position: absolute;
        top: 30px;
        left: 98px;
        z-index: 100;
    }

    .shouhang_you {
        width: 30%;
        line-height: 30px;
        /* background-color: lightblue; */
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        justify-content: space-around;
    }

    .shouhang_you a:hover {
        color: #8e38c0;
    }

    .dianhua {
        color: #8e38c0;
    }

    c {
        /* width: 1px; */
        color: #d3ccd3;
    }

    .gerenzhongxin {
        position: relative;
    }

    .gerenzhongxin2 {
        position: absolute;
        top: 0;
        left: -13px;
        padding-left: 15px;
        box-sizing: border-box;
        background-color: white;
        width: 90px;
        height: 30px;
    }

    .gerenzhongxin_xuanxiang {
        width: 105px;
        height: 100px;
        background-color: white;
        border: 1px solid #f2f2f2;
        border-top: none;
        position: absolute;
        top: 30px;
        left: -14px;
        padding-left: 15px;
        box-sizing: border-box;
        z-index: 100;
    }
</style>