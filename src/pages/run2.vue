<script>
  import {InputText} from "@/common/componentslist.js"
  
  export default {
    render: function(cElement, context) {
      return cElement(this.temp.type,{
        props: {
          temp: this.temp
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
