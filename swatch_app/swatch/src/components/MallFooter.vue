<template>
  <div>
    <footer>
    <div id="footer" class="flex flex-column bg-main">
      <div class="reinsurance-block bg-white row">
        <div class="item col-md-2 col-sm-4 col-xs-4">
          <a href="javascript:;" class="flex flex-column align-center">
            <span class="icon made"></span>
            <span>瑞士制造</span>
          </a>
        </div>
        <div class="item col-md-2 col-sm-4 col-xs-4">
          <a href="javascript:;" class="flex flex-column align-center">
            <span class="icon return"></span>
            <span>关于退货</span>
          </a>
        </div>
        <div class="item col-md-2 col-sm-4 col-xs-4">
          <a href="javascript:;" class="flex flex-column align-center">
            <span class="icon serve"></span>
            <span>送货服务</span>
          </a>
        </div>
        <div class="item col-md-2 col-sm-4 col-xs-4">
          <a href="javascript:;" class="flex flex-column align-center">
            <span class="icon pay"></span>
            <span>安全支付</span>
          </a>
        </div>
        <div class="item col-md-2 col-sm-4 col-xs-4">
          <a href="javascript:;" class="flex flex-column align-center">
            <span class="icon guarantee"></span>
            <span>全球斯沃琪保修</span>
          </a>
        </div>
        <div class="item col-md-2 col-sm-4 col-xs-4">
          <a href="javascript:;" class=" flex flex-column align-center">
            <span class="icon feedback"></span>
            <span>礼品卡及手提袋服务</span>
          </a>
        </div>
      </div>
      <div class="footer-left flex flex-column">
        <div class="top row">
          <div class="follow flex bg-white col-sm-6 col-xs-12 justify-between">
            <div>
              <h4>关注我们</h4>
              <span class="icon weibo" style="margin-top:38px"></span>
              <span class="icon weixin"></span>
            </div>
            <div class="icon code"></div>
          </div>
          <div class="news col-sm-6 col-xs-12 text-left">
            <h4>新品讯息</h4>
            <p class="m-t-1 font-sm" style="font-weight:blod;color:#fff">申请我们的新品讯息</p>
            <input type="text" placeholder="请输入您的邮箱地址" class="border-0 outline-0" style="padding:10px 5px;width:70%;background:#eaeaea"><button class="border-0 text-white btn-danger1 outline-0" style="padding:10px 5px;width:20%;">订阅</button>
          </div>
        </div>
        <div class="bottom flex bg-white justify-between text-left">
          <div>
            <h3>最新上市</h3>
            <p>I Love Your Folk系列</p>
            <p>包豪斯系列</p>
            <p>Big Bold</p>
            <p>炫彩光波系列</p>
            <p>金属系列</p>
            <p>SKINIRONY超薄金属系列</p>
            <p>DEEP WONDER系列</p>
            <p>奇思妙想系列</p>
          </div>
          <div>
            <h3>特别推荐</h3>
            <p>2019秋冬系列</p>
            <p>中国新年生肖特别款</p>
            <p>Energy Boost</p>
            <p>SWATCH x HACKETT</p>
            <p>LISTEN TO ME系列</p>
            <p>SWATCH PAY！支付腕表</p>
            <p>SWATCH博物馆和合作系列</p>
            <p>装置51金属系列</p>
          </div>
          <div>
            <h3>为您精选</h3>
            <p>斯沃琪型格男表</p>
            <p>斯沃琪百搭女表</p>
            <p>瑞士制飞菲潮童男表</p>
            <p>瑞士制飞菲潮童女表</p>
            <p>人气热卖</p>
            <p>经典款式</p>
          </div>
        </div>
      </div>
      <div class="footer-right bg-white text-left">
        <div class="post">
          <h3>支付和邮寄</h3>
          <div>
            <span class="icon pay"></span>
            <span>安全支付</span>
          </div>
          <div>
            <span class="icon zf"></span>
          </div>
          <div>
            <span class="icon deliver"></span><span>送货到家</span>
          </div>
          <p class="text-main font-sm">快递时间取决于顺丰递送时效</p>
        </div>
        <div class="connect" style="margin-top: 50px;">
          <h3>快速链接</h3>
          <a href="javascript:;">保养</a>
          <a href="javascript:;">退货</a>
          <a href="javascript:;">使用条款和条件</a>
          <a href="javascript:;">隐私政策</a>
        </div>
      </div>
      <div class="widget bg-white font-sm">
        <div>
          <ol class="breadcrumb justify-center">
            <li class="breadcrumb-item">
              <a href="javascript:;">购物条款</a>
            </li>
            <li class="breadcrumb-item">
              <a href="javascript:;">隐私政策</a>
            </li>
            <li class="breadcrumb-item">
              <a href="javascript:;">店铺查询</a>
            </li>
          </ol>
        </div>
        <div>
          <ol class="breadcrumb justify-center">
            <li class="breadcrumb-item text-main">
              沪ICP备16030460号-2&  
            </li>
            <li class="breadcrumb-item">
              <a href="javascript:;">沪公网安备 31010402007041号 </a>
              <a href="javascript:;"> 查看营业执照 </a>
            </li>
          </ol>
        </div>
        <p class="text-main">SWATCH® China</p>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* 去掉a下划线 */
