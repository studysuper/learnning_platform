<template>
  <div>
    <div class="test_head">
      <div class="logo_box">
        <img
          src="../../assets/images/logo.png"
          @click="goIndex()"
        >
      </div>
    </div>
    <div class="test_list_body">
      <div class="test_body_left">
        <div class="test_box">
          <div class="test_title">
              <span id="testTitle" name="testTitle"></span>
          </div>
          <div
            class="test_item_box"
            v-for="(item,index) in testList"
          >
            <p class="test_tit_p">
              {{item.num}}. {{item.title}}
            </p>
            <div class="test_answer">
              <p>A. {{item.ans1}}</p>
              <p>B. {{item.ans2}}</p>
              <p>C. {{item.ans3}}</p>
              <p>D. {{item.ans4}}</p>
            </div>
           <font color='red'> 你的答案：{{item.yourAnswer}}</font>
            <p></p>
           <font color='red'>  正确答案：{{item.answer}}</font>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</template>
<script>
const testListData=[];
export default {
  data() {
    return {
      radio2: 3,
      testList :testListData
    };
  },
 mounted(){
   this.isLogin();
    let id = this.GetQueryString('id');
    //调用接口进行数据初始化
    this.initData(id);
},      
methods:{
  isLogin:function(){
      let isLoagin = document.cookie;
      if(isLoagin==""){
          alert('请先登录');
			    window.location.href = '/login?login';
      }
  },
    // 获取参数
    GetQueryString(name)
      {
           var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
           var r = window.location.search.substr(1).match(reg);
           if(r!=null)return  unescape(r[2]); return null;
      },
   initData :function(id){
      console.log("开始调用后端queryTestByCode接口");
        let url = "http://localhost:80/api/testpaper/querRecordDetial";
        let param = {
          "id":id,
          "operator":document.cookie
        };
        this.$axios
          .post(url,param)
          .then(function(res) {
            if(res.data.length>0){
              let dataArray = res.data;
              let title = dataArray[0].exerciseTitle;
              document.getElementById("testTitle").innerText=title;
              for(let i = 0;i<dataArray.length;i++){
                let topic= dataArray[i].testPaperTopic;
                let testPaperOptionA= dataArray[i].testPaperOptionA;
                let testPaperOptionB= dataArray[i].testPaperOptionB;
                let testPaperOptionC= dataArray[i].testPaperOptionC;
                let testPaperOptionD= dataArray[i].testPaperOptionD;
                let answer = dataArray[i].testPaperAnswer;
                let paperNumber= dataArray[i].paperNumber;//试题分数
                let topicId = dataArray[i].topicId;//试题id
                let yourAnswer = dataArray[i].yourAnswer;//你的答案
                testListData.push({
                  num:i+1,
                  topicId:topicId,
                  title:topic,
                  ans1:testPaperOptionA,
                  ans2:testPaperOptionB,
                  ans3:testPaperOptionC,
                  ans4:testPaperOptionD,
                  answer:answer,
                  yourAnswer:yourAnswer
                });
              }
            }
            
        }).catch(function(error) {
            console.log(error);
          });
          }
      },
};
</script>
<style>
.test_head {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #cbcbcb;
}
.logo_box {
  width: 1190px;
  margin-left: 10%;
}
.logo_box img {
  width: 140px;
  cursor: pointer;
}
.test_list_body {
  width: 1190px;
  margin-left: 10%;
  overflow: hidden;
}
.test_body_left {
  float: left;
  width: 880px;
}
.test_box {
  padding-bottom: 20px;
}
.test_title {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid;
}
.test_tit_p {
  font-size: 14px;
  line-height: 24px;
}
.test_answer p {
  font-size: 14px;
}
.test_choice {
  margin-top: 20px;
}
.test_body_right {
  float: right;
  width: 285px;
  border: 1px solid #cbcbcb;
  border-top: none;
}
.test_item_box {
  border-bottom: 1px dotted #cbcbcb;
  padding-bottom: 20px;
}
.clock_img {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
}
.clock_img img {
  width: 114px;
}
.timer_box {
  width: 100%;
}
.timer_box p {
  text-align: center;
  font-size: 14px;
  color: #cbcbcb;
}
.btn {
  width: 245px;
  height: 32px;
  margin: auto;
  text-align: center;
  line-height: 32px;
  border-radius: 10px;
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
}
.btn_stop,
.btn_after {
  border: 1px solid #0468a6;
  color: #0468a6;
}
.btn_sub {
  background: #0468a6;
  color: #ffffff;
  margin-bottom: 20px;
}
</style>
