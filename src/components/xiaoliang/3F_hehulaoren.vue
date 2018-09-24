<template>
    <div class="yanghuxiangmu">
        <h2>3F-呵护老人</h2>
        <ul>
            <li @mouseenter="myqiehuan1()"><a href="" :style="yanseqiehuan1">调节三高</a></li>
            <li @mouseenter="myqiehuan2()"><a href="" :style="yanseqiehuan2">心脑血管</a></li>
            <li @mouseenter="myqiehuan3()"><a href="" :style="yanseqiehuan3">补钙健骨</a></li>
            <!-- <li @mouseenter="myqiehuan4()"><a href="" :style="yanseqiehuan4">玛卡</a></li> -->
        </ul>
        <div class="yanghuchanpin" v-show="qiehuan11">
            <div class="yanhuanshuailao" v-for="item in meirongyangyan">
                <div class="yanhuanshuailaochanpin" @mouseenter="mymouseender($event)" @mouseleave='mymouseleave($event)'
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
        <div class="yanghuchanpin" v-show="qiehuan12">
            <div class="yanhuanshuailao" v-for="item in meirongyangyan">
                <div class="yanhuanshuailaochanpin" @mouseenter="mymouseender($event)" @mouseleave='mymouseleave($event)'
                    v-for="item2 in item.no2">
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
        <div class="yanghuchanpin" v-show="qiehuan13">
            <div class="yanhuanshuailao" v-for="item in meirongyangyan">
                <div class="yanhuanshuailaochanpin" @mouseenter="mymouseender($event)" @mouseleave='mymouseleave($event)'
                    v-for="item2 in item.no3">
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
        <div class="yanghuchanpin" v-show="qiehuan14">
            <div class="yanhuanshuailao" v-for="item in meirongyangyan">
                <div class="yanhuanshuailaochanpin" @mouseenter="mymouseender($event)" @mouseleave='mymouseleave($event)'
                    v-for="item2 in item.no4">
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                qiehuan11: true,
                qiehuan12: false,
                qiehuan13: false,
                qiehuan14: false,
                yanseqiehuan1: 'border-bottom: 2px solid red;color:red;',
                yanseqiehuan2: '',
                yanseqiehuan3: '',
                yanseqiehuan4: '',
                meirongyangyan: [
                    {
                        no1: [
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201808/15/20180815145137fSHUpJ87_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201808/15/20180815145137fSHUpJ87_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201808/15/20180815145137fSHUpJ87_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201808/15/20180815145137fSHUpJ87_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201808/15/20180815145137fSHUpJ87_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201808/15/20180815145137fSHUpJ87_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201808/15/20180815145137fSHUpJ87_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201808/15/20180815145137fSHUpJ87_Thumb.jpg' }
                        ]
                    },
                    {
                        no2: [
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201805/15/20180515151729AK6dZRi9_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201805/15/20180515151729AK6dZRi9_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201805/15/20180515151729AK6dZRi9_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201805/15/20180515151729AK6dZRi9_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201805/15/20180515151729AK6dZRi9_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201805/15/20180515151729AK6dZRi9_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201805/15/20180515151729AK6dZRi9_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201805/15/20180515151729AK6dZRi9_Thumb.jpg' }
                        ]
                    },
                    {
                        no3: [
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201707/12/201707121132578AeP5w67_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201707/12/201707121132578AeP5w67_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201707/12/201707121132578AeP5w67_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201707/12/201707121132578AeP5w67_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201707/12/201707121132578AeP5w67_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201707/12/201707121132578AeP5w67_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201707/12/201707121132578AeP5w67_Thumb.jpg' },
                            { tupian: 'https://www.ziyimall.com/file_img/products/63/201707/12/201707121132578AeP5w67_Thumb.jpg' }
                        ]
                    },
                    // {
                    //     no4: [
                    //         { tupian: 'https://www.ziyimall.com/file_img/products/63/201712/1/20171201160638VEoLgd1g_Thumb.jpg' },
                    //         { tupian: 'https://www.ziyimall.com/file_img/products/63/201712/1/20171201160638VEoLgd1g_Thumb.jpg' },
                    //         { tupian: 'https://www.ziyimall.com/file_img/products/63/201712/1/20171201160638VEoLgd1g_Thumb.jpg' },
                    //         { tupian: 'https://www.ziyimall.com/file_img/products/63/201712/1/20171201160638VEoLgd1g_Thumb.jpg' },
                    //         { tupian: 'https://www.ziyimall.com/file_img/products/63/201712/1/20171201160638VEoLgd1g_Thumb.jpg' },
                    //         { tupian: 'https://www.ziyimall.com/file_img/products/63/201712/1/20171201160638VEoLgd1g_Thumb.jpg' },
                    //         { tupian: 'https://www.ziyimall.com/file_img/products/63/201712/1/20171201160638VEoLgd1g_Thumb.jpg' },
                    //         { tupian: 'https://www.ziyimall.com/file_img/products/63/201712/1/20171201160638VEoLgd1g_Thumb.jpg' }
                    //     ]
                    // }
                ],
            }
        },
        methods: {
            mymouseender(e) {
                $(e.target).find("img").stop().animate({ width: "110%", height: "110%", marginTop: "-5%", marginLeft: "-5%" })
            },
            mymouseleave(e) {
                $(e.target).find("img").stop().animate({ width: "100%", height: "100%", marginTop: 0, marginLeft: 0 })
            },
            myqiehuan1() {
                this.qiehuan11 = true;
                this.qiehuan12 = false;
                this.qiehuan13 = false;
                this.qiehuan14 = false;
                this.yanseqiehuan1 = 'border-bottom: 2px solid red;color:red;';
                this.yanseqiehuan2 = '';
                this.yanseqiehuan3 = '';
                this.yanseqiehuan4 = '';
            },
            myqiehuan2() {
                this.qiehuan11 = false;
                this.qiehuan12 = true;
                this.qiehuan13 = false;
                this.qiehuan14 = false;
                this.yanseqiehuan1 = '';
                this.yanseqiehuan2 = 'border-bottom: 2px solid red;color:red;';
                this.yanseqiehuan3 = '';
                this.yanseqiehuan4 = '';
            },
            myqiehuan3() {
                this.qiehuan11 = false;
                this.qiehuan12 = false;
                this.qiehuan13 = true;
                this.qiehuan14 = false;
                this.yanseqiehuan1 = '';
                this.yanseqiehuan2 = '';
                this.yanseqiehuan3 = 'border-bottom: 2px solid red;color:red;';
                this.yanseqiehuan4 = '';
            },
            // myqiehuan4() {
            //     this.qiehuan11 = false;
            //     this.qiehuan12 = false;
            //     this.qiehuan13 = false;
            //     this.qiehuan14 = true;
            //     this.yanseqiehuan1 = '';
            //     this.yanseqiehuan2 = '';
            //     this.yanseqiehuan3 = '';
            //     this.yanseqiehuan4 = 'border-bottom: 2px solid red;color:red;';
            // }
        }
    }
