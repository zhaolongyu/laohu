<template>
    <div id="Solution">
<!--header  -->
        <div class="SolutionOne">
		   <div class="SolutionOneHead">
				 <ul>
				      <li>
						    <router-link to=""><img src="img/SmallIcon/1.jpg" class="SolutionOneHeadImg"></router-link></li>
					  <li>
					       <router-link to="">解决方案</router-link>	</li>
					  <li>
					       <router-link to="">产品</router-link>	</li>
					  <li>
					       <router-link to="">服务和支持</router-link></li>	
					  <li>
					       <router-link to="">合作伙伴</router-link>	</li>
					<li class="SolutionOneHeadLi">
					       手机专线 <span>400 819 6776</span>座机专线<span>800 830 6776</span></li>
				 </ul>
		   </div>
		</div>
<!--  轮播1-->
		<div class="SolutionTwo">
           <!-- 图片 -->
		   <div class="SolutionTwoImg">
		       <img id="SolutionTwoImg" src="img/mglist/1.jpg" >
			</div >
		   <!-- 箭头 -->
			<div class="SolutionTwoIonLeft" @click="IonLeft(1)"></div>
            <div class="SolutionTwoIonRight" @click="IonLeft(-1)"></div>
  <!-- 			<! 最下导航 --> 
  <!-- 			<div class="SolutionTwoNav"> -->
  <!-- 			    <div></div> -->
  <!-- 				<div></div> -->
  <!-- 				<div></div> -->
  <!-- 				<div></div> -->
  <!-- 			</div>  -->
		</div>
<!-- 我们提供什么 -->
		<div class="SolutionThree">
		    <h1 style="text-align:center;">我们提供什么</h1>
			<div class="SolutionThreeBigDiv">
		       <div class="SolutionThreeDiv">
			       <img src="img/md/1.jpg">
				   <div>
					   <div>
							<p style="font-size:24px;">解决方案</p>
							<p  style="text-align:left;">通过简单的部署来优化弹性、性能和总体拥有成本（TCO），加速获得商业优势。</p>
					   </div>
					   <div>
							<p>加载更多</p>
							<img src="img/SmallIcon/5.png" id="SolutionThreeHS" @click="HS(1)">
							<div id="SolutionThreeHidden">
							    <div class="SolutionThreeHiddenOne">
								   <img src="img/md/4.jpg">
								   <div>
									   <p>云计算</p>
									   <p>联想企业级云方案提供高可靠，弹性伸缩的云计算环境，提高IT资源利用率，降低成本，促进科技创新。</p>
									</div>
								</div>
								<div class="SolutionThreeHiddenOne">
								   <img src="img/md/5.jpg">
								   <div>
									   <p>云计算</p>
									   <p>联想企业级云方案提供高可靠，弹性伸缩的云计算环境，提高IT资源利用率，降低成本，促进科技创新。</p>
									</div>
								</div>
							</div>
					   </div>
				   </div>
			   </div>
	           <div class="SolutionThreeDiv">
			       <img src="img/md/2.jpg">
				     <div>
					   <div>
							<p style="font-size:24px;">产品</p>
							<p  style="text-align:left;">完整的产品系列，包括服务器、存储、网络、融合架构、软件及选件。</p>
					   </div>
					   <div>
							<p>加载更多</p>
							<img  src="img/SmallIcon/5.png" @click="HS(2)">
							<div id="SolutionThreeHidden2">
							    <div class="SolutionThreeHiddenOne">
								   <img src="img/md/6.jpg">
								   <div>
									   <p>云计算</p>
									   <p>联想企业级云方案提供高可靠，弹性伸缩的云计算环境，提高IT资源利用率，降低成本，促进科技创新。</p>
									</div>
								</div>
								<div class="SolutionThreeHiddenOne">
								   <img src="img/md/5.jpg">
								   <div>
									   <p>云计算</p>
									   <p>联想企业级云方案提供高可靠，弹性伸缩的云计算环境，提高IT资源利用率，降低成本，促进科技创新。</p>
									</div>
								</div>
							</div>
					   </div>
				   </div>
			   </div>
               <div class="SolutionThreeDiv">
			       <img src="img/md/3.jpg">
				     <div>
					   <div>
							<p style="font-size:24px;">服务与支持</p>
							<p  style="text-align:left;">为客户提供IT基础架构的全生命周期技术服务。从评估与规划设计，到交付和运维服务，同时面向快速变化的业务应用需求，提供优化和资产管理等服务。</p>
					   </div>
					   <div>
							<p>加载更多</p>
							<img  src="img/SmallIcon/5.png" alt>
							<div></div>
					   </div>
				   </div>
			   </div>
			</div>
		</div>
