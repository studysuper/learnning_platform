<template>
  <div>
    <div class="menu_header">
      <headBar activeIndex='4'></headBar>
    </div>
    <div class="test_body">
      <div class="test_list">
        <div class="test_name_item"
          v-for="item in testList">
          <div class="test_name_item_in">
            <div class="name_title">
              {{item.title}}
            </div>
            <div class="name_desc">
              {{item.desc}}
            </div>
            <div class="name_btns">
              <div class="name_btns_dati active" @click="goXingcetest(item.code)">
                我要答题
              </div>
            </div>
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
const testListData=[];
export default {
  data() {
    return {
      
       testList:testListData
    };
  },
  mounted:function(){
    this.initData();
  },
  methods:{
    goXingcetest(code){
      window.location.href = '/xingceTest?code='+code;
    },
    initData(){
      console.log("开始调用后端queryTestPaperAll接口");
      let url = "http://localhost:80/api/testpaper/queryTestPaperAll";
      let param = {
        "exerciseMode":"1"
      };
      this.$axios
        .post(url,param)
        .then(function(res) {
          
          let dataArray = res.data;
          for(let i = 0;i<dataArray.length;i++){
              let title  = res.data[i].exerciseTitle;
              let number= res.data[i].exerciseNumber;//总共题数
              let code = res.data[i].testPaperNumber;
              let time = res.data[i].exerciseTime;//总共时间
              let dsc = "共"+number+"题，总时间"+time+"分钟";
              
              testListData.push({
                code:code,
                title:title,
                desc:dsc
              });
          }
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
.test_body {
  margin-top: 10px;
  width: 100%;
  /* height: 800px; */
  background: #f5f5f6;
}
.test_list {
  width: 1190px;
  margin: 0 auto;
  overflow: auto;
}
.test_name_item {
  float: left;
  width: 280px;
  height: 182px;
  box-sizing: border-box;
  border: 1px solid #e4e4e4;
  background-color: #f8f8f8;
  border-radius: 3px;
  margin-right: 23px;
  margin-top: 23px;
}
.test_name_item:nth-of-type(4n) {
  margin-right: 0;
}
.test_name_item_in {
  height: 100%;
  background-color: #fff;
  position: relative;
}
.test_name_item_in .name_title {
  width: 180px;
  margin: 0 auto;
  color: #333;
  font-size: 16px;
  line-height: 22px;
  overflow: hidden;
  text-align: center;
  margin-bottom: 20px;
  padding-top: 20px;
}
.test_name_item_in .name_desc {
  color: #999;
  line-height: 18px;
  font-size: 14px;
  padding-left: 20px;
}
.test_name_item_in .name_btns {
  position: absolute;
  width: 100%;
  height: 30px;
  right: 0;
  bottom: 25px;
}
.test_name_item_in .name_btns > div {
  width: 92px;
  height: 30px;
  box-sizing: border-box;
  text-align: center;
  line-height: 28px;
  background-color: #40b6fc;
  border: 1px solid #bfe9ff;
  color: #fff;
  margin-right: 20px;
  border-radius: 3px;
  cursor: pointer;
  margin: auto;
}
</style>

