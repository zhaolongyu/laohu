<template>
    <div id="loginOu">
           <ul class="loginOu-body-one">
		   <li> <h1>登录联想会员</h1></li>
		   <li> <input type="text" v-model="lname" placeholder="请输入账号"></li>
		   <li> <input type="password" v-model="lupwd" placeholder="请输入密码"></li>
		   <li> <button class="button-one" @click="loginMe">登录</button></li>
		   <li><router-link to="/login">立即注册</router-link></li>
		</ul>
        <p id="a111"></p>
	 </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return {
          lname:"",
          lupwd:""
        }
    },
    methods:{
        loginMe(){
           var  url = "http://127.0.0.1:3000/loginOu?uname="+this.lname+"&upwd="+this.lupwd
            this.axios.get(url).then(res=>{
               if(res.data.code==1){
                    if(confirm('直接跳转吗？'))
                    this.$router.push({path:'/home'})
               }else{
                 alert("登录失败")
               }
            })
        }
    }
}
</script>
<style>
     
       #loginOu ul{
             margin-left: 0px;
			 list-style:none;
			 }
  body{background:gray}
      #loginOu{
	    position: fixed;
		width: 450px;
		height: 400px;
		padding: 0 125px;
		left: 50%;
		top: 90px;
		margin-left: -290px;
		z-index: 10000100;
		background: #fff;
	}
	 #loginOu  .loginOu-body-one{
		   position:absolute;
		   top:50px;
		   left:45px;
		  }
           #loginOu  .loginOu-body-one li{
               margin:10px;
           }
		  #loginOu .loginOu-body-one input{
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
         #loginOu .loginOu-body-one button{
			width: 358px;
			height: 50px;
			line-height: 50px;
			background-color: #e22319;
			font-size: 14px;
			color: #fff;
			border:0;}
			#loginOu .loginOu-body-one li {
		   text-align: center;
			}
			#loginOu .loginOu-body-one li h1{
			        font-size: 30px;
					line-height: 30px;
					font-weight:400;
			 }
			 #loginOu .loginOu-body-one li:last-child{
		      text-align:right;
			  margin-top:5px;
			 }
              #loginOu .loginOu-body-one li:last-child a{	       
                color:#000;
			 }
  </style>
</style>