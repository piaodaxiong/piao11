<template>
    <div id="pinpaiguan">
        <div id="meiguoguan">
            <img src="https://www.ziyimall.com/images/brand-banner.jpg" alt="">
        </div>
        <div class="remenpinpai2">
            热门品牌
        </div>
        <div class="remenpinpai2_chanpin1">
            <div>
                <img src="https://www.ziyimall.com/images/c5.jpg" alt="">
            </div>
            <div>
                <a href=""><img src="../../assets/imgs/20d68614-3bca-47e0-a448-ef39caaa6375.png" alt=""></a>
            </div>
            <div>
                <img src="https://www.ziyimall.com/images/c6.jpg" alt="">
            </div>
            <div>
                <a href=""><img src="../../assets/imgs/2d21b01d-ab57-4ef6-8d9f-0ee475e6320b.png" alt=""></a>
            </div>
        </div>
        <div class="remenpinpai2_chanpin2">
            <ul class="remenpinpai3">
                <li v-for="item5 in remenpinpai">
                    <a href="">
                        <div class="remenpinpai3_shangpin">
                            <img :src="item6" v-for='item6 in item5.shangpinpinpai'>
                        </div>
                        <h3>{{item5.pinpai}}</h3>
                        <span>{{item5.jianjie}}</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="remenpinpai2">保健品排行榜</div>

        <div class="yanghuchanpin11">
            <div class="yanhuanshuailao22" v-for="item in meirongyangyan">
                <div class="yanhuanshuailaochanpin11" @mouseenter="mymouseender($event)" @mouseleave='mymouseleave($event)'
                    v-for="item2 in item.no1">
                    <div class="yanghuchanpin_shang">
                        <a href=""><img :src="item2.tupian" alt=""></a>
                    </div>
                    <div class="yanghuchanpin_xia">
                        <div class="yanghuchanpin_jiage">
                            <span>￥</span>
                            <strong>338.00</strong>
                        </div>
                        <div class="yanghuchanpin_jianjie">
                            <span><a href="">巢之安牌 知本天韵胶囊 500mg*60粒（新老包装随机发货）</a></span>
                        </div>
                        <div class="yanghuchanpin_pinglun">
                            <div class="yanghuchanpin_pinglun_left">
                                <div></div><a href=""><span>4563</span></a>
                            </div>
                            <div class="yanghuchanpin_pinglun_right">
                                <a href="">100%好评</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Celan />
    </div>
</template>

<script>
    import Celan from "@/components/celan/Celan";

    export default {
        data() {
            return {
                remenpinpai: [
                    {
                        pinpai: "Puritan‘s Pride",
                        jianjie: "普丽普莱 全家人的健康管理师",
                        shangpinpinpai: [
                            "https://www.ziyimall.com/images/c1.jpg",
                            "https://www.ziyimall.com/images/1logo.png"
                        ]
                    },
                    {
                        pinpai: "Healthy Care",
                        jianjie: "澳洲少数获得TGA认证的保健品牌",
                        shangpinpinpai: [
                            "https://www.ziyimall.com/images/c2.jpg",
                            "https://www.ziyimall.com/images/2logo.png"
                        ]
                    },
                    {
                        pinpai: "Doppelherz",
                        jianjie: "德国双心 拥有百年历史品牌",
                        shangpinpinpai: [
                            "https://www.ziyimall.com/images/c3.jpg",
                            "https://www.ziyimall.com/images/3logo.png"
                        ]
                    },
                    {
                        pinpai: "Thompon’s ",
                        jianjie: "汤普森 呵护您的健康生活",
                        shangpinpinpai: [
                            "https://www.ziyimall.com/images/c4.jpg",
                            "https://www.ziyimall.com/images/4logo.png"
                        ]
                    }
                ],
                meirongyangyan: [
                    {
                        no1: [
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201807/31/20180731155544zDngd1lW_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201807/31/20180731155544zDngd1lW_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201807/31/20180731155544zDngd1lW_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201807/31/20180731155544zDngd1lW_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201807/31/20180731155544zDngd1lW_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201807/31/20180731155544zDngd1lW_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201807/31/20180731155544zDngd1lW_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201807/31/20180731155544zDngd1lW_Thumb.jpg"
                            },

                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201605/24/201605241421019sNHuSam_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201605/24/201605241421019sNHuSam_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201605/24/201605241421019sNHuSam_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201605/24/201605241421019sNHuSam_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201605/24/201605241421019sNHuSam_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201605/24/201605241421019sNHuSam_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201605/24/201605241421019sNHuSam_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201605/24/201605241421019sNHuSam_Thumb.jpg"
                            },

                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201806/30/20180630144142JKEECRiD_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201806/30/20180630144142JKEECRiD_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201806/30/20180630144142JKEECRiD_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201806/30/20180630144142JKEECRiD_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201806/30/20180630144142JKEECRiD_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201806/30/20180630144142JKEECRiD_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201806/30/20180630144142JKEECRiD_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201806/30/20180630144142JKEECRiD_Thumb.jpg"
                            },

                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201806/25/20180625103012YvLaTYFm_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201806/25/20180625103012YvLaTYFm_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201806/25/20180625103012YvLaTYFm_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201806/25/20180625103012YvLaTYFm_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201806/25/20180625103012YvLaTYFm_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201806/25/20180625103012YvLaTYFm_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201806/25/20180625103012YvLaTYFm_Thumb.jpg"
                            },
                            {
                                tupian:
                                    "https://www.ziyimall.com/file_img/products/63/201806/25/20180625103012YvLaTYFm_Thumb.jpg"
                            }
                        ]
                    }
                ]
            };
        },
        methods: {
            mymouseender(e) {
                $(e.target)
                    .find("img")
                    .stop()
                    .animate({
                        width: "110%",
                        height: "110%",
                        marginTop: "-5%",
                        marginLeft: "-5%"
                    });
            },
            mymouseleave(e) {
                $(e.target)
                    .find("img")
                    .stop()
                    .animate({
                        width: "100%",
                        height: "100%",
                        marginTop: 0,
                        marginLeft: 0
                    });
            }
        },
        components: {
            Celan
        }
    };
