<template>
    <div id="jiankangbaike2">
        <div id="jiankangbaike2_daohang">
            <div id="jiankangbaike2_daohang_juzhong">
                <a href="#"><img src="https://www.ziyimall.com/images/index.png" alt=""></a>
                <a href=""><span>健康百科</span></a>
                <div v-for="item in xiangmu">
                    <img src="https://www.ziyimall.com/images/line.png" alt="">
                    <div class="jibing">
                        <a href="">
                            <img :src="item.jibingtupian" alt="">
                            <p>{{item.name}}</p>
                        </a>
                    </div>
                    <div class="jibing_neirong">
                        <a href="">{{item.chaolianjie1}}</a>
                        <a href="">{{item.chaolianjie2}}</a>
                        <a href="">{{item.chaolianjie3}}</a>
                        <a href="">{{item.chaolianjie4}}</a>
                    </div>
                </div>
                <a href=""><img src="https://www.ziyimall.com/images/good.png" alt=""></a>
            </div>
        </div>
        <div id="jiankangbaike2_juzhong">
            <div class="zhengzhuang" v-for="item3 in fenlei">
                <div class="zhengzhuang_title">
                    <a href="">{{item3.zhengzhuang}}</a>
                </div>
                <div class="zhengzhuang_content">
                    <div class="pinxie" v-for="(item,index1) in item3.pinxie" @mouseenter="mymouseenter111(index1)"
                        @mouseleave="mymouseleave111(index1)">
                        <div class="pinxie1">
                            <div class="pinxie1_title">
                                <div></div><a href="">{{item.title}}</a>
                            </div>
                            <div class="pinxie1_zhiliao">
                                <span><a href="" v-for="item2 in item.list">{{item2}}</a></span>
                            </div>
                        </div>

                        <div class="pinxie2">
                            <div class="pinxie_title2">
                                <div></div><a href="">{{item.title}}</a>
                            </div>
                            <div class="pinxie_zhiliao2">
                                <span><a href="" v-for="item2 in item.list">{{item2}}</a></span>
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
                xiangmu: [
                    { jibingtupian: 'https://www.ziyimall.com/images/ab1.png', name: '疾病', chaolianjie1: '疾病健康', chaolianjie2: '症状调理', chaolianjie3: '健康问答', chaolianjie4: '健康知识' },
                    { jibingtupian: 'https://www.ziyimall.com/images/ab2.png', name: '中医', chaolianjie1: '营养滋补', chaolianjie2: '中药大全', chaolianjie3: '养生花茶', chaolianjie4: '中药方剂' },
                    { jibingtupian: 'https://www.ziyimall.com/images/ab3.png', name: '孕妇', chaolianjie1: '孕妇保健', chaolianjie2: '孕前保健', chaolianjie3: '产妇保健', chaolianjie4: '成长发育' },
                    { jibingtupian: 'https://www.ziyimall.com/images/ab4.png', name: '保健', chaolianjie1: '口碑中心', chaolianjie2: '成分大全', chaolianjie3: '品牌大全', chaolianjie4: '品牌Top榜' }],
                fenlei: [
                    {
                        zhengzhuang: '症状',
                        pinxie: [
                            {
                                title: '贫血',
                                list: ['预防贫血', '贫血的症状', '缺铁性贫血', '障碍性贫血', '障碍性贫血', '失血性贫血', '营养性贫血', '贫血吃什么', '缺铁性贫血吃什么', '预防贫血', '肾性贫血', '贫血头晕', '缺铁性贫血的症状', '贫血补血']
                            },
                            {
                                title: '贫血',
                                list: ['预防贫血', '贫血的症状', '缺铁性贫血', '障碍性贫血', '障碍性贫血', '失血性贫血', '营养性贫血', '贫血吃什么', '缺铁性贫血吃什么', '预防贫血', '肾性贫血', '贫血头晕', '缺铁性贫血的症状', '贫血补血']
                            },
                            {
                                title: '贫血',
                                list: ['预防贫血', '贫血的症状', '缺铁性贫血', '障碍性贫血', '障碍性贫血', '失血性贫血', '营养性贫血', '贫血吃什么', '缺铁性贫血吃什么', '预防贫血', '肾性贫血', '贫血头晕', '缺铁性贫血的症状', '贫血补血']
                            },
                            {
                                title: '贫血',
                                list: ['预防贫血', '贫血的症状', '缺铁性贫血', '障碍性贫血', '障碍性贫血', '失血性贫血', '营养性贫血', '贫血吃什么', '缺铁性贫血吃什么', '预防贫血', '肾性贫血', '贫血头晕', '缺铁性贫血的症状', '贫血补血']
                            },
                            {
                                title: '贫血',
                                list: ['预防贫血', '贫血的症状', '缺铁性贫血', '障碍性贫血', '障碍性贫血', '失血性贫血', '营养性贫血', '贫血吃什么', '缺铁性贫血吃什么', '预防贫血', '肾性贫血', '贫血头晕', '缺铁性贫血的症状', '贫血补血']
                            },
                            {
                                title: '贫血',
                                list: ['预防贫血', '贫血的症状', '缺铁性贫血', '障碍性贫血', '障碍性贫血', '失血性贫血', '营养性贫血', '贫血吃什么', '缺铁性贫血吃什么', '预防贫血', '肾性贫血', '贫血头晕', '缺铁性贫血的症状', '贫血补血']
                            }]
                    }],

            }
        },
        methods: {
            mymouseenter111(index1) {
                $('.pinxie2').eq(index1).css({
                    'display': 'block'
                })
            },
            mymouseleave111(index1) {
                $('.pinxie2').eq(index1).css({
                    'display': 'none'
                })
            }
        }
    }
