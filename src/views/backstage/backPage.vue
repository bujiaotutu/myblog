<!--
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-09-03 15:51:11
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-10-19 18:40:40
 * @FilePath: \workpace\resume\src\components\contentList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div ref="printHrml" id="pdfHtml" class="pdfHtml">
    <!-- <div class="author_info" >
        <div class="personal_info">
            <div class="info_header">
                <img src="../assets/touxiang.jpg" alt="">
            </div>
            <div class="info_info" >
                <div class="info_item">
                    <div class="info_title">姓名: </div>
                    <input type="text" v-model="name"  :disabled="jurisdiction"/>
                </div>
                <div class="info_item">
                    <div class="info_title">毕业时间: </div>
                    <input type="text" v-model="graduationYear" :disabled="jurisdiction"/>
                </div>
                <div class="info_item">
                    <div class="info_title">毕业学校: </div>
                    <input type="text" v-model="graduationSchool" :disabled="jurisdiction"/>
                </div>
                <div class="info_item">
                    <div class="info_title">联系方式: </div>
                    <input type="text" v-model="contactInfo" :disabled="jurisdiction"/>
                </div>
            </div>
        </div>
        <div class="introduce_info">
            <TitleTwo :text="'介绍:'"></TitleTwo>
            <textarea name="introduce_info" id="introduce_info" cols="30" rows="10" v-model="introduceInfo" :disabled="jurisdiction"></textarea>
        </div>
        <button type="primary" @click="exportPDF">导出PDF</button>
    </div> -->
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-s-data"></i>数据库表</template
            >
            <el-menu-item-group>
              <router-link
                v-for="(item, index) in dataList"
                :key="index"
                :to="item.url"
                >
                <el-menu-item>{{ item.title }}</el-menu-item>
                </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              工具箱
            </template>
              <el-menu-item-group>
                <el-menu-item>
                  11
                </el-menu-item>
              </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-more" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// import TitleTwo from "@/components/titleTwo.vue";
// import getPdf from "../../../utils/exportPdf.js";
export default {
  name: "authorInfo",
  props: {},
  data() {
    return {
      jurisdiction: true,
      name: "周瑞永",
      graduationYear: "2021年7月",
      graduationSchool: "福州大学至诚学院",
      contactInfo: "18558785728",
      introduceInfo: "暂无",
      dataList: [
        {
          title: "用户数据表",
          url: "/backPage/",
        },
        {
          title: "文件数据表",
          url: "/fileList",
        },
        {
          title: "文件分类表",
          url: "/classList",
        },
      ], //导航数据
      isItem: 0, //导航栏选择的
    };
  },
  created() {
    //获取编辑权限
    if (this.$store.state.identity == 2) {
      this.jurisdiction = false;
    }
  },
  methods: {
    // exportPDF() {
    //   getPdf("测试", "pdfHtml");
    // },
  },
  //   components: { TitleTwo },
};
</script>
<style lang="scss" scoped>
.author_info {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;

  .personal_info {
    width: 100%;
    height: 300px;
    padding: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    .info_header {
      width: 200px;
      height: 100%;
      box-shadow: 0 0 1px black;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .info_info {
      width: calc(100% - 250px);
      height: 100%;
      margin-left: 50px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .info_item {
        flex: 1;
        display: flex;
        width: 100%;
        font-size: 20px;

        .info_title {
          height: 100%;
          line-height: 75px;
          margin-right: 20px;
        }

        input {
          outline: none;
          height: 100%;
          border: none;
          font-size: 20px;
          background-color: white;
        }
      }
    }
  }

  .introduce_info {
    width: 100%;
    min-height: 300px;
    height: auto;
    padding: 50px;

    textarea {
      width: 1040px;
      box-sizing: border-box;
      padding: 20px;
      min-height: 270px;
      resize: none;
      font-size: 20px;
      background-color: white;
    }
  }
}
.pdfHtml {
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
}
</style>
