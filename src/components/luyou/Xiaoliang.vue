<template>
    <div id="xiaoliang">
        <div id="rexiaobang">
            <img src="https://www.ziyimall.com/images/list-banner.jpg" alt="">
            <div class="neirongjuzhong">
                <div class="rexiaobang_title">
                    <h2>热销榜</h2>
                    <h3>
                        <div></div>
                        <div>HOT ROLL LIST</div>
                        <div></div>
                    </h3>
                    <p>根据紫一商城的消费记录，以宝贝的销量为排名依据，告诉你，大家爱什么！</p>
                </div>
                <section class="rexiaobang_content" v-for="item in rexiaobang">
                    <span>{{item.paiming}}</span>
                    <div class="rexiaobang_content_left">
                        <div class="rexiaobang_content_tupian">
                            <a href="" v-for="cc in item.rexiaobangchanpin">
                                <img :src="cc" alt="">
                            </a>
                            <div class="rexiaobang_content_jianjie">
                                <a href=""><span>{{item.jianjie}}</span></a>
                                <div class="dianpingshuliang">
                                    <span>品牌：{{item.pinpai}}</span><span>共有 <i>{{item.pinpingrenshu}}</i> 人点评</span>
                                </div>
                                <div class="price">
                                    <span>￥{{item.jiage}}</span>
                                    <a href="">
                                        <div>点击购买</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rexiaobang_content_right">
                        <h2>精华评论</h2>
                        <a href="">
                            <p>{{item.pinglun}}</p>
                        </a>
                        <div>
                            <div v-for="dd in item.pingluntupian">
                                <img :src="dd" alt="">
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <Meirongyangyan />
        <Qiangjiannanren />
        <Hehulaoren />
        <Yajiankangtiaoli />
        <Zibuyangsheng />
    </div>

</template>

