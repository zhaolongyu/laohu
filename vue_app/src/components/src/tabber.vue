<template>
  <div id="tables">
    <div class="app-swiper">
          <mt-swipe  :auto="3000">
              <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url" />
              </mt-swipe-item>
          </mt-swipe> 
     </div>  
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:{},
    }
  },  
   created(){
      this.imagelist();
  },
   methods:{
      imagelist(){
           var url = "http://127.0.0.1:3000/imglist";
           this.axios.get(url).then(result=>{         
                 this.list = result.data;
            });
         },
     },

}
</script>
<style>
     .app-swiper .mint-swipe{height:600px;}
     .app-swiper .mint-swipe img{height:600px;}
</style>

