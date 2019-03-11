<template>
  <div id="app">
    <router-view/>
    <FooterGuider v-show="$route.meta.showFooter"></FooterGuider>
  </div>
</template>

<script>
  import FooterGuider from './components/footerGuider/FooterGuider'

  export default {
    components: {
      FooterGuider
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
