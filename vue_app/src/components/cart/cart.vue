<template>
   <div id="cart">
    <!--3.引入子组件heaer 
        <header-ber></header-ber>
      3.引入子组件轮播
       <tab-ber></tab-ber>-->
    <!--header 头导航--> 
      <div class="headerTop" >
       <!--header 头导航 上--> 
         <div class="headerTopOne">
            <div class="headerTopOneYi"><img src="img/SmallIcon/7.jpg"></div>
            <div id="headerTopOneE">
                <ul>
                    <li><router-link to="">联想首页</router-link></li>
                    <li><router-link to="">商城</router-link></li>
                    <li><router-link to="">社区</router-link></li>
                    <li><router-link to="">门店</router-link></li>
                    <li><router-link to="">资讯</router-link></li>
                </ul> 
            </div>
            <div class="headerTopOneSan">
              <ul>
                <li>
                   <router-link to="/">注册</router-link>
                   <span>|</span>
                   <router-link to=""> 登录</router-link>
                </li>
                <li><img src="img/SmallIcon/8.png" alt=""></li>
              </ul>
            </div>
         </div>
         <table></table>
         <div style="margin-top:51px;"></div>
       <!--header 头导航 下--> 
         <div class="headerTopTwo" id="headerTopTwo">
            <div class="headerTopTwoLt">
                <ul>
                    <li><router-link to="">私人定制</router-link></li>
                    <li><router-link to="">极速到家</router-link></li>
                    <li><router-link to="">合伙人</router-link></li>
                    <li><router-link to="">0元试用</router-link></li>
                    <li><router-link to="">企业采购</router-link></li>
                    <li><router-link to="">兑换中心</router-link></li>
                </ul>
            </div>
            <div class="headerTopTwoRg">
               <input type="text" placeholder="Search W3School">
            </div>
         </div>
      </div>
    <!--tab 搜索框 全部结果--> 
      <div class="cartTab">
         <div class="cartTabOneS">
            <div>全部结果：</div>
         </div>
         <div>
            <div>
            <ul>
                <li class="cartTabTitle"><router-link to="">笔记本</router-link></li>
                <li><router-link to="">Lenovo</router-link></li>
                <li><router-link to="">ThinkPad</router-link></li>
            </ul>
            </div>
            <div>
            <ul>
                <li class="cartTabTitle"><router-link to="">cpu型号</router-link></li>
                <li><router-link to="">intel i3</router-link></li>
                <li><router-link to="">intel i5</router-link></li>
                <li><router-link to="">intel i7</router-link></li>
            </ul>
            </div>
            <div>
            <ul>
                <li class="cartTabTitle"><router-link to="">内存容量</router-link></li>
                <li><router-link to="">4G</router-link></li>
                <li><router-link to="">8G</router-link></li>
                <li><router-link to="">16G</router-link></li>
            </ul>
            </div>
            <div>
            <ul>
                <li class="cartTabTitle"><router-link to="">硬盘容量</router-link></li>
                <li><router-link to="">i3</router-link></li>
                <li><router-link to="">2</router-link></li>
                <li><router-link to="">5</router-link></li>
                <li><router-link to="">7</router-link></li>
            </ul>
            </div>
         </div>
      </div>
    <!--bodyDiv 主体-->  
      <div class="bodyDiv">
        <!-- 主体 上推荐-->  
         <div class="bodyDivOne">
            <ul>
              <li>推荐</li>
              <li>新品</li>
              <li>价格</li>
              <li>有库存</li>
              <li class="bodyDivLiYi">
                 <input type="text" placeholder="￥">
                 <span>-</span>
                 <input type="text" placeholder="￥">
                 <input type="text" placeholder="结果搜索">
                 <button>确定</button>
              </li>
            </ul>
            <ul>
              <li><input type="checkbox">极速到家</li>
              <li><input type="checkbox">私人定制</li>
              <li><input type="checkbox">分期付款</li>
              <li><input type="checkbox">以旧换新</li>
            </ul>
         </div>
        <!-- 主体 中  body图片-->  
         <div class="bodyDivOTwo">
            <ul id="bodyUl" >
               <li v-for="item in list"   :key="item.id">
                  <img @click="onClicka" :data-lid="item.lid" class="bodyDivimgYi" :src="item.imgUrl">
                  <div><img  class="bodyDivimgRe"  src="img/body/1-5.png"><span class="taocan">套餐</span></div>
                  <div><span class="bodyDivSSn">{{item.title}} 潮7000 14.0英寸轻薄笔记本 极光银</span></div>
                  <div class="bodyDivDSi">{{item.zname}} 家庭中文版/14.0英寸/4GB+4GB/1T+128G SSD/Radeon 535 2GB独显/极光银</div>
                  <div class="bodyDivDWu">{{item.price | dateFilter}}</div>
               </li>
            </ul>
         </div>
        <!-- 主体 下 选择框12345-->  
         <div class="bodyDivThree">
           <ul>
             <li @click="bodyDivLoading(2)">上一页</li>
             <li @click="bodyDivLoading(1)">下一页</li>
           </ul>
         </div>
      </div>
    <!--footerTOP 结尾--> 
      <div class="footerTOP">
         <img src="img/SmallIcon/9.jpg">
         <div>
            <ul>
              <li><router-link to="" class="footerTOPTe">购物指南</router-link></li>
              <li><router-link to="">服务商信息</router-link></li>
              <li><router-link to="">购买流程</router-link></li>
              <li><router-link to="">注册登录</router-link></li>
            </ul>
            <ul>
              <li><router-link to="" class="footerTOPTe">配送方式</router-link></li>
              <li><router-link to="">配送方式</router-link></li>
              <li><router-link to="">配送方式信息</router-link></li>
              <li><router-link to="">签收原则</router-link></li>
              <li><router-link to="">物流查询</router-link></li>
            </ul>
            <ul>
              <li><router-link to="" class="footerTOPTe">支付方式</router-link></li>
              <li><router-link to="">分期支付</router-link></li>
              <li><router-link to="">支付方式</router-link></li>
              <li><router-link to="">支付问题</router-link></li>
            </ul>
            <ul>
              <li><router-link to="" class="footerTOPTe">售后服务</router-link></li>
              <li><router-link to="">售后服务总则</router-link></li>
              <li><router-link to="">24小时在线客服</router-link></li>
              <li><router-link to="">手机激活查询</router-link></li>
            </ul>
            <ul>
              <li><router-link to="" class="footerTOPTe">其他说明</router-link></li>
              <li><router-link to="">服务承诺</router-link></li>
              <li><router-link to="">账户安全</router-link></li>
              <li><router-link to="">手机产品购买须知</router-link></li>
              <li><router-link to="">环境信息</router-link></li>
            </ul>
         </div>
      </div>
    <!--footerBottom 结尾-->   
      <div>
         <end-ber></end-ber>
      </div>
   </div>
