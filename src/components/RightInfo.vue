<template>
    <div class="right">
        <div class="top">
            <div class="head-white1"></div>
            <div class="head-white2"></div>
            <div class="head-white3"></div>
        </div>
        <div class="center">
            <div class="skills">
                <div class="title">
                    <h4>
                        <div>职业技能</div>
                    </h4>
                </div>
                <div class="list">
                    <textarea cols="30" rows="16" autoHeight="true">1.掌握HTML5、CSS3、JavaScript基础，能够独立的完成静态样式的编写。
2.熟悉JavaScript和TypeScript在前端项目开发中的应用。
3.能够使用css、sass、stylus等对样式进行编写的能力。
4.熟悉前端框架Vue等，对vue2.x和vue3.x均有比较深入的了解。
5.能够独立使用vue2.x或vue3.x框架完成功能的编写。
7.了解浏览器渲染机以及JS的运行机制。
8.计算机理论基础较好，掌握常用的Linux指令，了解Docker的使用和特性，熟悉Mysql等常见数据库。
9.熟练使用git进行代码管理，拥有github代码库。
10.熟悉Element-ui、Navie-ui等组件库完成了对css样式的辅助编写。
11.了解Django，Flask，Python，PHP等后端语言和框架,并且结合前端做过一些小Demo。
12.具备良好的代码编写习惯，具有良好的协调、沟通能力和学习能力，强烈的责任心与团队合作精神。
                    </textarea>
                </div>
            </div>
            <div class="demo">
                <div class="title">
                    <h4>
                        <div>项目案例</div>
                    </h4>
                </div>
                <div class="list">
                    <h5>一、利用flex弹性布局+vue3.x+TypeScript实现模拟购物商城</h5>
                    <textarea cols="30" rows="10" autoHeight="true">  通过抓取的网易云音乐后台接口，实现音乐播放，歌曲搜索，歌手展示，歌手详情等类似网易云音乐的功能。
  使用vue-cli构建vue项目，使用Babel解析ES6,Eslint进行代码规范检测，css3和动画插件实现动画，使用vuex来实现多个组件之间的数据共享，vue-router进行页面的路由选择，axios进行数据请求并自己进行封装，
项目代码：https://gitee.com/jackchen937/netease_cloud_music_player.git</textarea>
                </div>
                <div class="list">
                    <h5>二、利用vue2.x和vue3.x不同版本框架编写音乐播放器</h5>
                    <textarea cols="30" rows="10" autoHeight="true">  通过抓取的网易云音乐后台接口，实现音乐播放，歌曲搜索，歌手展示，歌手详情等类似网易云音乐的功能。
  使用vue-cli构建vue项目，使用Babel解析ES6,Eslint进行代码规范检测，css3和动画插件实现动画，使用vuex来实现多个组件之间的数据共享，vue-router进行页面的路由选择，axios进行数据请求并自己进行封装，
项目代码：https://gitee.com/jackchen937/netease_cloud_music_player.git</textarea>
                </div>
                <div class="list">
                    <h5>三、结合后端python+flask和vue3.x框架做登录页面</h5>
                    <textarea cols="30" rows="10" autoHeight="true">  通过抓取的网易云音乐后台接口，实现音乐播放，歌曲搜索，歌手展示，歌手详情等类似网易云音乐的功能。
  使用vue-cli构建vue项目，使用Babel解析ES6,Eslint进行代码规范检测，css3和动画插件实现动画，使用vuex来实现多个组件之间的数据共享，vue-router进行页面的路由选择，axios进行数据请求并自己进行封装，
项目代码：https://gitee.com/jackchen937/netease_cloud_music_player.git</textarea>
                </div>
            </div>
        </div>
        <div class="foot">
            <div class="foot-white1"></div>
            <div class="foot-white2"></div>
            <div class="foot-white3"></div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.right {
    background-color: rgba(255, 255, 255);
    width: 68%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    margin: 10px;

    .title {
        width: 100%;
        padding-left: 5px;
        // background-color: rgba(132, 128, 128, 0.405);
        margin: 10px 0px;
        height: 30px;
        line-height: 30px;
        border-bottom: 4px solid rgb(254, 254, 0);

        h4 {
            width: 90px;
            height: 30px;
            color: white;

            background-color: rgba(102, 102, 102, 0.501);

            div {
                width: 70px;
                height: 30px;
                padding-left: 5px;
                // border-bottom: 4px solid black;
                background-color: rgb(37, 71, 126);
            }
        }
    }

    .top {
        height: 40px;
        width: 100%;
        display: flex;
        flex-direction: row;

        .head-white1 {
            height: 0px;
            width: 0px;
            background-color: rgb(37, 71, 126);
            background-color: aqua;
            border-right: 20px solid rgb(255, 255, 255);
            border-bottom: 20px solid rgb(255, 255, 255);
            border-left: 20px solid rgb(37, 71, 126);
            border-top: 20px solid rgb(37, 71, 126);
        }

        .head-white2 {
            flex: 10;
        }

        .head-white3 {
            height: 0px;
            width: 0px;
            background-color: rgb(37, 71, 126);
            background-color: aqua;
            border-right: 20px solid rgb(37, 71, 126);
            border-bottom: 20px solid rgb(255, 255, 255);
            border-left: 20px solid rgb(255, 255, 255);
            border-top: 20px solid rgb(37, 71, 126);
        }
    }

    .center {
        background-color: white;
        height: auto;
        width: 100%;

        .skills {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    }

    .foot {
        height: 40px;
        width: 100%;
        display: flex;
        flex-direction: row;

        .foot-white1 {
            height: 0px;
            width: 0px;
            background-color: rgb(37, 71, 126);
            background-color: aqua;
            border-right: 20px solid rgb(255, 255, 255);
            border-bottom: 20px solid rgb(37, 71, 126);
            border-left: 20px solid rgb(37, 71, 126);
            border-top: 20px solid rgb(255, 255, 255);
        }

        .foot-white2 {
            flex: 10;
        }

        .foot-white3 {
            height: 0px;
            width: 0px;
            background-color: rgb(37, 71, 126);
            background-color: aqua;
            border-right: 20px solid rgb(37, 71, 126);
            border-bottom: 20px solid rgb(37, 71, 126);
            border-left: 20px solid rgb(255, 255, 255);
            border-top: 20px solid rgb(255, 255, 255);
        }
    }

    .list {
        margin-left: 1%;
        margin-right: 1%;
        width: 94.5%;
        height: auto;
        h5 {
            border-bottom: 2px solid gray;
        }

        textarea {
            width: 100%;
            padding: 5px;
            border: none;
            border-radius: 5px;
            resize: none;
            overflow: hidden;
            font-family: "SimHei";
            border: 2px solid rgb(33, 33, 33);
            height: auto;
        }

        textarea:focus {
            
        }
    }
}
</style>