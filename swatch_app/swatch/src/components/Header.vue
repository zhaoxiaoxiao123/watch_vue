<template>
  <div>
    <header id="header" class="container">
    <div class="header-menu">
      <div class="left">
        <ul>
          <li><a href="javascript:;">@575 beats</a></li>
          <li><a href="javascript:;">Online Shop</a></li>
          <li><a href="javascript:;">Newsletter</a></li>
          <li><a href="javascript:;">Press</a></li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li class="iconfont icon-diqu" style="color:#717171;"></li>
          <li style="margin-left:5px;"><a href="javascript:;">中国大陆</a></li>
          <li style="margin-left:15px;margin-right:15px">|</li>
          <li class="iconfont icon-icon_suo-" style="color:#717171;"></li>
          <li style="margin-left:5px;"><a href="javascript:;">登录</a></li>
        </ul>
      </div>
    </div>
    <div class="main-menu">
      <ul>
        <li style="width:130px;height:22px;">
          <img src="../assets/swatch-logo.svg" alt="Swatch Logo" style="width:100%">
        </li>
        <li class="product">
          <a href="javascript:;">产品系列</a>
        <!-- <div class="l-m"> -->
          <div class="l-m b-s">
          <ul>
            <li>NEW RELEASES</li>
            <li><a href="javascript:;">SWATCH ESSENTIALS</a></li>
            <li><a href="javascript:;">I LOVE YOU FOLK</a></li>
            <li><a href="javascript:;">KNIGHTLINESS</a></li>
            <li><a href="javascript:;">BAU SWATCH</a></li>
            <li><a href="javascript:;">BIG BOLD</a></li>
            <li><a href="javascript:;">ENERGY BOOST</a></li>
            <li><a href="javascript:;">LISTEN TO ME</a></li>
            <li><a href="javascript:;">炫彩光波系列</a></li>
            <li><a href="javascript:;">SKIN</a></li>
            <li><a href="javascript:;">IRONY</a></li>
          </ul>
          <ul>
            <li>太阳眼镜</li>
            <li><a href="javascript:;">SWATCH THE EYES 太阳眼镜</a></li>
            <li>全部BIJOUX</li>
            <li><a href="javascript:;">全部当前BIJOUX</a></li>
          </ul>
          <ul>
            <li>特别款</li>
            <li><a href="javascript:;">ART WATCHES</a></li>
          </ul>
        </div>
        </li>
        <!-- </div> -->
        <li><a href="javascript:;">服务</a></li>
        <li><a href="javascript:;">斯沃琪俱乐部</a></li>
        <li class="mall">
          <router-link to="/MallIndex">官方商城</router-link>
          <div class="l-m b-s">
            <ul>
              <li>SWATCH ONLINE STORE</li>
              <li><a href="javascript:;">首页</a></li>
              <li><a href="javascript:;">最新产品</a></li>
              <li><a href="javascript:;">热卖产品</a></li>
            </ul>
            <ul>
              <li>前往店铺</li>
              <li class="f-s-s c-b">找到离你最近的Swatch店铺购买最喜爱的Swatch腕表</li>
              <li><a href="javascript:;"><input type="text" disabled placeholder="查找店铺" style="background:#646464;width:100%;height:40px;padding:5px;text-align: center;"></a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </header>
  </div>
</template>

<script>
export default {

}
</script>

<style>
a{
  color:#646464;
}
.b-s{
  box-sizing:border-box;
}
.f-s-s{
  font-size:14px;
}
.c-b{
  color:#000;
}
/*      header-menu    样式 */
.header-menu{
  background-color:#ebebeb;
  padding:0 35px;
}
.header-menu .right{
  float:right;
}
.header-menu>.left li a,.header-menu>.right li a{
  color:#646464;
  font-size:14px;
  font-weight:500;
}
.header-menu>.left li{
  float:left;
  padding-top:5px;
  padding-bottom:5px;
  margin-right:25px;
}
.header-menu::after{
  content:"";
  display:block;
  clear:both;
}
.header-menu>.right li{
  float:left;
  padding-top:5px;
  padding-bottom:5px;
}
/*      main-menu    样式 */
.main-menu{
  background-color: #fff;
  padding:40px 35px 0 35px;
  height:126px;
  position:relative;
}
.main-menu>ul>li{
  float:left;
}
.main-menu > ul::after{
  content:"";
  display:block;
  clear:both;
}
.main-menu>ul>li:first-child{
  padding-top:9px;
  margin-right:25px;
}
.main-menu>ul>li~li{
  padding:8px 11px 11px 9px;
}
.main-menu li a{
  color:#646464;
  font-size:18px;
}
/*       下拉列表      */
.l-m{
  padding:0 35px;
  width:100%;
  position:absolute;
  top:126px;
  background-color:#fff;
  left:0;
  box-sizing: border-box;
}
.main-menu>ul>li>div{
  height:0;
  overflow:hidden;
  transition:all .5s linear;
}
.main-menu>ul>li[class="product"]:hover>div{
  height:300px;
  z-index:999;
}
.main-menu>ul>li[class="mall"]:hover>div{
  height:150px;
  z-index:999;
}
.main-menu>ul>li:hover>a{
  text-decoration: underline;
}
.main-menu .product>.l-m>ul,.main-menu .mall>.l-m>ul:first-child{
  float:left;
  margin-right:150px;
  text-align: start;
}
.main-menu .mall>.l-m>ul:last-child{
  float:right;
  text-align: start;
}
.main-menu .l-m>ul>li{
  padding-bottom: 5px;
  font-size:16px;
}
.main-menu .l-m>ul>li>a,.main-menu .mall>.l-m>ul:last-child>li:nth-child(2){
  font-size:14px;
}
.main-menu .product>.l-m>ul>li:first-child,.main-menu .product>.l-m>ul:nth-child(2)>li:nth-child(3),.main-menu .mall>.l-m>ul>li:first-child{
  color:#000;
  font-size:18px;
}
.l-m>ul:nth-child(2)>li:nth-child(3){
  margin-top:30px;
}
.l-m>ul:last-child>li:nth-child(2){
  font-size:14px;
  width:80%;
  word-wrap:break-word;
}
/* 伪类::placeholder兼容性 */
.l-m>ul>li>a>input::placeholder{
  color:#fff;
  font-size:16px;
}
.l-m>ul>li>a>input::-moz-placeholder{
  color:#fff;
  font-size:16px;
}
.l-m>ul>li>a>input::-ms-input-placeholder{
  color:#fff;
  font-size:16px;
}
.l-m>ul>li>a>input::-webkit-input-placeholder{
  color:#fff;
  font-size:16px;
}
</style>