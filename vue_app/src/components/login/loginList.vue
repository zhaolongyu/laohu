<template>
  <div id="login">
     <!--headr--> 
		<div class="login-header-one">
			<ul>
			   <li><img src="img/SmallIcon/4.png"></li>
			   <li> <router-link to="/home">主页</router-link></li>
			   <li> <a href="#">咨询</a></li> 
			   <li> <a href="#">门店</a></li>
			   <li class="login-header-body-one"> <a href="#">会员中心有五亿豪礼任意领，立即查看</a></li>
			</ul>
				
		</div>
		<!--body-->

		<ul class="login-body-one">
		   <li> <h1>注册联想会员</h1></li>
		   <li> <h2>个人用户注册</h2></li>
		   <li> <input name="uname" v-model="uname" type="text"  placeholder="请输入账号6~12位"><p id="aaa1"></p></li>
		   <li> <input name="upwd" v-model="upwd"  type="password" placeholder="请输入密码"><p id="aaa2"></p></li>
		   <li> <button class="button-one" @click="loginList">登录</button></li>
		   <li> </li>
		   <li class="login-body-li-one"> 注册账号即表示您同意并愿意遵守联想 使用条款 和 隐私策略8</li>
		   <li >已有账号 点击登录</li>
		</ul>
  </div>
</template>
<script>
  import {Toast} from "mint-ui"
export default {
  data(){
    return {
		// 获取账号
       upwd:'',
	   uname:''
    }
  },       
  methods:{
   loginList(){
	//    获取账号  ps 转换格式
	var postData = this.qs.stringify({
             uname: this.uname,
			 upwd: this.upwd
        });
		if(this.uname==''){
			 Toast({message:"账号不能空",duration:800});
			return;
		}
		if(this.upwd==''){
		 Toast({message:"密码不能空",duration:800});
			return;
		}
		var reg = /^[a-z0-9]{6,12}$/i;
        if(!reg.test(this.uname)){
           Toast("用户名格式不正确，请检查");
           return;
        }
     var url = "http://127.0.0.1:3000/loginList"
     this.axios.post(url,postData).then(result=>{
               if(result.data.code ==1 ){
				    Toast({
						message:"注册成功",
						duration:800
					});
				   setTimeout(()=>{
                this.$router.push({path:'/loginou'})
				   },1000)
			   }
          })
      }
  }
}
</script>
<style>
     *{padding:0;margin:0;}
/*	 公共*/
 #login ul{
             margin-left: 0px;
			 list-style:none;
			 }
    /*头文件*/
	#login{
	 position:relative ;
	 height:700px;
	}
	  #login  .login-header-one{
	  	    height: 34px ;
			background: #444 ;
			min-width: 1200px;
			
	  }
	  #login  .login-header-one img{
	       width: auto;
           height: 40px;
	  }
      #login  .login-header-one  ul{
	         display: flex;
		  }
		  #login  .login-header-one  ul li{
		       padding-right:53px;
		   }
		 #login  .login-header-one a{
			   text-decoration:none;
			   color: #cacaca ;
			   font-size: 12px;
			   font-family: 微软雅黑;
	  	 }
		  #login  .login-header-one a:nth-child(2){
			   display:inline
		  }
		  #login  .login-header-body-one{
		         margin:0 auto;
		  }
/*		  body*/
         #login  .login-body-one{
		   position:absolute;
		   top:100px;
		   left:500px;
         
		  }
		  #login .login-body-one input{
		    width: 291px;
			border: 1px solid #d6d6d6;
			height: 48px;
			line-height: 48px;
			padding-left: 15px;
			font-size: 14px;
			color: #8c8c8c;
			margin-bottom: 14px;
			padding-right: 50px;
			}
         #login .login-body-one button {
			width: 358px;
			height: 50px;
			line-height: 50px;
			background-color: #e22319;
			font-size: 14px;
			color: #fff;
			border:0;}
			#login .login-body-one li {text-align: center;
			}
			#login .login-body-one li h1,#login .login-body-one li h2{
			        font-size: 30px;
					line-height: 30px;
					font-weight:400;
			 }
			#login .login-body-one li h2 {
			     margin-top: 38px;
                margin-bottom: 14px;	
				color: #424242;
				line-height: 22px;
				font-size: 20px;
               }
         #login .login-body-one  .login-body-li-one{
			 line-height: 24px;
				font-size: 14px;
			color: #757575;
			margin-top:17px;
		 }
		 #login .login-body-one  .login-body-li-one+li{
			text-align:right;
			font-size: 14px;
			margin-top: 5px;
		 }
</style>