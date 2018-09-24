<template>
    <div id="tuijian">
        <div class="title">
            <div>
                <h2>紫一推荐</h2>
                <span id="ziyi">专业营养师 一对一定制健康</span>
            </div>
            <a href="">点击定制<span class="el-icon-arrow-right"></span></a>
            <!-- <Celan/> -->
        </div>
        
        <div class="shangpin">
            <a href=""><img src="https://www.ziyimall.com/file_img/adv/2018087/20180807103652.jpg" alt=""></a>
            <ul class="shangpin2">
                <li v-for="item3 in tuijian.shangpintupian">
                    <a href="">
                        <h3>{{tuijian.title}}</h3>
                        <p>{{tuijian.jieshao}}</p>
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
                                <a href=""><div></div>{{remai.pingjia}}</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Celan from "@/components/celan/Celan";

export default {
  data() {
    return {
      remai: {
        jieshao: "金比戈膏 260ml/瓶 古法制造 补肾壮阳 益气血 壮筋骨",
        jiage: "398.00",
        pingjia: "23877",
        shangpintupian: [
          "https://www.ziyimall.com/file_img/products/63/201808/23/20180823115858UmmCi8dC_Thumb.jpg",
          "https://www.ziyimall.com/file_img/products/63/201712/2/20171202143107LBtJ8rp2_Thumb.jpg",
          "https://www.ziyimall.com/file_img/products/63/201808/15/20180815145137fSHUpJ87_Thumb.jpg",
          "https://www.ziyimall.com/file_img/products/63/201605/31/20160531171454lOisfGPg_Thumb.jpg"
        ]
      },
      tuijian: {
        title: "从内散发魅力",
        jieshao: "【娘娘亲选】澳洲进口 Healthy Care蜂胶软胶囊",
        shangpintupian: [
          "https://www.ziyimall.com/file_img/63/201808/07/153361211465561785.jpg",
          "https://www.ziyimall.com/file_img/63/201808/07/153361211881210148.jpg",
          "https://www.ziyimall.com/file_img/63/201808/07/153361198080690068.jpg",
          "https://www.ziyimall.com/file_img/63/201808/07/153361131116341132.jpg"
        ]
      }
    };
  },
  components:{
    // Celan
  }
};
</script>

<style>
#tuijian {
  width: 1200px;
  height: 580px;
  margin: 0 auto;
  padding-top: 37px;
  box-sizing: border-box;
  position: relative;
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
#ziyi {
  color: black;
}

.title > div > h2 {
  font-size: 22px;
  margin-right: 20px;
}

.title * {
  font-size: 15px;
}

.title > a:hover {
  text-decoration: underline;
}

.shangpin {
  width: 100%;
  height: 500px;
  border-top: 1px solid #888888;
  display: flex;
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
  overflow: hidden;
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
}

.shangpin2 > li > a > p {
  font-size: 14px;
  line-height: 20px;
  padding: 0 0 7px 0;
  text-align: center;
}

.zuixinremai {
  width: 224px;
  height: 500px;
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
  position: relative;
  zoom: 1;
  width: 100%;
  border-bottom: 1px dotted #b6b5b5;
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