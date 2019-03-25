<template>
  <div>
   <div class="home-header">
      <ul> 
        <li><img src="img/SmallIcon/4.png" ></li>
        <li><router-link to="/">主页</router-link></li>
        <li class="home-body-tu" @mousemove="geren" @mouseout="geren1">
           <router-link to="/solution">个人家庭</router-link>
           <!-- 隐藏 -->
              <ul id="home-body-one">
                  <li @mousemove="listOnt(1)" @mouseout="listOnt1(1)" class="home-body-one">
                      <router-link  to="/"><img src="img/SmallIcon/3.png">leng联想电脑</router-link>
                  <div id="homeBodyOneDiv">
                     <div class="homeBody-div">
                       <ul>
                          <li><router-link to="/solution">游戏本</router-link></li>
                          <li><router-link to="/solution">拯救7200</router-link></li>
                          <li><router-link to="/solution">拯救者200</router-link></li>
                          <li><router-link to="/solution">Y7100</router-link></li>
                       </ul>
                     </div>
                     <div class="homeBody-div">
                        <ul>
                        <li><router-link to="/solution">轻薄本</router-link></li>
                        <li><router-link to="/solution">小新1232</router-link></li>
                        <li><router-link to="/solution">AIddep3</router-link></li>
                        <li><router-link to="/solution">BU324</router-link></li>
                        <li><router-link to="/solution">bylong32</router-link></li>
                      </ul>
                     </div>
                      <div class="homeBody-div">
                        <ul>
                          <li><router-link to="/solution">便捷本</router-link></li>
                          <li><router-link to="/solution">AJ7200A</router-link></li>
                          <li><router-link to="/solution">JA a8</router-link></li>
                          <li><router-link to="/solution">feifei8J</router-link></li>
                          <li><router-link to="/solution">Ja0</router-link></li> 
                          <li><router-link to="/solution">Y3Ja0</router-link></li> 
                      </ul> 
                     </div>
                      <div class="homeBody-div">
                        <ul>
                            <li><router-link to="/solution">二合一</router-link></li>
                            <li><router-link to="/solution">D33</router-link></li>
                            <li><router-link to="/solution">32</router-link></li>
                            <li><router-link to="/solution">Amd 520</router-link></li>
                            <li><router-link to="/solution">Ba1520</router-link></li>
                            <li><router-link to="/solution">Ds 2</router-link></li>
                        </ul>
                      </div>
                  </div>
                  </li>
                  <li @mousemove="listOnt(2)" @mouseout="listOnt1(2)" class="home-body-one">
                    <router-link to="/"><img src="img/SmallIcon/3.png">tan电脑</router-link>
                   <div id="homeBodyOneDiv2">
                     <div class="homeBody-div">
                       <ul>
                          <li><router-link to="/solution">aidf</router-link></li>
                          <li><router-link to="/solution">af7200</router-link></li>
                          <li><router-link to="/solution">bi200</router-link></li>
                          <li><router-link to="/solution">Y7100</router-link></li>
                       </ul>
                     </div>
                     <div class="homeBody-div">
                        <ul>
                        <li><router-link to="/solution">xo本</router-link></li>
                        <li><router-link to="/solution">mofeu</router-link></li>
                        <li><router-link to="/solution">AIddep3</router-link></li>
                        <li><router-link to="/solution">BU324</router-link></li>
                        <li><router-link to="/solution">bylong32</router-link></li>
                      </ul>
                     </div>
                      <div class="homeBody-div">
                        <ul>
                          <li><router-link to="/solution">cookle</router-link></li>
                          <li><router-link to="/solution">AJ7200A</router-link></li>
                          <li><router-link to="/solution">JA a8</router-link></li>
                          <li><router-link to="/solution">feifei8J</router-link></li>
                          <li><router-link to="/solution">Ja0</router-link></li> 
                          <li><router-link to="/solution">Y3Ja0</router-link></li> 
                      </ul> 
                     </div>
                      <div class="homeBody-div">
                        <ul>
                            <li><router-link to="/solution">b2</router-link></li>
                            <li><router-link to="/solution">D33</router-link></li>
                            <li><router-link to="/solution">32</router-link></li>
                            <li><router-link to="/solution">Amd 520</router-link></li>
                            <li><router-link to="/solution">Ba1520</router-link></li>
                            <li><router-link to="/solution">Ds 2</router-link></li>
                        </ul>
                      </div>
                  </div>   
                  </li>  
                  <li @mousemove="listOnt(3)" @mouseout="listOnt1(3)" class="home-body-one">
                    <router-link to="/"><img src="img/SmallIcon/3.png">手机通讯</router-link>
                    <div id="homeBodyOneDiv3">
                     <div class="homeBody-div">
                       <ul>
                          <li><router-link to="/solution">kkkk</router-link></li>
                          <li><router-link to="/solution">af7200</router-link></li>
                          <li><router-link to="/solution">bi200</router-link></li>
                          <li><router-link to="/solution">Y7100</router-link></li>
                       </ul>
                     </div>
                     <div class="homeBody-div">
                        <ul>
                        <li><router-link to="/solution">模本</router-link></li>
                        <li><router-link to="/solution">mofeu</router-link></li>
                        <li><router-link to="/solution">AIddep3</router-link></li>
                        <li><router-link to="/solution">BU324</router-link></li>
                        <li><router-link to="/solution">bylong32</router-link></li>
                      </ul>
                     </div>
                      <div class="homeBody-div">
                        <ul>
                          <li><router-link to="/solution">biye</router-link></li>
                          <li><router-link to="/solution">AJ7200A</router-link></li>
                          <li><router-link to="/solution">JA a8</router-link></li>
                          <li><router-link to="/solution">feifei8J</router-link></li>
                          <li><router-link to="/solution">Ja0</router-link></li> 
                          <li><router-link to="/solution">Y3Ja0</router-link></li> 
                      </ul> 
                     </div>
                      <div class="homeBody-div">
                        <ul>
                            <li><router-link to="/solution">nind</router-link></li>
                            <li><router-link to="/solution">df</router-link></li>
                            <li><router-link to="/solution">32</router-link></li>
                            <li><router-link to="/solution">Amd 520</router-link></li>
                            <li><router-link to="/solution">Ba1520</router-link></li>
                            <li><router-link to="/solution">Ds 2</router-link></li>
                        </ul>
                      </div>
                  </div> 
                  </li> 
                  <li class="home-body-one">
                     <router-link to="/solution"><img src="img/SmallIcon/3.png">智能产品</router-link>
                  </li> 
                  <li class="home-body-one">
                     <router-link to="/solution"><img src="img/SmallIcon/3.png">平板电脑</router-link>
                  </li> 
                  <li class="home-body-one">
                    <router-link to="/solution"><img src="img/SmallIcon/3.png">配备</router-link>
                  </li> 
             </ul>
        </li> 
        <li><div><router-link to="/solution">商用产品</router-link></div></li>
        <li><div><router-link to="/solution">数据中心</router-link></div></li>
        <li><div><router-link to="/solution">商城</router-link></div></li>
        <li><div><router-link to="/solution">服务</router-link></div></li>
      </ul>
      <ul class="smallnav">
         <li>
           <img src="img/SmallIcon/1.png">
           <router-link to="/loginOu">登录</router-link>
           <span>|</span>
           <router-link to="/login">注册</router-link>
           <img src="img/SmallIcon/2.png" @click="headerhome">  
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    data(){
      return {}
    },
    methods:{
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
     headerhome(){
        this.$router.push({path:'/cart'})
     }
    }
}
</script>
<style>
/* 总的样式*/
  #home {
    padding:0; margin:0;background: #ffffff;
  }
