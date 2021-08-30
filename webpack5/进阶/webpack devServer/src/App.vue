<template>
  <div id="app">
    <div>
      {{message}}
    </div>
    <About/>
    <New/>
  </div>
</template>
<script>
 import About from "./component/About.vue";
 import New from "./component/New.vue";
 export default {
   components: {New, About},
   data() {
     return {
       message: "Hello Vue"
     }
   }
 }
</script>
<style lang="less">
#app{
  font-size: 20px;
  color: rebeccapurple;
  font-weight: bold;
}
</style>