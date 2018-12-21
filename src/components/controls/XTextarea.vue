<template>


  <group>
    <x-textarea :title="attrs.lable" v-model="attrs.value" :required="attrs.require" :max="parseInt(attrs.maxLength)" :placeholder="attrs.placeholder"></x-textarea>
  </group>


</template>

<script>

  import { XTextarea ,Group } from 'vux'
  export default {
    name: 'XTextarea2',
    created(){
      this.value=""
    },
    props: {
      attrs: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components:{
      XTextarea ,Group
    }
  }

</script>


<style lang="less" type="text/less" scoped>

</style>