</template>
<style>
*{padding:0;margin:0;}
/*  <!--footerTOP 结尾--> */ 
    #cart>.footerTOP>div{display:flex;justify-content:space-around;}
    #cart>.footerTOP>img{padding-Top:60px;width:100%}
    #cart>.footerTOP>div>ul{list-style-type:none;padding-top:10px;}
    #cart>.footerTOP>div>ul>li{padding-top:7px;}
    #cart>.footerTOP>div>ul>li>a{color: #555;
        font-size: 12px;}
    #cart>.footerTOP>div>ul>li>a.footerTOPTe{font-size: 14px;
        color:#000;}
/*<!--bodyDiv 主体-->  */ 
  /* <!-- 主体 上推荐--> */ 
    #cart>.bodyDiv{background:#f5f5f5}
    #cart>.bodyDiv>.bodyDivOne{
        display:flex;
    justify-content:space-around;padding:40px 0 30px 0;}
    #cart>.bodyDiv>.bodyDivOne>ul{display:flex;list-style-type:none;}
    #cart>.bodyDiv>.bodyDivOne>ul>li{
        margin-right:10px;
    }
    #cart>.bodyDiv>.bodyDivOne>ul>li.bodyDivLiYi>input{
        width: 80px;height: 30px;margin:0 10px; 
        padding: 0 5px;  font-weight: normal; font-size:12px;
        border-radius: 2px; }
    #cart>.bodyDiv>.bodyDivOne>ul>li.bodyDivLiYi>button{
        width:100px; height:30px;background:#ccc;
    }
  /*  <!-- 主体 中  body图片-->   */ 
     #cart>.bodyDiv>.bodyDivOTwo>ul{display:flex;list-style-type:none;
     margin-left:80px;flex-wrap:wrap;}
     #cart>.bodyDiv>.bodyDivOTwo>ul>li{width:250px;margin-right:60px;margin-top:20px;}
        /*主体 中 里面的二个图片的*/  
     #cart>.bodyDiv>.bodyDivOTwo>ul img.bodyDivimgYi{width:180px;height:180px;margin:0 auto;display:table-cell;border-radius:5%;}
     #cart>.bodyDiv>.bodyDivOTwo>ul img.bodyDivimgRe{width:30px;height:30px;border:1px solid #000000;border-radius:50%;margin:15px 97px 11px 36px;vertical-align:middle;background:yellow;}
        /*主体 中 里面的文字的*/  
      #cart>.bodyDiv>.bodyDivOTwo>ul .taocan{ border:1px solid red; font-size: 14px;background-color: #ee5cf1; }
      #cart>.bodyDiv>.bodyDivOTwo>ul .bodyDivSSn{color: #424242;font-size: 12px;border:1px solid red;}
      #cart>.bodyDiv>.bodyDivOTwo>ul .bodyDivDSi{color:#cfcfcf; font-size: 14px;}
      #cart>.bodyDiv>.bodyDivOTwo>ul .bodyDivDWu{ font-size: 14px;
    font-weight: bold;color: #2d2d2d;}
  /*  <!-- 主体 下 选择框12345-->   */ 
      #cart>.bodyDiv>.bodyDivThree>ul{
      list-style-type:none;display:flex;width:100%;justify-content:center;
     } 
       #cart>.bodyDiv>.bodyDivThree>ul>li{padding:20px; font-size:32px;margin-left:30px;background:#ccc;border-radius:5%;}
