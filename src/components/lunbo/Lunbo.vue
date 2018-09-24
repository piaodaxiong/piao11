<template>
    <div class="banner">
      <div class="bannerImg">
        <transition-group tag="div">
          <span v-for="(v,i) in banners" :key="i" :style="{opacity:(i+1)==n?'1':'0'}" class="active">
            <img :src="v" alt="">
          </span>
        </transition-group>
      </div>
      <ul class="bannerBtn clear-fix">
        <li v-for="num in 3">
          <a href="javascript:;" :style="{background:num==n?'#ff7800':''}" @mouseenter='changeenter(num)' @mouseleave='changeleave(num)'
            class='aBtn'>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        banners: [
          "https://www.ziyimall.com/file_img/adv/20180619/20180619175437.jpg",
          "https://www.ziyimall.com/file_img/adv/20180619/20180619175245.jpg",
          "https://www.ziyimall.com/file_img/adv/20180626/20180626114319.jpg"
        ],
        n: 1,
        bFlag: true,
        timer1: "",
        timer2: "",
        timer3: ""
      };
    },
    methods: {
      next() {
        if (this.bFlag) {
          this.bFlag = false;
          this.clearT();
          this.n = this.n + 1 == 4 ? 1 : this.n + 1;
          this.timeout();
        }
      },
      clearT() {
        clearInterval(this.timer1);
        clearInterval(this.timer2);
        clearInterval(this.timer3);
      },
      timeout() {
        this.timer2 = setInterval(() => {
          this.bFlag = true;
        }, 1000);
        this.timer1 = setInterval(() => {
          this.next();
        }, 2000);
      },
      changeenter(num) {
        if (this.bFlag) {
          // this.bFlag = false;
          this.clearT();
          this.n = num;
          this.timeout();
          clearInterval(this.timer1);
          clearInterval(this.timer2);
          clearInterval(this.timer3);
        }
      },
      changeleave(num) {
        if (this.bFlag) {
          this.bFlag = true;
          this.clearT();
          this.n = num;
          this.timeout();
        }
      }
    },
    mounted() {
      this.timer3 = setInterval(this.next, 2000);
    }
  };
</script>

<style>
  .banner {
    position: relative;
    border-top: 2px solid #6f00af;
  }

  .bannerImg {
    position: relative;
    height: 448px;
    overflow: hidden;
  }

  .bannerImg span {
    position: absolute;
    top: 0;
    left: 0;
  }

  .bannerImg span.active {
    transition: all 1s;
  }

  .bannerBtn {
    width: 200px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    bottom: 22px;
    text-align: center;
  }

  .bannerBtn li {
    margin: 0 13px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    float: left;
    background: lavender;
  }

  .bannerBtn li a {
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    /* margin: 3px; */
  }

  .bannerBtn li a.aBtn {
    transition: all 0.6s ease;
  }
</style>