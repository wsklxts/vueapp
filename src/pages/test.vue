<template>

  <div >
      <run class="run" :temp="n" v-for="(n,index) in node" :key="index" ></run>
    <!--<run :temp="{}"></run>-->
    <!--<component v-bind:is="XInput" :attrs=attrs></component>-->
  </div>


</template>

<script>
  import run from "./run"
  import Vue from "vue"
  import {componentMap} from "@/common/componentslist.js"
  import Checklist from "@/components/controls/Checklist"
  import XInput from "@/components/controls/XInput"

  export default {
    name: 'test',
    data(){
      return {
        attrs:{
          value:"aaaaaaaaaaaaaaa"
        },
        showNode:false,
        node:[],
        Checklist:Checklist,
        XInput:XInput,
      }
    },
    components:{
      run,Checklist
    },
    created(){
      this.$http.get("http://127.0.0.1:8999/api/form/1/", {})
        .then(r => {
        console.log(r)
       let data = JSON.parse(r.data)
      let me = this
      Object.keys(data).forEach(function (key) {  //渲染字段属性模板
        let item = data[key]
        console.log(item);
        me.node.push({
          type:componentMap[item.type],
          attrs:item
        })
        if(me.node.length == data.length){
          console.log("done");
          me.showNode=true
        }

//        if(item.type == "textbox"){
//          me.node.push({
//            type:"XInput",
//            value:item.value,
//            title:item.lable,
//            placeholder:item.placeholder
//          })
//        }
//        if(item.type == "checkBox"){
//          let options=[]
//          let selected = []
//          for(let i=0;i<item.value.length;i++){
//            if(item.value[i].selected){
//              selected.push(item.value[i].text)
//            }
//            options.push( item.value[i].text)
//          }
//          me.node.push({
//            type:"Checklist",
//            title:item.lable,
//            options:options,
//            value:selected
//          })
//        }
//        if(item.type == "combobox"){
//          let options=[]
//          let selected = ""
//          for(let i=0;i<item.value.length;i++){
//            if(item.value[i].selected){
//              selected=item.value[i].text
//            }
//            options.push( item.value[i].text)
//          }
//          me.node.push({
//            type:"PopupRadio",
//            title:item.lable,
//            options:options,
//            value:selected
//          })
//        }
//        if(item.type == "textArea"){
//          me.node.push({
//            type:"XTextarea",
//            value:item.value,
//            title:item.lable,
//            placeholder:item.placeholder
//          })
//        }
//        if(item.type == "radio"){
//          let options=[]
//          let selected = ""
//          for(let i=0;i<item.value.length;i++){
//            if(item.value[i].selected){
//              selected=item.value[i].text
//            }
//            options.push( item.value[i].text)
//          }
//          me.node.push({
//            type:"radio",
//            title:item.lable,
//            options:options,
//            value:selected
//          })
//        }

      });
    }
    ).
      catch(err => {}
    )
    }

  }


</script>


<style lang="less" type="text/less" scoped>

</style>
