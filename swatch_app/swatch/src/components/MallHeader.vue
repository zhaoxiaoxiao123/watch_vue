<template>
  <div>
    <header class="bg-main">
    <div class="mall-header-menu">
      <div class="content text-main">
        <span>@658 beats </span>
        <span>店铺发货公告：因近期受到流感影响且店铺发货地址为上海，自2020年1月29日16时起，为响应当地政府号召，物流暂时停运，预计2月10日之后陆续发货。如有耽误您的时间，还望理解，最后祝大家身体健康！</span>
      </div>
      <div class="logo">
        <ul class="flex m-0" >
          <li><a href="javascript:;" class="icon weibo"></a></li>
          <li style="margin-right:40px;"><a href="javascript:;" class="icon weixin"></a></li>
          <li class="font-sm"><a href="javascript:;"></a>中国大陆</li>
          <li class="icon flag"></li>
        </ul>
      </div>
    </div>
    <div class="mall-main-menu bg-white row justify-between align-start">
      <ul class="flex sm-col-12 md-col-9 p-0">
        <li style="width:130px;height:22px;">
          <img src="../assets/swatch-logo.svg" alt="Swatch Logo" style="width:100%">
        </li>
        <li><a href="javascript:;">分类搜索</a></li>
        <li><a href="javascript:;">腕表</a></li>
        <li><a href="javascript:;">配饰</a></li>
        <li><a href="javascript:;">产品系列</a></li>
        <li>===</li>
      </ul>
      <ul class="sm-col-12 md-col-3 logo">
        <span class="search"></span>
        <span class="message"></span>
        <span class="login"></span>
        <span class="cart"></span>
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
/*         header-menu      */
.mall-header-menu{
  padding:7px 20px 5px;
}
.mall-header-menu::after{
  content:"";
  display:block;
  clear:both;
}
.mall-header-menu>.content{
  float:left;
  font-size:13px;
  text-align: start;
}
.mall-header-menu>.logo{
  float:right;
  height:30px;
  line-height:35px;
  width:230px;
}
.mall-header-menu>.logo .icon{
  display:inline-block;
  width:30px;height:30px;
  background-image:url("../assets/sprite-other.png");
}
.mall-header-menu>.logo .icon.weibo{
  background-position:-180px -80px;
}
.mall-header-menu>.logo .icon.weixin{
  background-position:-210px -80px;
}
.mall-header-menu>.logo .icon.flag{
  background-position:-240px -116px;
}
@media (max-width: 576px) {
  .mall-header-menu,.nall-main-menu>.logo{
    display:none;
  }
  .mall-main-menu>ul>li>a{
    opacity:0;
  }
  header>.mall-main-menu{
    padding-top:0;
  }
}

@media (min-width: 576px) {
  .mall-header-menu>.content>span:last-child{
    display:none;
  }
  .mall-main-menu>ul>li:last-child{
    opacity:0;
  }
}

@media (min-width: 768px) {
  .mall-header-menu>.content>span:last-child{
    display:inline-block;
  }
}

/*      main-menu    样式 */
.mall-main-menu{
  padding:40px 35px 0 35px;
  height:126px;
  position:relative;
}
.mall-main-menu>ul>li{
  /* width:92px; */
  height:30px;
}
.mall-main-menu>ul>li:hover>a{
  color:#000;
  /* text-decoration: none; */
}
/* .main-menu>ul>li:hover{
  border-bottom: 1px solid #000;
} */
.mall-main-menu>ul>li:first-child{
  padding-top:9px;
  margin-right:25px;
}
.mall-main-menu>ul>li~li{
  margin:8px 11px 11px 9px;
  /* margin-left: 20px; */
}
.mall-main-menu li a{
  color:#646464;
  font-size:18px;
  text-decoration: none;
}
.mall-main-menu ul>span~span{
  margin-left:15px;
}
.mall-main-menu span{
  display:inline-block;
  width:29px;
  height:27px;
  background-image:url("../assets/sprite.png");
}
.mall-main-menu span.search{
  background-position:0px -1932px;
}
.mall-main-menu span.message{
  background-position:-124px -1755px;
}
.mall-main-menu span.login{
  background-position:5px -1755px;
}
.mall-main-menu span.cart{
  background-position:0px -1621px;
}
</style>