<template>
  <div id="app">
    <div id="nav">
      <img src="./assets/top_head.png" style="width:100%">
    </div>

    <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  max-width 500px
  margin 0 auto
</style>
