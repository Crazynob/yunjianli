<template>
  <div @click=" conso" id="con">
    <component :is="curcom"></component>
  </div>
</template>
<script>
const com = {
  data() {
    return {
      count: 0
    };
  },
  template: `
      <button @click="count++">
        You clicked me {{ count }} times.
      </button>`
};

const need = {
  data() {
    return {
      count: 0
    };
  },
  template: `
      <button @click="count++">
      NEED clicked me {{ count }} times.
      </button>`
};

const coms = {
  "com":com,
  "need":need,
  "jianli":jianli
}


import jianli from "../templet/canvas.vue"

export default {
  data() {
    return {
      flag: true,
      message: "这是汪航这个大傻逼",
      count: 0,
      curcom: "com"
    };
  },
  components: {
    ...coms
  },
  mounted(){
    this.curcom = "jianli"
  },
  methods: {
    conso() {
      let con = document.getElementById("con");
      console.log(con.innerHTML);
    }
  }
};
</script>
<style lang="less" scoped>
</style>