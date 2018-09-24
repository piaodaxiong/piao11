<template>
    <div id="youqinglianjie">
        <div id="biaoti">
            <div @mouseenter="mymouseenter1()" :style="biankuang1">营养保健品</div>
            <div @mouseenter="mymouseenter2()" :style="biankuang2">友情链接</div>
        </div>
        <div id="neirong">
            <div id="yingyang" v-show="qiehuan1">
                <a href="javascript:;" v-for="item10 in yingyangbaojian">{{item10}}</a>
            </div>
            <div id="lianjie" v-show="qiehuan2">
                <a href="javascript:;" v-for="item11 in youqing">{{item11}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                qiehuan1: true,
                qiehuan2: false,
                biankuang1:'border-bottom: 1px solid red',
                biankuang2:'',
                yingyangbaojian: ['尼亚人罗布麻茶', '健康经验', '最新口碑', '六味地黄丸', '盐藻', '延时喷剂', '大豆异黄酮', '尼亚人罗布麻茶', '健康经验', '最新口碑', '六味地黄丸', '盐藻', '延时喷剂', '大豆异黄酮', '尼亚人罗布麻茶', '健康经验', '最新口碑', '六味地黄丸', '盐藻', '延时喷剂', '大豆异黄酮', '尼亚人罗布麻茶', '健康经验', '最新口碑', '六味地黄丸', '盐藻', '延时喷剂', '大豆异黄酮'],
                youqing: ['牌子网', '十大品牌', '爱之谷', '时尚女人', '钻石小鸟', '妆炫商城', '村安商城', '没得比导购网', '健身吧', '牌子网', '十大品牌', '爱之谷', '时尚女人', '钻石小鸟', '妆炫商城', '村安商城', '没得比导购网', '健身吧', '牌子网', '十大品牌', '爱之谷', '时尚女人', '钻石小鸟', '妆炫商城', '村安商城', '没得比导购网', '健身吧', '牌子网', '十大品牌', '爱之谷', '时尚女人', '钻石小鸟', '妆炫商城', '村安商城', '没得比导购网', '健身吧', '牌子网', '十大品牌', '爱之谷', '时尚女人', '钻石小鸟', '妆炫商城', '村安商城', '没得比导购网', '健身吧', '牌子网', '十大品牌', '爱之谷', '时尚女人', '钻石小鸟', '妆炫商城', '村安商城', '没得比导购网', '健身吧']
            }
        },
        methods: {
            mymouseenter1() {
                this.qiehuan1 = true;
                this.qiehuan2 = false;
                this.biankuang1 = 'border-bottom: 1px solid red;';
                this.biankuang2 = '';
                
            },
            mymouseenter2() {
                this.qiehuan2 = true;
                this.qiehuan1 = false;
                this.biankuang2 = 'border-bottom: 1px solid red;';
                this.biankuang1 = '';
            }
        }
    }
</script>

<style>
    #youqinglianjie {
        width: 1200px;
        height: 155px;
        margin: 20px auto;
        border: 1px solid #eaeaea;
    }

    #biaoti {
        width: 100%;
        height: 38px;
        display: flex;
        border-bottom: 1px solid #eaeaea;
    }

    #biaoti>div {
        width: 125px;
        height: 38px;
        font-size: 14px;
        line-height: 38px;
        text-align: center;
    }

    #neirong {
        width: 1200px;
        height: 117px;
    }

    #neirong * {
        font-size: 12px;
        position: relative;
    }

    #yingyang {
        width: 1200px;
        height: 117px;
        padding: 10px 0 10px 15px;
        box-sizing: border-box;
        position: absolute;
    }

    #yingyang>a:hover {
        text-decoration: underline;
    }

    #yingyang>a {
        margin-right: 20px;
        line-height: 24px;
    }

    #lianjie {
        width: 1200px;
        height: 117px;
        padding: 10px 0 10px 15px;
        box-sizing: border-box;
        position: absolute;
    }

    #lianjie>a {
        margin-right: 20px;
        line-height: 24px;
    }

    #lianjie>a:hover {
        text-decoration: underline;
    }
</style>