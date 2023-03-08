<template>
  <div class="get-start-wrapper">
    <h1> Hi, I am <br/>
      <router-link to="/about-me" class="hover">Azeem U Rehman</router-link>
    </h1>
    <p>
      A Full Stack Web Developer</p>
    <router-link to="/about-me" class="btn-style">
      About Me
    </router-link>

    <router-link to="/about-me" class="start-logo">
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
