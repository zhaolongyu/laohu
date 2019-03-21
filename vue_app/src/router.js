import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Exam01 from "./components/Exam01.vue";
 import home from "./components/home/Home.vue"
 import login from "./components/login/loginList.vue"
 import loginOu from "./components/login/loginou.vue"
 import solution from "./components/solution/solution.vue"
 import cart from "./components/cart/cart.vue"
 import cartlist from "./components/cart/cartList.vue"
 import cartget from "./components/cart/cartget.vue"
 import end22 from "./components/src/end222.vue"
 import nnn from "./components/cart/123.vue"


Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',redirect:"/home"},
     {path:'/Exam01',component:Exam01},
     {path:'/Home',component:home},
     {path:'/login',component:login},
     {path:'/loginOu',component:loginOu},
     {path:'/solution',component:solution},
     {path:'/cart',component:cart},
     {path:'/cartlist/:lid',component:cartlist},
     {path:'/cartget',component:cartget},
     {path:'/nnnn',component:nnn},

  ]
});