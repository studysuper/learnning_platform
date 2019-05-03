<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="goIndex(1)">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">学习资源</template>
        <el-menu-item index="2" @click="goIndex(2)">学习资料</el-menu-item>
        <!-- <el-menu-item index="2" @click="goIndex(3)">在线视频</el-menu-item> -->
      </el-submenu>
      <el-menu-item index="3" @click="goIndex(4)">站内新闻</el-menu-item>
      <el-submenu index="4">
        <template slot="title">在线测试</template>
        <el-menu-item index="4" @click="goIndex(5)">行测测试</el-menu-item>
        <!-- <el-menu-item index="4" @click="goIndex(6)">申论测试</el-menu-item> -->
      </el-submenu>
      <el-menu-item index="5" id="isLogin" hidden="false"><span @click="goIndex(7)" >登录</span>/<span @click="goIndex(8)">注册</span></el-menu-item>
      <el-menu-item index="6"><span @click="goIndex(9)">答题记录</span></el-menu-item>
      <el-menu-item index="7"><span @click="goIndex(10)">退出登录</span></el-menu-item>


    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  props: ['activeIndex'],
  mounted() {
   this.isLogin();
  },
  methods: {
    isLogin(){
      if(document.cookie!=''){
          document.getElementById('isLogin').hidden=true;
      }else{
          document.getElementById('isLogin').hidden=false;
      }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goIndex(num){
      if(num == 1){
        window.location.href = '/';
      }else if(num == 2){
        window.location.href = '/learnData';
      }else if(num == 3){
        window.location.href = '/learnVideo';
      }else if(num == 4){
        window.location.href = '/news';
      }else if(num == 5){
        window.location.href = '/xingceMenu';
      }else if(num == 6){
        window.location.href = '/shenlunMenu';
      }else if(num == 7){
        window.location.href = '/login?login';
      }else if(num==8){
        window.location.href = '/login?register';
      }else if(num==9){
        window.location.href = '/geren';
      }else{
        document.cookie='';
        document.getElementById('isLogin').hidden=false;
        alert('退出成功');
      }
    }
  }
};
</script>



