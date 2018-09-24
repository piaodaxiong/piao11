<template>
    <div id="main_center_box">
        <div id="main_center">
            <div id="main_box_1" style="margin-top:50px;"  class="main_box">
                <div id="main_box_top_1">
                    <i id="main_box_img_1"></i>
                </div>
                <div id="main_box_bottom_1">
                    <img src="http://img.kmsd1818.com/cms/2018/08/31/161213238.jpg" alt="">
                    <img src="http://img.kmsd1818.com/cms/2018/08/29/101221216.jpg" alt="">
                    <img src="http://img.kmsd1818.com/cms/2018/08/29/101243217.jpg" alt="">
                    <img src="http://img.kmsd1818.com/cms/2018/08/29/101304218.jpg" alt="">
                    <img src="http://img.kmsd1818.com/cms/2018/08/29/101318219.jpg" alt="">
                </div>
            </div>
            <div id="main_box_2"  class="main_box main_box_2">
                <div id="main_box_left">
                    <div id="main_box_left_top">品牌街</div>
                    <div id="main_box_left_bottom">
                        <div id="main_box_left_bottom_left">
                            <div class="hover_qipao"><img src="http://img.kmsd1818.com/cms/2018/09/05/095639308.jpg" alt=""></div>
                            <div><img src="http://img.kmsd1818.com/cms/2018/09/05/095704309.jpg" alt=""></div>
                            <div><img src="http://img.kmsd1818.com/cms/2018/09/03/135245245.jpg" alt=""></div>
                            <div><img src="http://img.kmsd1818.com/cms/2018/06/20/124847944.jpg" alt=""></div>
                        </div>
                        <div id="main_box_left_bottom_right">
                            <a href="#" style="display:block;"><img src="http://img.kmsd1818.com/cms/2018/09/05/095630307.jpg"
                                    alt=""></a>
                            <a href="#"><img src="http://img.kmsd1818.com/cms/2018/06/23/093509971.jpg" alt=""></a>
                            <a href="#"><img src="http://img.kmsd1818.com/cms/2018/09/03/135238244.jpg" alt=""></a>
                            <a href="#"><img src="http://img.kmsd1818.com/cms/2018/06/23/093628972.jpg" alt=""></a>
                        </div>
                    </div>
                </div>
                <div id="main_box_center">
                    <div id="main_box_left_top">活动主题专场</div>
                    <div id="main_box_left_bottom" style="flex-direction: column; justify-content: space-between; height: 410px;">
                        <a href="#"><img class="main_box_center_2_img" src="http://img.kmsd1818.com/cms/2018/08/08/1138111419.jpg"
                                alt=""></a>
                        <a href="#"><img class="main_box_center_2_img" src="http://img.kmsd1818.com/cms/2018/08/08/1138111419.jpg"
                                alt=""></a>
                    </div>
                </div>
                <div id="main_box_right">
                    <div id="main_box_left_top">热卖产品</div>
                    <div id="main_box_right_bottom">
                        <a href="#"><img src="http://img.kmsd1818.com/cms/2018/07/20/1401551230.jpg" alt=""></a>
                        <a href="#"><img src="http://img.kmsd1818.com/cms/2018/07/20/0911111229.jpg" alt=""></a>
                        <a href="#"><img src="http://img.kmsd1818.com/cms/2017/11/27/161642897.jpg" alt=""></a>
                        <a href="#"><img src="http://img.kmsd1818.com/cms/2018/04/08/085733151.jpg" alt=""></a>
                    </div>
                </div>
            </div>
            <div v-for='item_item in aaa'>
                <div class="main_box_top" :id = 'item_item.idd'>
                    <h2>{{item_item.a}}</h2>
                </div>
                <div class="main_box_bottom">
                    <div class="main_box_bottom_left">
                        <a href="#">
                            <img class="main_box_bottom_left_img" :src="item_item.b" alt="">
                            <div class="main_box_bottom_left_a">
                                <a class="main_box_bottom_left_a_1" href="#" v-for='item in item_item.c'>{{item}}</a>
                            </div>
                        </a>
                    </div>
                    <div class="main_box_bottom_right">
                        <div class="main_box_bottom_right_top">
                            <div class="main_box_bottom_right_top_div" v-for='itemm in item_item.d'>
                                <div>
                                    <a href="#">
                                        <img class="main_box_bottom_right_top_div_img" :src="itemm.aa" alt="">
                                    </a>
                                </div>
                                <div style="height:20px;">
                                    <a class="main_box_bottom_right_top_div_a" href="#">{{itemm.bb}}</a>
                                </div>
                                <div>
                                    <del style="display: inline-block;color: #999;line-height: 18px;font-size: 12px;">{{itemm.cc}}</del>
                                    <span class="main_box_bottom_right_top_div_span_1">{{itemm.dd}}</span>
                                </div>
                                <div>
                                    <strong style="color: #d0111f; font-size: 15px;">{{itemm.ff}}</strong>
                                    <span style="color: #d0111f; font-size: 13px; margin-left: 70px">{{itemm.gg}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="main_box_bottom_right_bottom" style="border-top:none;">
                            <div class="main_box_bottom_right_top_div" v-for='item_2 in item_item.e'>
                                <div>
                                    <a href="#">
                                        <img class="main_box_bottom_right_top_div_img" :src="item_2.aaa" alt="">
                                    </a>
                                </div>
                                <div style="height:20px;">
                                    <a class="main_box_bottom_right_top_div_a" href="#">{{item_2.bbb}}</a>
                                </div>
                                <div>
                                    <del style="display: inline-block;color: #999;line-height: 18px;font-size: 12px;">{{item_2.ccc}}</del>
                                    <span class="main_box_bottom_right_top_div_span_1">{{item_2.ddd}}</span>
                                </div>
                                <div>
                                    <strong style="color: #d0111f; font-size: 15px;">{{item_2.fff}}</strong>
                                    <span style="color: #d0111f; font-size: 13px; margin-left: 70px">{{item_2.ggg}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div id="aside_left_nav">
                <span class="click_box">滋补养生1</span>
                <span class="click_box">滋补养生2</span>
                <span class="click_box">滋补养生3</span>
                <span class="click_box">滋补养生4</span>
                <span class="click_box">滋补养生5</span>
                <span class="click_box">滋补养生6</span>
                <span class="click_box">滋补养生7</span>
                <span class="click_box">滋补养生8</span>
                <span class="click_box" style="border: none;">滋补养生9</span>
            </div>
        </div>
    </div>

</template>

<script>
import pulley from "@/pulley/pulley.js"
export default {
  data() {
    return {
      aaa: [{
          idd: "main_box_3",
          a: "滋补养生333",
          b: "http://img.kmsd1818.com/cms/2018/08/23/154602165.jpg",
          c: ["燕窝", "阿胶", "枸杞", "灵芝", "人参", "茶饮"],
          d: [
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            }
          ],
          e: [
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            }
          ]
        },
        {
          idd: "main_box_4",
          a: "滋补养生444",
          b: "http://img.kmsd1818.com/cms/2018/08/23/154602165.jpg",
          c: ["燕窝", "阿胶", "枸杞", "灵芝", "人参", "茶饮"],
          d: [
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            }
          ],
          e: [
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            }
          ]
        },
        {
          idd: "main_box_5",
          a: "滋补养生555",
          b: "http://img.kmsd1818.com/cms/2018/08/23/154602165.jpg",
          c: ["燕窝", "阿胶", "枸杞", "灵芝", "人参", "茶饮"],
          d: [
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            }
          ],
          e: [
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            }
          ]
        },
        {
          idd: "main_box_6",
          a: "滋补养生666",
          b: "http://img.kmsd1818.com/cms/2018/08/23/154602165.jpg",
          c: ["燕窝", "阿胶", "枸杞", "灵芝", "人参", "茶饮"],
          d: [
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            }
          ],
          e: [
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            }
          ]
        },
        {
          idd: "main_box_7",
          a: "滋补养生777",
          b: "http://img.kmsd1818.com/cms/2018/08/23/154602165.jpg",
          c: ["燕窝", "阿胶", "枸杞", "灵芝", "人参", "茶饮"],
          d: [
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            }
          ],
          e: [
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            }
          ]
        },
        {
          idd: "main_box_8",
          a: "滋补养生888",
          b: "http://img.kmsd1818.com/cms/2018/08/23/154602165.jpg",
          c: ["燕窝", "阿胶", "枸杞", "灵芝", "人参", "茶饮"],
          d: [
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            }
          ],
          e: [
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            }
          ]
        },
        {
          idd: "main_box_9",
          a: "滋补养生999",
          b: "http://img.kmsd1818.com/cms/2018/08/23/154602165.jpg",
          c: ["燕窝", "阿胶", "枸杞", "灵芝", "人参", "茶饮"],
          d: [
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            },
            {
              aa:
                "http://img.kmsd1818.com/product/upload/product/103511/128098/2018090318042688092_128098_8.jpg",
              bb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              cc: "市场价:￥149.00",
              dd: "月销：612",
              ff: "￥99.00",
              gg: "积分：1"
            }
          ],
          e: [
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            },
            {
              aaa:
                "http://img.kmsd1818.com/product/upload/product/103510/128096/2018090318160365130_128096_8.jpg",
              bbb: "【乐购专区】康美新开河新鲜人参新鲜农产品",
              ccc: "市场价:￥149.00",
              ddd: "月销：612",
              fff: "￥99.00",
              ggg: "积分：1"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
#main_center {
  width: 1210px;
  height: 4500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main_box {
  width: 1210px;
  height: 450px;
}

#main_box_top_1 {
  width: 1210px;
  height: 60px;
  box-sizing: border-box;
  border-bottom: 1px solid #e8e8e8;
}

