<template>
    <div class="left">
        <div class="headinfo">
            <div class="headimg">
                <img src="./images/headimage.jpg" alt="头像">
            </div>
            <h3>陈旋</h3>
            <br>
            <h5>
                应聘职位：前端工程师
            </h5>
        </div>
        <div class="base-info">
            <div class="title">
                <h4>基本信息</h4>
            </div>
            <div class="base-info-content">
                <ul>
                    <li>出生年月：1997.12 </li>
                    <li>籍贯：江西省吉安市</li>
                    <li>手 机：15770615665 </li>
                    <li>地 址：江西省南昌市丰和南大道696号 </li>
                    <li></li>
                    <li>邮箱：1976756410@qq.com</li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div class="majors-info">
            <div class="title">
                <h4>
                    主修课程
                </h4>
            </div>
            <div class="base-info-content">
                <ul>
                    <li>计算机组成原理</li>
                    <li>数据库应用</li>
                    <li>数据结构与算法</li>
                    <li>嵌入式开发</li>
                    <li>C语言、C++、Java等</li>
                    <li>计算机网络</li>
                </ul>
            </div>
        </div>
        <div class="skills-info">
            <div class="title">
                <h4>
                    基本技能
                </h4>
            </div>
            <div class="base-info-content">
                <ul>
                    <li>英语四级(CET-4)</li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div class="education-info">
            <div class="title">
                <h4>
                    教育经历
                </h4>
            </div>
            <div class="base-info-content">
                <ul>
                    <li>
                        <b>本科方向：</b>物联网工程
                    </li>
                    <li>
                        <b>主要内容：</b>网络，前端，后端，嵌入式开发
                    </li>
                    <li></li>
                    <li>
                        <b>操作工具：</b>C，C++，Java，JavaScript等
                    </li>
                    <li></li>
                    <hr>
                    <li>
                        <b>研究生方向：</b>材料模拟
                    </li>
                    <li>
                        <b>主要内容：</b>利用软件和代码编写模拟分析材料特性
                    </li>
                    <li></li>
                    <li>
                        <b>操作工具：</b>Linux服务器,Python,Shell,Docker
                    </li>
                    <li></li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
</script>
<style lang="less" scoped>
.left {
    // background-color: aqua;
    margin-top: 10px;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: aliceblue;

    .headinfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .headimg {
        width: 100px;
        height: 100px;
        overflow: hidden;
        border-radius: 50%;

        img {
            width: 100%;
        }
    }

    .majors-info,
    .base-info,
    .skills-info,
    .education-info {
        width: 100%;
        display: flex;
        height: auto;
        flex-direction: column;
        justify-content: flex-start;
    }

    .title {
        width: 100%;
        padding-left: 5px;
        background-color: rgba(132, 128, 128, 0.405);
        margin: 10px 0px;
        height: 30px;
        line-height: 30px;
        border-bottom: 4px solid rgb(254, 254, 0);
    }

    .base-info-content {
        font-family: "SimHei";
        font-size: 14px;

        // height: 300px;
        ul {
            width: 100%;
            display: flex;
            flex-direction: column;

            li {
                list-style: none;
                height: 20px;
                line-height: 20px;
                padding-left: 5px;
            }
        }
    }
}
</style>