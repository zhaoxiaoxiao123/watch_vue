<template>
  <div>
    <MallHeader></MallHeader>
    <main id="main">
      <div class="mian flex flex-column bg-main pt-5" id="detail">
        <div class="detail flex justify-around bg-white">
        <div class="img flex">
          <div>
            <img :src="require('../assets/mall_detail/'+list[0].dspic)" alt="" class="w-100">
          </div>
          <div>
            <img :src="require('../assets/mall_detail/'+list[0].dpic)" alt="" class="w-100">
          </div>
        </div>
        <div class="desc">
          <h3>{{list[0].d_title}}</h3>
          <p>{{list[0].d_subtitle}}</p>
          <div>
            <span>￥{{list[0].dprice}}</span>
            <div>
              <span>数量</span>
              <button>-</button>
              <span>{{list[0].dnum}}</span>
              <button>+</button>
            </div>
            <button>加入购物车</button>
          </div>
          <div>分享+</div>
          <div>CHARCOLAZING (SUOB404) 为深灰色表盘搭配 Swatch Solar Spectrum 玻璃罩，并采用金属感哑光表带，将两大经典设计巧妙融为一体</div>
        </div>
      </div>
      <div class="more bg-white p-5 mt-5">
        <h3>更多信息</h3>
        <div class="more-news flex">
          <div class="flex flex-column">
            <span>系列:</span>
            <span>功能:</span>
            <span>机芯颜色:</span>
            <span>Water Prof Meter:</span>
            <span>颜色:</span>
            <span>宽/毫米:</span>
            <span>厚/毫米:</span>
            <span>高/毫米:</span>
            <span>表带颜色:</span>
            <span>表带材质:</span>
            <span>表圈材质:</span>
            <span>表扣:</span>
            <span>表盘颜色:</span>
            <span>表壳颜色:</span>
            <span>表壳形状:</span>
            <span>表壳材料:</span>
          </div>
          <div class="flex flex-column">
            <span>{{list[0].d_series}}</span>
            <span>{{list[0].d_fun}}</span>
            <span>{{list[0].d_ncolor}}</span>
            <span>{{list[0].d_meter}}</span>
            <span>{{list[0].d_color}}</span>
            <span>{{list[0].d_width}}</span>
            <span>{{list[0].d_thick}}</span>
            <span>{{list[0].d_height}}</span>
            <span>{{list[0].d_bcolor}}</span>
            <span>{{list[0].d_bmate}}</span>
            <span>{{list[0].d_cmate}}</span>
            <span>{{list[0].d_button}}</span>
            <span>{{list[0].d_dial}}</span>
            <span>{{list[0].d_ccolor}}</span>
            <span>{{list[0].d_cshape}}</span>
            <span>{{list[0].d_case_meta}}</span>
          </div>
        </div>
      </div>
      <div class="browse bg-white p-5 mt-5">
        <h3>浏览商品</h3>
        <div class="flex">
          
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
  components:{
    MallHeader,
    MallFooter
  },
  created(){
    this.loadmore()
  },
  methods:{
    loadmore(){
      let lid=this.$route.params.lid;
      console.log(lid)
      this.axios.get('mall_detail',{params:{lid}}).then(
        res=>{
          this.list=res.data.data;
          console.log(this.list)
        }
      )
    }
  }
}
</script>

<style>

</style>