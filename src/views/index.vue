<template>
  <el-container style="min-width:1356px;">
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

      <div style="display:flex;width:70%;height:340px;margin:0 auto;">
        <div style="width:60%;height:100%;color:white;">
          <div style="margin-top:100px;">
            <h1 style="font-size:40px;line-height:40px;">简历本，一个专门写简历的网站</h1>
            <span
              style="font-size:20px;line-height:0px;opacity:.7;"
            >专业简历模板 · 智能简历编辑 · 免费下载导出 · 随时随地使用</span>
          </div>

          <div style="display:flex;margin-top:50px;">
            <el-button class="search_btn">开始写简历</el-button>
            <el-input
              :input-style="{height:'50px','background-color':'rgba(0,0,0,0)',border:'2px solid rgba(255,255,255,0.4)'}"
              style="width:400px;margin-left:25px;"
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

        <div style="width:40%;height:100%;display:flex; justify-content:end;">
          <el-image
            style="width:500px;height:340px;"
            fit="fill"
            src="https://static.jianliben.com/images/jlbbg_index2.png"
          ></el-image>
        </div>
      </div>
    </el-header>

    <el-main style="padding:0;">

      <!-- 简历模板选择 -->
      <div style="background-color:#f5f7fa;">
        <div style="text-align:center;padding:30px 0;">
          <h2 style="font-size:36px;color:#323233;margin:0;line-height:80px;">精选简历模板</h2>
          <span style="font-size:18px;color:#999;">HR推荐的专业简历模板，一份标准的简历就长这样</span>
        </div>

        <div style="height:354px;display:flex;align-items:center;justify-content:center;">
          <!-- 左滑箭头 -->
          <div style="width:100px;line-height:50px;">
            <el-icon @click="left" style="cursor:pointer;float:left;" color="#B7CBFE" size="40">
              <i-d-arrow-left />
            </el-icon>
          </div>

          <!-- 滚动区域 -->
          <div style="height:354px;width:70%;overflow: hidden;">
            <ul class="temp_list">
              <li v-for="i in 7" :key="i">
                <el-image
                  style="width:100%;height:100%;"
                  src="https://thumb.jianliben.com/tplimg/tpl_tpl106_106.jpg"
                ></el-image>
                <div class="mask"></div>
                <el-button class="make_btn">使用此模板</el-button>
              </li>
            </ul>
          </div>

          <!-- 右滑箭头 -->
          <div style="width:100px;line-height:50px;display:flex;justify-content:end;">
            <el-icon @click="right" style="right:0;cursor:pointer;" color="#B7CBFE" size="40">
              <i-d-arrow-right />
            </el-icon>
          </div>
        </div>
        <!-- 更多按钮 -->
        <div style="text-align:center;padding:60px 0;">
          <button
            style="border:2px solid #667cff;width:180px;height:46px;border-radius:5px;color:#667cff;"
          >更多简历模板</button>
        </div>
      </div>

      <!-- 按职位选择简历模板 -->
      <div>
         <div style="text-align:center;padding:30px 0;">
          <h2 style="font-size:36px;color:#323233;margin:0;line-height:80px;">精选简历模板</h2>
          <span style="font-size:18px;color:#999;">HR推荐的专业简历模板，一份标准的简历就长这样</span>
        </div>

        <div >
          <ul class="vocation_temp_list">
            <li style="">1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>

         <!-- 更多按钮 -->
        <div style="text-align:center;padding:60px 0;">
          <button
            style="border:2px solid #667cff;width:180px;height:46px;border-radius:5px;color:#667cff;"
          >更多简历模板</button>
        </div>
      </div>


      <div>
          <div style="text-align:center;padding:30px 0;">
          <h2 style="font-size:36px;color:#323233;margin:0;line-height:80px;">精选简历模板</h2>
          <span style="font-size:18px;color:#999;">HR推荐的专业简历模板，一份标准的简历就长这样</span>
        </div>
        
      </div>


      <div>4</div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import less from "less";
export default {
  data() {
    return {
      currentX: -125
    };
  },
  methods: {
    left() {
      let temp_list = document.getElementsByClassName("temp_list")[0];
      console.log(temp_list);
      this.currentX -= 270;
      temp_list.setAttribute(
        "style",
        "  transform: translateX(" + this.currentX + "px);"
      );
    },
    right() {
      let temp_list = document.getElementsByClassName("temp_list")[0];
      if (this.currentX == 0) {
        return;
      }

      this.currentX += 270;
      temp_list.setAttribute(
        "style",
        "  transform: translateX(" + this.currentX + "px);"
      );
    }
  }
};
</script>
<style lang="less" scoped>
@step: 100px;

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
  width: 150px;
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

.temp_list {
  // background-color: red;
  list-style: none;
  height: 100%;
  width: 500%;
  margin: 0;
  padding: 0;
  display: flex;
  transform: translateX(-125px);
  transition-duration: 0.5s;
  user-select: none;
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(305deg, #7c60ff 0, #53cdff 100%) !important;
    opacity: 0.6;
    display: none;
    transition: all 0.3s;
  }
  .make_btn {
    position: absolute;
    width: 60%;
    height: 10%;
    top: 40%;
    left: 44px;
    display: none;
    box-shadow: 0 10px 30px 0 rgb(57 67 109 / 20%);
  }

  li {
    position: relative;
    width: 250px;
    height: 354px;
    margin-right: 20px;
    box-shadow: 0 1px 2px 0 #e2e3ec;
    &:hover {
      .mask {
        filter: blur(2px);
        display: block;
      }
      .make_btn {
        display: block;
      }
    }
  }
}

.vocation_temp_list{
  list-style:none;
  display: flex;
  padding: 0;
  width:70%;
  margin:0 auto;
  li{
    // float: left;
    width: 230px;
    height: 450px;
    background-color: red;
    border-radius: 5px 5px 0 0;
    opacity:.8;
    transition:all .3s;
    box-shadow: 0 2px 3px rgb(0 0 0 / 10%);
    &:hover{
      width: 280px;
       height: 490px;
       z-index: 1;
       margin: -25px -25px -20px -25px;
       transition:all .3s;
       box-shadow: 0 3px 4px rgb(0 0 0 / 20%);
       opacity:1;
    }
  }
}
</style>