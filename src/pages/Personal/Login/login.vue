<template>
    <div class="loginWrap">
      <div class="phoneLoginWrap">
        <div class="logWrap">
          <div class="log">
            <img src="../../../assets/images/yanxuan.png" alt="">
          </div>
        </div>
        <div class="innerWrap">
          <div class="input">
            <input type="text" placeholder = '请输入手机号'>
          </div>
          <div class="input">
            <div class="getCode">获取验证码</div>

            <input type="text" placeholder = '请输入短信验证码'>
          </div>
          <div class="otherInfo">
            <span>遇到问题?</span>
            <span class="checkedMethod">使用密码验证登陆</span>
          </div>
        </div>
        <div class="btnWrap">
          <div class="login phone" @click="toPhone , showLogin = true"><span>登陆</span></div>
          <div class="login mail"><span>其他方式登陆</span></div>
          <div class="register"><span>注册账号</span><i></i></div>
        </div>
      </div>
      <div class="mailLoginWrap">
      </div>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        loginMethod: 0
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loginWrap
    width 100%
    height 100%
    .phoneLoginWrap
      width 100%
      height 100%

      .logWrap
        height 64px
        padding 56px 0 0
        margin-bottom 165px
        .log
          width 100%
          height 64px
          margin-bottom 165px

          img
            display block
            height 64px
            margin auto
      .innerWrap
        width 90%
        margin 0 auto
        .input
          height 91px
          width 100%
          margin 29.25px 0
          position relative
          .getCode
            position absolute
            top 15px
            right 0px
            width 172px
            height 56px
            font-size 28px
            text-align center
            line-height 56px
            background-color #fff
            border 1px solid #333
            border-radius 10px
          input
            display block
            width 100%
            height 100%
            font-size 28px
            background-color transparent
            border-bottom 1px solid #bdbdbd
          input::-webkit-input-placeholder
                  font-size 30px
        .otherInfo
          display flex
          justify-content space-between
          color #7f7f7f
          width 100%
          height 45px
          margin-top 30px
          font-size 30px
          .checkedMethod
            color black

      .btnWrap
        height 147*2px
        width 100%
        margin-bottom 205px
        margin-top 62px
        .login
          width 335*2px
          height 47*2px
          margin 0 auto 32px
          font-size 28px
          text-align center
          line-height 47*2px
          border-radius 4px

          .span
            display block
            margin auto
        .phone
          background #b4282d
          color: #fff
        .mail
          border 1px solid #b4282d
          color: #b4282d
        .register
          height 40px
          font-size 30px
          text-align center
          span
            display inline-block
            vertical-align: middle
          i
            display: inline-block
            vertical-align middle
            height 28px
            width 28px
            background-repeat no-repeat
            background url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-8d47138d73.png")



</style>