/*header 头导航*/
        .headerTop>.headerTopOne{width:100%;position:fixed;z-index:555}
        .headerTop>.headerTopOne>#headerTopOneE>ul,.headerTop>.headerTopOne>.headerTopOneSan>ul{
            list-style-type:none;display:flex;margin-top:15px; }
        .headerTop>.headerTopOne>.headerTopOneYi,.headerTop>.headerTopOne>#headerTopOneE,.headerTop>.headerTopTwo>.headerTopTwoLt,.headerTop>.headerTopTwo>.headerTopTwoRg{ float:left;}
    /*一层中间*/ 
        .headerTop>.headerTopOne>#headerTopOneE{
            width:60%;
        }
        .headerTop>.headerTopOne>#headerTopOneE>ul{
            justify-content:space-around;
        }
        .headerTop>.headerTopOne>#headerTopOneE>ul>li>a{
            color:#8d8d8d;font-size: 15px;
        }
    /*一层右*/ 
        .headerTop>.headerTopOne>.headerTopOneSan{
            float:right;padding-right:40px;
        }
        .headerTop>.headerTopOne>.headerTopOneSan>ul>li>a{
            font-size: 12px;margin-right:20px;
            color:#000000;
            font-family: "微软雅黑";}
    /*二层*/ 
        .headerTop>.headerTopTwo::after{ content:"";display:block;clear:both}
        .headerTop>.headerTopTwo{
            background:#e0e0e0;padding-left:50px;
        }
        .headerTop>.headerTopTwo>.headerTopTwoLt>ul{
            display:flex; list-style-type:none;
            margin-top:14px;
        }
        .headerTop>.headerTopTwo>.headerTopTwoLt>ul>li{
            padding-left:45px;
        }
        .headerTop>.headerTopTwo>.headerTopTwoLt>ul>li>a{
            font-size: 17px;color: #3a3a3a; font-weight: 550;
        }
        /*加这个  固定*/
         .headerTopTwoFixed{position:fixed;width:100%;top:0px;}
        /*input*/    
        .headerTop>.headerTopTwo>.headerTopTwoRg>input{
                width: 310px; margin-left:130px;margin-top:9px;
                height: 36px; font-size: 12px; border: 0; color: #999;
                border-top-left-radius:50px; border-top-right-radius:50px;
                border-bottom-left-radius:50px; border-bottom-right-radius:50px;
        }
