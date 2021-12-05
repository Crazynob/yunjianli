<template>
  <el-container>
    <el-header style="color:#555;z-index:1;" height="90px">
      <div style=" position: fixed;left:0;right: 0;min-width: 1362px;">
        <!-- 标题栏 -->
        <el-row
          style="height:30px;background-color:#667cff;padding:0 5px;color:white;"
          justify="space-between"
        >
          <el-col :span="3" style="text-align:left;">
            <el-image style="width: 100px; height: 30px" src alt="logo" fit="cover"></el-image>
          </el-col>
          <el-col :span="3">
            <span style="line-height:30px;">未命名简历</span>
          </el-col>
          <el-col class="op_login" :span="3">
            <block v-if="isLogin">
              <span>个人简历</span>
              <span>|</span>
              <span>我的中心</span>
              <span>|</span>
              <span>退出</span>
            </block>

            <block v-else>
              <span>登录 / 注册</span>
            </block>
          </el-col>
        </el-row>
        <!-- 操作栏 -->
        <el-row style="background-color: #fff;box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);">
          <!-- 第一列 -->
          <el-col :span="12">
            <el-row class="op_row" justify="start">
              <el-col :offset="14" @click="drawer = true" :span="2">
                <button>
                  <el-icon :size="iconSize">
                    <i-clock />
                  </el-icon>
                  <span>历史操作</span>
                </button>
              </el-col>

              <el-col @click="drawer = true" :span="2">
                <button>
                  <el-icon :size="iconSize">
                    <i-edit />
                  </el-icon>
                  <span>历史操作</span>
                </button>
              </el-col>

              <el-col @click="drawer = true" class="op_col" :span="2">
                <button class="op_btn">
                  <el-icon :size="iconSize">
                    <i-edit />
                  </el-icon>
                  <span>历史操作</span>
                </button>
              </el-col>
            </el-row>
          </el-col>

          <!-- 第二列 -->
          <el-col :span="12">
            <el-row class="op_row" style="height:60px;" justify="start">
              <el-col class="download_col" :offset="8" @click="drawer = true" :span="2">
                <button style="color:white;">
                  <el-icon :size="iconSize">
                    <i-download />
                  </el-icon>
                  <span>下载</span>
                </button>
              </el-col>

              <el-col @click="drawer = true" :span="2">
                <button>
                  <el-icon :size="iconSize">
                    <i-edit />
                  </el-icon>
                  <span>历史操作</span>
                </button>
              </el-col>

              <el-col @click="drawer = true" class="op_col" :span="2">
                <button class="op_btn">
                  <el-icon :size="iconSize">
                    <i-edit />
                  </el-icon>
                  <span>历史操作</span>
                </button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </el-header>

    <!-- 弹出栏菜单 -->
    <el-drawer
      v-model="drawer"
      title="I am the title"
      :direction="direction"
      size="20%"
      :lock-scroll="false"
      :modal="false"
      :before-close="handleClose"
    >
      <span>Hi there!</span>
    </el-drawer>

    <el-container>
      <el-aside class="asidemenu-left" width="200px"></el-aside>
      <el-main>
        <div id style="width: 795px; height: 1122px;  margin: 10px auto 0 auto;  ">
          <iframe
            id="iframe_body"
            scrolling="no"
            style="width: 100%; height: 100%;border-width:0;"
            src="http://localhost:8080/static/divjianli2.html"
          ></iframe>
        </div>

        <!-- <div style="width:795px; height:1122px;margin: 10px auto 0 auto;" @click="conso" id="con">
          <canva></canva>
        </div>-->

        <!-- <el-affix  position="bottom" :offset="30"> -->
        <div class="page_scale">
          <div @click="scaleT('-')" class="scale_reduce">-</div>
          <div class="scale_value">{{sc}}%</div>
          <div @click="scaleT('+')" class="scale_enlarge">+</div>
        </div>
        <!-- </el-affix> -->
      </el-main>

      <el-aside style width="200px">
        <!-- <el-affix :offset="90"> -->
        <div class="asidemenu-right">
          <el-row justify="center">
            <button @click="direction = 'rtl'">
              <el-icon :size="30">
                <i-tickets />
              </el-icon>
              <span>简历指南</span>
            </button>
          </el-row>

          <el-row justify="center">
            <button>
              <el-icon :size="30">
                <i-film />
              </el-icon>

              <span>简历微课</span>
            </button>
          </el-row>

          <el-row justify="center">
            <button>
              <el-icon :size="30">
                <i-takeaway-box />
              </el-icon>
              <span>简历定制</span>
            </button>
          </el-row>

          <el-row justify="center">
            <button>
              <el-icon :size="30">
                <i-question-filled />
              </el-icon>

              <span>常见问题</span>
            </button>
          </el-row>
        </div>

        <!-- </el-affix> -->
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
//https://www.tiny.cloud/docs/demo/inline/
//https://nicedit.com/
import { defineComponent, onMounted } from "@vue/runtime-core";
import { ref } from "vue";
// import canva from "../templet/canvas.vue";

