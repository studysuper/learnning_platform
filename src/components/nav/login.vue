<template>
  <div>
    <headBar activeIndex="5"></headBar>
    <div class="login_bg">
      <div class="login_box">
        <input
          class="username"
          type="text"
          placeholder="用户名："
          ref="user"
        >
        <input
          class="pwd"
          type="password"
          placeholder="密码："
          ref="pwd"
        >
        <div
          class="login_btn"
          @click="getMes(nowState)"
        >{{urlData}}</div>
      </div>
    </div>
    <footerBar class="footerBar"></footerBar>
  </div>
</template>
<script>
import headBar from "@/components/nav/header";
import footerBar from "@/components/nav/footer";

export default {
  data() {
    return {
      urlData:'',
      nowState:0
    };
  },
  mounted() {
    console.log(document.location.toString());
    let url = document.location.toString();
    let arrUrl = url.split('?');
    let urlPara = arrUrl[1];
    let urlFlag = 0;
    if(urlPara == 'login'){
      this.urlData = '登录';
      this.urlFlag=0;
    }else {
      this.urlData = '注册';
      this.urlFlag=1;
    }
  },
  methods: {
    getMes:function(num){
      let user = this.$refs.user.value;
      let pwd = this.$refs.pwd.value;
      let param = {
        userName: user,
        password: pwd
      };
      console.log(user + "  " + pwd);
      let url = "";
      if(this.urlFlag==0){
        url = "http://localhost:80/api/frouser/login";
      }
      if(this.urlFlag==1){
        url = "http://localhost:80/api/frouser/register";
      }
      // console.log(num);
        this.$axios
        .post(url,param)
        .then(function(res) {
          let data = res.data;
          if(data.code == 0){
            if(data.msg=='register'){
			    window.location.href = '/login?login';
			}
			 if(data.msg=='login'){
          window.location.href = '/';
          document.cookie=user;
			}
          }else{
            alert(data.msg);
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
.login_bg {
  width: 100%;
  height: 500px;
  background: url("../../assets/images/login_bg.jpg") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  margin-top: 10px;
}
.login_box {
  width: 300px;
  height: 300px;
  margin: auto;
  margin-right: 200px;
  background: #f6f6f7;
  border-radius: 10px;
  margin-top: 100px;
  margin-bottom: 100px;
}
.login_box input {
  width: 240px;
  height: 30px;
  margin-left: 20px;
  margin-top: 30px;
  outline: none;
  background: #ffffff;
  color: #666666;
  padding-left: 10px;
}
.login_box input:first-child {
  margin-top: 60px;
}
.login_btn {
  width: 240px;
  height: 30px;
  background: #40b6fc;
  margin: 30px;
  color: #ffffff;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
}
.footerBar {
  margin-top: 520px;
}
</style>

