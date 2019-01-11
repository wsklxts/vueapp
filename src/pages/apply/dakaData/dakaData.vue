<template>

  <div>
    <XHeader  title="打卡数据" :left-options="{showBack: true}">
    </XHeader>

    <div class="template">

      <!--<scroller :height="fHeight" lock-x scrollbar-y  ref="scrollerBottom"  bounce @on-scroll-bottom="onScrollBottom">-->
      <!--<div class="box2">-->
      <group >
        <!--<cell v-for="(l,index) in listData"  :key="index" title="刷卡时间"  v-show="l.kqrfdatetime" :value="l.kqrfdatetime"></cell>-->
        <cell v-for="(l,index) in listData"  :key="index"  v-show="l.kqrfdatetime" :value="l.kqrfdatetime"></cell>
        <!--<div style=" background: rgb(142, 172, 201);color:white;text-align:center">以上第{{index+1}}项</div>-->
      </group>
      <load-more tip="正在加载" v-show="loadMoreDom"></load-more>
      <div v-show="loadMoreFinish" class="loadMoreFinish">加载完毕</div>


      <!--<div class="btnWrap">-->
        <!--<x-button type="default" text="申请请假" @click.native="btn"></x-button>-->
      <!--</div>-->

    </div>

  </div>


</template>

<script>



  import {TransferDom, Actionsheet, Group, XSwitch, Cell,XHeader,CellBox ,Datetime,XInput,XTextarea,XButton
    ,Toast,GroupTitle,Scroller,LoadMore,Loading
  } from 'vux'
  import qs from 'qs'
  import {getScrollTop,getWindowHeight,getScrollHeight} from "@/common/util"

  export default {
    name: '',
    mounted(){
      this.getListData(this.pageIndex)
      if(this.loadDataSwitch){
        window.addEventListener("scroll",this.scroll)
      }
    },
    computed:{
      isLoading(){
      },
      fHeight(){
        let fHeight= (parseFloat(document.documentElement.style.fontSize)+42)*0.95
        fHeight = (-fHeight).toString()
        return fHeight
      },
    },
    methods:{
      scroll(){
        var g = getScrollTop() + getWindowHeight()
        if (g  === getScrollHeight()) {
          console.log("到底部");
          if(this.loadDataSwitch){
            this.getListData(this.pageIndex+=1)
          }
        }
      },

      btn(){
        this.$router.go(-1)
      },

      getListData(pageIndex){

        const empId=window.localStorage.getItem("global_empid")
        const company=window.localStorage.getItem("comp_code")

        let formData={company:company, globalEmpId: empId ,pageIndex: pageIndex, size: 10}

        var mockdata = "{\"data\":[{\"kqrcardno\":\"TS00001_40\",\"kqrdeviceno\":\"00\",\"kqrifcancel\":false,\"row_number\":1,\"kqrfdatetime\":\"2017-09-25 14:25:26\",\"kqrftype2\":\"上下班\"},{\"kqrcardno\":\"TS00001_40\",\"kqrdeviceno\":\"00\",\"kqrifcancel\":false,\"row_number\":2,\"kqrfdatetime\":\"2017-09-25 14:24:40\",\"kqrftype2\":\"上下班\"},{\"kqrcardno\":\"TS00001_40\",\"kqrdeviceno\":\"00\",\"kqrifcancel\":false,\"row_number\":3,\"kqrfdatetime\":\"2017-09-25 14:13:38\",\"kqrftype2\":\"上下班\"},{\"kqrcardno\":\"TS00001_40\",\"kqrdeviceno\":\"00\",\"kqrifcancel\":false,\"row_number\":4,\"kqrfdatetime\":\"2017-09-25 12:47:36\",\"kqrftype2\":\"上下班\"},{\"kqrcardno\":\"TS00001_40\",\"kqrdeviceno\":\"00\",\"kqrifcancel\":false,\"row_number\":5,\"kqrfdatetime\":\"2017-09-25 12:47:13\",\"kqrftype2\":\"上下班\"},{\"kqrcardno\":\"TS00001_40\",\"kqrdeviceno\":\"00\",\"kqrifcancel\":false,\"row_number\":6,\"kqrfdatetime\":\"2017-09-25 12:46:40\",\"kqrftype2\":\"上下班\"},{\"kqrcardno\":\"TS00001_40\",\"kqrdeviceno\":\"00\",\"kqrifcancel\":false,\"row_number\":7,\"kqrfdatetime\":\"2017-09-25 12:44:09\",\"kqrftype2\":\"上下班\"},{\"kqrcardno\":\"TS00001_40\",\"kqrdeviceno\":\"00\",\"kqrifcancel\":false,\"row_number\":8,\"kqrfdatetime\":\"2017-09-25 12:41:32\",\"kqrftype2\":\"上下班\"},{\"kqrcardno\":\"TS00001_40\",\"kqrdeviceno\":\"00\",\"kqrifcancel\":false,\"row_number\":9,\"kqrfdatetime\":\"2017-09-25 12:37:02\",\"kqrftype2\":\"上下班\"},{\"kqrcardno\":\"TS00001_40\",\"kqrdeviceno\":\"00\",\"kqrifcancel\":false,\"row_number\":10,\"kqrfdatetime\":\"2017-09-25 12:23:16\",\"kqrftype2\":\"上下班\"}],\"visitTime\":\"2019-01-10 14:58:13\"}"

//        console.log(eval("(" +mockdata + ")"));
        mockdata = JSON.parse(mockdata)

        this.$http.post("/MobileService/KQRecord.asmx/GetRecord",formData)
          .then(r=>{
          console.log(r)
        let data= eval("(" + r.data.d + ")");
        data=data.data
        if(data){
          for(let d in data){
            this.loadMoreDom=true
            this.listData.push(data[d])
          }
          if(getScrollHeight() == getWindowHeight()){
            this.getListData(this.pageIndex+=1)
          }
        }else{
          this.loadDataSwitch=false
          this.loadMoreDom=false
          this.loadMoreFinish=true
        }


      }).catch(err=>{
          this.loadMoreDom=false
        this.loadMoreFinish=true
      })
      },
      detailBtn(){

      },
      formSubmit(){

      }
    },
    components: {
      Actionsheet,
      XSwitch,
      Group,
      Cell,
      XHeader,
      CellBox,
      Datetime,
      XInput,
      XTextarea,
      XButton,Toast,GroupTitle,Scroller,LoadMore,Loading
    },
    data () {
      return {
        loadDataSwitch:true,
        pageIndex:1,
        loadMoreDom:false,
        loadMoreFinish:false,
        fontHeight:0,
        scrollList:20,
        listData:[],
        msg: 'Welcome to Your Vue.js App',
      }
    },
    destroyed(){
      window.removeEventListener("scroll",this.scroll)
    },
  }

</script>


<style lang="less" type="text/less" scoped>
  .btnWrap{
    position: fixed;
    width: 100%;
    bottom: 0;
  button.weui-btn{
    border-radius:0 !important;
  }
  }
  .weui-cell {
    padding: 8px 16px !important;
    font-size:0.24rem !important;
  }
  .box2{
    /*padding-top:1rem*/
  }

  .loadMoreFinish{
    text-align: center;
    padding: 0.18rem 0;
  }
  .weui-cell{
    width: 50% !important;
    box-sizing: border-box !important;
    float: left;
  }
</style>
