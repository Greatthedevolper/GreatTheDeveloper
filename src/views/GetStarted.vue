<template>
  <div class="get-start-wrapper">
    <h1> Hi, I am <br/>
      <router-link to="/coming-soon" class="hover">Azeem U Rehman</router-link>
    </h1>
    <p>
      A Front End Developer</p>
    <router-link to="/coming-soon" class="btn-style">
      About Me
    </router-link>

    <router-link to="/coming-soon" class="start-logo">
      <img src="../assets/images/azeem-white-logo.png" alt="logo">
    </router-link>
  </div>
</template>
<script>


export default {
  name: 'GetStarted',
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
