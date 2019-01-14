<template>
  <div id="app">
    <!--<loading :show="isLoading" :text="loadingText"></loading>-->
    <loading v-model="isLoading" :text="loadingText"></loading>
    <toast v-model="errMsgToast" type="warn" width="5rem">{{errMsgText}}</toast>

    <keep-alive>
    </keep-alive>

    <router-view v-transition class="routerView"></router-view>

  </div>
</template>

<script>
import {Loading,Spinner,Toast} from "vux"

export default {
  name: 'App',
  components:{
    Loading,Spinner,Toast
  },
  data(){
    return{
    }
  },
  beforeCreate(){
  },
  mounted(){
    console.log("app");
  },
  updated(){

  },
  computed:{
    isLoading(){
      return this.$store.state.loading
    },
    errMsgText(){
      return this.$store.state.errMsgText
    },
    errMsgToast:{
      get: function () {
        return this.$store.state.showErrToast
      },
      set: function (newValue) {
        this.$store.state.showErrToast=newValue
      }
    },
    loadingText(){
      return this.$store.state.loadingText
    },
  },
  methods:{

  }
}


</script>

<style lang="less" scoped>
  .routerView{
    z-index: 1000;
    background: white;
    height:100%;
    width:100%;
  }
  .spinnerWrap{
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    .spinner{
      position: fixed;
      z-index: 5001;
      top: 40%;
      left: 50%;
      margin-left: -14px;
      text-align: center;
    }
  }


</style>
