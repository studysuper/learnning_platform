<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1"><a href="/">首页</a></el-menu-item>
      <el-submenu index="2">
        <template slot="title">学习资源</template>
        <el-menu-item index="2"><a href="/learnData">学习资料</a></el-menu-item>
        <el-menu-item index="2"><a href="/learnVideo">在线视频</a></el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="/news">站内新闻</a></el-menu-item>
      <el-submenu index="4">
        <template slot="title">在线测试</template>
        <el-menu-item index="4"><a href="/xingceMenu">行测测试</a></el-menu-item>
        <el-menu-item index="4"><a href="/shenlunMenu">申论测试</a></el-menu-item>
      </el-submenu>
      <el-menu-item index="5"><a href="/login">登录</a>/<a href="/login">注册</a></el-menu-item>
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
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    change(index){
      this.activeIndex = index;
    }
  }
};
</script>



