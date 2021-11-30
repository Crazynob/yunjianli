<template>
<div @click="conso" id="con">
  <HelloWorld/>
  <div id="message">
    {{message}}
  </div>
  <input/>
</div>
</template>
<script>
import HelloWorld from "../components/HelloWorld"

export default {
  data(){
    return{
      flag:true,
      message:"这是汪航这个大傻逼"
    }
  },
  components:{
    HelloWorld
  },
  methods:{
    conso(){
      let con = document.getElementById("con")
      console.log(con.innerHTML)
    }
  },
};
</script>
<style lang="less" scoped>
</style>