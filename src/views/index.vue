<template>
  <el-container>
    <el-header height="400px">
      <div style="display:flex;align-items:center;width:100%;">
        <el-image
          style="width: 140px;height: 60px;margin:0 auto;"
          src="https://static.jianliben.com/images/logo.png?v=20210225"
        ></el-image>
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

        <span class="login_btn">登录 / 注册</span>

        <el-image fit="fill" style="width:36px;height: 36px;border-radius:100%;margin:0 auto;"></el-image>
      </div>

      <div style="display:flex;width:60%;height:340px;margin:0 auto;">
        <div style="width:50%;height:100%;color:white;">
          <div style="margin-top:100px;">
            <h1 style="font-size:40px;line-height:40px;">简历本，一个专门写简历的网站</h1>
            <span
              style="font-size:20px;line-height:0px;opacity:.7;"
            >专业简历模板 · 智能简历编辑 · 免费下载导出 · 随时随地使用</span>
          </div>

          <div style="display:flex;justify-content:center;margin-top:50px;">
            <el-button class="search_btn">开始写简历</el-button>
            <el-input
              :input-style="{height:'50px','background-color':'rgba(0,0,0,0)',border:'2px solid rgba(255,255,255,0.4)'}"
              style="width:65%;margin-left:25px;"
              v-model="input3"
              placeholder="搜索简历、模板、范文"
            >
              <template #suffix>
                <el-icon size="40" class="el-input__icon">
                  <i-search />
                </el-icon>
              </template>
            </el-input>
          </div>
        </div>

        <div style="width:50%;height:100%;display:flex; justify-content:end;">
          <el-image
            style="width:500px;height:340px;"
            fit="fill"
            src="https://static.jianliben.com/images/jlbbg_index2.png"
          ></el-image>
        </div>
      </div>
    </el-header>

    <el-main>
      <div>
        <div style="text-align:center;">
          <h2 style="font-size:36px;color:#323233;margin:0;line-height:80px;">精选简历模板</h2>
          <span style="font-size:18px;color:#999;">HR推荐的专业简历模板，一份标准的简历就长这样</span>
        </div>

        <div>

          <el-carousel :interval="4000" type="card" height="600px" style="width:400px;">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>

        </div>
      </div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </el-main>
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
  --el-menu-item-font-size: 14px;
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

.login_btn {
  font-size: 14px;
  padding: 5px 10px;
  color: white;
  background: RGBA(0, 0, 0, 0.1);
  border-radius: 20px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
}

.search_btn {
  width: 30%;
  height: 50px;
  background: linear-gradient(148deg, #ffc061 0, #ff8b5f 100%) !important;
  color: white;
  border-width: 0px;
  padding: 0;

  font-size: 20px;
  &:active {
    color: white;
  }
  &:hover {
    color: white;
    opacity: 0.8;
  }

  &:focus {
    color: white;
  }
}



.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>