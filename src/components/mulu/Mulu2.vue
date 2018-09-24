<template>
    <div id="luyou2">
        <div id="luyou2_left">
            <div id="luyou2_title">
                <img src="https://www.ziyimall.com/images/subca_tit2.png" alt="">
                <span>人群健康营养需求对照表 </span>
            </div>
            <div id="luyou2_content">
                <ul v-for="item in fenlei.list">
                    <li><strong>{{item.title}}</strong></li>
                    <li v-for="bb in item.content"><a href="javascript:;">{{bb}}</a></li>
                </ul>

            </div>
        </div>
        <div id="luyou2_right">
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
        name: 'luyou2',
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
                        title: '0-18岁',
                        content: ['睡眠不好', '提高免疫力', '便秘', '缓解疲劳', '脱发/白发']
                    }, {
                        title: '19-34岁女性',
                        content: ['美白祛斑', '减肥瘦身', '改善贫血', '更年期调理','私处养护']
                    }, {
                        title: '19-34岁男性',
                        content: ['解酒护肝', '前列腺保养', '补肾填精', '缓解压力', '健身增肌']
                    }, {
                        title: '35-45岁女性',
                        content: ['心脑血管', ' 调节三高', ' 骨骼关节', '老年痴呆','糖尿病']
                    }, {
                        title: '35-45岁女性',
                        content: ['健脑益智', '挑食/厌食', '增强体质', '钙铁锌','保护视力']
                    }, {
                        title: '45-65岁',
                        content: ['备孕', '孕期营养', '哺乳期营养', '产后减肥']
                    }, {
                        title: '65岁以上',
                        content: ['备孕', '孕期营养', '哺乳期营养', '产后减肥']
                    }]
                }
            }
        }
    }

</script>

<style>
    #luyou2 {
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

    #luyou2_left {
        width: 540px;
        margin: 0 10px;
    }

    #luyou2_title {
        width: 100%;
        height: 55px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid lightgray;
    }

    #luyou2_title>span {
        font-size: 16px;
        margin-left: 5px;
    }

    #luyou2_content {
        width: 100%;
        height: 395px;
    }

    #luyou2_content>ul {
        display: flex;
        padding: 0 0 0 10px;
        box-sizing: border-box;
        border-bottom: 1px solid lightgray;
    }

    #luyou2_content * {
        font-size: 13px;
        line-height: 40px;
    }

    #luyou2_content a {
        color: #6e6a6a;
    }

    #luyou2_content a:hover {
        text-decoration: underline;
    }

    #luyou2_content li {
        width: 88px;
    }

    #luyou2_right {
        width: 240px;
        border-left: 1px solid lightgray;
        padding: 10px 18px;
        box-sizing: border-box;
    }
    #luyou2_right>p{
        width: 204px;
        font-size: 14px;
        margin-bottom: 10px;
    }
    #luyou2_right>div{
        width: 204px;
        display: flex;
        flex-wrap: wrap;
    }
    #luyou2_right>div img{
        border: 1px solid #f3f2f2;
        box-sizing: border-box;
    }
</style>