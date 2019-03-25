<template>
<td>
<tr>
    <td><input type="checkbox"></td>
    <td style="width:150px;"><img :src="list.sm"></td>
    <td style="width:150px;">              
        <span class="cartGetBodyEr">{{list.title}}</span>
    </td>
    <td> </td>
    <td>{{list.price}}</td>
    <td>
        <button @click="myclick(-1)">-</button>
          <span>{{count}}</span>
        <button @click="myclick(+1)">+</button>
    </td>
        <td>{{count*list.price}}</td>
    <td><button @click="cartdelete">删除</button></td>
    </tr>
</td>
</template>
<script>
export default {
    data(){
      return {
         count:1,
        //  myPrice:
        go: true
        } 
    },
    props:["list"],
    methods:{
      myclick(index){
             this.count+=index;
              if(this.count==0)
              this.count=1;
        //    this.$emit("add",this.count)
        //    console.log(this.myPrice)
      },
      cartdelete(){
          var id = this.list.id
          var url = "http://127.0.0.1:3000/cartdete?id="+id
          this.axios.get(url).then(result=>{
              console.log("chenggong")
            //   this.$router.go(0)
              this.$router.replace({path:'/kong'})
          })
      },
      reload(){
          this.go = false
          this.$nextTick(function(){
              this.go = true
          })
      }
   
    },
}
</script>
<style>
</style>