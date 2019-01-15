<template>

  <group title=" ">
    <CellBox class="title">
      <div class="subTitle" v-text="attrs.lable"></div>
      <a href="javascript:void(0)">
        <div class="icon">
          <input type="file" name="fileUpload" multiple="multiple" @change="upload"/>
          <!--<span>选择文件</span>-->
          <div>
            <x-icon type="ios-plus" size="30" class="cell-x-icon"></x-icon>
          </div>
        </div>
      </a>
    </CellBox>
  </group>


</template>

<script>

  import {CellBox, Group} from 'vux'
  export default {
    name: 'upload2',
    created(){
      this.value = ""
    },
    data(){
      return {
        form:{

        }
      }
    },
    methods:{
      change(){
      },
      upload(e){
        this.form.uploadName=[]
        console.log(e.target.files);
        for(var f in e.target.files){
          if(typeof e.target.files[f] == "object"){
            this.form.uploadName.push(e.target.files[f].name)
          }

        }
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
      CellBox, Group
    }
  }

</script>


<style lang="less" type="text/less" scoped>

  .title{
    font-size:0.36rem;
    &>div{
        padding-right:0.36rem;
      }
  }
  .title:before{
    display:none;
  }
  .icon{
    height:50px;
    background:#fff;
    border-radius: 5px;
    text-align: center;
    position:relative;
    display: -webkit-box;
    -webkit-box-align: center;
    span{
      color: #fff;
      background: @content-color;
      padding: 0.10rem;
      border-radius: 0.1rem;
    }
    div svg{
      vertical-align: -20%;
      fill:@content-color;
    }
   input{
      width:100%;
      height:50px;
      opacity:0;
      cursor:pointer;
      position:absolute;
      left: 0;
    }
  }
</style>