#main_box_bottom_1 {
  width: 1210px;
  height: 360px;
  display: flex;
  justify-content: space-between;
}

#main_box_img_1 {
  width: 190px;
  height: 50px;
  background-image: url(../.././assets/img3.png);
  background-position: -103px -393px;
}

.main_box_top {
  width: 1210px;
  height: 40px;
  line-height: 2;
}

.main_box_bottom {
  height: 410px;
  display: flex;
}

h2 {
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  padding-left: 20px;
  display: inline-block;
}

.main_box_2 {
  display: flex;
  justify-content: space-between;
}

.main_box_2 > div {
  width: 390px;
  height: 400px;
  /* background-color: rgb(117, 138, 98); */
}
#main_box_left_top {
  width: 390px;
  height: 40px;
  background-color: #dadada;
  background-image: url(../.././assets/img3.png);
  background-position: -0px -512px;
  line-height: 38px;
  font-size: 17px;
  color: #333;
  text-indent: 25px;
}

#main_box_left_bottom {
  height: 410px;
  position: relative;
  border: 1px solid #dadada;
  box-sizing: border-box;
}

#main_box_left_bottom_left {
  width: 144px;
  height: 410px;
  /* background-color: rgb(217, 215, 250); */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#main_box_left_bottom_left > div {
  width: 125px;
  height: 85px;
  text-align: center;
  line-height: 8.5;
}

