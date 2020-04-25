<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->

  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     <timeline  ref="timeline"
    :items="timeline.items"
    :groups="timeline.groups"
    :options="timeline.options">
    </timeline>
  </div>

</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'

import { Timeline } from "vue2vis";

export default {
  
  name: 'App',
  components: {
    Timeline
  },

  data: ()=>({
    timeline: {
      groups: [
        {
          id: 1,
          content: "1111Group 1"
        }
      ],
      items: [
        {
          id: 5,
          group: 1,
          content: "李晓出生",
          start: "1992-09-21"
        },
        {
          id: 6,
          group: 1,
          content: "嬴政出生",
          start: new Date(-251, 7, 15)
        
        }
      ],
      options: {
        editable: false
      }
    }
  })
}
</script>

<style>
@import "../node_modules/vue2vis/dist/vue2vis.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
