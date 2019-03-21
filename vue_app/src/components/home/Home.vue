<template>
  <div id="home">
<!-- 头 导航 -->
       <!--3.引入子组件heaer-->
        <header-ber></header-ber>
    <!--内部隐藏--> 
    <!-- 头导航 隐藏栏 -->
<!-- 轮播图 -->
        <!--3.引入子组件轮播-->
            <tab-ber></tab-ber>
<!-- 主体 产品 -->
  <!-- 个人家庭用户 -->
    <div class="mybody">
      <div class="mybodyTop">
        <div class="body-title-top">
            <div></div>
            <p>个人&amp;家庭用户</p>
        </div>
        <div class="mybodyTopOne">
           <div>
               <ul class="myBodyTopSImg">
                 <li @mousemove="myBodyTopLi(1)" >
                   <router-link to="" >
                       <img src="img/body/1-1.png">
                       <p>平板电脑</p>
                   </router-link>
                 </li>
                 <li @mousemove="myBodyTopLi(2)" >
                   <router-link to="">
                       <img src="img/body/1-2.png" alt="">
                       <p>loenr电脑</p>
                   </router-link>
                 </li>
                 <li  @mousemove="myBodyTopLi(3)" >
                   <router-link to="">
                       <img src="img/body/1-3.png" alt="">
                       <p>手机</p>
                   </router-link>
                 </li>
                 <li  @mousemove="myBodyTopLi(4)" >
                   <router-link to="">
                       <img src="img/body/1-4.png" alt="">
                       <p>服务</p>
                   </router-link>
                 </li>
                 <li  @mousemove="myBodyTopLi(5)" >
                   <router-link to="">
                       <img src="img/body/1-5.png" alt="">
                       <p>智能</p>
                   </router-link>
                 </li>
               </ul>
           </div>
            <!--后台数据111--> 
           <div id="mybodyTopTwo"> 
              <div class="mybodyTop3" style="display:flex">
                 <!--   <div>
                  <router-link to="/">
                    <img src="img/1.png">
                    <div>
                      <p>全新电脑</p>
                      <p>lainx</p>
                      <p>价格：￥0444</p>
                    </div>
                  </router-link>
                </div>
                <div>
                  <router-link to="/">
                    <img src="img/1.png">
                    <div>
                      <p>全新电脑</p>
                      <p>lainx</p>
                      <p>价格：￥0444</p>
                    </div>
                  </router-link>
                </div>
                <div>
                  <router-link to="/">
                    <img src="img/1.png">
                    <div>
                      <p>全新电脑</p>
                      <p>lainx</p>
                      <p>价格：￥0444</p>
                    </div>
                  </router-link>
                </div>
                <div>
                  <router-link to="/">
                    <img src="img/1.png">
                    <div>
                      <p>全新电脑</p>
                      <p>lainx</p>
                      <p>价格：￥0444</p>
                    </div>
                  </router-link>
                </div>   -->
             </div>
             <div class="mybodyTop3">
               <!--    <div>
                  <router-link to="/">
                    <img src="img/body/1-1.png">
                    <div>
                      <p>全新电脑</p>
                      <p>lainx</p>
                      <p>价格：￥0444</p>
                    </div>
                  </router-link>
                </div>
                <div>
                  <router-link to="/">
                    <img src="img/1.png">
                    <div>
                      <p>全新电脑</p>
                      <p>lainx</p>
                      <p>价格：￥0444</p>
                    </div>
                  </router-link>
                </div>
                <div>
                  <router-link to="/">
                    <img src="img/1.png">
                    <div>
                      <p>全新电脑</p>
                      <p>lainx</p>
                      <p>价格：￥0444</p>
                    </div>
                  </router-link>
                </div>
                <div>
                  <router-link to="/">
                    <img src="img/1.png">
                    <div>
                      <p>全新电脑</p>
                      <p>lainx</p>
                      <p>价格：￥0444</p>
                    </div>
                  </router-link>
                </div>   -->
             </div>
               <div class="mybodyTop3"></div>
            <div class="mybodyTop3"></div>
            <div class="mybodyTop3"></div>    
           </div>  
           <!--后台数据111--> 
          
        </div>
        <div class="mybodyTopImgTwo">
           <div> <img src="img/mglist/2.jpg"></div> 
           <div> <img src="img/mglist/1.jpg"></div>
        </div>
      </div>
      <div class="mybodyTop">
        <div class="body-title-top">
            <div></div>
            <p>企业中心</p>
        </div>
        <div class="mybodyTopOne">
           <div>
               <ul class="myBodyTopSImg">
                 <li @mousemove="myBodyTopLi1(1)" >
                   <router-link to="" >
                       <img src="img/body/2-1.png">
                       <p>平板电脑</p>
                   </router-link>
                 </li>
                 <li @mousemove="myBodyTopLi1(2)" >
                   <router-link to="">
                       <img src="img/body/2-2.png" alt="">
                       <p>loenr电脑</p>
                   </router-link>
                 </li>
                 <li  @mousemove="myBodyTopLi1(3)" >
                   <router-link to="">
                       <img src="img/body/2-3.png" alt="">
                       <p>手机</p>
                   </router-link>
                 </li>
                 <li  @mousemove="myBodyTopLi1(4)" >
                   <router-link to="">
                       <img src="img/body/2-4.png" alt="">
                       <p>服务</p>
                   </router-link>
                 </li>
               </ul>
           </div>
            <!--后台数据111--> 
           <div id="mybodyTopTwo1"> 
              <div class="mybodyTop33" style="display:flex">              
             </div>
             <div class="mybodyTop33">
             </div>
               <div class="mybodyTop33"></div>
            <div class="mybodyTop33"></div>   
           </div>  
           <!--后台数据111--> 
          
        </div>
      </div>
    </div>