export default {
  setup() {
    let win;
    let sc = ref(100);
    let drawer = ref(false);
    let direction = ref("ltr");
    let iconSize = 22;
    let isLogin = ref(true);
    onMounted(() => {
      win = document.getElementById("iframe_body").contentWindow;
      console.log("Component is mounted!");

        let templateMethods = {
          addModule(that) {
            win.doAddModule(that)
          },
          delParent(that) {
            win.doDelParent(that)
          },
          addRow(that) {
            win.doAddRow(that)
          },
          delRow(that) {
            win.doDelRow(that)
          },
          howToWrite(that){
            console.log("drawer")
            drawer.value = !drawer.value;
            testMethod();
            win.doHowToWrite(that)
          }
        };

        Object.keys(templateMethods).forEach(function(key) {
          console.log(key, templateMethods[key]);
          win[key] = templateMethods[key];
        });

      win.onload = function() {};
    });

    let handleClose = done => {
      done();
    };
    function testMethod(){
      console.log("testMethod");
    }

    function scaleT(op) {
      console.log(sc.value);
      if ((op == "-" && sc.value <= 50) || (op == "+" && sc.value >= 100)) {
        return;
      }
      var body_table = win.document.getElementById("app");
      op = op == "-" ? -1 : 1;
      sc.value = sc.value + 5 * op;
      var sty = "transform: scale(" + sc.value / 100 + ");";
      body_table.setAttribute("style", sty);
    }

    function conso(e) {
      console.log(e);
      let con = document.getElementById("con");
      console.log(con.innerHTML);
    }

    return {
      scaleT,
      drawer,
      handleClose,
      direction,
      iconSize,
      isLogin,
      sc,
      conso,
      win
    };
  },
  components: {
    // canva
  }
};
</script>
<style lang="less" scoped>
.el-container {
  background-color: #f5f7fa;
  font-size: 14px;
  min-width: 1362px;
}
.el-main {
  padding: 0 0 30px 0;
}
.el-header {
  padding: 0;
  text-align: center;
}

.page_scale_reen {
  float: left;
  width: 16px;
  height: 16px;
  text-align: center;
  border-radius: 10px;
  border: 1px #bbb solid;
  user-select: none;
}
.page_scale {
  width: 89px;
  background-color: blue;
  height: 20px;
  position: absolute;
  right: 100px;
  border-radius: 10px;
  background-color: #e2e4e7;
  .scale_reduce {
    font-size: 24px;
    line-height: 12px;
    cursor: pointer;
    background: #eee;
    color: #888;
    margin: 1px 0 0 1px;
    .page_scale_reen();
  }
  .scale_value {
    float: left;
    width: 40px;
    border: 0;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    margin: 0 5px;
    color: #888;
    user-select: none;
  }
  .scale_enlarge {
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    cursor: pointer;
    background: #eee;
    color: #888;
    margin: 1px 1px 0 0;
    .page_scale_reen();
  }
}

.op_login {
  text-align: right;
  span {
    line-height: 30px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
}
.btn {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-width: 0px;
  background-color: unset;
  border-width: 0;
}

.op_row {
  height: 60px;
  .el-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      box-shadow: 0 3px 8px 0 #f0f1fa;
    }
    button {
      color: #555;
      .btn();
      &:hover {
        color: #667cff;
        cursor: pointer;
      }
    }
  }
}
.download_col {
  background: linear-gradient(148deg, #ffc061 0, #ff8b5f 100%) !important;
  &:hover {
    opacity: 0.7;
  }
}
.asidemenu-right {
  box-shadow: 0 0 1px #ccc;
  background-color: #f2f4f7;
  height: 100%;
  width: 70px;
  // float: right;
  position: fixed;
  right: 0;

  .el-row {
    margin-top: 30px;
  }

  button {
    color: #999;
    .btn();
    &:hover {
      color: #555;
      cursor: pointer;
    }
  }
}
</style>
