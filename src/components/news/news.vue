<template>
  <div class="news_body">
    <div class="menu_header">
      <headBar activeIndex='3'></headBar>
    </div>
    <div class="new_box">
      <div class="news_list" v-for="item in newsList" @click="goNewsdetail(item.id)" >
        <span >{{item.loc}}|{{item.tit}}</span>
        <div class="news_mes"  >
          <!-- <span>{{item.num}}人浏览</span> -->
          <span>{{item.date}}</span>
        </div>
      </div>
    </div>
    <div class="news_page">
      <el-pagination
        background
        :page-size="10"
        layout=" prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
    <footerBar></footerBar>
  </div>
</template>
<script>
import headBar from "@/components/nav/header";
import footerBar from "@/components/nav/footer";
const newsListData = [];
export default {
  data() {
    return {
       pageSize:10,
       total:100,
       newsList:newsListData
    };
  },
  mounted(){
    this.initData();
  },
  methods:{
    //初始化新闻文章数据信息
    initData(){
      console.log("开始调用后端queryContendList接口");
      let url = "http://localhost:80/api/bContent/queryContendList";
      let param = {
        "offset":"0",
        "limit":"20"
      };
      this.$axios
        .post(url,param)
        .then(function(res) {
          let dataArray = res.data;   
          //debugger;
          this.total=dataArray.length;
         for(let i = 0;i<dataArray.length;i++){
            let id  = dataArray[i].cid;
            let locData = dataArray[i].location;
            let titData = dataArray[i].title;
            let numData  = dataArray[i].commentsNum;
            let dateData  = dataArray[i].gtmModified;
             //封装数据
             newsListData.push({
                id:id,
                loc:locData,
                tit:titData,
                num:numData,
                date:dateData
              });

          }
          
       })
        .catch(function(error) {
          console.log(error);
        });

    },
    goNewsdetail(id){
      window.location.href = '/newsDetail?id='+id
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
.new_box {
  width: 100%;
  margin-top: 30px;
}
.news_list {
  width: 80%;
  margin: auto;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #666666;
  overflow: hidden;
  cursor: pointer;
}
.news_list:hover {
  color: #40b6fc;
}
.news_mes {
  float: right;
}
.news_mes span:first-child {
  padding-right: 20px;
}
.news_page {
  width: 80%;
  margin: auto;
  margin-top: 20px;
}
</style>

