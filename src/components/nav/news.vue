<template>
  <div class="news_body">
     <div class="menu_header">
      <headBar></headBar>
    </div>
    <div class="new_box">
      <div class="news_list">
        <span>山东|2019年山东曲阜市引进优秀i青年人才100人公告</span>
        <div class="news_mes">
          <span>200人浏览</span>
          <span>03-21</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headBar from "@/components/nav/header";
import footerBar from "@/components/nav/footer";
export default {
  
  components: {
    headBar,
    footerBar
  }
};
</script>

<style>
.menu_header {
  width: 80%;
  margin: auto;
}
.new_box {
  width: 100%;
  border: 1px solid;
  margin-top: 10px;
}
.news_list {
  width: 80%;
  margin: auto;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #666666;
  overflow: hidden;
}
.news_mes {
  float: right;
}
.news_mes span:first-child {
  padding-right: 20px;
}
</style>

