<template>
  <el-container style="min-width:1356px;">
    <el-header height="400px">
      <div style="display:flex;align-items:center;width:1200px;margin:0 auto;">
        <el-image
          style="width: 140px;height: 60px;"
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

      <div style="display:flex;width:1200px;height:340px;margin:0 auto;">
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

    <el-main style="padding:0;height:3100px;">
      <!-- 简历模板选择 -->
      <div style="background-color:#f5f7fa;">
        <div style="text-align:center;padding:30px 0;">
          <h2 style="font-size:36px;color:#323233;margin:0;line-height:80px;">精选简历模板</h2>
          <span style="font-size:18px;color:#999;">HR推荐的专业简历模板，一份标准的简历就长这样</span>
        </div>

        <div style="height:354px;display:flex;align-items:center;justify-content:center;">
          <!-- 左滑箭头 -->
          <div style="width:65px;line-height:50px;">
            <el-icon @click="left" style="cursor:pointer;float:left;" color="#B7CBFE" size="40">
              <i-d-arrow-left />
            </el-icon>
          </div>

          <!-- 滚动区域 -->
          <div style="height:354px;width:1090px;overflow: hidden;">
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
          <div style="width:65px;line-height:50px;display:flex;justify-content:end;">
            <el-icon @click="right" style="right:0;cursor:pointer;" color="#B7CBFE" size="40">
              <i-d-arrow-right />
            </el-icon>
          </div>
        </div>
        <!-- 更多按钮 -->
        <div style="text-align:center;padding:60px 0;">
          <button class="more_btn" style>更多简历模板</button>
        </div>
      </div>

      <!-- 按职位选择简历模板 -->
      <div>
        <div style="text-align:center;padding:30px 0;">
          <h2 style="font-size:36px;color:#323233;margin:0;line-height:80px;">精选简历模板</h2>
          <span style="font-size:18px;color:#999;">HR推荐的专业简历模板，一份标准的简历就长这样</span>
        </div>

        <div>
          <ul class="vocation_temp_list">
            <li v-for="i in 5" :key="i">
              <el-image
                style="width:100%;vertical-align:middle;border-radius: 5px 5px 0 0;"
                src="https://static.jianliben.com/images/jobcov_xuesheng.png"
              ></el-image>
              <div style="background:linear-gradient(302deg,#736cff 0,#74c5ff 100%);height:260px;">
                <el-image
                  fit="contain"
                  src="https://static.jianliben.com/images/jobico_chengxuyuan.png"
                  style="padding-top:20px;background:;height:80px;width:100%;vertical-align:middle;"
                ></el-image>
                <h3 style="font-size:24px;color:#fff;text-align:center;line-height:40px;">学生简历</h3>
                <button>查看简历</button>
              </div>
            </li>
          </ul>
        </div>

        <!-- 更多按钮 -->
        <div style="text-align:center;padding:60px 0;">
          <button class="more_btn">更多简历模板</button>
        </div>
      </div>

      <div
        style="background:url('https://static.jianliben.com/images/jlbbg_advsection.png');background-repeat:no-repeat;background-position:center bottom;"
      >
        <div style="text-align:center;padding:30px 0;">
          <h2 style="font-size:36px;color:#323233;margin:0;line-height:80px;">精选简历模板</h2>
          <span style="font-size:18px;color:#999;">HR推荐的专业简历模板，一份标准的简历就长这样</span>
          <div class="temp_custom">
            <ul style="list-style:none;padding:60px 0;display:flex;justify-content:center;">
              <li v-for="i in 3" :key="i">
                <div
                  style="background:#caddff;width:160px;height:160px;border-radius:50%;margin:55px auto;"
                >
                  <el-image
                    style="width:200px;margin:-20px;"
                    src="https://static.jianliben.com/images/advico_diagnose.png"
                  ></el-image>
                </div>
                <h3 style>简历修改</h3>
                <span style>专业职场大咖针对你的简历进行一对一沟通和修改，定制一份高质量简历，提升80%面试机会</span>
                <div>
                  <button style>申请服务</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div class="resume_course">
          <div style="text-align:center;padding:30px 0;">
            <h2 style="font-size:36px;color:#323233;margin:0;line-height:80px;">精选简历模板</h2>
            <ul class>
              <li>
                <a href>简历范文</a>
              </li>
              <li>
                <a href>自我评价怎么写</a>
              </li>
              <li>
                <a href>工作经历怎么写</a>
              </li>
              <li>
                <a href>专业技能怎么写</a>
              </li>
              <li>
                <a href>求职指南</a>
              </li>
              <li>
                <a href>更多文章﹥</a>
              </li>
            </ul>
          </div>

          <div style="display:flex;">
            <div class="left" style="width:50%;">
              <div v-for="i in 4" :key="i">
                <a href="https://www.jianliben.com/article/detail/43375">20多岁时，你应该明白的4个职场真相</a>
                <a href="https://www.jianliben.com/article/detail/43192">大学生实习简历中项目经历怎么写</a>
                <a href="https://www.jianliben.com/article/detail/43236">资深HR教你常见面试问题回答攻略</a>
              </div>
            </div>

            <div
              class="right"
              style="width: 50%;display: flex;flex-direction: column;align-items: end;justify-content:space-between;"
            >
              <div
                style="position:relative;width: 95%;height: 260px;background-color: red;border-radius:5px;"
              >
                <el-image
                  fit="cover"
                  style="width:100%;height:100%;"
                  src="https://thumb.jianliben.com/artimg/20191231/art_201912314866.jpg"
                ></el-image>
                <span
                  style="box-sizing:border-box;padding-left:20px;width:100%;position:absolute;bottom:0;left:0;height:60px;line-height:60px;font-size:18px;color:#fff;background-image:linear-gradient(to top,rgba(0,0,0,0.5),rgba(0,0,0,0));"
                >年底如何避免让工作忙到飞起？</span>
              </div>

              <div
                style="position:relative;width: 95%;height: 260px;background-color: red;"
              >
                <el-image
                
                  fit="cover"
                  style="width:100%;height:100%;border-radius:5px;"
                  src="https://thumb.jianliben.com/artimg/20191231/art_201912314866.jpg"
                ></el-image>
                <span
                  style="box-sizing:border-box;padding-left:20px;width:100%;position:absolute;bottom:0;left:0;height:60px;line-height:60px;font-size:18px;color:#fff;background-image:linear-gradient(to top,rgba(0,0,0,0.5),rgba(0,0,0,0));"
                >年底如何避免让工作忙到飞起？</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-main>

    <el-footer style="background-color:#474b66;">

      <div style="width:1200px;margin:0 auto;">
        <div style="text-align:center;border-bottom:1px rgba(255,255,255,0.05) solid;">
          <el-image style="width:240px;height:120px;" src="	https://static.jianliben.com/images/logo.png?v=20210225"></el-image>
        </div>
      </div>

       <div style="text-align:center;line-height:60px;background-color:#434761;color:#a1a4b3;font-size:14px;">
          <span style="">© 2021 Jianliben.com </span>
          <a style="text-decoration: none;color:#a1a4b3;" target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index">粤ICP备17018661号-1</a>
          <span>&nbsp;&nbsp;在线反馈</span>
          <span>&nbsp;&nbsp;关于我们</span>
        </div>
    </el-footer>
    <el-backtop />
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
.more_btn {
  cursor: pointer;
  background: 0;
  border: 2px solid #667cff;
  width: 180px;
  height: 46px;
  border-radius: 5px;
  color: #667cff;
  &:hover {
    opacity: 0.8;
  }
}

