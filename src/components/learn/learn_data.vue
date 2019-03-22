<template>
  <div class="learn_data">
    <div class="menu_header">
      <headBar activeIndex='2'></headBar>
    </div>
    <div class="learn_data_box">
      <div class="learn_data_list" v-for="item in dataList">
        <span>{{item.tit}}</span>
        <div class="oper_btns">
          <div class="up_btn">
            上传文件
          </div>
          <div class="down_btn">
            下载文件
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
export default {
    data(){
        return{
            dataList:[
                {tit:'22019重庆公务员考试：公基经济学成本考点1'},
                {tit:'22019重庆公务员考试：公基经济学成本考点2'},
                {tit:'22019重庆公务员考试：公基经济学成本考点3'},
                {tit:'22019重庆公务员考试：公基经济学成本考点4'},
                {tit:'22019重庆公务员考试：公基经济学成本考点5'},
                {tit:'22019重庆公务员考试：公基经济学成本考点6'},
                {tit:'22019重庆公务员考试：公基经济学成本考点7'},
                {tit:'22019重庆公务员考试：公基经济学成本考点8'},
                {tit:'22019重庆公务员考试：公基经济学成本考点9'},
                {tit:'22019重庆公务员考试：公基经济学成本考点10'},

            ]
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

