<template>
    <div id="dibu">
        <div id="dibu1">
            <ul>
                <li>
                    <div></div>
                    <section>
                        <h3>100%正品</h3>
                        <span>全球精品 正品保障</span>
                    </section>

                </li>
                <li>
                    <div></div>
                    <section>
                        <h3>低价保障</h3>
                        <span>缩减中间环节 确保低价</span>
                    </section>
                </li>
                <li>
                    <div></div>
                    <section>
                        <h3> 7天无忧退货</h3>
                        <span>国内退货 售后无忧</span>
                    </section>
                </li>
                <li>
                    <div></div>
                    <section>
                        <h3>专业营养师</h3>
                        <span>一对一定制健康生活</span>
                    </section>
                </li>
            </ul>
        </div>
        <div id="dibu2">
            <div>
                <div id="dibu2_zuo">
                    <div>
                        <p>新手指南</p>
                        <a href=""><p>注册登录</p></a>
                        <a href=""><p>购物流程</p></a>
                        <a href=""><p>会员制度</p></a>
                        <a href=""><p>常见问题</p></a>
                    </div>
                    <div>
                        <p>关于支付</p>
                        <a href=""><p>在线支付</p></a>
                        <a href=""><p>货到付款</p></a>
                        <a href=""><p>发票</p></a>
                        <a href=""><p>优惠券使用</p></a>
                    </div>
                    <div>
                        <p>关于配送</p>
                        <a href=""><p>配送方式</p></a>
                        <a href=""><p>配送费用</p></a>
                        <a href=""><p>收货验货</p></a>
                    </div>
                    <div>
                        <p>售后服务</p>
                        <a href=""><p>退换货政策</p></a>
                        <a href=""><p>退换流程</p></a>
                        <a href=""><p>投诉建议</p></a>
                        <a href=""><p>营养师服务</p></a>
                    </div>

                </div>
                <div id="dibu2_zhong">
                    <h4>400-189-1399</h4>
                    <p>
                        <span>周一 到 周日</span>
                        <span>08:30 - 22:30</span>
                    </p>
                </div>
                <div id="dibu2_you">
                    <div>
                        <img src="https://www.ziyimall.com/images/n.jpg" alt="">
                        <p>手机版商城</p>
                    </div>
                    <div>
                        <img src="https://www.ziyimall.com/images/n.jpg" alt="">
                        <p>官方微信</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="dibu3">
            <div id="dibu3_1">
                <a href="">关于我们</a>
                <em>|</em>
                <a href="">联系我们</a>
                <em>|</em>
                <a href="">商城合作</a>
                <em>|</em>
                <a href="">招纳贤士</a>
                <em>|</em>
                <a href="">友情链接</a>
                <em>|</em>
                <a href="">网站地图</a>
            </div>
            <div id="dibu3_2">
                <p>
                    <a href="">企业营业执照</a>
                    <a href="">食品经营许可证</a>
                    <a href="">增值电信业务经营许可证</a>
                    <a href="">备案号：湘ICP备11008736号-3</a>
                </p>
                <p> Copyright @ 2013-2018 湖南紫一健康产业有限公司 版权所有 </p>
            </div>
            <div id="dibu3_3">
                <img src="https://www.ziyimall.com/images/mp.png" alt=""><img src="https://www.ziyimall.com/images/ry.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    #dibu {
        width: 100%;
    }

    #dibu1 {
        width: 100%;
        height: 90px;
        border-top: 1px solid #eaeaea;
    }

    #dibu1>ul {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    #dibu1>ul>li {
        width: 200px;
        height: 47px;
        display: flex;
    }

    #dibu1>ul>li>div {
        width: 47px;
        height: 47px;
        margin-right: 4px;
    }

    #dibu1>ul>li:nth-child(1)>div {
        background-image: url('https://www.ziyimall.com/images/icon1.png');
        background-position: right -246px;
    }

    #dibu1>ul>li:nth-child(2)>div {
        background-image: url('https://www.ziyimall.com/images/icon1.png');
        background-position: right -302px;
    }

    #dibu1>ul>li:nth-child(3)>div {
        background-image: url('https://www.ziyimall.com/images/icon1.png');
        background-position: right -358px;
    }

    #dibu1>ul>li:nth-child(4)>div {
        background-image: url('https://www.ziyimall.com/images/icon1.png');
        background-position: right -414px;
    }

    #dibu1>ul>li>section>h3 {
        font-size: 18px;
        line-height: 26px;
    }

    #dibu1>ul>li>section>span {
        color: #999;
        font-size: 14px;
    }

    #dibu2 {
        width: 100%;
        height: 210px;
        border-top: 1px solid #eaeaea;
    }

    #dibu2>div {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    #dibu2_zuo {
        width: 600px;
        height: 130px;
        display: flex;
        justify-content: space-between;
    }

    #dibu2_zuo>div {
        width: 116px;
        height: 130px;
        border-right: 1px solid #eaeaea;
    }

    #dibu2_zuo>div>p {
        font-size: 18px;
        color: #666;
        margin-bottom: 6px;
    }

    #dibu2_zuo>div>a>p {
        font-size: 14px;
        color: #999;
        line-height: 24px;
    }
    #dibu2_zuo>div>a:hover{
        text-decoration: underline;
    }

    #dibu2_zhong {
        width: 200px;
        height: 67px;
    }
    #dibu2_zhong>h4 {
        border-bottom: 1px solid #8e38c0;
        color: #8e38c0;
        font-size: 32px;
        line-height: 38px;
        font-family: arial;
        text-align: center;
    }
    #dibu2_zhong>p{
        display: flex;
        justify-content: space-between;
    }
    #dibu2_zhong>p>span{
        color: #8e38c0;
        font-size: 14px;
        line-height: 28px;
    }

    #dibu2_you {
        width: 270px;
        height: 134px;
        display: flex;
        justify-content: space-around;
    }
    #dibu2_you>div>p{
        font-size: 12px;
        text-align: center;
    }

    #dibu3 {
        width: 100%;
        height: 145px;
        background-color: #333333;
    }
    #dibu3_1{
        text-align: center;
        padding-top: 20px;
        margin-bottom: 10px;
    }
    #dibu3_1>a{
        color: #fff;
        font-size: 14px;
    }
    #dibu3_1>em{
        color: #fff;
        font-size: 12px;
    }
    #dibu3_2{
        text-align: center;
        line-height: 22px;
    }
    #dibu3_2 *{
        color: #fff;
        font-size: 12px;
    }
    #dibu3_3{
        height: 42px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #dibu3_3>img:nth-child(1){
        width: 35px;
        height: 35px;
        margin-right: 5px;
    }
    #dibu3_3>img:nth-child(2){
        width: 42px;
        height: 42px;
        margin-top: 7px;
    }
</style>