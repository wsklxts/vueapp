<template>

  <checklist :title="attrs.lable" required :options="options" v-model="value"></checklist>


</template>

<script>

  import { Checklist } from 'vux'
  export default {
    name: 'Checklist2',
    data(){
      return {}
    },
    created(){
      let options = []
      let selected = []
      let value = this.attrs.value
      for (let i = 0; i < value.length; i++) {
        if (value[i].selected) {
          selected.push(value[i].text)
        }
        options.push(value[i].text)
      }
      this.options = options
      this.value = selected
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
      Checklist
    }
  }

</script>


<style lang="less" type="text/less" scoped>

</style>
