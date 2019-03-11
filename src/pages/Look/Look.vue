<template>
  <div>look</div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    mounted () {
      this.$store.dispatch('getShops')
    },
    computed:{
      ...mapState({

      })
    }
  }
</script>

<style scoped>

</style>