</script>

<style>
    #jiankangbaike2 {
        background-color: #f8f8f8;
        border: 1px solid #ececec;
    }

    #jiankangbaike2_daohang {
        height: 70px;
        background-color: #6f00af;
    }

    #jiankangbaike2_daohang_juzhong {
        width: 1200px;
        height: 70px;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }

    #jiankangbaike2_daohang_juzhong>a>img {
        margin: 0 5px 0 10px;
    }

    #jiankangbaike2_daohang_juzhong>a>span {
        font-size: 28px;
        line-height: 70px;
        letter-spacing: 1px;
        font-weight: bold;
        color: white;
    }

    #jiankangbaike2_daohang_juzhong>div {
        width: 233px;
        display: flex;
        align-items: center;
    }

    #jiankangbaike2_daohang_juzhong>div>img {
        height: 42px;
        margin: 0 15px;
    }

    .jibing>a>p {
        font-size: 14px;
        color: white;
    }

    .jibing_neirong {
        width: 145px;
        height: 48px;
        margin: 0 8px;
    }

    .jibing_neirong>a {
        color: #fff;
        font-size: 12px;
        padding: 0 9px;
        line-height: 24px;
    }

    .jibing_neirong>a:hover {
        background-color: red;
    }

    #jiankangbaike2_juzhong {
        width: 1200px;
        background-color: white;
        margin: 0 auto;
        border: 1px solid #ececec;
        padding: 0 30px 18px 30px;
        box-sizing: border-box;
    }

    .zhengzhuang_title {
        height: 51px;
        font-size: 20px;
        color: #B654CE;
        margin: 20px auto 2px;
        border-bottom: 1px solid #ececec;
    }

    .zhengzhuang_title>a {
        line-height: 49px;
        font-size: 20px;
        color: #B654CE;
        border-bottom: 2px solid #B654CE;
        line-height: 49px;
        padding-bottom: 12px;
    }

    .zhengzhuang_content {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }





    .pinxie {
        position: relative;
    }

    .pinxie1 {
        width: 348px;
        height: 100px;
        margin: 23px 15px 0;
        overflow: hidden;
    }

    .pinxie1_title {
        display: flex;
        align-items: center;
        border-bottom: 1px dashed #ececec;
    }

    .pinxie1_title>div {
        width: 31px;
        height: 31px;
        background-color: orange;
        margin-right: 12px;
        background-image: url('https://www.ziyimall.com/images/icon-baike.png');
    }

    .pinxie1_title>a {
        line-height: 42px;
        font-size: 14px;
        font-weight: 600;
    }

    .pinxie1_zhiliao>span {
        line-height: 28px;
    }

    .pinxie1_zhiliao>span>a {
        padding: 0px 10px;
        box-sizing: border-box;
        line-height: 20px;
        font-size: 12px;
        border: 1px solid #fff;
        color: #333;
        border-radius: 10px;
        line-height: 25px;
        margin-right: 5px;
    }






    .pinxie2 {
        width: 348px;
        background-color: white;
        margin: 23px 15px 0;
        z-index: 110;
        position: absolute;
        top: -16px;
        left: -20px;
        z-index: 1200;
        display: none;
        border: 1px solid #B654CE;
        padding: 15px 20px 4px 19px;
    }

    .pinxie_title2 {
        display: flex;
        align-items: center;
        border-bottom: 1px dashed white;
    }

    .pinxie_title2>div {
        width: 31px;
        height: 31px;
        background-color: orange;
        margin-right: 12px;
        background-image: url('https://www.ziyimall.com/images/icon-baike.png');
        background-position: 0 32px;
    }

    .pinxie_title2>a {
        line-height: 42px;
        font-size: 14px;
        font-weight: 600;
        color: #B654CE;
    }

    .pinxie_zhiliao2>span {
        line-height: 28px;
    }

    .pinxie_zhiliao2>span>a {
        padding: 0px 10px;
        box-sizing: border-box;
        line-height: 20px;
        font-size: 12px;
        border: 1px solid #fff;
        color: #333;
        border-radius: 10px;
        line-height: 25px;
        margin-right: 5px;
    }

    .pinxie_zhiliao2>span>a:hover {
        border: 1px solid #9e9b9b;
    }

</style>