<!--  tup-->
		<div class="SolutionOneFour">
		   <img src="img/mglist/5.jpg" alt="">
		   <ul>
		      <li>手机：<span>158468621</span></li>
			  <li>座机：<span>186444444</span></li>
			  <li>在线</li>
		   </ul>
		</div>
<!-- 联想趋势分析 -->
		<div class="SolutionOneFive">
		     <div class="FiveLeft">
			     <img src="img/md/7.jpg">	
				 <div>
				     <span>联想问鼎HPC TOP500榜单全球第一
                     成为全球最大超算平台提供商</span>
				 </div>
             </div>
			 <div class="FiveRight">
					 <div>
						 <img src="img/md/7-1.jpg">
						 <span>创新升级引领变革 联想 ThinkSystem 助力互联网企业拥抱</span>
					 </div>
					 <div><img src="img/md/7-2.jpg">
						 <span>生态领域成绩卓越 联想荣获中国IT生态20年 贡献奖</span>
					 </div>
					 <div><img src="img/md/7-3.jpg">
						 <span>智慧公安 | 人工智能时代的警务模式</span>
					 </div>
             </div>
			 <div></div>
		</div>	
		
<!--  footer-->
   
		<div class="SolutionOneSix">
		   <p>版权所有：1998-2018 联想集团 |法律公告 |隐私保护 |产品安全 <span>京ICP备11035381 |京公网安备110108007970号 |营业执照：110000410127232</span></p>	
		   <p>Ultrabook、赛扬、Celeron Inside、Core Inside、英特尔、英特尔标志、英特尔凌动、Intel Atom Inside、英特尔酷睿、Intel Inside、Intel Inside 标志、英特尔博锐、安腾、Itanium Inside、奔腾、Pentium Inside、vPro Inside、至强、至强融核、Xeon Inside 和英特尔傲腾是英特尔公司或其子公司在美国和/或其他国家（地区）的商标。</p>
		</div>
<!--  固定定位-->
</div>
</template>
<script>
export default {
    data(){
        return {
        }
    },
    created(){
	   setTimeout(()=>{this.SolutionSTwoSImg()},100)
    },
    methods:{
        SolutionSTwoSImg(){
          var SolutionTwoImg = 
		  document.getElementById("SolutionTwoImg");
           var i=0;
	      setInterval(function(){
		        i++;	
	      SolutionTwoImg.setAttribute("src","img/mglist/"+i+".jpg")
		  //   SolutionTwoImg.src=i+".jpg"
	          if(i==4){i=0}
	      },2000);
        },
       //	   点击箭头
	  IonLeft(e){
			var SolutionTwoImg = 
		   document.getElementById("SolutionTwoImg");
		    var s = parseInt((SolutionTwoImg.src).slice(-5,-4));
			if(e==1)
			  SolutionTwoImg.setAttribute("src","img/mglist/"+(s==1?4:s-1)+".jpg")
			 if(e==-1)
			  SolutionTwoImg.setAttribute("src","img/mglist/"+(s==4?1:s+1)+".jpg")	
		},
  //		 隐藏
    HS(e){ 
            if(e==1){
            if(SolutionThreeHidden.style.display=="flex"){
                SolutionThreeHidden.style.display="none"
            }else{SolutionThreeHidden.style.display="flex"}}
            if(e==2){
            if(SolutionThreeHidden2.style.display=="flex"){
                SolutionThreeHidden2.style.display="none"
            }else{SolutionThreeHidden2.style.display="flex"}
			}
        }
    }
}
</script>
<style>
   body{
      margin:0 ;padding:0;
	  width:100%;
   }
     #Solution>.SolutionOne>.SolutionOneHead>ul{
	   display:flex;
	   list-style-type:none;
	   padding:0;margin:0;
	 }
	 #Solution>.SolutionOne>.SolutionOneHead>ul>li+li{
       margin-left:60px;margin-top:25px;
	 }
   #Solution>.SolutionOne>.SolutionOneHead>ul .SolutionOneHeadImg{
	   width:30px;
	 }
  #Solution>.SolutionOne>.SolutionOneHead>ul .SolutionOneHeadLi{
      margin-left:276px;
	      font-size: 12px;
			color: #888888;
  }
	#Solution>.SolutionOne>.SolutionOneHead>ul .SolutionOneHeadLi>span{
		  color:red;margin-right:20px;
	  }
