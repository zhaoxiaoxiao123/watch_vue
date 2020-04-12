<template>
  <div id="banner" class="carousel" :style="{width:innerWidth+'px'}" @mouseenter="stop" @mouseleave="start">
    <!-- 轮播图片 -->
    <div class="carousel-inner" :style="ulStyle" :class="ulClass">
      <div v-for="(elem,i) of imgs" :key="i" class="carousel-item" :style="{width:innerWidth+'px'}">
        <router-link :to="elem.to">
          <img :src="require('../assets/index/'+elem.src)" alt="" :style="{width:innerWidth+'px'}">
        </router-link>
      </div>
      <div class="carousel-item" :style="{width:innerWidth+'px'}">
        <router-link :to="imgs[0].to">
            <img src="../assets/index/slider_v1.jpg" alt="" :style="{width:innerWidth+'px'}">
        </router-link>
      </div>
    </div>
    <!-- 左右箭头 -->
    <button @click="move(-1)" class="carousel-control-prev">&lt;</button>
    <button @click="move(1)" class="carousel-control-next">&gt;</button>
    <!-- 轮播指示符 -->
    <ul>
      <li v-for="(img,idx) of imgs" :key="idx" @click="moveTo(idx)"></li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      // 当前窗口宽度
      innerWidth:window.innerWidth,
      imgs:[
        {src:"slider_v1.jpg",to:"javascript:;"},
        {src:"slider_v2.jpg",to:"javascript:;"},
        {src:"slider_v3.jpg",to:"javascript:;"},
        {src:"slider_v4.jpg",to:"javascript:;"}
      ],
      i:1,
      ulClass:{hasTrans:true},
      canClick:true,
      timer:null,
    }
  },
  computed:{
  ulStyle(){
      var width=this.innerWidth*(this.imgs.length+1)+"px";
      var marginLeft = -(this.i-1)*this.innerWidth+"px";
      return {width,marginLeft}
    }
  },
  created(){
    window.addEventListener("resize",()=>{
      if(this.canClick){
        this.innerWidth = window.innerWidth;
        this.canClick=false;
        setTimeout(()=>{
        this.canClick=true;
        },30)
      }
    }); 
    this.start();
  },
  methods:{
    move(i){
      if(this.canClick){
        this.canClick=false;
        if(i==1){
          this.i++;
          if(this.i==this.imgs.length+1){
            setTimeout(()=>{
              this.ulClass.hasTrans=false;
              setTimeout(()=>{
                this.i=1;
                setTimeout(()=>{
                  this.ulClass.hasTrans=true;
                  setTimeout(()=>{
                    this.canClick=true;
                  })
                },50)
              },50)
            },200) 
          }
        }else{
          this.i--;
          if(this.i==0){
            this.ulClass.hasTrans=false;
            setTimeout(()=>{
              this.i=this.imgs.length;
              setTimeout(()=>{
                this.ulClass.hasTrans=true;
                setTimeout(()=>{
                  this.canClick=true;
                },200)
              },50)
            },50)
          }
        }
      setTimeout(()=>{
        this.canClick=true;
      },300)
      }
    },
    moveTo(i){
      if(this.canClick){
        this.i = i+1;
        this.canClick=false;
        setTimeout(()=>{
          this.canClick=true;
        },300)
      }
    },
    stop(){
      clearInterval(this.timer);
    },
    start(){
      this.timer=setInterval(()=>{
        this.move(1);
      },3000)
    }
  }
}
</script>
<style scoped>
  /* 轮播图片 */
  #banner{
    overflow:hidden;
    position:relative;
    /* padding:40px; */
  }
  .carousel-inner.hasTrans{
    transition:all 0.2s linear;
  }
  .carousel-inner>.carousel-item{
    display:block;
    float:left;
  }
  /* 左右箭头 */
  #banner>button{
    width:60px;
    height:4.375rem;
    position:absolute;
    top:50%;
    margin-top:-2.1875rem;
    opacity: .7;
    font-size: 80px;
    background-color: transparent;
    border:0;outline:0;
    color:#fff;
  }
  #banner>button[class="carousel-control-prev"]{
    right:auto;
    left:1.25rem;
  }
  #banner>button[class="carousel-control-next"]{
    right:1.25rem;
    left:auto;
  }
  /* 轮播指示符 */
  #banner>ul{
    position:absolute;
    bottom:0px;
    left:0;
    right:0;
  }
  #banner>ul>li{
    display:inline-block;
    width:16px;
    height:16px;
    background-color:#fff;
    border-radius:50%;
    margin: 04px;
    opacity:0.4
  }
</style>