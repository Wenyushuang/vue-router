<template>
  <div>
      <h1>About</h1>
        <router-link to="/about/a">去a</router-link>  
        <router-link to="/about/b">Qu b</router-link>  

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'home'
}
</script>

<style>

</style>