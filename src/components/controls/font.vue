<template>

  <p class="text" v-text="attrs.lable" :style="style"></p>


</template>

<script>

  import { Group } from 'vux'
  export default {
    name: 'font',
    data(){
      return{
        style:{
          "font-size":this.attrs.fontSize+"px"
        }
      }
    },
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
      Group
    }
  }

</script>


<style lang="less" type="text/less" scoped>
.text{
  padding:0.1rem;
}
</style>
