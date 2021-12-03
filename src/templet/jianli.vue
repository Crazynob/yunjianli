<template>
  <div style="display:flex;height:100%;background-color:#f3eeea;overflow:hidden;">
    <!-- 左侧 -->
    <div style="position:relative;width:30%;height:100%;background-color:#80a8cc;">
      <div
        @mouseenter="mouseenterUploadAvater"
        style="width:100%;height:200px;display:flex;align-items:center;justify-content:center;"
      >
        <img
          style="width:120px;height:120px;"
          :src="imgPath?imgPath:require('../assets/images/touxiang.png')"
        />
      </div>

      <!-- 上传头像遮罩层 -->
      <div
        @mouseleave="mouseleaveUploadAvater"
        v-show="isuUploadAvater"
        v-if="need"
        @click="uploadAvater"
        class="no_avater_add"
      >
        <div style>
          <el-icon :size="40">
            <i-plus />
          </el-icon>
        </div>
      </div>

      <!-- 个人信息 -->
      <div>
        <div class="editor_border" style="text-align:center;color:white;">
          <span style="font-size:32px;font-weight:bold;padding:5px;">{{infos.arg1}}</span>
          <br />
          <br />
          <span style="font-size:22px;font-weight:bold;padding:5px;">应聘岗位：{{infos.arg2}}</span>
          <br />
          <br />
          <br />

          <div
            v-for="(item,index) in infos.list"
            :key="index"
            style="text-align:left;margin:10px 0 0 10px; display: flex;align-items: center;"
          >
            <img
              v-if="item.type == 'image'"
              style="width:26px;height:26px;"
              :src="require('../assets/images/'+item.prefix)"
              alt
            />
            <span style="font-size:20px;" v-if="item.type == 'icon'">⚪</span>
            <span style="padding:5px;">{{item.content}}</span>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <!-- 技能证书 -->
        <div
          @click="clickEditorElement"
          class="editor_border"
          style="width:80%;color:white;margin-left:10px;"
        >
          <div style="padding-bottom:5px;border-bottom:solid 5px white;">
            <span style="font-size:22px;font-weight:bold;">技能证书</span>
          </div>

          <div
            @input="handleInput"
            v-for=" (skill,index) in skills"
            :key="index"
            style="margin-top:20px;"
          >
            <span :index="index" style="font-size:18px;">{{skill.skillName}}</span>
            <div v-if="need" class="delete_skill" @click="skills.splice(index, 1)">×</div>
            <p :index="index" style="text-indent:2rem;">{{skill.skill}}</p>
          </div>
        </div>

        <!-- 专业技能添加按钮 -->
        <div @click="addSkill" class="skill_add_btn" style v-if="need" v-show="true">+添加专业技能</div>
      </div>
    </div>

    <!-- 右侧 -->
    <div style="width:70%;height:100%;">

      <div style="border:1px solid #80a8cc; width:90%;margin:30px auto 0 auto;padding:5px;">
        <div style="display: flex;align-items:center;padding-bottom:5px;border-bottom:solid 1px #80a8cc;margin-bottom:5px;">
          <!-- <img v-if="item.type == 'image'" style="width:26px;height:26px;" :src="require('../assets/images/'+item.prefix)" alt /> -->
          <span style="font-size:20px;">⚪</span>
          <span style="font-size:28px;font-weight:bold;">sadkasjdj</span>
        </div>

        <div style="display:flex;font-size:17px;font-weight:bold;">
          <div style="flex-grow:1;line-height:35px;">2015.07~2015.08</div>
          <div style="flex-grow:1;line-height:35px;">OPPO校园俱乐部</div>
          <div style="flex-grow:1;line-height:35px;">项目新媒体运营</div>
          <div style="flex-grow:1;line-height:35px;">本科</div>
        </div>

        <div style="">
          <p>在官方微博平台中，打造“OPPO校园俱乐部”的概念，为OPPO公司在全国范围内各大高集结粉丝，让学生由参与者变成创造者，变成OPPO的校园代言人； 根据OPPO客户诉求，基于产品特点，负责品牌传播策略，包括创意构想、文案撰写等； 挖掘分析网友使用习惯、情感及体验感受，结合产品特点撰写传播策划方案。</p>
        </div>
      </div>

      <div style="border:1px solid #80a8cc; width:90%;margin:30px auto 0 auto;padding:5px;">
        <div style="display: flex;align-items:center;padding-bottom:5px;border-bottom:solid 1px #80a8cc;margin-bottom:5px;">
          <!-- <img v-if="item.type == 'image'" style="width:26px;height:26px;" :src="require('../assets/images/'+item.prefix)" alt /> -->
          <span style="font-size:20px;">⚪</span>
          <span style="font-size:28px;font-weight:bold;">sadkasjdj</span>
        </div>

        <div style="display:flex;font-size:17px;font-weight:bold;">
          <div style="flex-grow:1;line-height:35px;">2015.07~2015.08</div>
          <div style="flex-grow:1;line-height:35px;">OPPO校园俱乐部</div>
          <div style="flex-grow:1;line-height:35px;">项目新媒体运营</div>
          <div style="flex-grow:1;line-height:35px;">本科</div>
        </div>

        <div style="">
          <p>在官方微博平台中，打造“OPPO校园俱乐部”的概念，为OPPO公司在全国范围内各大高集结粉丝，让学生由参与者变成创造者，变成OPPO的校园代言人； 根据OPPO客户诉求，基于产品特点，负责品牌传播策略，包括创意构想、文案撰写等； 挖掘分析网友使用习惯、情感及体验感受，结合产品特点撰写传播策划方案。</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      need: false,
      isuUploadAvater: false,
      imgPath: "",
      infos: {
        arg1: "张丹丹",
        arg2: "新媒体运营",
        arg3: "",
        arg4: "",
        arg5: "",
        list: [
          { type: "image", prefix: "dizhi.png", content: "安徽省阜阳市太和县" },
          { type: "icon", prefix: "dizhi.png", content: "安徽省阜阳市太和县" }
        ]
      },
      skills: [
        { skillName: "语言能力：", skill: "通过大学英语六级" },
        {
          skillName: "计算机能力：",
          skill:
            "通过全国计算机等级考试（二级C）熟练掌握word、excel、PPT等日常办公软件"
        },
        { skillName: "其他能力：", skill: "C1驾照" }
      ]
    };
  },
  methods: {
    mouseenterUploadAvater() {
      this.isuUploadAvater = true;
    },
    mouseleaveUploadAvater() {
      this.isuUploadAvater = false;
    },
    uploadAvater() {
      let input = document.createElement("input");
      input.type = "file";
      input.click();
      let that = this;
      input.onchange = () => {
        let file = input.files[0];
        let form = new FormData();
        form.append("file", file);
        let windowURL = window.URL || window.webkitURL;
        that.imgPath = windowURL.createObjectURL(file);
        that.isuUploadAvater = false;
        console.log(imgPath);
      };
    },
    clickEditorElement(e) {
      let target = e.target;
      let nodename = target.nodeName;
      console.log("nodename:" + nodename);
      if (nodename == "P" || nodename == "SPAN") {
        target.setAttribute("contenteditable", true);
        console.log("contenteditable:", target);
      }
    },
    addSkill() {
      this.skills.push({ skillName: "专业能力：", skill: "专业能力描述" });
    },
    handleInput(e) {
      let target = e.target;
      let nodename = target.nodeName;
      let index = target.getAttribute("index");
      let text = target.innerText;
      console.log(index, text);
      let skill = this.skills[index];
      console.log(skill);
      if (nodename == "P") {
        skill.skill = text;
      }

      if (nodename == "SPAN") {
        skill.skillName = text;
      }
    }
  }
};
</script>

<style lang="less" scoped>
p{
  margin: 0;
}
// 需要的css
@font-face {
  font-family: "fzjt";
  src: url("../assets/font/卡通简.ttf");
}
[contenteditable]:focus {
  outline: none;
}

//不要的css
.son_hro_ver {
  display: flex;
  align-items: center;
  justify-content: center;
}

.no_avater_add {
  position: absolute;
  top: 0;
  width: 100%;
  height: 200px;
  .son_hro_ver();
  div {
    width: 120px;
    height: 120px;
    background-color: rgba(0, 0, 0, 0.4);
    text-align: center;
    color: white;
    .son_hro_ver();
    &:hover {
      color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
    }
  }
}

.editor_border {
  span,
  p {
    border: rgba(0, 0, 0, 0) solid 1px;
  }
  &:hover {
    span,
    p {
      border: skyblue solid 1px;
      cursor: pointer;
    }
  }
}

.skill_add_btn {
  width: 70%;
  line-height: 30px;
  text-align: center;
  margin: 0 auto;
  border: dashed 2px #847a74;
  color: #847a74;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
.delete_skill {
  float: right;
  color: red;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
}
</style>