<template>
  <div class="news_body">
    <div class="menu_header">
      <headBar></headBar>
    </div>
    <div class="new_box">
      <div class="news_list" v-for="item in newsList">
        <span>{{item.loc}}|{{item.tit}}</span>
        <div class="news_mes">
          <span>{{item.num}}人浏览</span>
          <span>{{item.date}}</span>
        </div>
      </div>
    </div>
    <div class="news_page">
      <el-pagination
        background
        :page-size="20"
        layout="prev, pager, next"
        :total="500"
      >
      </el-pagination>
    </div>
    <footerBar></footerBar>
  </div>
</template>
<script>
import headBar from "@/components/nav/header";
import footerBar from "@/components/nav/footer";
export default {
  data() {
    return {
      newsList: [
        {
          loc: "山东",
          tit: "2019年山东曲阜市引进优秀i青年人才100人公告",
          num: 300,
          date: "03-21"
        },
        {
          loc: "广西",
          tit: "2019年广西省北海市银海区中小学(幼儿园)招聘教师239名公告",
          num: 200,
          date: "03-21"
        },
        {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
         {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
         {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
         {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
         {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
         {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
         {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
         {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
         {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
         {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
         {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
        {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
        {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
        {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
        {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
        {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
        {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
        {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
         {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
         {
          loc: "江苏",
          tit: "2019年江苏南京信息工程大学教学科研岗招聘80人公告",
          num: 100,
          date: "03-21"
        },
      ]
    };
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

