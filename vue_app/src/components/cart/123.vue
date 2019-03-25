<template>
  <div id="cartget">
     <!--导航-->
    
      <!--cartGetBody  主体-->
     <div class="cartGetBody">
       <!--cartGetBodyTop-->
           <table>
           
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
                <tr>
                 <td>合计：<i>{{count}}</i></td>
                 </tr>
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
                //  console.log(this.list)
             })
       },
          add_list(i){
              console.log(i)
               var sum=0;
                    for(var p of this.list){
                        sum=(parseFloat(p.price)+sum)*i;
                    }
              console.log(sum)
         },
    },
    created(){
        this.cartList()
    },
    computed:{
         a(){
            var sum=0;
                    for(var p of this.list){
                        sum+=parseInt(p.price);
                    }
                    return sum;
                    }
     },
      components:{
      "end-tab":endTab,
    }

}
</script>
<style>

</style>