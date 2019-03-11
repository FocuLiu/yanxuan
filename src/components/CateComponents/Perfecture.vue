<template>
  <div class="Perfectture">
    <div class="banner">
      <img :src="cate.bannerUrl" alt="">
    </div>
    <div class="cateWrap">
      <ul>
        <li v-for="(item , index) in cate.subCateList" :key="index">
          <img :src="item.bannerUrl" alt="">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    props:{
      cate: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .banner
      height 192px
      width 528px
      margin-bottom 32px
      img
        height 192px
    .cateWrap
      width 529px
      ul
        display flex
        flex-wrap wrap
        li
          display flex
          flex-direction column
          height 216px
          width 144px
          margin-right 30px
          img
            width 144px
            height 144px
          span
            flex-grow 1
            text-align center
</style>
