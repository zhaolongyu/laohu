<template>
<div>
    <div class="homeFooter">
      <ul>
        <li class="homeFooterTitle"><router-link to="/solution">关于联想</router-link></li>
        <li><router-link to="/solution">投资者关系</router-link></li>
        <li><router-link to="/solution">工作机会</router-link></li>
        <li><router-link to="/solution">销售网点查询</router-link></li>
        <li><router-link to="/solution">服务网点查询</router-link></li>
      </ul>
      <ul>
        <li class="homeFooterTitle"><router-link to="/solution">关于联想</router-link></li>
        <li><router-link to="/solution">投资者关系</router-link></li>
        <li><router-link to="/solution">工作机会</router-link></li>
        <li><router-link to="/solution">销售网点查询</router-link></li>
        <li><router-link to="/solution">服务网点查询</router-link></li>
      </ul>
      <ul>
        <li class="homeFooterTitle"><router-link to="/solution">联想商城</router-link></li>
        <li><router-link to="/solution">0元试用</router-link></li>
        <li><router-link to="/solution">极速到家</router-link></li>
        <li><router-link to="/solution">联想合伙人</router-link></li>
        <li><router-link to="/solution">私人定制</router-link></li>
        <li><router-link to="/solution">以旧换新</router-link></li>
      </ul>
      <ul>
        <li class="homeFooterTitle"><router-link to="/solution">联想服务</router-link></li>
        <li><router-link to="/solution">驱动与软件下载</router-link></li>
        <li><router-link to="/solution">联想知识库</router-link></li>
        <li><router-link to="/solution">24小时智能客服</router-link></li>
        <li><router-link to="/solution">保修配置查询</router-link></li>
        <li><router-link to="/solution">延长保修</router-link></li>
        <li><router-link to="/solution">联想IT管理服务</router-link></li>
      </ul>
      <ul>
        <li class="homeFooterTitle"><router-link to="/solution">关于联想</router-link></li>
        <li><router-link to="/solution">联想网站群</router-link></li>
        <li><router-link to="/solution">联想创投</router-link></li>
        <li><router-link to="/solution">聚享汇</router-link></li>
        <li><router-link to="/solution">联想电脑管家</router-link></li>
      </ul>
      <ul>
        <li class="homeFooterTitle"><router-link to="/solution">关于联想</router-link></li>
        <li><router-link to="/solution">联想官方社交平台</router-link></li>
        <li><router-link to="/solution">工作机会</router-link></li>
        <li><router-link to="/solution">销售网点查询</router-link></li>
        <li><router-link to="/solution">服务网点查询</router-link></li>
      </ul>
    </div>
    <div class="homeFooterLeft">
        <div>版权所有：1998-2019 联想集团 |法律公告 |隐私保护 |产品安全 </div>
        <div>京ICP备WWWW1 |京公网安备))))))号 |营业执照：3EEEEEE32</div>
    </div>
</div>
</template>
<script>
export default {
    data(){
      return {}
    },
    methods:{

    }
}
</script>
<style>
  /*homeFooter*/ 
    /*上面的*/
    .homeFooter{
      display:flex;justify-content:space-around;
      margin-top:40px;background:#272727;padding-top:30px;padding-bottom:20px;
    }
    .homeFooter>ul{
      list-style-type:none;
    }

    .homeFooter>ul>li>a{
        font-size: 13px;
        line-height: 13px;
        color:#ccc;
    }
        #home>.homeFooter>ul>li.homeFooterTitle>a{
         font-size:18px !important;font-weight:800;
    }
    /*下面的*/ 
    .homeFooterLeft{
      display:flex;justify-content:space-between;padding:20px 60px 20px 70px;
      background:#272727;border-top:1px solid gray;
    }
    .homeFooterLeft>div{font-size: 12px;color:#ccc;
      }
</style>