<template>
  <div class="get-start-wrapper">
    <h1> Hi, I am <br/>
      <a href="/about-me" class="hover">Azeem U Rehman</a></h1>
    <p >
      A Full Stack Web Developer</p>
    <router-link to="/signup" class="btn-style">
      Hire Me
    </router-link>

    <router-link to="/signup" class="start-logo">
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
