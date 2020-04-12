<template>
  <div>
  <MallHeader></MallHeader>
  <main>
    <div class="column flex flex-column " id="list">
      <div class="block-collection-top row no-gutters">
        <div class="col-md-4 col-sm-6 col-xs-6">
          <div class="list bg-white">
            <div class="img">
              <a href="mall_list.html?f_id=${arr[0].fid}">
                <img :src="require('../assets/mall_index/'+list[0].fpic)" class="w-100">
              </a>
            </div>
            <div class="title">
              <a href="mall_list.html?f_id=${arr[0].fid}">
                <b>{{list[0].fname}}</b>
                <br>
                {{list[0].fdes}}
                <br>
                <br>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
          <div class="list bg-white">
            <div class="img">
              <a href="mall_list.html?f_id=${arr[1].fid}">
                <img :src="require('../assets/mall_index/'+list[1].fpic)" class="w-100">
              </a>
            </div>
            <div class="title">
              <a href="mall_list.html?f_id=${arr[1].fid}">
                <b>{{list[1].fname}}</b>
                <br>
                {{list[1].fdes}}
                <br>
                <br>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12">
          <div class="list bg-white w-100">
            <router-link :to="{name:'malllist',params:{fid:3}}">
            <div class="img">
              <img :src="require('../assets/mall_index/'+list[2].fpic)" class="w-100">
            </div>
            <div class="title">
              <b>{{list[2].fname}}</b>
              <br>
              {{list[2].fdes}}
              <br>
              <br>
            </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="home-bottom-set row no-gutters">
        <div class="left col col-xs-12 col-sm-12 col-lg-4">
          <div class="list bg-white">
            <div class="img">
              <a href="javascript:;">
                <img src="../assets/mall_index/select_4.jpg" class="w-100">
              </a>
            </div>
            <div class="title">
              <a href="javascript:;">
                <b>送给他</b>
                <br>
                型男本色，戴出潮流风尚
                <br>
                <br>
              </a>
            </div>
          </div>
        </div>
        <div class="right col col-xs-12 col-sm-12 col-lg-8">
          <div class="row no-gutters">
            <div class="col-6">
              <div class="list bg-white">
                <div class="img">
                  <a href="javascript:;">
                    <img :src="require('../assets/mall_index/'+list[4].fpic)" class="w-100">
                  </a>
                </div>
                <div class="title">
                  <a href="javascript:;">
                    <b>{{list[4].fname}}</b>
                    <br>
                    {{list[4].fdes}} 
                    <br>
                    <br>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="list bg-white">
                <div class="img">
                  <a href="mall_list.html?f_id=${arr[5].fid}">
                    <img :src="require('../assets/mall_index/'+list[5].fpic)" class="w-100">
                  </a>
                </div>
                <div class="title">
                  <a href="mall_list.html?f_id=${arr[5].fid}">
                    <b>{{list[5].fname}}</b>
                    <br>
                    {{list[5].fdes}}
                    <br>
                    <br>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row no-gutters">
            <div class="col-12">
              <div class="list bg-white">
                <div class="img">
                  <a href="javascript:;">
                    <img :src="require('../assets/mall_index/'+list[6].fpic)" class="w-100">
                  </a>
                </div>
                <div class="title">
                  <a href="javascript:;">
                    <b>{{list[6].fname}}</b>
                    <br>
                    {{list[6].fdes}} 
                    <br>
                    <br>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block-video bg-white">
        <div class="tv-block-video">
          <video src="../assets/video.mp4" style="width:100%;height:100%"></video>
          <div class="ykplayer-poster-logo"></div>
          <div class="video-menu">
            <div style="float:left">
              <span class="iconfont icon-icon_play" @click="play"></span>
              <span>00:00</span>/ <span>01:32</span>
            </div>
            <div style="float:right">
              <span>高清</span>
              <span class="iconfont icon-yinliang"></span>
              <span class="iconfont icon-youku">优酷视频</span>
              <span class="iconfont icon-fangda1"></span>
            </div>
          </div>
        </div>
        <div class="tv-block-info">
          <h3 style="font-size:22px;font-weight:bold;color:#000">宏大创意，前卫个性</h3>
          <p style="font-size:1rem;margin-bottom:40px;" class="text-main">灵感来自前卫设想的全新腕表系列，专为思想更加前卫的人士设计。设计灵感来自城市街头服饰，这些表款拥有直径 47 毫米的惊人表头，大箭形指针为你指出接下来的正确方向。全新平板玻璃凸显表盘上的 3D 印花，与腕表的当代设计风格相得益彰。 
          </p>
          <a href="javasript:;" class="text-white bg-black w-50 text-center" style="display:inline-table;height:3rem;line-height:3rem;">一探究竟</a>
        </div>
      </div>
    </div>
  </main>
  <MallFooter></MallFooter>
  </div>
</template>

<script>
import MallHeader from "./MallHeader";
import MallFooter from "./MallFooter";
export default {
  data(){
    return{
      list:[]
    }
  },
  created(){
    this.loadmore();
  },
  components:{
    MallHeader,
    MallFooter
  },
  methods:{
    loadmore(){
      this.axios.get("mall_family").then(res=>{
        this.list=res.data.data;
        console.log(this.list)
      })
    },
    play(){
      var video = document.querySelector(".column .tv-block-video>video");
      var logo = document.querySelector(".column .tv-block-video>.ykplayer-poster-logo");
      if (video.paused) {
        video.play();
        logo.style.display = "none";
      } else { 
        video.pause();
      }
    }
  }
}
</script>

<style>
.row {
  margin-right: -12.5px;
  margin-left: -12.5px;
}
.no-gutters > .col,
.no-gutters > [class*="col-"] {
  padding-right: 12.5px;
  padding-left: 12.5px;
}
.column .list{
  margin-bottom:20px;
  box-sizing:border-box;
  border-bottom:1px solid transparent;
}
.column .title{
  padding:5px 5px 0 5px;
}
.column .list .title>a{
  color:#000;
  text-decoration: none;
  font-size: 15px;
}
.column .list:hover>.title>a{
  color:#f00;
}
.column .list:hover{
  border-bottom:1px solid #f00;
}
/* *******************block-video**************** */
.block-video{
  padding:30px 40px 50px;
}
.tv-block-video{
  position:relative;
  margin-bottom:40px;
}
.ykplayer-poster-logo{
  position:absolute;
  top:0;
  left:0;
  background-image:url("../assets/mall_index/video.jpg");
  width:100%;
  height:100%;
  background-repeat:no-repeat;
  background-size:cover;
  display:block;
  z-index:10;
}
.video-menu{
  background-color:rgba(0,0,0,0.8);
  color:#fff;
  position:absolute;
  bottom:0;
  z-index:20;
  width:100%;
  height:2.5rem;
  line-height:2.5rem;
}
.video-menu::after{
  content:"";
  display:block;
  clear:both;
}
</style>