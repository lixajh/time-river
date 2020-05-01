<template>
  <div >
    <timeline  ref="timeline"
    :items="timeline.items"
    :groups="timeline.groups"
    :options="timeline.options"
    :events="['drop', 'changed']"
    @drop="myDropCallback"
    @rangechanged="myChangedCallback"
    >
    </timeline>
  </div>
</template>
<script>

import { Timeline } from "vue2vis";
// import { _debounce } from '../utils/debounceUtils'
export default {
  
  name: 'HelloWorld',
  components: {
    Timeline
  },

  methods:{  
    listEvent: function(){
      let paramObj = {
        uid: '123456'
      }
      this.$server.listEvent(paramObj).then(data => {
        console.log(data)
      })
    },
    myDropCallback: ()=>{ 
      console.log("this.value")
    },
    myChangedCallback: ()=>{ 
      console.log("this.value")
    },
  
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
