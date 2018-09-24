<template>
    <div id="celan">
        <a href=""><div id="kefu"></div></a>
        <a href=""><div id="gouwuche"></div></a>
        <div id="dianhua"></div>
        <a href=""><div id="fankui"></div></a>
        <a href="" style="transform: 2s;"><div id="TOP"></div></a>

        <a href=""><div id="gouwuche2" @mouseenter="mymouseenter3($event)" @mouseleave="mymouseleave3($event)"></div></a>
        <div id="dianhua2" @mouseenter="mymouseenter4($event)" @mouseleave="mymouseleave4($event)">
            <div>
                <div id="dianhuahaoma">
                    <p>客服电话:400-189-1399</p>
                    <p>(每天08:30-22:30)</p>
                </div>
            </div>
            
        </div>
        <a href=""><div id="fankui2" @mouseenter="mymouseenter5($event)" @mouseleave="mymouseleave5($event)"></div></a>
        <a href="#"><div id="TOP2" @mouseenter="mymouseenter6($event)" @mouseleave="mymouseleave6($event)"></div></a>
    </div>
</template>

<script>
import scoll from "@/assets/js/scoll.js";
export default {
  data() {
    return {
      // opacity: '',
    };
  },
  methods: {
    mymouseenter3(e) {
      e.target.style.opacity = "1";
    },
    mymouseleave3(e) {
      e.target.style.opacity = "0";
    },
    mymouseenter4(e) {
      e.target.style.opacity = "1";
    },
    mymouseleave4(e) {
      e.target.style.opacity = "0";
    },
    mymouseenter5(e) {
      e.target.style.opacity = "1";
    },
    mymouseleave5(e) {
      e.target.style.opacity = "0";
    },
    mymouseenter6(e) {
      e.target.style.opacity = "1";
    },
    mymouseleave6(e) {
      e.target.style.opacity = "0";
    }
  }
};
</script>

<style>
#celan {
  width: 58px;
  height: 294px;
  border: 1px solid #dddddd;
  background-color: #dddddd;
  display: none;
  z-index: 100;
  margin: 0;
  position: fixed;
  top: 200px;
  left: 1551px;
}

#celan > a > div {
  width: 58px;
  height: 59px;
}
#celan > a {
  margin: 0;
  font-size: 0;
}
#celan > div {
  width: 58px;
  height: 59px;
}

#kefu {
  background-image: url("https://www.ziyimall.com/images/icon1.png");
  background-position: -905px -503px;
}

#gouwuche {
  background-image: url("https://www.ziyimall.com/images/icon1.png");
  background-position: -846px -562px;
}
#gouwuche2 {
  background-image: url("https://www.ziyimall.com/images/icon1.png");
  background-position: -905px -562px;
  position: relative;
  top: -236px;
  opacity: 0;
}

#dianhua {
  background-image: url("https://www.ziyimall.com/images/icon1.png");
  background-position: -846px -621px;
}
#dianhua2 {
  background-image: url("https://www.ziyimall.com/images/icon1.png");
  background-position: -905px -621px;
  position: relative;
  top: -236px;
  opacity: 0;
}
#dianhua2 > div {
  width: 220px;
  height: 59px;
  position: absolute;
  top: 0;
  left: -220px;
}
#dianhuahaoma {
  width: 200px;
  height: 59px;
  border: 1px solid rgba(53, 53, 53, 0.377);
  background-color: white;
}
#dianhuahaoma > p:nth-child(1) {
  font-size: 17px;
  line-height: 33px;
  text-align: center;
  color: #524e4e;
}
#dianhuahaoma > p:nth-child(2) {
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  color: #807a7a;
}

#fankui {
  background-image: url("https://www.ziyimall.com/images/icon1.png");
  background-position: -846px -680px;
}
#fankui2 {
  background-image: url("https://www.ziyimall.com/images/icon1.png");
  background-position: -905px -680px;
  position: relative;
  top: -236px;
  opacity: 0;
}

#TOP {
  background-image: url("https://www.ziyimall.com/images/icon1.png");
  background-position: -846px -739px;
}
#TOP2 {
  background-image: url("https://www.ziyimall.com/images/icon1.png");
  background-position: -905px -739px;
  position: relative;
  top: -236px;
  opacity: 0;
}
</style>