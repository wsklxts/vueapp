<template>

  <group>
    <x-input :title="attrs.lable" v-model="attrs.value" :required="attrs.require" :max="parseInt(attrs.maxLength)" :placeholder="attrs.placeholder"></x-input>
  </group>


</template>

<script>

  import { XInput,Group } from 'vux'
  export default {
    name: 'XInput2',
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
      XInput,Group
    }
  }

</script>


<style lang="less" type="text/less" scoped>

</style>