</script>

<style>
    #pinpaiguan {
        /* height: 4700px; */
        background-color: #eeeeee;
    }

    #meiguoguan {
        border-top: 2px solid #6f00af;
    }

    .remenpinpai2 {
        width: 1200px;
        text-align: center;
        height: 65px;
        font-size: 30px;
        padding-top: 20px;
        margin: 0 auto;
    }

    .remenpinpai2_chanpin1 {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        border-right: #eaeaea 1px solid;
    }

    .remenpinpai2_chanpin1>div {
        width: 300px;
        height: 299px;
        background-color: white;
    }

    .remenpinpai3 {
        width: 1200px;
        display: flex;
        margin: 0 auto;
        background-color: white;
        margin-top: 20px;
    }

    .remenpinpai3 * {
        font-size: 14px;
    }

    .remenpinpai3>li {
        width: 299px;
        height: 400px;
        border-right: #eaeaea 1px solid;
    }

    .remenpinpai3_shangpin {
        position: relative;
    }

    .remenpinpai3_shangpin>img:nth-child(2) {
        position: absolute;
        bottom: -40px;
        left: 110px;
    }

    .remenpinpai3>li>a:hover {
        text-decoration: underline;
    }

    .remenpinpai3>li>a>h3 {
        text-align: center;
        padding-top: 45px;
    }

    .remenpinpai3>li>a>span {
        display: flex;
        justify-content: center;
    }

    .yanghuchanpin11 {
        width: 1216px;
        margin: 0 auto;
        /* position: relative; */
        padding-bottom: 60px;
    }

    .yanhuanshuailao22 {
        width: 1216px;
        display: flex;
        flex-wrap: wrap;
    }

    .yanhuanshuailaochanpin11 {
        width: 288px;
        height: 400px;
        background-color: white;
        border: 1px solid white;
        box-sizing: border-box;
        margin: 16px 8px 0 8px;
        position: relative;
    }

    .yanhuanshuailao22>div:hover {
        border: 1px solid #f42f2f;
    }

    .yanghuchanpin_shang {
        width: 286px;
        height: 286px;
        overflow: hidden;
    }

    .yanghuchanpin_shang>a>img {
        width: 286px;
        height: 286px;
    }

    .yanghuchanpin_xia {
        width: 286px;
        height: 112px;
        padding: 0 10px;
        box-sizing: border-box;
    }

    .yanghuchanpin_jiage>span {
        font-size: 14px;
        color: #f42f2f;
    }

    .yanghuchanpin_jiage>strong {
        font-family: arial;
        font-weight: 700;
        font-size: 20px;
        color: #f42f2f;
        line-height: 22px;
    }

    .yanghuchanpin_jianjie>span>a {
        height: 20px;
        overflow: hidden;
        display: block;
        font-size: 14px;
        margin-top: 6px;
    }

    .yanghuchanpin_jianjie>span>a:hover {
        text-decoration: underline;
    }

    .yanghuchanpin_pinglun {
        width: 100%;
        margin-top: 25px;
        height: 22px;
        line-height: 22px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
    }

    .yanghuchanpin_pinglun_left {
        display: flex;
    }

    .yanghuchanpin_pinglun_left>a>span {
        font-size: 12px;
        color: #333;
    }

    .yanghuchanpin_pinglun_left>a:hover {
        text-decoration: underline;
    }

    .yanghuchanpin_pinglun_left>div {
        width: 20px;
        height: 20px;
        background-image: url("https://www.ziyimall.com/images/icon1.png");
        background-position: -58px -320px;
        font-size: 12px;
    }

    .yanghuchanpin_pinglun_right>a {
        font-size: 12px;
        color: #333;
    }

    .yanghuchanpin_pinglun_right>a:hover {
        text-decoration: underline;
    }
</style>