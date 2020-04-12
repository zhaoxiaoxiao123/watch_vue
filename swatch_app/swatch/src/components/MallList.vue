<template>
  <div>
    <MallHeader></MallHeader>
    <main id="main">
    <div class="main bg-main pt-5">
      <div class="content">
        <div class="left bg-white col-sm-3 text-left">
          <div class="bg-white product-set">
            <h3 id="title" style="font-size: 1.5rem" class="font-weight-bold"></h3>
            <p id="subtitle" style="font-size:1.2rem;margin-bottom:30px" class="text-main"></p>
          <div class="l_list">
            <span>功能</span>
            <button @click="btn1($event)">+</button>
            <ul class="list">
              <li>111</li>
              <li>111</li>
              <li>111</li>
              <li>111</li>
            </ul>
          </div>
          <div class="l_list">
            <span>性别</span>
            <button @click="btn1">+</button>
            <ul class="list">
              <li>111</li>
              <li>111</li>
              <li>111</li>
              <li>111</li>
            </ul>
          </div>
          <div class="l_list">
            <span>表带材质</span>
            <button @click="btn1" class="open">+</button>
            <ul class="list">
              <li>111</li>
              <li>111</li>
              <li>111</li>
              <li>111</li>
            </ul>
          </div>
          <div style="margin-top:30px;font-size:1.2rem">
            <span>颜色</span>
            <div>
              <ol style="list-style:none" class="p-0 m-0">
                <li><a href="javascript:;" style="background-color:#fff;border:1px solid grey;"></a></li><li><a href="javascript:;" style="background-color:#e5b800"></a></li>
                <li><a href="javascript:;" style="background-color:#ff0000"></a></li>
                <li><a href="javascript:;" style="background-color:#f1f0ed"></a></li>
                <li><a href="javascript:;" style="background-color:#33ff97"></a></li>
                <li><a href="javascript:;" style="background-color:#0084ff"></a></li>
                <li><a href="javascript:;" style="background-color:#f1f0ed"></a></li>
                <li><a href="javascript:;" style="background-color:#0f181e"></a></li>
                <li><a href="javascript:;" style="background-color:#e75a83"></a></li>
                <li><a href="javascript:;" style="background-color:#9343ff"></a></li>
              </ol>
          </div>
          </div>
          </div>
        </div>
        <div class="right flex flex-wrap col-sm-9" id="product">
          <div class="product-item col-sm-8">
        <div class="product-item-info bg-white h-100 w-100">
          <div>
            <h3 class="font-lg font-weight-bold">{{listf.l_title}}</h3>
            <p class="text-main font-md">{{listf.l_des}}</p>
          </div>
          <div>
            <img :src="require('../assets/list/'+listf.lpic)" alt="" class="w-100">
            <button id="btn-img">+</button>
          </div>
        </div>
        </div>
        <div class="product-item col-sm-4" v-for="(item,i) of listm" :key="i">
        <div class="product-item-info1 bg-white h-100 flex flex-column justify-around">
          <router-link :to="{name:'malldetail',params:{lid:item.lid}}">
            <div class="pt-4">
            <!-- <a href="mall_detail.html?l_id=${arr[i].lid}"> -->
              <img :src="require('../assets/list/'+item.lpic)" alt="" class="w-100" id="img">
            <!-- </a> -->
          </div>
          <div class="text-center flex flex-column">
            <!-- <a href="mall_detail.html?l_id=${arr[i].lid}" class="text-second font-weight-bold" id="title">{{item.lname}}</a> -->
            <span>{{item.lname}}</span>
            <span class="font-weight-bold" id="price">￥{{item.lprice}}</span>
          </div>
          </router-link>
        </div>
        </div>
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
      list:[],
      current:0
    }
  },
  components:{
    MallHeader,
    MallFooter
  },
  computed:{
    listm(){
      return this.list.slice(1)
    },
    listf(){
      return this.list[0]
    }
  },
  created(){
    this.loadmore()
  },
  methods:{
    loadmore(){
      let fid=this.$route.params.fid;
      this.axios.get('mall_list',{params:{fid}}).then(res=>{
        this.list=res.data.data;
        console.log(this.list[0])
      })
    },
    btn1(e){
      if (this.current) {
      this.current=0;
      e.currentTarget.innerHTML = "+";
      e.currentTarget.style.color = "black";
      e.currentTarget.previousElementSibling.style.color = "black";
      } else { 
      // openBtn = document.querySelector("button.open");
      // if (openBtn!=null) { 
      //   openBtn.className = "";
      //   openBtn.innerHTML = "+";
      // }
      this.current=1;
      e.currentTarget.innerHTML = "-";
      e.currentTarget.style.color = "red";
      e.currentTarget.previousElementSibling.style.color = "red";
      }
    }
  },
  
}
</script>

<style>
.content>.left,.content>.right{
  float:left;
}
.content::after{
  content:'';
  display:block;
  clear:both;
}
.content>.left .product-set{
  padding:30px 15px;
  
}
.content>.left .l_list{
  position:relative;
  font-size:1.2rem;
  margin:15px 0;
}
.content>.left button{
  background-color: transparent;
  outline:0;
  border:0;
  position:absolute;
  right:0;
  padding:0;
}
.content>.right .product-item{
  padding:0 15px;
  margin-bottom:30px;
  height:400px;
}
.content>.right .product-item-info{
  padding:30px;
  position:relative;
}
.content>.right .product-item-info>div:first-child{
  padding:20px 50px;
  opacity:0;
  width:100%;
}
.content>.right .product-item-info>div:last-child{
  position:absolute;
  top:50px;
  left:45px;
  right:45px;
}

.content>.right .product-item-info1{
  padding:20px 20px 60px;
}

.open+ul{
  display:block;
}

.l_list>.list{ 
  display: none;
}

.l_list ol li a {
  font-size: 0;
  width: 30px;
  height: 30px;
  display: block;
  border-radius: 50%;
  padding: 0;
  margin: 0;
}
ol li{
  display:inline-block;
  margin:8.5px 10px 8.5px 0;
}
</style>