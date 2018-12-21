<template>

  <group :title="attrs.lable">
    <radio  v-model="value" :options="options" ></radio>
  </group>


</template>

<script>

  import { Radio ,Group } from 'vux'
  export default {
    name: 'radio2',
    created(){
      let options = []
      let selected = ""
      let value = this.attrs.value
      for (let i = 0; i < value.length; i++) {
        if (value[i].selected) {
          selected = value[i].text
        }
        options.push(value[i].text)
      }

      this.options=options
      this.value=selected
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
      Radio,Group
    }
  }

</script>


<style lang="less" type="text/less" scoped>

</style>