/* 头导航 左*/
     .home-header{
          display: flex;
          justify-content:space-between;
          height:55px;
          position: relative;     /*为下面的内容定位*/ 
      }
      .home-header ul:first-child{
        display:flex;
        flex-wrap:nowrap;
        list-style-type: none;
      }
      .home-header ul:first-child li:first-child~li{
        padding:20px 0 0 20px;
      }
      .home-header ul:first-child li img{/*图片*/
        width: auto;height: 55px;
      }
      .home-header ul:first-child a{   /*字体*/
          font-size: 16px;
          color: #121212;
          font-weight:700;
          text-decoration:none;
          margin-right:50px;
        }
/* 头导航 右*/
        .home-header ul.smallnav{
          margin:0;padding:0;
          list-style-type: none;
          margin:16px 0;
        }
        .home-header .smallnav img{
          cursor: pointer;
          width:25px;height:25px;
        }
      .home-header ul.smallnav a{
          font-size: 16px;
          color: #121212;
          font-weight:400;
          text-decoration:none;
          margin:2px 20px;
          line-height: 25px;
      }
/* 导航隐藏 */   
     .home-header #home-body-one{
         display: none;
         list-style-type: none;
         position: absolute;
         top:55px;
         left:0;
         z-index:200;
         width:100%;
         background:#eaeaea;
         padding:13px 0 20px 125px;
      }
     .home-header #home-body-one .home-body-one{
         padding:0;margin-right:40px;
         height:50px;
       }
       .home-header #home-body-one .home-body-one a:first-child:hover{
         border-bottom:1px solid #000000;
       }
     .home-header  #home-body-one a:first-child{
        text-decoration:none;
        color:#121212;
        margin:0 auto;
      }
     .home-header  #home-body-one img:first-child{
          width:30px;height:30px;
          vertical-align:middle
      }
/* 导航隐藏 中的隐藏 */
    #homeBodyOneDiv,#homeBodyOneDiv2,#homeBodyOneDiv3{
      position:absolute;
      width:100%;
     display: none;
      left:0;
      top:55px;background:#efeff4;
    }
    #homeBodyOneDiv div.homeBody-div,#homeBodyOneDiv2 div.homeBody-div,#homeBodyOneDiv3 div.homeBody-div{
        display:inline-flex;  
     list-style-type: none;
    }  
     #homeBodyOneDiv div.homeBody-div ul,#homeBodyOneDiv2 div.homeBody-div ul, #homeBodyOneDiv3 div.homeBody-div ul{
       display:block;
     }
     #homeBodyOneDiv ul li, #homeBodyOneDiv2 ul li, #homeBodyOneDiv3 ul li{
      padding:0;
      margin:10px 10px 10px 10rem;
     }
</style>