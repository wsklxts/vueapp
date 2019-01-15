<template>


  <group title="日期">
    <datetime
      :title="attrs.lable"
      format="YYYY-MM-DD HH:mm"
      v-model="form.date"
      @on-change="change"
      placeholder="请选择日期"
    ></datetime>
  </group>


</template>

<script>

  import {Datetime, Group} from 'vux'
  export default {
    name: 'Datetime2',
    data(){
      return{
        form:{
          date:""
        }
      }
    },
    created(){
      this.value = ""
    },
    methods:{
      change(){

      }
    },
    props: {
      attrs: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      Datetime, Group
    }
  }

</script>


<style lang="less" type="text/less" scoped>

</style>
