<template>
    <div class="categoryContainer">
      <div class="head">
        <div class="headSearch">
          <i></i>
          <span>搜索商品，共21888款好物</span>
        </div>
      </div>
      <div class="cateList">
        <div class = 'cateList-l'>
          <ul class="cateUl" ref="cateUl">
            <li v-for="(cate , index) in categorys" :key="index" :class="index === 0 ? 'active':''" @click="isChecked = true,handleClick(cate,index,$event)">
              <span>{{cate.name}}</span>
            </li>
          </ul>
        </div>
        <div class="cateList-r">
          <Profecture class="prefecture" :cate = cateData></Profecture>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Profecture from '../../components/CateComponents/Perfecture'
  import BScroll from 'better-scroll'

  export default {
    components:{
      Profecture
    },
    data(){
      return{
        cateData: {},
        index: 0,
        isChecked: true
      }
    },
    methods:{
      handleClick(cate,index,event){
        this.index = ''
        console.log(cate ,index)
        this.cateData = cate
        this.index = index
        //变成选中状态
        let children = this.$refs.cateUl.children;
        console.log(children)

        Object.keys(children).forEach(key => {
          // children[key].className = 'noActive'
          children[key].classList.remove('active')
          console.log(key , children[key])
        })

        var el = event.currentTarget
        // el.className = 'active'
        el.classList.add('active')
      }
    },
    computed : {
      ...mapState({
        categorys: state => state.category.categorys
      })
    },
    mounted () {
      this.$store.dispatch('getCategory' , () => {
        this.$nextTick(() =>{
          new BScroll('.ratings', {
            scrollY: true,
            click: true
          })
          new BScroll('.perfecture',{
            scrollY:true,
            click: true
          })
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .categoryContainer
    height 100%
    width 100%
    font-size 24px
    .head
      display flex
      background #fff
      height 88px
      padding 0 30px
      border-bottom 1px solid #d9d9d9
      .headSearch
        margin auto
        width 100%
        height 56px
        background #ededed
        text-align center
        line-height 56px
        span
          font-size 28px
        i
          display inline-block
          vertical-align middle
          height 28px
          width 28px
          background-image url("../../assets/images/home-search.png")
    .cateList
      display flex
      height 1044px
      width 100%
      .cateList-l
        display block
        height 100%
        width 162px
        float left
        background #fff
        overflow hidden
        ul
          padding 40px 0

          li
            height 50px
            width 162px
            font-size 28px
            line-height:50px
            margin-top 40px
            text-align center
            border-left 6px solid
            border-color #fff
            &:nth-child(1)
              margin-top 0
              /*border-color #ab2b2b*/
          .active
            border-color #ab2b2b
          .noActive
            border-color #fff


      .cateList-r
        height 100%
        flex-grow 1
        background #fff
        padding 30px 30px 20px 30px
        box-sizing border-box
        .prefecture
          height 992px
          width 528px
          overflow hidden
</style>
