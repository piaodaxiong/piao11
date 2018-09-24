<template>
    <div id="nvxingbaojian">
        <div class="title">
            <div>
                <h2>男性健康</h2>
                <span>热搜词：</span>
                <a href="" style="color:red;">番茄红素</a>
                <a href="">牡蛎</a>
                <a href="">玛卡</a>
                <a href="">袋鼠精</a>
                <a href="" style="color:red;">奶蓟护肝</a>
            </div>
            <a href="">更多好货<span class="el-icon-arrow-right"></span></a>
        </div>
        <div class="shangpin">
            <a href=""><img src="https://www.ziyimall.com/file_img/adv/2016096/20160906162818.jpg" alt=""></a>
            <ul id="baojian">
                <li v-for="item7 in baojian.baojianxiangmu">
                    <a href="">{{item7}}</a>
                </li>
            </ul>
            <ul class="shangpin2">
                <li v-for="item3 in tuijian.shangpintupian">
                    <a href="">
                        <h3>{{tuijian.title}}</h3>
                        <p><i>￥{{tuijian.jiage}}</i><em>￥{{tuijian.jiage}}</em></p>
                        <img :src="item3" alt="">
                    </a>
                </li>
            </ul>
            <div class="zuixinremai">
                <h3>最新热卖</h3>
                <div class="zuixinremai_shangpin" v-for="item4 in remai.shangpintupian">
                    <a href="">
                        <img :src="item4" alt="">
                    </a>
                    <div class="zuixinremai_shangpinjianjie">
                        <h3>
                            <a href="">{{remai.jieshao}}</a>
                        </h3>
                        <div class="remaishangpin">
                            <span class="remaishangpinjiage">￥<strong>{{remai.jiage}}</strong></span>
                            <span class="yonghupingjia">
                                <a href="">
                                    <div></div>{{remai.pingjia}}
                                </a>
                            </span>
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
      tuijian: {
        title: "美国 GNC/健安喜 玛咖 60片*瓶",
        jiage: "149.00",
        shangpintupian: [
          "https://www.ziyimall.com/file_img/products/63/201712/1/20171201160638VEoLgd1g_Thumb.jpg",
          "https://www.ziyimall.com/file_img/products/63/201807/16/20180716154507FNOmlqdT_Thumb.jpg",
          "https://www.ziyimall.com/file_img/products/63/201712/12/201712121109129RG1bDdO_Thumb.jpg",
          "https://www.ziyimall.com/file_img/products/63/201712/2/20171202104932fouFzH9j_Thumb.jpg"
        ]
      },
      remai: {
        jieshao: "金比戈膏 260ml/瓶 古法制造 补肾壮阳 益气血 壮筋骨",
        jiage: "398.00",
        pingjia: "23877",
        shangpintupian: [
          "https://www.ziyimall.com/file_img/products/63/201808/23/20180823115858UmmCi8dC_Thumb.jpg",
          "https://www.ziyimall.com/file_img/products/63/201712/2/20171202143107LBtJ8rp2_Thumb.jpg",
          "https://www.ziyimall.com/file_img/products/63/201605/31/20160531171454lOisfGPg_Thumb.jpg",
          "https://www.ziyimall.com/file_img/products/63/201807/17/20180717085823QAIVQxlf_Thumb.jpg"
        ]
      },
      baojian: {
        baojianxiangmu: [
          "解酒护肝",
          "前列腺保养",
          "补肾填精",
          "缓解压力",
          "健身增肌",
          "脱发白发"
        ]
      }
    };
  }
};
</script>

<style>
#nvxingbaojian {
  width: 1201px;
  height: 587px;
  margin: 0 auto;
  padding-top: 37px;
  box-sizing: border-box;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title > div {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.title > div > h2 {
  font-size: 22px;
  margin-right: 20px;
}

.title > div > span {
  color: #999999;
}

.title * {
  font-size: 15px;
}

.title > a:hover {
  text-decoration: underline;
}

.title > div > a {
  margin-right: 10px;
}

.title > div > a:hover {
  text-decoration: underline;
}

.shangpin {
  width: 100%;
  height: 500px;
  border-top: 1px solid #888888;
  display: flex;
  position: relative;
}

#baojian {
  width: 224px;
  height: 144px;
  position: absolute;
  top: 30px;
  left: 28px;
}

#baojian > li {
  width: 58px;
  height: 58px;
  float: left;
  margin: 0 14px 14px 0;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
}

#baojian > li * {
  font-size: 12px;
}

#baojian > li > a {
  width: 58px;
  line-height: 18px;
  text-align: center;
  margin-top: 20px;
}

#baojian > li:hover {
  background-color: #e6d8f7;
}

#baojian > li > a:hover {
  color: #6f00af;
}

.shangpin2 {
  width: 676px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}

.shangpin2 > li {
  width: 336px;
  height: 248px;
  border: 1px solid #eaeaea;
}

.shangpin2 > li > a > img {
  width: 180px;
  height: 180px;
  font-size: 16px;
  padding: 0 78px;
}

.shangpin2 > li > a > img:hover {
  opacity: 0.8;
}

.shangpin2 > li > a > h3 {
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  padding-top: 20px;
  margin: 0 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.shangpin2 > li > a > p * {
  font-size: 14px;
  line-height: 20px;
  padding: 0 0 7px 0;
  text-align: center;
}

.shangpin2 > li > a > p > i {
  color: #f42f2f;
  font-size: 18px;
}

.shangpin2 > li > a > p > em {
  color: #999;
  text-decoration: line-through;
  margin-left: 12px;
}

.zuixinremai {
  width: 224px;
  height: 500px;
  /* background-color: #888888; */
  padding: 0 20px;
}

.zuixinremai > h3 {
  font-size: 16px;
  line-height: 40px;
  padding: 10px 0 0;
  color: #333;
}

.zuixinremai_shangpin {
  width: 224px;
  height: 75px;
  /* background-color: lightblue; */
  position: relative;
  zoom: 1;
  width: 100%;
  /* overflow: hidden; */
  border-bottom: 1px dotted #eaeaea;
  padding: 5px 0 14px;
  margin: 5px 0 14px;
  display: flex;
}

.zuixinremai_shangpin > a > img {
  width: 75px;
  height: 75px;
  margin-right: 10px;
}

.zuixinremai_shangpin > a > img:hover {
  opacity: 0.8;
}

.zuixinremai_shangpinjianjie * {
  font-size: 14px;
}

.zuixinremai_shangpinjianjie > h3 > a {
  font-weight: normal;
  font-size: 12px;
  height: 36px;
  overflow: hidden;
  line-height: 18px;
}

.zuixinremai_shangpin a:hover {
  text-decoration: underline;
}

.remaishangpin {
  display: flex;
  justify-content: space-between;
}

.remaishangpinjiage {
  color: red;
}

.yonghupingjia > a {
  display: flex;
}

.yonghupingjia > a > div {
  width: 20px;
  height: 20px;
  background-image: url(https://www.ziyimall.com/images/icon1.png);
  background-position: -58px -322px;
}
</style>