.reinsurance-block a,.footer-right .connect a{
  text-decoration: none;
}
.reinsurance-block{
  padding:49px 0 50px;
  margin-top:20px;
}
.reinsurance-block>.item>a>.icon,.footer-left .icon{
  background-image:url("../assets/sprite-other.png");
  width:35px;
  height:33px;
  display:inline-block;
  margin-bottom:10px;
}
.reinsurance-block>.item>a>.icon.made{
  background-position: 0 0;
  transition:all 0.3s linear;
}
.reinsurance-block>.item:hover>a>.icon.made{
  background-position: 0 -33px;
}
.reinsurance-block>.item>a>.icon.return{
  background-position: -35px 0;
  transition:all 0.3s linear;
}
.reinsurance-block>.item:hover>a>.icon.return{
  background-position: -35px -33px;
}
.reinsurance-block>.item>a>.icon.serve{
  background-position: -73px 0;
  width:64px;
  transition:all 0.3s linear;
}
.reinsurance-block>.item:hover>a>.icon.serve{
  background-position: -73px -33px;
}
.reinsurance-block>.item>a>.icon.pay{
  background-position: -136px 0;
  width:30px;
  transition:all 0.3s linear;
}
.reinsurance-block>.item:hover>a>.icon.pay{
  background-position: -136px -33px;
}
.reinsurance-block>.item>a>.icon.guarantee{
  background-position: -166px 0;
  transition:all 0.3s linear;
}
.reinsurance-block>.item:hover>a>.icon.guarantee{
  background-position: -166px -33px;
}
.reinsurance-block>.item>a>.icon.feedback{
  background-position: -201px 0;
  transition:all 0.3s linear;
}
.reinsurance-block>.item:hover>a>.icon.feedback{
  background-position: -201px -33px;
}
.reinsurance-block>.item>a:last-child{
  color:#000;
  font-size:12px;
}
/*   动画效果 */

.reinsurance-block>.item:hover>a,.footer-left .bottom>div>p:hover,.footer-right>.connect>a:hover{
  color:#f00;
}


.footer-left .icon.weibo{
  background-position: 0px -80px;
}
.footer-left .icon.weixin{
  background-position: -40px -80px;
}
.footer-left .icon.code{
  background-position: 0px -160px;
  width:130px;
  height:135px;
}
.footer-left .follow{
  padding:20px 40px;
  margin-left:-12.5px;
}
.footer-left .news{
  padding:25px 20px 20px;
  margin-left:12.5px;
  background-color:#8d8d8d;
}
.footer-left .top{
  margin-top:25px;
  margin-bottom:20px;
}
.footer-left .bottom{
  padding:40px 200px 50px 40px;
  margin-bottom:20px;
}
.footer-left h4,.footer-right .post div{
  margin:22px 0;font-size:15px;font-weight:bold;
}
.btn-danger1 {
  color: #fff;
  background-color: #f00;
}

.btn-danger1:hover {
  color: #fff;
  background-color: #000;
}
.footer-left .news>input::placeholder{
  font-size: 12px;
  color:#c2c2c2;
}
.footer-left .bottom>div>h3,.footer-right h3{
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 30px;
}
.footer-left .bottom>div>p{
  font-size: 1rem;
  color:#8d8d8d;
}
/* 关注我们   小屏布局 */
@media (max-width: 576px) {
  .follow.col-xs-12{
    margin-bottom: 20px;
  }
  .footer-left .bottom{
    display:none !important;
  }
}


.footer-right{
  padding:40px 40px 50px;
  margin-bottom:20px;
}
.footer-right>.post span.icon{
  display:inline-block;
  background-image: url("../assets/sprite-other.png");
}
.footer-right>.post span.pay{
  background-position: -185px -123px;
  width:22px;
  height:15px;
}
.footer-right>.post span.zf{
  background-position: 0px -123px;
  width:140px;
  height:34px;
}
.footer-right>.post span.deliver{
  background-position: -150px -123px;
  width:25px;
  height:20px;
}
.footer-right>.connect>a{
  color:#8d8d8d;
  display:block;
  margin-bottom: 10px;
}


.widget,.breadcrumb{
  text-align: center;
}
.breadcrumb{
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: "|";
  padding-right: 2.5rem;
  padding-left: 2.5rem;
}
.breadcrumb>li>a{color:#000}
</style>