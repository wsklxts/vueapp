<template>

  <group>
    <popup-radio :title="attrs.lable" :options="options" v-model="value"></popup-radio>
  </group>


</template>

<script>

  import { PopupRadio,Group } from 'vux'
  export default {
    name: 'PopupRadio2',
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
      PopupRadio,Group
    }
  }

</script>


<style lang="less" type="text/less" scoped>

</style>
