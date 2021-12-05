<template>
  <el-container>
    <el-header height="400px">
      <div style="display:flex;align-items:center;width:100%;">
        <el-image style="width: 140px;height: 70px;margin:0 auto;" src="https://static.jianliben.com/images/logo.png?v=20210225"></el-image>
        <el-menu
          default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          text-color="#fff"
          active-text-color="#FFF"
          @select="handleSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">简历制作</el-menu-item>
          <el-menu-item index="3">简历定制</el-menu-item>
          <el-menu-item index="4">模板范文</el-menu-item>
          <el-menu-item index="5">求职中心</el-menu-item>
          <el-menu-item index="6">帮助中心</el-menu-item>
        </el-menu>

        <el-image style="width:40px;height: 40px;border-radius:100%;margin:0 auto;"></el-image>


      </div>
    </el-header>

    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.el-header {
  padding: 0;
  background: linear-gradient(90deg, #a986ff 0, #9861ff 100%) !important;
}
.el-menu {
  --el-menu-item-font-size: 16px;
  width: 60%;
  margin: 0 auto;
  background-color: unset;
  --el-menu-hover-background-color: unset;
  .el-menu-item:not(.is-disabled):hover {
    border-bottom: 2px solid var(--el-menu-active-color);
  }
}
.el-menu--horizontal {
  border-bottom: unset;
  & > .el-menu-item {
    background-color: rgba(0, 0, 0, 0);
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>