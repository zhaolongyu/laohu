<template>
  <div id="cartList">
   <!--cartltheader 头-->
    <div class="cartltheader">
      <div class="cartltheaderOnt">
        <img src="img/SmallIcon/10.png">
      </div>
      <div class="cartltheaderTwo">
        <ul>
          <li>联想商城</li>
          <li>Think官网</li>
          <li>极速到家</li>
          <li>专属订制</li>
          <li>服务与支持</li>
          <li><input type="text"></li>
        </ul>
      </div>
      <div class="cartltheaderThree">
        <ul>
          <li>登录</li>
          <li>|</li>
          <li>注册</li>
        </ul>
      </div>
    </div>
   <!--cartltheaderTop 头下面-->
    <div class="cartltheaderTop">
        <span>首页 > </span>
        <span>商品详情 > </span>
        <span>{{this.list.title}}</span>
    </div>
   <!--cartltbody 主体-->
    <div class="cartltbody">
        <!--cartltbodyLt 左-->
       <div class="cartltbodyLt">
         <div class="cartltbodyLtYi">
            <img v-for="item of listImg" :src="item.md">
         </div>
         <span>&lt;</span>
         <div class="cartltbodyLtRe">
             <img v-for="item1 of listImg" :src="item1.sm">    
         </div>
         <span class="cartltSpan2">&gt;</span>
         <div>
            <i>商品编号：20KUA001CD</i>
         </div>
       </div>
        <!--cartltbodyRg 右-->
         <div class="cartltbodyRg" >
          <div class="cartltbodyRga"><h1>{{this.list.title}}</h1></div>
          <div class="cartltbodyRgb"><h3>{{this.list.subtitle}}</h3></div>
          <div class="cartltbodyRgc">
            <h3>促销信息</h3>
            <span>{{this.list.details}}</span>
          </div>
          <div class="cartltbodyRgd">
            <h3>选择配置:</h3>
            <div class="cartltbodyRgdOne">
                <!--后台看差几个-->
                <div v-for="item of listFont" v-if="item.promise != ''">{{item.promise}}</div>
            </div>
          </div>
          <div class="cartltbodyRge">
             <h3>推荐服务:</h3>
             <div class="cartltbodyRgeOne">
                <div  v-for="item of listFont" v-if="item.details != ''">{{item.details}}</div>
             </div>
          </div>
       </div>
    </div>
   <!--cartltbody 结尾 -->
    <div></div>
   <!--引入 endber -->
   <div></div>
       <end-ber></end-ber>
 
   <!--cartlttab 固定定位cart-->
    <div class="cartlttab">
         <div><img src="img/Smallicon/4.png" alt=""></div>
         <div class="cartlttabRt">
            <div class="cartlttabRtYi">
              <button @click="MyclickBn(-1)">-</button>
              <span style="display:inline-block;width:30px;height:30px;padding:7px 0 0 10px;">{{countButton}}</span>
              <button @click="MyclickBn(+1)">+</button>
            </div>
            <div class="cartlttabRtRe">商城价格：<span>39998</span></div>
            <div class="cartlttabRtSan"><button @click="insetinto">购物车</button></div>
         </div>
    </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>
<script>
 import end from "../src/end.vue"
