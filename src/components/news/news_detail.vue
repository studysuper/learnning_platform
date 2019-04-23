<template>
  <div class="news_detail">
    <div class="menu_header">
      <headBar activeIndex='3'></headBar>
    </div>
    <div class="news_detail_box">
      <h2 class="news_tit" id = "newsTitle"></h2>
      <span class="news_author" id = "news_author"></span>
      <span class="news_date" id="newsDate"></span>
      <div id="content">

      </div>
    </div>
    <footerBar></footerBar>
  </div>
</template>
<script>
import headBar from "@/components/nav/header";
import footerBar from "@/components/nav/footer";
export default {
 
  mounted(){
    let id = this.GetQueryString('id');
    //调用接口进行数据初始化
    this.initData(id);
  },
  methods:{
       // 获取参数
    GetQueryString(name)
      {
           var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
           var r = window.location.search.substr(1).match(reg);
           if(r!=null)return  unescape(r[2]); return null;
      },
    initData(id){
      console.log("开始调用后端queryContendById接口");
      let url = "http://localhost:80/api/bContent/queryContendById";
      let param = {
        "id":id,
      };
      this.$axios
        .post(url,param)
        .then(function(res) {
        let dataDatail = res.data;   
        document.getElementById("newsTitle").innerText=dataDatail.title;
        document.getElementById("news_author").innerText='作者：'+ dataDatail.author;
        document.getElementById("newsDate").innerText='时间：'+dataDatail.gtmModified;
        document.getElementById("content").innerHTML=dataDatail.content;
       })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
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
.news_detail_box {
  width: 60%;
  margin: auto;
  margin-top: 20px;
}
.news_tit {
    font-size: 16px;
}
.news_author {
    font-size: 14px;
    color: #333;
    display: block;
    height: 30px;
    line-height: 30px;
}
.news_date {
    font-size: 14px;
    color: #666;
    display: block;
    height: 30px;
    line-height: 30px;
}
.news_detail_box p {
    font-size: 14px;
    text-indent: 2em;
    line-height: 26px;
}
</style>

