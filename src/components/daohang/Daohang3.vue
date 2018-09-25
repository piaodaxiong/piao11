<template>
    <div>
        <!-- :style="daohang_yinchang" -->
        <div class="juzhong3">
            <div>
                <div class="left_daohang" @mouseleave="mouseleave11()">
                    <button id="btn2" @mouseenter="mouseenter11()">
                        <div></div><span>全部商品分类</span>
                    </button>
                    <ul @mouseleave="mouseleave()">
                        <li v-for="(item,index) in fenlei.list" @mouseenter="mouseenter(index,$event)">
                            <div>
                                <h2>{{item.title}}</h2>
                                <span class="el-icon-caret-right"></span>
                            </div>
                            <section>
                                <a href="" v-for='aa in item.content'>{{aa}}<span>/</span></a>
                            </section>
                        </li>
                        <Mulu1 :style="Mulu1"></Mulu1>
                        <Mulu2 :style="Mulu2"></Mulu2>
                        <Mulu3 :style="Mulu3"></Mulu3>
                        <Mulu4 :style="Mulu4"></Mulu4>
                    </ul>
                </div>
                <div id="right_daohang">
                    <a href="#/"><strong @click="myclick00()">首页</strong></a>
                    <a href="#/Xiaoliang"><strong @click="myclick11()">销量TOP</strong></a>
                    <a href="#/Pinpaiguan"><strong @click="myclick22()">品牌馆</strong></a>
                    <a href="#/Jiankangbaike"><strong>健康百科</strong></a>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Mulu1 from "@/components/mulu/Mulu1";
    import Mulu2 from "@/components/mulu/Mulu2";
    import Mulu3 from "@/components/mulu/Mulu3";
    import Mulu4 from "@/components/mulu/Mulu4";

    export default {
        name: "daohang3",
        data() {
            return {
                Mulu1: "display: none;",
                Mulu2: "display: none;",
                Mulu3: "display: none;",
                Mulu4: "display: none;",

                fenlei: {
                    list: [
                        {
                            title: "健康需求 / 营养对照",
                            content: ["美白祛斑 ", "产后减肥", "补肾填精", "调节三高"]
                        },
                        {
                            title: "人群需求 / 营养对照",
                            content: ["0-18岁 ", "19-34岁女性", "35-45岁男性", "45-65岁"]
                        },
                        {
                            title: "营养保健",
                            content: ["葡萄籽 ", "蔓越莓", "玛卡", "DHA", "番茄红素"]
                        },
                        {
                            title: "滋补养生",
                            content: ["西洋参", " 灵芝", " 三七粉", "辣木籽"]
                        },
                        {
                            title: "品牌推荐",
                            content: ["Swisse", "紫一", "GNC", "汤臣倍健"]
                        }
                    ]
                }
            };
        },
        methods: {
            mouseenter11(){
                $('.left_daohang>ul').css({
                    'display':'block'
                })
            },
            mouseleave11(){
                $('.left_daohang>ul').css({
                    'display':'none'
                })
            },
            myclick00(){
                $('.left_daohang>ul').css({
                    'display':'block'
                })
            },
            myclick11(){
                $('.left_daohang>ul').css({
                    'display':'none'
                })
            },
            myclick22(){
                $('.left_daohang>ul').css({
                    'display':'none'
                })
            },
            mouseenter(index, e) {
                if (index == 0) {
                    this.Mulu1 = "";
                    this.Mulu2 = "display: none;";
                    this.Mulu3 = "display: none;";
                    this.Mulu4 = "display: none;";
                } else if (index == 1) {
                    this.Mulu2 = "";
                    this.Mulu1 = "display: none;";
                    this.Mulu3 = "display: none;";
                    this.Mulu4 = "display: none;";
                } else if (index == 2) {
                    this.Mulu3 = "";
                    this.Mulu2 = "display: none;";
                    this.Mulu1 = "display: none;";
                    this.Mulu4 = "display: none;";
                } else if (index == 3) {
                    this.Mulu4 = "";
                    this.Mulu2 = "display: none;";
                    this.Mulu3 = "display: none;";
                    this.Mulu1 = "display: none;";
                } else {
                    this.Mulu1 = "display: none;";
                    this.Mulu2 = "display: none;";
                    this.Mulu3 = "display: none;";
                    this.Mulu4 = "display: none;";
                }
            },
            mouseleave() {
                this.Mulu1 = "display: none;";
                this.Mulu2 = "display: none;";
                this.Mulu3 = "display: none;";
                this.Mulu4 = "display: none;";
            }
        },
        components: {
            Mulu1,
            Mulu2,
            Mulu3,
            Mulu4
        }
    };
</script>

<style>
    .left_daohang section>a:nth-child(4)>span {
        display: none;
    }

    .juzhong3 {
        margin: 0 auto;
        width: 1200px;
        position: relative;
    }

    .juzhong3>div {
        position: relative;
        display: flex;
    }

    #btn2 {
        width: 100%;
        line-height: 40px;
        background-color: #6f00af;
        border: none;
        font-size: 16px;
        color: white;
        display: flex;
        align-items: center;
        padding-left: 10px;
        box-sizing: border-box;
    }

    #btn2>span {
        font-size: 15px;
        padding-left: 5px;
        box-sizing: border-box;
    }

    #btn2>div {
        width: 20px;
        height: 20px;
        background-image: url("https://www.ziyimall.com/images/icon1.png");
        background-position: -185px 5px;
    }

    .left_daohang {
        width: 18%;
    }

    .left_daohang>ul {
        width: 18%;
        height: 450px;
        position: absolute;
        top: 40px;
        left: 0;
        z-index: 100;
    }

    .left_daohang>ul>li {
        width: 100%;
        height: 20%;
        background-color: #6f00af;
        border-top: 1px solid #b253c3;
        opacity: 0.8;
        box-sizing: border-box;
        padding: 10px 10px;
    }

    .left_daohang>ul>li h2 {
        color: white;
        font-size: 16px;
        line-height: 25px;
    }

    .left_daohang>ul>li a {
        color: white;
        font-size: 14px;
        line-height: 20px;
        font-weight: normal;
        padding-right: 5px;
    }

    .left_daohang>ul>li a:hover {
        text-decoration: underline;
    }

    .left_daohang>ul>li div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .left_daohang>ul>li span {
        color: white;
        font-size: 15px;
    }

    .left_daohang>ul>li section {
        padding-right: 10px;
    }

    #right_daohang {
        width: 35%;
        line-height: 40px;
        font-size: 16px;
        display: flex;
        justify-content: space-around;
    }

    #right_daohang * {
        font-size: 16px;
    }

    #right_daohang>a:hover {
        color: #b253c3;
    }
</style>