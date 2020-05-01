<template>
  <div >
    <timeline  ref="timeline"
    :items="timeline.items"
    :groups="timeline.groups"
    :options="timeline.options"
    :events="['drop', 'rangechanged']"
    @drop="myDropCallback"
    @rangechanged="myChangedCallback">
    >
    </timeline>
  </div>
</template>
<script>

import { Timeline } from "vue2vis";
import { _debounce } from '../utils/debounceUtils'
export default {
  
  name: 'HelloWorld',
  components: {
    Timeline
  },

  methods:{  
    listEvent: function(){
      // let paramObj = {
      //   uid: '123456'
      // }
      // this.$server.listEvent(paramObj).then(data => {

      //   var list = data.data.map(function(obj) { 
      //     var rObj = {};
      //     rObj.id = obj.id;
      //     rObj.group = 1;
      //     rObj.content = obj.trName;
      //     rObj.start = new Date(obj.year,  obj.month==null?1:obj.month,   obj.day==null?1:obj.day);
      //     return rObj;
      //  });
      //  console.log(list)
      //   this.timeline.items = list
      // })
    },

    myDropCallback: _debounce(function(){ 
      
      console.log("this.myDropCallback")
    }),
    myChangedCallback: _debounce(function(){ 
       let paramObj = {
              uid: '123456'
      }
      this.$server.listEvent(paramObj).then(data => {
        console.log(data.data)
        var list = data.data.map(function(obj) { 
          var rObj = {};
          rObj.id = obj.id;
          rObj.group = 1;
          rObj.content = obj.trName;
          rObj.start = obj.year+ "-01-01" + (obj.month==null||obj.month==0) ?1 :obj.month+ "-" +(obj.day==null||obj.day==0) ?1 : obj.day;
          // console.log(obj.year+ "-" + (obj.month==null||obj.month==0) ?1 :obj.month+ "-" +(obj.day==null||obj.day==0) ?1 : obj.day);
          console.log("aa:"+(obj.month==null||obj.month==0) ?1 :obj.month)
          return rObj;
       });
       console.log(list)
        this.timeline.items = list
      })
    },1000)
    // myChangedCallback: _debounce(()=>{ 
    //     let paramObj = {
    //     uid: '123456'
    //   }
    //   this.$server.listEvent(paramObj).then(data => {
    //     console.log(data)
    //   })
    // }),
  
  },

  data: ()=>({
    timeline: {
      groups: [
        {
          id: 1,
          content: "222"
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
