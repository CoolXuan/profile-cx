<template>
  <div class="nav" id="app">
    <button class="downPDF" @click="downloadPdf">PDF</button>
    <button class="downword" @click="downloadWord">word</button>
    <LeftInfo />
    <RightInfo />
  </div>
</template>

<script lang="ts" setup>
import LeftInfo from "./components/LeftInfo.vue";
import RightInfo from "./components/RightInfo.vue";
import htmlToPdf from './js/htmltopdf.js';
import { saveAs } from 'file-saver';
import htmlDocx from 'html-docx-js/dist/html-docx';
let arr = document.querySelector('#app')  //获取dom
function downloadWord() {
  let html = arr.innerHTML; //获取html的内容
  let htmlStr = `
      <!DOCTYPE html>
      <html lang="en">
        <body style="font-family:方正仿宋_GBK;mso-ascii-font-family:'Times New Roman';">
          ${html}
        </body>
      </html>`;  //把获取到的html放入到原生的html中
  saveAs(
    htmlDocx.asBlob(htmlStr, { orientation: 'landscape' }),
    '问卷调查.doc'
  );  // 导出为word
}
function downloadPdf() {
  htmlToPdf.getPdf("呈报表", document.getElementById("app"));
}
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}

.downPDF {
  position: absolute;
  top: 0;
  left: 0;
}
.downword{
  position: absolute;
  top: 50px;
  left: 0;
}

#app {
  background-color: rgb(30, 76, 152);
  margin: 0 auto;
  width: 600px;
  height: auto;
  font-family: Microsoft YaHei"微软雅黑";
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
</style>
