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

  export default {
    name: 'renderControl',
    data(){
      return {
        attrs:{
        },
        showNode:false,
        node:[],
      }
    },
    components:{
      run
    },
    created(){

//      var json = {"caption":"文本输入框:","vtype":"","onvalidation":"","validateOnChanged":true,"validateOnLeave":true,"required":true,"requiredErrorText":"必须输入","emptyText":"请输入","allowInput":true,"selectOnFocus":false,"maxLength":10,"errorMode":"","CaptionStyle":"","XuHao":2147483647,"ControlType":"AjaxTextBox","ID":"textbox_1","DBType":3,"DBValue":"select 1","DBParams":[],"Visible":true,"Enabled":true,"Tooltip":"提示内容","Style":"width:190","Cls":"样式表","BorderStyle":null,"destroy":null,"SortByStr":null,"notAllowAutoClear":false,"notAllowEdit":false,"Script":null}
//      this.node.push({
//        type:componentMap["textbox"],
//        attrs:json
//      })
      var api = "http://127.0.0.1:8888/api/vueappCustomControl/"
      var jilala = "vueappCustomControl"
      this.$http.get(jilala, {})
        .then(r => {
        console.log(r)
       let data = JSON.parse(r.data)
      let me = this
      Object.keys(data).forEach(function (key) {  //渲染字段属性模板
        let item = data[key]
        me.node.push({
          type:componentMap[item.type],
          attrs:item
        })
        if(me.node.length == data.length){
          console.log("done");
          me.showNode=true
        }
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
