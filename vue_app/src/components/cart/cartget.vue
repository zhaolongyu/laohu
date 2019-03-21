<template>
  <div id="cartget">
     <!--导航-->
     <div class="cartgetheader">  
            <router-link to="">返回首页</router-link>
            <router-link to="">登录</router-link>
     </div>
      <!--cartGetBody  主体-->
     <div class="cartGetBody">
       <!--cartGetBodyTop-->
           <table>
            <thead>
                <tr>
                <td>
                  <tr>
                    <td colspan="2"><input type="checkbox"></td>
                    <th>商品</th>
                    <th>规格</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>金额</th>
                    <th>操作</th>
                  </tr>
                </td>
                   
                </tr>
            </thead>
            <tbody>
                <tr class="cartGetBodyYi" v-for="item of list">
                  <!--  <td><input type="checkbox"></td>
                    <td style="width:150px;"><img :src="item.sm"></td>
                    <td style="width:150px;">              
                        <span class="cartGetBodyEr">{{item.title}}</span>
                    </td>
                    <td> </td>
                    <td>{{item.price}}</td>
                    <td>
                       <end-tab @add="add_list"></end-tab>
                    </td>
                       <td>{{count}}</td>
                    <td><button>删除</button></td>-->
                    <end-tab :list="item" @add="add_list"></end-tab>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                  <td>
                     <tr>
                        <td colspan="7"><input type="checkbox">商品1</td>
                        <td>合计：<i>{{count*list.pirce}}</i></td>
                     </tr>
                  </td>
                   
                </tr>
                 <tr>

                   <td>
                     <tr>
                         <td colspan="8" align="right"><button>购买</button></td>
                     </tr>
                   </td>
                   
                 </tr>
            </tfoot>
             
           </table>
     </div>
                     
     <!--结尾引入-->
     <div></div>
    
  </div>
</template>

<script>
 import endTab from "../src/end222.vue"

export default {
    data:function(){
        return {
           list:[],
           count:0,
        }
    },
    methods:{
        cartList(){
            var url = "http://127.0.0.1:3000/cartIconlist"
             this.axios.get(url).then(res=>{
                 if(res.data.code){alert("请登录");return}
                 this.list = res.data
             })
       },
          add_list(i){
             this.count = i    
         },
    },
    created(){
        this.cartList()
    },
    // computed:{
    //      a(){
    //          var sum=0;
    //                 for(var p of this.list){
    //                     sum+=p.price*this.count;
    //                 }
    //                 return sum;
    //                 }
    //  },
      components:{
      "end-tab":endTab,
    }

}
</script>
<style>
/*  <!--导航-->*/
  #cartget>.cartgetheader{
      float:right;
  }
   /*  浮动影响*/  
   #cartget>.cartGetBody::before{
    content:"";
    display:block;clear:both;
   }
/*  <!--cartGetBody  主体-->*/
   #cartget>.cartGetBody table{
        margin:50px 0 10px 9rem;
        width: 80%;
        border: 1px solid #d9d8d6;
        border-bottom: 0;
    }
  #cartget>.cartGetBody thead{
        margin-bottom:20px;
    }
   #cartget>.cartGetBody td,th{
      padding:10px;
    }
     #cartget>.cartGetBody th,tr{
         border-bottom: 1px solid #d9d8d6;
         height: 36px;
         font-weight: normal;
         font-size: 15px;
         background: #f8f8f8;}
          #cartget>.cartGetBody .cartGetBodyYi>td+td{
             text-align:center;
          }
      #cartget>.cartGetBody img{
           height: 115px;
           width: 115px;}
      #cartget>.cartGetBody .cartGetBodyEr{
         border:1px solid red;display:block;
    } /* */
</style>