</script>

<style>
    .yanghuxiangmu {
        width: 1200px;
        margin: 0 auto;
    }

    .yanghuxiangmu>h2 {
        width: 100%;
        margin: 20px auto 20px;
        font-size: 30px;
        text-align: center;
        font-weight: normal;
    }

    .yanghuxiangmu>ul {
        width: 100%;
        height: 45px;
        background-color: white;
        display: flex;
        justify-content: space-around;
    }

    .yanghuxiangmu>ul>li {
        cursor: pointer;
        height: 45px;
        line-height: 45px;
        width: 25%;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }
    .yanghuxiangmu>ul>li>a {
        height: 45px;
        font-size: 15px;
        font-weight: bold;
        padding: 0 10px;
        box-sizing: border-box;
    }

    .yanghuchanpin {
        width: 1216px;
        height: 832px;
        position: relative;
    }

    .yanhuanshuailao {
        display: flex;
        flex-wrap: wrap;
        position: absolute;
    }

    .yanhuanshuailaochanpin {
        width: 288px;
        height: 400px;
        background-color: white;
        border: 1px solid white;
        box-sizing: border-box;
        margin: 16px 16px 0 0;
        position: relative;
    }

    .yanhuanshuailao>div:hover {
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
        background-image: url('https://www.ziyimall.com/images/icon1.png');
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