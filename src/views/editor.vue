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
            src="https://static.jianliben.com/images/logo.png?v=20210225"
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
        <iframe src="https://www.jianliben.com/editor/?t=tpl116"> </iframe>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  setup() {},
  mounted() {},
};
</script>
<style lang="less" scoped>

.el-header {
  padding: 0;
  height: 110px;
}
</style>
