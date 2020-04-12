<template>
  <div>
    <footer id="footer" class="container">
    <div class="con-top t_a_c b-g-w">
      <h3>保持关注</h3>
      <div>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
      </div>
    </div>
    <div class="con-bottom t_a_c b-g-w">
      <ul class="footer-nav t_a_c">
        <li><a href="javascript:;">会员登录</a></li>
        <li><a href="javascript:;">其他国家</a></li>
        <li><a href="javascript:;">工作机会</a></li>
        <li><a href="javascript:;">媒体资料</a></li>
        <li><a href="javascript:;">订阅新闻</a></li>
        <li><a href="javascript:;">联系我们</a></li>
        <li><a href="javascript:;">网站地图</a></li>
        <li><a href="javascript:;">隐私政策</a></li>
        <li><a href="javascript:;">COOKIE POLICY</a></li>
        <li><a href="javascript:;">适用条款</a></li>
      </ul>
      <div class="footer-copy">
        © Swatch Ltd. 2020 保留所有权利: 瑞士表<br>
        <a href="javascript:;">查看营业执照</a>
        <ul class="licenses t_a_c">
          <li>沪ICP备16030460号-2</li>
          <li><a href="javascript:;">
            <img src="../assets/licenses.png" style="margin-right: 5px;margin-bottom: -3px;; width: 16px; height: 16px;">沪公网安31010402007041号</a></li>
        </ul>
      </div>
      <div class="accessibility-icon t_a_c">
        <img src="../assets/accessability-icon-swatch.svg">
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
.con-top,.con-bottom{
  padding:30px 15px;
}
.con-top{
  margin-bottom:30px;
}
.con-top h3{
  font-size:22px;
  font-weight:normal;
  color:#757575;
  margin-bottom:22px;
}
.footer-nav{
  padding-bottom:16px;
  margin-bottom:5px;
}
.footer-nav li,.licenses li{
  display:inline-block;
  padding-left:12px;
  padding-right:13px;
}
.footer-nav li a,.footer-copy a{
  color:#646464;
}
.footer-copy{
  color:#757575;
}
.licenses{
  margin-top:10px;
  margin-bottom:5px;
  padding:16px;
}
.accessibility-icon{
  margin-top:20px;
  margin-bottom:12px;
}
</style>