<script>
    import Meirongyangyan from '@/components/xiaoliang/1F_meirongyangyan';
    import Qiangjiannanren from '@/components/xiaoliang/2F_qiangjiannanren';
    import Hehulaoren from '@/components/xiaoliang/3F_hehulaoren';
    import Yajiankangtiaoli from '@/components/xiaoliang/4F_yajiankangtiaoli';
    import Zibuyangsheng from '@/components/xiaoliang/5F_zibuyangsheng';

    export default {
        data() {
            return {
                rexiaobang: [{
                    paiming: 1,
                    rexiaobangchanpin: ['https://www.ziyimall.com/file_img/products/63/201807/31/20180731155544zDngd1lW_Thumb.jpg'],
                    jianjie: '巢之安牌 知本天韵胶囊 500mg*60粒（新老包装随机发货）',
                    pinpai: '其他',
                    pinpingrenshu: 4563,
                    jiage: 398.00,
                    pinglun: '老顾客了，我已经吃了快三年了，一直在紫一商城购物。因为有效果，就一直坚持吃。最开始是睡眠不好，有点潮热，阴道干涩还好，面色一般般，有点乏力。就去医院检查了激素6项，结果显示卵泡发育不太好。后面在朋友的介绍下买了这款产品，也是按照营养师的提示服用的，果然没有令我失望。吃了一段时间，睡眠有很大的改善，更年期的症状也缓解了。后面就一直坚持吃，现在主要是保养量，睡前两粒，身边的朋友都说我变年轻了，皮肤也好了，总之，我觉得这个产品对我帮助还挺大的。',
                    pingluntupian: [
                        'https://www.ziyimall.com/file_img/products/63/201711/24/20171124112256oDXtKZQv_Thumb.jpg', 'https://www.ziyimall.com/file_img/products/63/201711/24/20171124110137g7SnrYoT_Thumb.jpg']

                }, {
                    paiming: 2,
                    rexiaobangchanpin: ['https://www.ziyimall.com/file_img/products/63/201804/19/20180419101745oinVXLh9_Thumb.jpg'],
                    jianjie: '绿瘦代餐奶昔 饱腹香芋味膳食纤维代餐粉 20g*12杯',
                    pinpai: '其他',
                    pinpingrenshu: 4120,
                    jiage: 89.00,
                    pinglun: '喝着特别过瘾，我每次都能喝饱，而且撑时间很长，不容易饿，吃的就少，现在已经瘦了有2斤了 我要坚持把我脸上的肉肉甩掉它，我要变美美美！！咳咳！口味还是很不错的，建议可以再少点甜度，整体还算很满意的，主要是这款产品可以代餐饱腹，早上没时间吃早饭的人 吃这个也是可以的，营养便捷',
                    pingluntupian: [
                        'https://www.ziyimall.com/file_img/products/63/201804/19/20180419135851cNMZFkC6_Thumb.jpg', 'https://www.ziyimall.com/file_img/products/63/201804/19/201804191358522K7AnYJP_Thumb.jpg',
                        'https://www.ziyimall.com/file_img/products/63/201804/19/20180419135852seyIQZQp_Thumb.jpg']
                }, {
                    paiming: 3,
                    rexiaobangchanpin: ['https://www.ziyimall.com/file_img/products/63/201710/21/20171021092630sK1spM2b_Thumb.jpg'],
                    jianjie: '云南 桃花泪桃胶 250g*瓶',
                    pinpai: '滋补品',
                    pinpingrenshu: 4191,
                    jiage: 59.80,
                    pinglun: '已经吃了好几次了才来评价，买前选了好多家，就冲着紫一的皂角米是天然没用糖水浸泡过来买的，桃胶品质好泡发率高，口感不错，有一点点杂质是可以接受的，毕竟桃胶就是来自于大自然更能证明它的天然性，而且这款云南桃花泪桃胶比较有名，品质不错，挺大一颗的，泡发率也确实达到了10倍以上，煮出来口感Q弹，蛮有嚼劲的，特别喜欢，客服还给我介绍了一些桃胶的知识，非常耐心的告诉我桃胶要3-4天吃一次，一次选6粒左右就行了，而且对膀胱保护作用，服务非常好，下次还会购买的。',
                    pingluntupian: [
                        'https://www.ziyimall.com/file_img/products/63/201808/3/20180803162053ZFf9I7ec_Thumb.jpg', 'https://www.ziyimall.com/file_img/63/201808/27/153533837058485486.jpg']
                }, {
                    paiming: 4,
                    rexiaobangchanpin: ['https://www.ziyimall.com/file_img/products/63/201806/25/20180625103012YvLaTYFm_Thumb.jpg'],
                    jianjie: '澳洲 Swisse 蔓越莓精华胶囊 呵护泌尿健康 30粒*瓶',
                    pinpai: 'Swisse',
                    pinpingrenshu: 4481,
                    jiage: 98.00,
                    pinglun: '去年朋友在这买了说好，后面我也来买了几瓶，蔓越莓搭配胶原蛋白液，一直吃到现在，效果不错，今年单位体检报告显示一度宫颈糜烂基本都消失了，日常感受最明显的就是白带正常了，皮肤也嫩嫩的，内调外养效果好！这次再来买咯套装，会继续坚持服用下去，这么好的东西已经分享给其他的闺蜜了，就看接下来今年的体检报告的效果了！会来追加的哦！',
                    pingluntupian: [
                        'https://www.ziyimall.com/file_img/products/63/201706/21/20170621164816GvhRaazQ_Thumb.jpg', 'https://www.ziyimall.com/file_img/products/63/201706/21/201706211648229A3TrxJv_Thumb.jpg']
                }, {
                    paiming: 5,
                    rexiaobangchanpin: ['https://www.ziyimall.com/file_img/products/63/201809/5/20180905095700qIKwTMfD_Thumb.jpg'],
                    jianjie: '云南 桃花泪桃胶 250g*瓶',
                    pinpai: '滋补品',
                    pinpingrenshu: 4191,
                    jiage: 129.00,
                    pinglun: '已经吃了好几次了才来评价，买前选了好多家，就冲着紫一的皂角米是天然没用糖水浸泡过来买的，桃胶品质好泡发率高，口感不错，有一点点杂质是可以接受的，毕竟桃胶就是来自于大自然更能证明它的天然性，而且这款云南桃花泪桃胶比较有名，品质不错，挺大一颗的，泡发率也确实达到了10倍以上，煮出来口感Q弹，蛮有嚼劲的，特别喜欢，客服还给我介绍了一些桃胶的知识，非常耐心的告诉我桃胶要3-4天吃一次，一次选6粒左右就行了，而且对膀胱保护作用，服务非常好，下次还会购买的。',
                    pingluntupian: [
                        'https://www.ziyimall.com/file_img/products/63/201609/8/20160908224227dxyMX83l_Thumb.jpg']
                }, {
                    paiming: 6,
                    rexiaobangchanpin: ['https://www.ziyimall.com/file_img/products/63/201606/1/20160601161445YNyCCQHs_Thumb.jpg'],
                    jianjie: '云南 桃花泪桃胶 250g*瓶',
                    pinpai: '滋补品',
                    pinpingrenshu: 4191,
                    jiage: 59.00,
                    pinglun: '已经吃了好几次了才来评价，买前选了好多家，就冲着紫一的皂角米是天然没用糖水浸泡过来买的，桃胶品质好泡发率高，口感不错，有一点点杂质是可以接受的，毕竟桃胶就是来自于大自然更能证明它的天然性，而且这款云南桃花泪桃胶比较有名，品质不错，挺大一颗的，泡发率也确实达到了10倍以上，煮出来口感Q弹，蛮有嚼劲的，特别喜欢，客服还给我介绍了一些桃胶的知识，非常耐心的告诉我桃胶要3-4天吃一次，一次选6粒左右就行了，而且对膀胱保护作用，服务非常好，下次还会购买的。',
                    pingluntupian: [
                        'https://www.ziyimall.com/file_img/products/63/201704/25/20170425152335Y7WH6XYv_Thumb.jpg', 'https://www.ziyimall.com/file_img/products/63/201707/12/20170712150942a3cE4oCO_Thumb.jpg', 'https://www.ziyimall.com/file_img/products/63/201707/12/20170712150943zh2AdqCp_Thumb.jpg']
                }, {
                    paiming: 7,
                    rexiaobangchanpin: ['https://www.ziyimall.com/file_img/products/63/201807/11/20180711094828xABOTW0J_Thumb.jpg'],
                    jianjie: '云南 桃花泪桃胶 250g*瓶',
                    pinpai: '滋补品',
                    pinpingrenshu: 4191,
                    jiage: 139.00,
                    pinglun: '已经吃了好几次了才来评价，买前选了好多家，就冲着紫一的皂角米是天然没用糖水浸泡过来买的，桃胶品质好泡发率高，口感不错，有一点点杂质是可以接受的，毕竟桃胶就是来自于大自然更能证明它的天然性，而且这款云南桃花泪桃胶比较有名，品质不错，挺大一颗的，泡发率也确实达到了10倍以上，煮出来口感Q弹，蛮有嚼劲的，特别喜欢，客服还给我介绍了一些桃胶的知识，非常耐心的告诉我桃胶要3-4天吃一次，一次选6粒左右就行了，而且对膀胱保护作用，服务非常好，下次还会购买的。',
                    pingluntupian: [
                        'https://www.ziyimall.com/file_img/products/63/201805/22/20180522110052MiPU9oxS_Thumb.jpg', 'https://www.ziyimall.com/file_img/products/63/201805/22/20180522110052xKOgybeH_Thumb.jpg', 'https://www.ziyimall.com/file_img/products/63/201805/22/20180522110052j2wOuynR_Thumb.jpg', 'https://www.ziyimall.com/file_img/products/63/201805/22/20180522110052HUZKngd3_Thumb.jpg']
                }, {
                    paiming: 8,
                    rexiaobangchanpin: ['https://www.ziyimall.com/file_img/products/63/201809/7/20180907084707mPQBAzSc_Thumb.jpg'],
                    jianjie: '云南 桃花泪桃胶 250g*瓶',
                    pinpai: '滋补品',
                    pinpingrenshu: 4191,
                    jiage: 88.00,
                    pinglun: '已经吃了好几次了才来评价，买前选了好多家，就冲着紫一的皂角米是天然没用糖水浸泡过来买的，桃胶品质好泡发率高，口感不错，有一点点杂质是可以接受的，毕竟桃胶就是来自于大自然更能证明它的天然性，而且这款云南桃花泪桃胶比较有名，品质不错，挺大一颗的，泡发率也确实达到了10倍以上，煮出来口感Q弹，蛮有嚼劲的，特别喜欢，客服还给我介绍了一些桃胶的知识，非常耐心的告诉我桃胶要3-4天吃一次，一次选6粒左右就行了，而且对膀胱保护作用，服务非常好，下次还会购买的。',
                    pingluntupian: [
                        'https://www.ziyimall.com/file_img/products/63/201704/14/20170414103750e08F5gbm_Thumb.jpg', 'https://www.ziyimall.com/file_img/products/63/201704/14/20170414103757mKMYDnJV_Thumb.jpg', 'https://www.ziyimall.com/file_img/products/63/201704/14/20170414103802uRZffqp8_Thumb.jpg']
                }]
            }
        },
        components: {
            Meirongyangyan,
            Qiangjiannanren,
            Hehulaoren,
            Yajiankangtiaoli,
            Zibuyangsheng
        }
    }
