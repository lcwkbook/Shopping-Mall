<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default{
  name: 'App',
  mounted(){
    window.addEventListener('unload', this.saveState())
  },
  methods:{
    saveState(){
      sessionStorage.setItem('state',JSON.stringify(this.$store.state.user))
    }
  }
}
</script>

<style lang="scss">

</style>
