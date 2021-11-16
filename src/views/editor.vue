<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div
          style="
            height: 30px;
            background-color: #667cff;
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <el-image
            style="width: 100px; height: 30px"
            src="https://static.jianliben.com/images/logo"
            alt="logo"
            fit="cover"
          ></el-image>

          <span>未命名简历</span>

          <div>
            <span>个人简历</span>
            <span>|</span>
            <span>我的中心</span>
            <span>|</span>
            <span>退出</span>
          </div>
        </div>
        <div style="height: 80px; background-color: red">操作栏</div>
      </el-header>
      <el-main>
        <div
          id=""
          style="
            width: 795px;
            height: 1122px;
            background-color: red;
            margin: 10px auto 0 auto;
          "
        >
          <iframe
            id="iframe_body"
            scrolling="no"
            style="width: 100%; height: 100%"
            src="http://localhost:8080/static/jianli.html"
          ></iframe>
        </div>
        <div>
          <el-button @click="scaleT('+')" type="primary">Primary</el-button>
          <el-button @click="scaleT('-')" type="success">Success</el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    let win;
    let sc = 1.0;
    onMounted(() => {
      win = document.getElementById("iframe_body").contentWindow;
      console.log("Component is mounted!");
    });

    function scaleT(op) {
      if ((op == "-" && sc <= 0.5) || (op == "+" && sc >= 1)) {
        return;
      }
      var body_table = win.document.getElementById("body_table");
      op = op == "-" ? -1 : 1;
      sc = sc + 0.1 * op;
      var sty = "transform: scale(" + sc + ");";
      body_table.setAttribute("style", sty);
    }

    return { scaleT };
  },
};
</script>
<style lang="less" scoped>
@el-header-width: 110px;
.el-header {
  padding: 0;
  height: @el-header-width;
}
</style>