</script>

<style>
    #xiaoliang {
        width: 100%;
        background-color: #eeeeee;
        padding-bottom: 60px;
        /* box-sizing: border-box; */
    }

    #rexiaobang>img {
        width: 100%;
        border-top: 2px solid #6f00af;
    }

    .neirongjuzhong {
        width: 1200px;
        margin: 0 auto;
        box-sizing: border-box;
    }

    .rexiaobang_title {
        padding: 10px 0 25px 0;
    }

    .rexiaobang_title * {
        text-align: center;
    }

    .rexiaobang_title>h2 {
        font-size: 42px;
        color: #333333;
    }

    .rexiaobang_title>h3 {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .rexiaobang_title>h3>div {
        font-size: 14px;
        background-color: #333333;
        color: white;
    }

    .rexiaobang_title>h3>div:nth-child(1) {
        width: 520px;
        border-top: 1px solid #333333;
    }

    .rexiaobang_title>h3>div:nth-child(2) {
        width: 140px;
        background-color: #333333;
    }

    .rexiaobang_title>h3>div:nth-child(3) {
        width: 520px;
        border-top: 1px solid #333333;
    }

    .rexiaobang_title>p {
        font-size: 14px;
        color: #333333;
    }

    .rexiaobang_content {
        width: 100%;
        /* height: 1448px; */
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-bottom: 1px dashed #ddd;
    }

    .rexiaobang_content>span {
        width: 105px;
        text-align: center;
        color: #f46161;
        font-size: 40px;
        font-style: italic;
    }

    .rexiaobang_content_left {
        width: 520px;
        height: 181px;
        display: flex;
        align-items: center;
    }

    .rexiaobang_content_tupian {
        display: flex;
        align-items: center;
    }

    .rexiaobang_content_tupian>a>img {
        width: 140px;
        height: 140px;
    }

    .rexiaobang_content_jianjie {
        width: 380px;
        height: 140px;
        /* background-color: lightblue; */
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 10px;
        box-sizing: border-box;
    }

    .rexiaobang_content_jianjie>a>span {
        font-size: 14px;
    }

    .rexiaobang_content_jianjie>a:hover {
        text-decoration: underline;
    }

    .dianpingshuliang {
        width: 220px;
        /* background-color: orange; */
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
    }

    .dianpingshuliang>span {
        font-size: 13px;
        color: #777777;
    }

    .dianpingshuliang>span>i {
        font-size: 13px;
        color: #f42f2f;
    }

    .price {
        width: 220px;
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
    }

    .price>span {
        font-size: 22px;
        color: #f42f2f;
        font-weight: bold;
    }

    .price>a>div {
        width: 74px;
        font-size: 12px;
        padding: 5px 0;
        text-align: center;
        border: #ddd 1px solid;
    }

    .price>a>div:hover {
        border: 1px solid #f42f2f;
        color: #f42f2f;
    }

    .rexiaobang_content_right {
        width: 535px;
        height: 170px;
        /* background-color: lightcyan; */
        padding: 10px;
        box-sizing: border-box;
    }

    .rexiaobang_content_right>h2 {
        font-size: 16px;
        line-height: 30px;
    }

    .rexiaobang_content_right>a>p {
        font-size: 12px;
        line-height: 18px;
        height: 40px;
        border-bottom: 1px solid #eaeaea;
        overflow: hidden;
        color: #666;
        text-overflow: ellipsis;
    }

    .rexiaobang_content_right>div {
        display: flex;
    }

    .rexiaobang_content_right>div>div>img {
        width: 50px;
        height: 50px;
        margin: 10px 10px 0 0;
    }
</style>