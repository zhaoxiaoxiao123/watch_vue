<template>
  <div>
    <Header></Header>
    <main id="main" class="container">
      <carousel></carousel>
      <div id="cont">
        <div id="content">
        <div class="list b-g-w" v-for="(item,i) of list" :key="i">
          <div class="img">
            <a href="javascript:;">
              <img :src="require('../assets/'+item.pic)" alt="斯沃琪百搭女表" style="width:100%">
            </a>
          </div>
          <div class="title">
            <a href="javascript:;">
              <h3>{{item.name}}</h3>
            </a>
          </div>
        </div>
      </div>
      </div>
      <nav id="nav">
      <div class="nav-content b-g-w">
        <div class="nav-title">
          <h3>Quicklinks</h3>
        </div>
        <div class="content">
          <div class="content-list">
            <div class="list_item">
              <a href="javascript:;">&gt;&nbsp;&nbsp;媒体资料</a>
            </div>
            <div class="list_item">
              <a href="javascript:;">&gt;&nbsp;&nbsp;店铺查询</a>
            </div>
          </div>
          <div class="content-list">
            <div class="list_item">
              <a href="javascript:;">&gt;&nbsp;&nbsp;用户手册</a>
            </div>
            <div class="list_item">
              <a href="javascript:;">&gt;&nbsp;&nbsp;SWATCH 搜索器询</a>
            </div>
          </div>
          <div class="content-list">
            <div class="list_item">
              <a href="javascript:;">&gt;&nbsp;&nbsp;工作机会</a>
            </div>
            <div class="list_item">
              <a href="javascript:;">&gt;&nbsp;&nbsp;订阅新闻</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Carousel from "../views/Carousel";
import Header from "./Header";
import Footer from "./Footer";
export default {
  data(){
    return{
      list:[]
    }
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:black repeat center top;margin:0 auto;')
  },
  beforeDestroy () {
    document.querySelector('body').removeAttribute('style')
  },
  components:{
    'carousel':Carousel,
    Header,
    Footer
  },
  created(){
    this.loadmore();
  },
  methods:{
    loadmore(){
      this.axios.get("family").then(res=>{
        this.list=res.data.data;
      })
    }
  }
}
</script>
<style scoped>
/*    内容列表样式       */
#cont{
  margin-bottom:16px;
}
#content{
  width:100%;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.list{
  margin-bottom:27px;
  margin-top:15px;
  border-bottom:2px solid #fff;
}
#content>.list:hover{
  border-bottom:2px solid #f00;
}
#content>.list:hover h3{
  color:#f00;
}
.img{
  width:100%;
  overflow:hidden;
}
.title{
  font-size:14px;
  font-weight:blod;
  padding-left:10px;
  padding-right:10px;
  margin-bottom:8px;
  margin-top:11px;
}
/*      底部导航栏样式       */
#nav{
  width:100%;
}
.nav-content{
  padding:30px 15px;
  width:100%;
  margin-bottom:30px;
}
#nav .content{
  display:flex;
  justify-content: space-between;
}
.content-list > .list_item{
  border-top:1px dashed #b2b2b2;
}
.content-list > :last-child{
  border-bottom:1px dashed #b2b2b2;
}
.list_item{
  width:283px;
  height:30px;
  line-height:30px;
  margin-right:40px;
  text-align: start;
}
.list_item a{
  color:#646464;
}
.content-list{
  float:left;  
}
#nav .content::after{
  content:"";
  display:block;
  clear:both;
}
.nav-title{
  text-align: start;
}
.nav-title h3{
  font-size:22px;
  font-weight:400;
  margin-bottom:10px;
  color:#000;
}
</style>