<!-- 结尾导航 -->
  <div  class="homeHeader">
      <div class="homeHeaderTop">
        <div></div>
        <p>推荐热门版块</p>
      </div>
      <div class="homeHeaderButton1">
        <div class="homeHeaderButton" id="homeHeaderUl">
          <ul>
            <li><router-link to="/"><img src="img/md/1.jpg" ></router-link></li>
          </ul>
          <ul >
            <li><router-link to="/"><img src="img/md/2.jpg" ></router-link></li>
          </ul>
            <ul>
            <li><router-link to="/"><img src="img/md/3.jpg" ></router-link></li>
          </ul>
          <ul>
            <li><router-link to="/"><img src="img/md/4.jpg" ></router-link></li>
          </ul>
          <ul>
            <li><router-link to="/"><img src="img/md/5.jpg" ></router-link></li>
          </ul>
        </div>
        <div class="homeHeaderButton" id="homeHeaderUl1">
          <ul>
            <li><router-link to="/"><img src="img/md/1.jpg" ></router-link></li>
          </ul>
          <ul >
            <li><router-link to="/"><img src="img/md/2.jpg" ></router-link></li>
          </ul>
            <ul>
            <li><router-link to="/"><img src="img/md/3.jpg" ></router-link></li>
          </ul>
          <ul>
            <li><router-link to="/"><img src="img/md/4.jpg" ></router-link></li>
          </ul>
          <ul>
            <li><router-link to="/"><img src="img/md/5.jpg" ></router-link></li>
          </ul>
        </div>
      </div>
  </div>
<!-- 最后 -->
    <!-- 引入子组件 -->
   <end-ber></end-ber>

</div>
</template>
<style>
/*header 轮播*/
  #home>.homeHeader>.homeHeaderButton1{
       display:flex;width:1200px;overflow:hidden;margin-left:40px;
  }
  #home>.homeHeader>.homeHeaderButton1>.homeHeaderButton{
      display:flex;
  }
  #home>.homeHeader>.homeHeaderButton1>.homeHeaderButton>ul{
    list-style-type:none;
  }
  #home>.homeHeader>.homeHeaderButton1>.homeHeaderButton>ul>li{
    position:relative;left:0px;margin-left:12px;
  }
  #home>.homeHeader>.homeHeaderButton1>.homeHeaderButton>ul>li img{
    width:420px; height:240px;
  }
/* 总的样式*/
  #home {
    padding:0; margin:0;background: #ffffff;
  }
/* 轮播图 */
     .app-swiper .mint-swipe{height:600px;}
     .app-swiper .mint-swipe img{height:600px;}
