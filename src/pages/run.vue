<script>
  import componentslist from "@/common/componentslist.js"

  export default {
    render: function(cElement, context) {
      console.log(this.temp);
      return cElement(componentslist[this.temp.type],{
        props: {
          attrs: this.temp.attrs
        },
      })
    },
    props: {
      temp: {
        type: Object,
        required: true,
        default: {}
      },
      parent: {
        type: Object,
        default() {
          return this.$store.state.data
        }
      }
    }
  }
</script>
