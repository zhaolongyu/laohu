import Vue from 'vue'
import App from './App.vue'
import router from './router'
//vue_app_00 main.js
//0.1:引入Vuex
import Vuex from "vuex"
//0.2:注册Vuex组件
Vue.use(Vuex) 

//页面不在顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

//1:引入mint-ui 样式文件
import'mint-ui/lib/style.css'
Vue.config.productionTip = false
//2:引入 mui库样式文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//3:引入mint-ui 组件 Header
import {Header,Swipe,SwipeItem,Button} from "mint-ui"
//4:注册Header组件
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);
//5:引入 axios库
import axios from "axios"
//6:配置跨域访问保存session
axios.defaults.withCredentials=true;
//7:将axios库配置Vue实例对象中
Vue.prototype.axios = axios;
//7.1:加载第三方模块  qs
import qs  from "qs";
//7.2:配置qs模块，qs成功Vue属性
Vue.prototype.qs = qs;

// 过滤器 过滤钱小数点后2位
Vue.filter("dateFilter",function(value){
  let realVal = parseInt(value).toFixed(2)
    return "￥"+realVal;
})



new Vue({
  router,
  render: h => h(App),
 
}).$mount('#app')