#main_box_left_bottom_left > div > img {
  width: 96px;
  height: 64px;
}

#main_box_left_bottom_right {
  width: 266px;
  height: 359px;
  /* background-color: rgb(77, 165, 42); */
}

.hover_qipao {
  background-image: url(../.././assets/img3.png);
  background-position: -122px -556px;
  /* background-color: black; */
}

#main_box_left_bottom_right > a {
  position: absolute;
  top: 25px;
  right: 0;
  display: none;
}

#main_box_left_bottom_right > a,
#main_box_left_bottom_right > a > img {
  width: 266px;
  height: 359px;
}

.main_box_center_2_img {
  width: 388px;
  height: 202px;
}

#main_box_right_bottom {
  height: 410px;
  border: 1px solid #dadada;
  box-sizing: border-box;
}

#main_box_right_bottom > a {
  display: inline-block;
}

#main_box_right_bottom > a > img {
  width: 191.635px;
  height: 202px;
}

.main_box_bottom_left {
  width: 240px;
  height: 410px;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  font-size: 0;
}

.main_box_bottom_left_img {
  width: 100%;
  height: 364px;
}

.main_box_bottom_left_a {
  height: 39px;
  text-align: center;
  padding-top: 5px;
  background-color: rgba(168, 156, 156, 0.5);
}

.main_box_bottom_left_a_1 {
  display: inline-block;
  width: 60px;
  height: 20px;
  color: #333;
  font-size: 13px;
}

.main_box_bottom_left_a_1:hover {
  text-decoration: underline black;
}

.main_box_bottom_right {
  width: 1210px;
  height: 410px;
}

.main_box_bottom_right_top,
.main_box_bottom_right_bottom {
  display: flex;
  justify-content: space-between;
  width: 1010px;
  height: 205px;
  /* background-color: red; */
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
}

.main_box_bottom_right_top_div {
  width: 200px;
  height: 202px;
  /* background-color: chartreuse; */
  text-align: center;
  border: 1px solid #dadada;
}

.main_box_bottom_right_top_div_img {
  padding-top: 5px;
  width: 130px;
  height: 130px;
}

.main_box_bottom_right_top_div_a {
  text-align: center;
  display: inline-block;
  line-height: 22px;
  overflow: hidden;
  white-space: nowrap;
  width: 180px;
  text-overflow: ellipsis;
  font-size: 12px;
  color: #666;
}

.main_box_bottom_right_top_div_a:hover {
  color: #d0111f;
  text-decoration: underline #d0111f;
}

.main_box_bottom_right_top_div_span_1 {
  font-size: 12px;
  color: #666;
  margin-left: 25px;
}

#aside_left_nav {
  width: 70px;
  text-align: center;
  position: fixed;
  top: calc(60% - 250px);
  left: 150px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  border: 1px solid #dadada;
  display: none;
}
#aside_left_nav > span {
  display: inline-block;
  width: 70px;
  height: 40px;
  line-height: 3;
  text-align: center;
  background-color: #fafbfc;
  font-size: 12px;
  color: #333;
  border-bottom: 1px solid #dadada;
}
#aside_left_nav > span:hover {
  background-color: #d0111f !important;
  color: #fff !important;
}
</style>