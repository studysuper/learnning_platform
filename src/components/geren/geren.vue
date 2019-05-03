<template>
  <div class="learn_data">
    <div class="menu_header">
      <headBar activeIndex='6'></headBar>
    </div>
    <div class="learn_data_box">
      <div class="learn_data_list" v-for="item in dataList">
        <span>{{item.tit}}</span>
        <div class="oper_btns">
          <!-- <div class="up_btn">
            上传文件
          </div> -->
          <div class="down_btn">
            <a href="#" @click="show(item.id)">查看</a>
          </div>
        </div>
      </div>
    </div>
    <footerBar></footerBar>
  </div>
</template>
<script>
import headBar from "@/components/nav/header";
import footerBar from "@/components/nav/footer";
const dataListData = [];
export default {
    data(){
        return{
           dataList:dataListData
        }
    },
  mounted(){
    this.initData();
  },
  methods:{
    show (id) {
        //内容查看
        window.location.href='gerenTest?id='+id;
    },
    //初始化新闻文章数据信息
    initData(){
      console.log("开始调用后端queryTestPaperAll接口");
      let url = "http://localhost:80/api/testpaper/queryRecord";
      let param = {
        "operator":document.cookie
      };
      this.$axios
        .post(url,param)
        .then(function(res) {
          let dataArray = res.data;
          for(let i = 0;i<dataArray.length;i++){
              let title  = res.data[i].exerciseTitle;
              let id = res.data[i].id;
              dataListData.push({
                id:id,
                tit:title
              });
          }
       })
        .catch(function(error) {
          console.log(error);
        });
    },
    downFile(id){
      console.log("开始下载文件");
      let url = "http://localhost:80/api/testpaper/createTestPaper";
      let param = {
        "id":id
      };
      //----
        this.$axios
        .post(url,param)
        .then(function(res) {
          //debugger;
         //let url = 'http://localhost/file/123.doc';
         let url = "http://localhost/file"+ res.data.split("file")[1];
          window.location.href=url;
       })
        .catch(function(error) {
          console.log(error);
        });

      // this.$axios({
      //     method: 'post',
      //     url: url,
      //     data:param
      //    // responseType: 'blob'
      // }).then(response => {
      //   window.location.href='D:\\wordFile\\123.docx';
      //     // this.download(response)
      // }).catch((error) => {

      // })


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
.learn_data_box {
  width: 60%;
  margin: auto;
  font-size: 14px;
  color: #666;
  margin-top: 20px;
}
.learn_data_list {
  height: 40px;
  line-height: 40px;
  overflow: hidden;
}
.learn_data_list span:hover {
    color: #40b6fc;
    cursor: pointer;
} 
.oper_btns {
  float: right;
}
.oper_btns div {
  display: inline-block;
  cursor: pointer;
}
.up_btn {
  margin-right: 10px;
}
</style>