/* <!-- 主体 产品 -->
   <!--公共样式 个人家庭用户 企业中心 推荐热门版块-->     */
       .mybody>.mybodyTop>.body-title-top,.mybody>.mybodyButton>.body-title-top, #home>.homeHeader>.homeHeaderTop{
            position: relative;
            height: 80px;
            line-height: 104px;
            font-size: 0;
            margin:20px 0 20px 0;
       }
       .mybody>.mybodyTop>.body-title-top>div:first-child,
       .mybody>.mybodyButton>.body-title-top>div:first-child,
       #home>.homeHeader>.homeHeaderTop>div:first-child{
          display: inline-block;
          width: 100%;
          vertical-align: middle;
          height: 1px;
          background-color: #ccc; 
       }    
      .mybody>.mybodyTop>.body-title-top>p,
      .mybody>.mybodyButton>.body-title-top>p,
      #home>.homeHeader>.homeHeaderTop>p{
              position: absolute;
              left: 40%;
              top: 0;
              width:300px;
              padding-left:47px;
              font-size: 32px;
              color: #616161;
              background: #ffffff;
       }
   /* top 图片*/
      .mybody>.mybodyTop>.mybodyTopOne .myBodyTopSImg{
        display: flex;
        list-style-type:none;
        justify-content:space-around;
      }
   /* top 内容*/
      .mybody>.mybodyTop>.mybodyTopOne>#mybodyTopTwo .mybodyTop3,.mybody>.mybodyTop>.mybodyTopOne>#mybodyTopTwo1 .mybodyTop33{
          display: none;
          justify-content:space-around;
          padding:20px 40px 0 40px;
      }
      .mybody>.mybodyTop>.mybodyTopOne>#mybodyTopTwo .mybodyTop3>div,.mybody>.mybodyTop>.mybodyTopOne>#mybodyTopTwo1 .mybodyTop33>div{
          background:#eee;
          width:300px;
          transition-property:all;transition-duration:0.6s
      }
      .mybody>.mybodyTop>.mybodyTopOne>#mybodyTopTwo .mybodyTop3>div:hover,
      .mybody>.mybodyTop>.mybodyTopOne>#mybodyTopTwo1 .mybodyTop33>div:hover{
        box-shadow:-5px 10px 30px 0px #ccc;
        padding:1px; 
      }
        .mybody>.mybodyTop>.mybodyTopOne>#mybodyTopTwo .mybodyTop3>div img,
        .mybody>.mybodyTop>.mybodyTopOne>#mybodyTopTwo1 .mybodyTop33>div img{
          width:290px;
      }
      .mybody>.mybodyTop>.mybodyTopOne>#mybodyTopTwo  .mybodyTop3>div div,
      .mybody>.mybodyTop>.mybodyTopOne>#mybodyTopTwo1  .mybodyTop33>div div{
          text-align:center;  
          padding-bottom:10px;
      }
      .mybody>.mybodyTop>.mybodyTopOne>div>#mybodyTopTwo  .mybodyTop3>div div>p,
      .mybody>.mybodyTop>.mybodyTopOne>div>#mybodyTopTwo1  .mybodyTop33>div div>p, {
                font-weight: 700;
                color:#675656;
                font-size:1.4rem;
      }
      .mybody>.mybodyTop>.mybodyTopOne .myBodyTopSImg p{text-align: center;}
   /* top mybodyTopImgTwo*/  
      .mybody>.mybodyTop>.mybodyTopImgTwo{
         display:flex;margin:40px;
        }
        .mybody>.mybodyTop>.mybodyTopImgTwo>div+div{
          padding-left:30px;
        }
        .mybody>.mybodyTop>.mybodyTopImgTwo>div:first-child>img{
         width:284px;height:400px;
         margin-left:10px;transition-property:all;
        }
         .mybody>.mybodyTop>.mybodyTopImgTwo>div+div>img{
         width:940px;height:400px;
        }
        .mybody>.mybodyTop>.mybodyTopImgTwo>div:first-child>img:hover,.mybody>.mybodyTop>.mybodyTopImgTwo>div+div>img:hover{
          padding:10px;transition-duration:1s;
        }

/**/ 
/* 多媒体 */
    @media screen and (max-width:1300px){
      /* 头导航 */
      #home .home-header,.mybody, .app-swiper .mint-swipe{
      width:1300px;
      }
    }
</style>
<script>
// 1.引入子组件  
 import tabBer from "../src/tabber.vue"
 import headerBer from "../src/header.vue"
 import end from "../src/end.vue"
