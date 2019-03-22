<template>
  <div class="learn_video">
    <div class="menu_header">
      <headBar activeIndex='2'></headBar>
    </div>
    <div class="learn_video_box">
        <div class="learn_video_list">

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
.learn_video_box {
  width: 80%;
  margin: auto;
}
.learn_video_list {
    width: 1190px;
}
</style>
