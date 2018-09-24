<template>
    <div id="remenpinpai">
        <div class="title">
            <div>
                <h2>热门品牌</h2>
            </div>
            <a href="">更多大牌<span class="el-icon-arrow-right"></span></a>
        </div>
        <ul class="remenpinpai">
            <li v-for="item5 in remenpinpai">
                <a href="">
                    <div class="remenpinpai_shangpin">
                        <img :src="item6" v-for='item6 in item5.shangpinpinpai'>
                    </div>
                    <h3>{{item5.pinpai}}</h3>
                    <span>{{item5.jianjie}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                remenpinpai: [{
                    pinpai: 'Puritan‘s Pride',
                    jianjie: '普丽普莱 全家人的健康管理师',
                    shangpinpinpai: [
                        'https://www.ziyimall.com/images/c1.jpg',
                        'https://www.ziyimall.com/images/1logo.png'
                    ]
                },{
                    pinpai: 'Healthy Care',
                    jianjie: '澳洲少数获得TGA认证的保健品牌',
                    shangpinpinpai: [
                        'https://www.ziyimall.com/images/c2.jpg',
                        'https://www.ziyimall.com/images/2logo.png'
                    ]
                },{
                    pinpai: 'Doppelherz',
                    jianjie: '德国双心 拥有百年历史品牌',
                    shangpinpinpai: [
                        'https://www.ziyimall.com/images/c3.jpg',
                        'https://www.ziyimall.com/images/3logo.png'
                    ]
                },{
                    pinpai: 'Thompon’s ',
                    jianjie: '汤普森 呵护您的健康生活',
                    shangpinpinpai: [
                        'https://www.ziyimall.com/images/c4.jpg',
                        'https://www.ziyimall.com/images/4logo.png'
                    ]
                }]


            }
        }
    }
</script>

<style>
    #remenpinpai {
        width: 1201px;
        height: 480px;
        margin: 0 auto;
        padding-top: 37px;
        box-sizing: border-box;
    }

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title>div {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .title>div>h2 {
        font-size: 22px;
        margin-right: 20px;
    }

    .title * {
        font-size: 15px;
    }

    .title>a:hover {
        text-decoration: underline;
    }

    .remenpinpai {
        width: 100%;
        display: flex;
        border-top: 1px solid #888888;
    }

    .remenpinpai * {
        font-size: 14px;
    }

    .remenpinpai>li {
        width: 299px;
        height: 400px;
        border-right: #eaeaea 1px solid;
        border-bottom: #eaeaea 1px solid;
    }

    .remenpinpai>li:nth-child(1) {
        border-left: #eaeaea 1px solid;
    }

    .remenpinpai_shangpin {
        position: relative;
    }

    .remenpinpai_shangpin>img:nth-child(2) {
        position: absolute;
        bottom: -40px;
        left: 110px;
    }

    .remenpinpai>li>a:hover {
        text-decoration: underline;
    }

    .remenpinpai>li>a>h3 {
        text-align: center;
        padding-top: 45px;
    }

    .remenpinpai>li>a>span {
        display: flex;
        justify-content: center;
    }
</style>