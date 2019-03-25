<template>
  <div class="news_detail">
    <div class="menu_header">
      <headBar activeIndex='3'></headBar>
    </div>
    <div class="news_detail_box">
      <h2 class="news_tit">河北工业大学教学科研岗招80人</h2>
      <span class="news_author">作者：刘天语</span>
      <span class="news_date">时间：2019-07-09</span>
      <p>网上报名。报考人员登录指定的报名网站，点击“网上报名”，进入网上报名系统，如实填写、准确提交相关个人报考信息资料，并上传本人近期一寸免冠正面彩色照片(照片大小114*156像素、占用空间小于20K)，上传的照片应保证清晰可辨。网上报名必须使用二代身份证。报考人员在资格初审前多次登录填交报考信息的，后一次填报自动替换前一次填报信息。报名资格一经用人部门初审通过，不能更改。</p>
      <p>网上初审。招聘主管机关在指定报名期间安排专人负责查看网上报名情况，根据报考人员提交的信息资料，对报考人员进行资格初审，并在网上反馈初审结果。招聘主管机关留存通过资格初审人员的报名信息，供资格审查时参考。报名人员对报名初审结果持有异议，可在4月9日17：00前向指定的监督电话反映，不在规定期限内反映，视为对初审结果无异议。报名系统于4月8日17：00自动关闭。</p>
    </div>
    <footerBar></footerBar>
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