/*轮播图*/
	#Solution>.SolutionTwo{
	  position:relative;
	}
	#Solution>.SolutionTwo #SolutionTwoImg{
	  width:100%; height:400px;
	}
/*箭头*/
	#Solution>.SolutionTwo>.SolutionTwoIonLeft{
			 border:1px solid red;
			position:absolute;z-index:999;
			 width:40px; height:40px;
			 top:192px;  left:120px;
	   }
	#Solution>.SolutionTwo>.SolutionTwoIonRight{
         border:1px solid red;
		 position:absolute;z-index:999;
		 width:40px; height:40px;
		 top:192px;  right:120px;
   }
/*我们提供什么*/
	#Solution>.SolutionThree>.SolutionThreeBigDiv{
		display:flex;
		margin:45px 30px 0 50px;
	}
	#Solution>.SolutionThree>.SolutionThreeBigDiv>.SolutionThreeDiv{
		 padding:10px;position:relative;
	}
	#Solution>.SolutionThree>.SolutionThreeBigDiv>.SolutionThreeDiv>img{
		 width:400px;
	}
/*我们提供的隐藏*/
	#Solution #SolutionThreeHidden,#SolutionThreeHidden2{
	   position:absolute;
	   top:415px;left:-52px;margin:0;padding:0;
	   background:#161616;
	   width:1350px;display:none;
	}
	#SolutionThreeHidden2{
		left:-471px
	 }
	#Solution #SolutionThreeHidden>div.SolutionThreeHiddenOne,#Solution #SolutionThreeHidden2>div.SolutionThreeHiddenOne{
	  margin-top:50px;width:320px;padding:20px;
	}
	#Solution #SolutionThreeHidden>div.SolutionThreeHiddenOne>img,
	#Solution #SolutionThreeHidden2>div.SolutionThreeHiddenOne>img{
	  width:100%;
	}
	#Solution #SolutionThreeHidden>div.SolutionThreeHiddenOne>div>p,
	#Solution #SolutionThreeHidden2>div.SolutionThreeHiddenOne>div>p{ 
		font-size: .2em;
		color: #ffffff;
		height: 6em;
		}
/*tup*/
	#Solution>.SolutionOneFour>img{
	   width:100%;
	}
	#Solution>.SolutionOneFour>ul{
	   list-style-type:none;
	   display:flex;
	   margin-left:10%;
       margin-top:30px;
       margin-bottom:20px;
	}
	#Solution>.SolutionOneFour>ul>li{
	  padding-left:100px;
	  font-size:32px;
	}
	#Solution>.SolutionOneFour>ul>li>span{
		color: red;
		}
/*联想趋势分析*/
	#Solution>.SolutionOneFive{
		   position:relative;
		   height:490px;
		}
   /* 左  */
	
	#Solution>.SolutionOneFive>.FiveLeft{
		 position:absolute;top:16px;left:66px;
	}
	#Solution>.SolutionOneFive>.FiveLeft>img{
	  width:660px;height:418px;
	}
	#Solution>.SolutionOneFive>.FiveLeft>div{
	   position:absolute;top:318px;left:0px;
	   background: rgba(0,0,0,0.6);width:660px ;height:100px;
	}
	#Solution>.SolutionOneFive>.FiveLeft>div>span{
		width: 67%;
		display: -webkit-box;
		font-size: 23px;
		color: #ffffff; 
	}
   /*右*/
		  #Solution>.SolutionOneFive>.FiveRight{ 
		   position:absolute;top:12px;right:100px;
		  }
		#Solution>.SolutionOneFive>.FiveRight>div{
			width:490px;display:flex;
		  }
		#Solution>.SolutionOneFive>.FiveRight>div>img{
			width:50%;height:130px;
			margin:5px;
		  }
	@media screen and (max-width:1200px){
         #Solution{
		 width:1200px;}
     }
 
/*footer*/
#Solution>.SolutionOneSix{
   text-align:center;
   background:#f5f5f5;
   height:100px;
   padding-top:12px
}
#Solution>.SolutionOneSix>p{
   font-size: 12px;
    color: #757575;  
}
#Solution>.SolutionOneSix>p>span{
   margin-left:20px;
}
  </style>