/*tab 搜索框 全部结果 */ 
  #cart>.cartTab>.cartTabOneS{
      color: #333;font-size: 12px;background:#f5f5f5;padding:10px 0px 10px 90px;width:100%;font-family: "微软雅黑";
  }
  #cart>.cartTab>div{width:1200px;margin:0 auto;}
  #cart>.cartTab>div>div>ul{
      list-style-type:none;display:flex;border-bottom:1px solid gray;
  }
  #cart>.cartTab>div>div>ul>li{margin:0 0 0 90px;padding-top:20px;}
  #cart>.cartTab>div>div>ul>li>a{ margin:5px;
    color: #000000;  font-weight: bold;  
    text-align: left;  padding-left: 10px; float: left;
    font-size: 13px;}
   #cart>.cartTab>div>div>ul>li.cartTabTitle{
        margin:0px; color: #000000; font-weight: bold;
        text-align: left; padding-left: 10px; font-size: 13px;
   }
/*媒体*/ 
   @media screen and (max-width:1340px){
      /* 头导航 */
      #cart,.headerTop,.headerTop>.headerTopOne{
       width:1340px;
      }
    }     
</style>
<script>
//1. 引入子组件轮播
import tabBer from "../src/tabber.vue"
 import headerBer from "../src/header.vue"
 import end from "../src/end.vue"
export default {
    data(){
        return {
             list:[],
             npm:1,
             pno:1,     //当前页码
             pageSize:8  //当前数量
        }
    },
    methods:{
      cartBodyDiv(){
                var urljson = "http://127.0.0.1:3000/HomeImg";
                this.axios.get(urljson).then(res=>{
                     this.list = res.data.data;  
                    //  console.log(this.list)
              }) 
      },
      bodyDivLoading(e){
          if(e==1)
        this.pno++;
          if(e==2)
        this.pno--;
       if(this.pno==0){this.pno=1};
       if(this.list.length<8){this.pno=1;}
        var url = "http://127.0.0.1:3000/HomeImg?pno="+this.pno+"&pageSize="+this.pageSize;
        this.axios.get(url).then(result=>{
             this.list = result.data.data;
        });
       },
       onClicka(e){
          var lid = e.target.dataset.lid
          this.$router.push("/cartlist/"+lid);
       }
    },
    created(){
        // 这个是header 头 导航隐藏
       window.onscroll = function(){
           var headerTopOneE = document.getElementById("headerTopOneE")
           var s=document.body.scrollTop
                ||document.documentElement.scrollTop
                if(s>=55){headerTopOneE.style.display="none";
                      headerTopTwo.className="headerTopTwoFixed headerTopTwo"
                }else{
                      headerTopOneE.style.display="block";
                      headerTopTwo.className="headerTopTwo"
                }
         }
        //  主体里面的数据
        this.cartBodyDiv();

    },
     watch:{
         npm:{
              handler: function (nl){console.log(nl)}
          }
    },
     components:{
        //  2.注册子组件轮播
      "tab-ber":tabBer,
      "header-ber":headerBer,
      "end-ber":end,
    }
}
</script>