.vocation_temp_list {
  list-style: none;
  display: flex;
  padding: 0;
  width: 70%;
  margin: 0 auto;
  justify-content: center;
  li {
    // float: left;
    flex-shrink: 0;
    width: 230px;
    height: 450px;
    background-color: red;
    border-radius: 5px 5px 0 0;
    opacity: 0.8;
    transition: all 0.3s;
    box-shadow: 0 2px 3px rgb(0 0 0 / 10%);
    text-align: center;
    &:hover {
      width: 280px;
      height: 490px;
      z-index: 1;
      margin: -25px -25px -20px -25px;
      transition: all 0.3s;
      box-shadow: 0 3px 4px rgb(0 0 0 / 20%);
      opacity: 1;
      button {
        background-color: white;
        color: #736cff;
      }
    }
  }

  button {
    cursor: pointer;
    width: 160px;
    height: 40px;
    line-height: 38px;
    border-radius: 5px;
    border: 2px solid #fff;
    background: 0;
    font-size: 16px;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
}

.temp_custom {
  width: 1200px;
  // height: 200px;
  margin: 0 auto;
  li {
    width: 300px;
    height: 514px;
    background: #fff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    margin: 0 30px;

    h3 {
      color: #6a80ff;
      font-size: 24px;
      font-weight: bold;
    }

    span {
      display: inline-block;
      font-size: 14px;
      padding: 20px 20px 40px 20px;
      color: #999;
    }

    button {
      color: #667cff;
      background-color: #fff;
      border: 2px solid #667cff;
      width: 180px;
      height: 46px;
      border-radius: 5px;
      line-height: 44px;
      font-size: 16px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }

    &:hover {
      transition: all 1s;
      background: linear-gradient(305deg, #7c60ff 0, #53cdff 100%) !important;
      h3,
      span {
        color: white;
      }
    }
  }
}
.resume_course {
  width: 1200px;
  margin: 0 auto;
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    li {
      margin: 0 5px;
      a {
        color: #999;
        font-size: 16px;
        text-decoration: none;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  .left > div {
    display: flex;
    flex-direction: column;
    padding: 20px 0 20px 120px;
    line-height: 28px;
    height: 80px;
    margin-bottom: 20px;
    background-position: 20px center;
    background-size: 80px;
    background-repeat: no-repeat;
    background-color: #f5f7fa;
    border-radius: 5px;
    &:nth-child(1) {
      background-image: url("https://static.jianliben.com/images/artico_item1.png");
    }
    &:nth-child(2) {
      background-image: url("https://static.jianliben.com/images/artico_item2.png");
    }
    &:nth-child(3) {
      background-image: url("https://static.jianliben.com/images/artico_item3.png");
    }
    &:nth-child(4) {
      background-image: url("https://static.jianliben.com/images/artico_item4.png");
      margin-bottom: 0px;
    }
    a {
      text-decoration: none;
      color: #999;
      &:first-child {
        color: #323233;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
}
.el-footer{
  --el-footer-height:none;
}
</style>