export default {
    data(){
        return {
            countButton:0,
            list:[],
            listFont:[],
            listImg:[]
        }
    },
    methods:{
       cartListI(){
        //    console.log(this.$route.params.lid)
           var lid = this.$route.params.lid;   //右边 list/中小大图片
            //  大中小的图片列表
                      
             var url = "http://127.0.0.1:3000/cartlistimg?lid="+lid
             this.axios.get(url).then(res=>{
                //  console.log(res.data);
                 this.listImg = res.data
             
                //  cartltbodyLtYiIndex   这个是z-index的
             })
            //  list文字的列表
            var urlI= "http://127.0.0.1:3000/laptop?lid="+lid
             this.axios.get(urlI).then(res=>{
                // console.log(res.data[0]);
                this.list = res.data[0]
                //   console.log(this.list)
               })
            //   list 文字 里面的配置内容 
              var urlS= "http://127.0.0.1:3000/cartlistimgSrc?lid="+lid
              this.axios.get(urlS).then(res=>{
                   this.listFont = res.data;
                })  
       },
       MyclickBn(index){
             this.countButton+=index;
             if(this.countButton==0)
             this.countButton=1;
       },
       insetinto(){
         var lid = this.$route.params.lid;
        //  console.log(lid)
         var postData = this.qs.stringify({
              lid:lid,
			  sm: this.listImg[0].sm,
              price:this.list.price,
              title:this.list.title
          });
        //   console.log(postData.lid)
         var url = "http://127.0.0.1:3000/cartIcon"
          this.axios.post(url,postData).then(result=>{  
            //   console.log(result.data)
              if(result.data.affectedRows > 0){this.$router.push({path:'/cartget'})}
          }) 
                
            
       }
    },
    created(){
        this.cartListI();
    },
    components:{
        "end-ber":end
    }
}
</script>
<style>
*{padding:0;margin:0;}
/*<!--cartltheader 头-->*/ 
    .cartltheader{width:100%;padding-top:30px;background-color:#000000;display:flex;justify-content:space-around;}
    .cartltheader>.cartltheaderTwo>ul,.cartltheader>.cartltheaderThree>ul{
        display:flex;list-style-type:none;
        }
   /*中*/ 
    .cartltheader>.cartltheaderTwo>ul>li{
        color: #fff;padding-left:50px;
        font-size: 18px;
    }
    .cartltheader>.cartltheaderTwo>ul>li>input{
        width:225px;height:30px;border-radius:3%;
        margin-top:-10px; }
   /*右*/ 
    .cartltheader>.cartltheaderThree>ul>li{
        color: #fff;
        font-size: 15px;
    }
/* <!--cartltheaderTop 头下面-->*/ 
  .cartltheaderTop{background:#fffffa;padding:10px 50px;}
/*  <!--cartltbody 主体-->*/ 
 #cartList>.cartltbody{height:640px;}   
 #cartList>.cartltbody>.cartltbodyLt,#cartList>.cartltbody>.cartltbodyRg{
    height:630px; float:left;width:50%;padding-left:45px;padding-top:20px;}
   /*左*/    
        /*shang--->*/
         #cartList>.cartltbody>.cartltbodyLt>.cartltbodyLtYi{
            position:relative;height:500px;
         }
        #cartList>.cartltbody>.cartltbodyLt>.cartltbodyLtYi>img{
            width:520px;height:500px; top:0;left:0; position:absolute;
        }
        #cartList>.cartltbody>.cartltbodyLt>.cartltbodyLtYi>img.cartltbodyLtYiIndex{
            z-index:999;
        }
        /*xia*/   
        #cartList>.cartltbody>.cartltbodyLt>.cartltbodyLtRe{
            width:500px;overflow:hidden;height:87px;margin-left:25px;display:flex;flex-wrap:wrap;
        }
        #cartList>.cartltbody>.cartltbodyLt>.cartltbodyLtRe>img{
            width:84px;height:84px;border:1px solid gray;margin:0 10px 10px 10px;vertical-align: middle;
        }
        #cartList>.cartltbody>.cartltbodyLt span{
            border:1px solid gray;padding:3px;position:relative;top:49px;left:0
        }
        #cartList>.cartltbody>.cartltbodyLt span.cartltSpan2{
            margin-left:167px;top:-60px;left:300px;
        }
   /*右*/ 
      /*滚动条隐藏*/
       .cartltbodyRg{overflow-y:auto;padding-right:35px;} 
       .cartltbodyRg::-webkit-scrollbar { display:none; }
       .cartltbodyRg::-webkit-scrollbar { width: 0px;  }
       /*a  b*/
    .cartltbody>.cartltbodyRg>.cartltbodyRga>h1{font-size: 30px;
    font-weight: normal;}
    .cartltbody>.cartltbodyRg>.cartltbodyRgb>h3{font-size: 14px;
    margin-top: 17px; line-height: 22px;  border-bottom: #dcdcdc solid 1px; padding-bottom: 12px;}
    /*c*/
    .cartltbody>.cartltbodyRg>.cartltbodyRgc>h3,/*有d一个属性*/.cartltbody>.cartltbodyRg>.cartltbodyRgd>h3,/*有e一个属性*/.cartltbody>.cartltbodyRg>.cartltbodyRge>h3{font-size: 18px;
    margin-top: 15px;}
    .cartltbody>.cartltbodyRg>.cartltbodyRgc>span{color: #000000;
    margin-left: 10px;  font-size: 14px;  height: auto;}
     /*d*/
     .cartltbody>.cartltbodyRg>.cartltbodyRgd>div.cartltbodyRgdOne>div{
          padding:5px;margin-top:10px;
          border:1px solid #ccc;width:100%;font-size:18px;
          border-radius:2%;
     }
     .cartltbody>.cartltbodyRg>.cartltbodyRgd>div.cartltbodyRgdOne>div:hover{
         border:1px solid red;
     }
    /*e*/
    .cartltbody>.cartltbodyRg>.cartltbodyRge>.cartltbodyRgeOne{
        display:flex;flex-wrap:wrap;margin-bottom:20px;
    }
    .cartltbody>.cartltbodyRg>.cartltbodyRge>.cartltbodyRgeOne>div{
         border:1px solid #ccc;width:45%;font-size:18px;padding:5px;margin:10px 10px 10px 0;
    }
/*  <!--cartlttab 固定定位cart-->*/  
  #cartList>.cartlttab{
      background:#ccc;
      position:fixed;bottom:0;width:100%;
      display:flex;
      justify-content:space-between;
  }
  #cartList>.cartlttab>.cartlttabRt{
    display:flex;padding-right:150px;align-items:center;
  }
  #cartList>.cartlttab>.cartlttabRt>.cartlttabRtRe{
     color:red;font-size:25px;margin:0 20px 0 20px;
  }
/*媒体*/   
   @media screen and (max-width:1300px){
      #cartList{
      width:1300px;
      }
    }
</style>