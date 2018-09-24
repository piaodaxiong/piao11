<template>
    <div id="jiankangbaike">
        <div class="title">
            <div>
                <h2>健康知识百科</h2>
            </div>
            <a href="">更多问题进入健康自助>>>
                <!-- <span class="el-icon-arrow-right"></span> -->
            </a>
        </div>
        <div id="baikeneirong">
            <div v-for="item8 in baikecontent">
                <span class="baike_title">{{item8.title}}<i class="el-icon-arrow-down"></i></span>
                <span class="baike_content">
                    <div v-for="item9 in item8.baojianxiangmu">
                        <a href="javascript:;">{{item9}}</a><em>|</em>
                    </div>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                baikecontent: [
                    {
                        title: '女性健康',
                        baojianxiangmu: ['更年期', '延缓衰老', '减肥', '气血不足', '内分泌调理', '月经', '卵巢保养', '排毒养颜']
                    }, {
                        title: '老年健康',
                        baojianxiangmu: ['更年期', '延缓衰老', '减肥', '气血不足', '内分泌调理', '月经', '卵巢保养', '排毒养颜']
                    }, {
                        title: '男性健康',
                        baojianxiangmu: ['更年期', '延缓衰老', '减肥', '气血不足', '内分泌调理', '月经', '卵巢保养', '排毒养颜']
                    }, {
                        title: '母婴健康',
                        baojianxiangmu: ['更年期', '延缓衰老', '减肥', '气血不足', '内分泌调理', '月经', '卵巢保养', '排毒养颜']
                    }, {
                        title: '常见症状',
                        baojianxiangmu: ['更年期', '延缓衰老', '减肥', '气血不足', '内分泌调理', '月经', '卵巢保养', '排毒养颜']
                    }, {
                        title: '中草药材',
                        baojianxiangmu: ['更年期', '延缓衰老', '减肥', '气血不足', '内分泌调理', '月经', '卵巢保养', '排毒养颜']
                    }, {
                        title: '营养膳食',
                        baojianxiangmu: ['更年期', '延缓衰老', '减肥', '气血不足', '内分泌调理', '月经', '卵巢保养', '排毒养颜']
                    }, {
                        title: '滋补养生',
                        baojianxiangmu: ['更年期', '延缓衰老', '减肥', '气血不足', '内分泌调理', '月经', '卵巢保养', '排毒养颜']
                    }, {
                        title: '健康品牌',
                        baojianxiangmu: ['更年期', '延缓衰老', '减肥', '气血不足', '内分泌调理', '月经', '卵巢保养', '排毒养颜']
                    }]
            };
        }
    }
</script>

<style>
    #jiankangbaike {
        width: 1202px;
        height: 353px;
        margin: 0 auto;
        padding-top: 37px;
        box-sizing: border-box;
    }

    #baikeneirong {
        width: 1200px;
        height: 274px;
        border: 1px solid #eaeaea;
    }

    #baikeneirong * {
        font-size: 12px;
    }

    #baikeneirong>div {
        width: 340px;
        height: 61px;
        float: left;
        margin: 20px 30px 3px 30px;
    }

    #baikeneirong .baike_title {
        font-size: 14px;
    }

    .baike_title>i {
        margin-left: 5px;
    }

    .baike_content {
        display: block;
        font-size: 12px;
        line-height: 18px;
        height: 36px;
        margin-top: 4px;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
    }
    .baike_content>div>a:hover {
        text-decoration: underline
    }

    .baike_content>div>em {
        font-style: normal;
        padding: 0 10px;
    }

    .baike_content>div:nth-last-child(1)>em {
        display: none;
    }

    .baike_content>div * {
        color: #666;
    }
</style>