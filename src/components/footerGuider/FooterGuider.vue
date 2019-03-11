<template>
  <footer class="nav-tab border-1px">
    <span class="guide_item" @click="goto('/home')">
      <i></i>
      <span>首页</span>
    </span>
    <span class="guide_item" @click="goto('/category')">
      <i></i>
      <span>分类</span>
    </span>
    <span class="guide_item" @click="goto('/look')">
      <i></i>
      <span>识物</span>
    </span>
    <span class="guide_item" @click="goto('/shopcart')">
      <i></i>
      <span>购物车</span>
    </span>
    <span class="guide_item" @click="goto('/personal')">
      <i></i>
      <span>个人</span>
    </span>
  </footer>
</template>

<script>
  //设 图纸的rem为 n px
  //   370/(n/10) = 4.93
  export default {
    methods:{
      goto(path){
        this.$router.replace(path);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../commom/mixins.styl"
  .nav-tab
    position: fixed;
    bottom 0
    left 0
    display flex
    flex-direction row
    width 100%
    height 1.30667rem
    background #fff
    border-top: 1px solid #d9d9d9
    text-align center
    .guide_item
      display flex
      justify-content center
      flex-direction column
      height 100%
      width 25%
      i
        margin 0 auto
        display: block
        width: .53333rem
        height: .53333rem
        vertical-align middle
      &:nth-child(1)
        i
          background url("../../assets/images/tabbar.png")
          background-position: 0 -2.66667rem;
      &:nth-child(2)
        i
          background url("../../assets/images/tabbar.png")
          background-position: 0 -2rem;
      &:nth-child(3)
        i
          background url("../../assets/images/tabbar.png")
          background-position: 0 -4.66667rem;
      &:nth-child(4)
        i
          background url("../../assets/images/tabbar.png")
          background-position: 0 -.66667rem;
      &:nth-child(5)
        i
          background url("../../assets/images/tabbar.png")
          background-position: 0 -6rem;
      span
        font-size 0.32rem
        margin-top: .09333rem
        color: #666;
        line-height 1
</style>