export default {
  data(){
    return {
      list:{},
      // imgUrl:[]
    }
  },  
   created(){
      this.imagelist();
      this.bodySimglist();
      setTimeout(()=>{ this.footerSImg()},100)
  },
   methods:{
    //  移除隐藏
       geren(e){
          var homeBodyOne=document.getElementById("home-body-one");
          homeBodyOne.style.display="flex";
     },
       geren1(){
          var homeBodyOne=document.getElementById("home-body-one");
          homeBodyOne.style.display="none";
     },
     listOnt(e){ if(e==1) homeBodyOneDiv.style.display="block";
                  if(e==2)homeBodyOneDiv2.style.display="block";
                  if(e==3)homeBodyOneDiv3.style.display="block"},
     listOnt1(e){ if(e==1) homeBodyOneDiv.style.display="none";
                  if(e==2)homeBodyOneDiv2.style.display="none";
                  if(e==3)homeBodyOneDiv3.style.display="none";},
    // body 的移除隐藏 
     myBodyTopLi(e){
         var mybodyTopTwo = document.getElementById("mybodyTopTwo");
         var mybodyTop3 = mybodyTopTwo.querySelectorAll(".mybodyTop3")
          for(var i=0;i<mybodyTop3.length;i++){
               mybodyTop3[i].style.display="none";
          }
          for(var s=0;s<=5;s++){
             if(e == s+1 )mybodyTop3[s].style.display="flex";
          } 
     },
      myBodyTopLi1(e){
          var mybodyTopTwo1 = document.getElementById("mybodyTopTwo1");
          var mybodyTop33 = mybodyTopTwo1.querySelectorAll(".mybodyTop33");
      
            for(var i=0;i<mybodyTop33.length;i++){
               mybodyTop33[i].style.display="none";
          }
          for(var s=0;s<=4;s++){
            if(e == s+1 )mybodyTop33[s].style.display="flex";
          }
       
      },
    // 功能五:HomeImgUrl  home图片列表 
     bodySimglist(){
        var url = "http://127.0.0.1:3000/HomeImgUrl"
         this.axios.get(url).then(res=>{
          var mybodyTopTwo = document.getElementById("mybodyTopTwo");
          var myBodyTopSImg = document.querySelectorAll(".mybodyTop3")

           var mybodyTopTwo1 = document.getElementById("mybodyTopTwo1");
          var myBodyTopSImg1 = mybodyTopTwo1.querySelectorAll(".mybodyTop33")

              for(var i=0;i<90;i++){
                var a=document.createElement("div");
                a.innerHTML= `
                <div>
                  <router-link to="/">
                    <img src="${res.data[i].imgUrl}">
                    <div>
                      <p>${res.data[i].zname}</p>
                      <p>${res.data[i].title}</p>
                      <p>价格：￥${res.data[i].price}</p>
                    </div>
                  </router-link>
                   </div>`
                   if(i<4)
                  myBodyTopSImg[0].appendChild(a)
                  if(i<=7 && i>=4)
                   myBodyTopSImg[1].appendChild(a)
                  if(i>=8 && i<=11)
                  myBodyTopSImg[2].appendChild(a)
                  if(i>=12 && i<=15)
                   myBodyTopSImg[3].appendChild(a)
                   if(i>=16 && i<=19)
                   myBodyTopSImg[4].appendChild(a)

                   if(i>=20 && i<=23)
                    myBodyTopSImg1[0].appendChild(a)
                   if(i>=24 && i<=27)
                    myBodyTopSImg1[1].appendChild(a)
                     if(i>=28 && i<=31)
                    myBodyTopSImg1[2].appendChild(a)
                     if(i>=32 && i<=35)
                    myBodyTopSImg1[3].appendChild(a)
              }
         })
           
     },
    //  功能一:home 组件轮播图片
     imagelist(){
           var url = "http://127.0.0.1:3000/imglist";
           this.axios.get(url).then(result=>{         
                 this.list = result.data;
            });
         },
    // footer轮播
          footerSImg(){
              var homeHeaderUl = document.getElementById("homeHeaderUl")
              var homeHeaderUl1 = document.getElementById("homeHeaderUl1")

              var homeHeaderUlImg = homeHeaderUl.querySelectorAll("ul>li")
              var homeHeaderUlImg1 = homeHeaderUl1.querySelectorAll("ul>li")
             // console.log(homeHeaderUlImg1)
              var x = 0;
              setInterval(function(){
                        homeHeaderUlImg[0].style.left = x + 'px';
                        homeHeaderUlImg[1].style.left = x + 'px';
                        homeHeaderUlImg[2].style.left = x + 'px';
                        homeHeaderUlImg[3].style.left = x + 'px';
                        homeHeaderUlImg[4].style.left = x + 'px';

                        homeHeaderUlImg1[0].style.left = x + 'px';
                        homeHeaderUlImg1[1].style.left = x + 'px';
                        homeHeaderUlImg1[2].style.left = x + 'px';
                        homeHeaderUlImg1[3].style.left = x + 'px';
                        homeHeaderUlImg1[4].style.left = x + 'px';
                    x--;
                    if((x +2166) == 0){
                        x = 0;
                    }
              },10)
          }

    },
    //2.  注册子组件
     components:{
      "tab-ber":tabBer,
      "header-ber":headerBer,
      "end-ber":end,
    }
}

</script>


