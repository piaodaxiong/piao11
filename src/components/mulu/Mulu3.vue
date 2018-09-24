<template>
    <div id="luyou3">
        <div id="luyou3_left">
            <div id="luyou3_title">
                <img src="https://www.ziyimall.com/images/subca_tit3.png" alt="">
                <span>营养保健 </span>
            </div>
            <div id="luyou3_content">
                <ul v-for="item in fenlei.list">
                    <li><strong>{{item.title}}</strong></li>
                    <li v-for="bb in item.content"><a href="javascript:;">{{bb}}</a></li>
                </ul>

            </div>
        </div>
        <div id="luyou3_right">
            <p>热门品牌</p>
            <div>
                <div v-for="item in pinpai">
                    <a href=""><img :src="item" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'luyou3',
        data() {
            return {
                pinpai:[
                    'https://www.ziyimall.com/images/hot/1.jpg',
                    'https://www.ziyimall.com/images/hot/3.jpg',
                    'https://www.ziyimall.com/images/hot/4.jpg',
                    'https://www.ziyimall.com/images/hot/13.jpg',
                    'https://www.ziyimall.com/images/hot/5.jpg',
                    'https://www.ziyimall.com/images/hot/6.jpg',
                    'https://www.ziyimall.com/images/hot/9.jpg',
                    'https://www.ziyimall.com/images/hot/7.jpg',
                    'https://www.ziyimall.com/images/hot/10.jpg',
                    'https://www.ziyimall.com/images/hot/11.jpg',
                    'https://www.ziyimall.com/images/hot/22.jpg',
                    'https://www.ziyimall.com/images/hot/21.jpg',
                    'https://www.ziyimall.com/images/hot/19.jpg',
                    'https://www.ziyimall.com/images/hot/12.jpg'],
                fenlei: {
                    list: [{
                        title: '维生素/矿物质',
                        content: ['睡眠不好', '提高免疫力', '便秘', '缓解疲劳', '脱发/白发','睡眠不好', '提高免疫力', '便秘', '缓解疲劳', '脱发/白发']
                    }, {
                        title: '菌/菇/微生物发酵',
                        content: ['美白祛斑', '减肥瘦身', '改善贫血', '更年期调理','私处养护']
                    }, {
                        title: '动植物精华',
                        content: ['解酒护肝', '前列腺保养', '补肾填精', '缓解压力', '健身增肌']
                    }, {
                        title: '海洋生物',
                        content: ['心脑血管', ' 调节三高', ' 骨骼关节', '老年痴呆','糖尿病']
                    }, {
                        title: '蛋白质/氨基酸',
                        content: ['健脑益智', '挑食/厌食', '增强体质', '钙铁锌','保护视力']
                    }]
                }
            }
        }
    }

</script>

<style>
    #luyou3 {
        width: 800px;
        height: 450px;
        background-color: white;
        position: absolute;
        left: 216px;
        top: 0px;
        z-index: 100;
        font-size: 14px;
        box-shadow: 2px 2px 5px 2px #d8d6d6;
        display: flex;
    }

    #luyou3_left {
        width: 540px;
        margin: 0 10px;
    }

    #luyou3_title {
        width: 100%;
        height: 55px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid lightgray;
    }

    #luyou3_title>span {
        font-size: 16px;
        margin-left: 5px;
    }

    #luyou3_content {
        width: 540px;
        /* height: 395px; */
        display: flex;
        flex-wrap: wrap;
    }

    #luyou3_content>ul {
        width: 260px;
        height: 120px;
        display: flex;
        flex-wrap: wrap;
        padding: 10px 10px 0 5px;
        box-sizing: border-box;
        border-bottom: 1px solid lightgray;
        margin: 0 5px;
    }

    #luyou3_content * {
        font-size: 13px;
        line-height: 20px;
    }

    #luyou3_content a {
        color: #6e6a6a;
    }

    #luyou3_content a:hover {
        text-decoration: underline;
    }
    #luyou3_content li{
        padding-right: 10px;
    }

    #luyou3_content li:nth-child(1) {
        width: 100%;
    }

    #luyou3_right {
        width: 240px;
        border-left: 1px solid lightgray;
        padding: 10px 18px;
        box-sizing: border-box;
    }
    #luyou3_right>p{
        width: 204px;
        font-size: 14px;
        margin-bottom: 10px;
    }
    #luyou3_right>div{
        width: 204px;
        display: flex;
        flex-wrap: wrap;
    }
    #luyou3_right>div img{
        border: 1px solid #f3f2f2;
        box-sizing: border-box;
    }
</style>