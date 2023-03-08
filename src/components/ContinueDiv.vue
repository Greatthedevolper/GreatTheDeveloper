<template>
  <div class="continue-div">
    <div class="continue-heading">
      <h3>About Me</h3>
    </div>
    <div class="continue-body">
      <div class="img-div custom-flex">
        <img src="../assets/images/mine-profile-image.jpg" alt="profile">
      </div>
      <div class="content-div">
        <strong>A full stack web developer</strong>
                <p>Passionate developer who loves<br/> Making websites alive,<br/>to make imagination in real <br/>simplicity in things,<br/> crafts beautiful user
                  interfaces with love.</p>
        <p>If you can think about it, we can develop it.</p>
      </div>
    </div>
    <div class="continue-foot">
      <!--      If you can think it, we can web it.-->
    </div>
    <router-link to="#" class=" btn-style continue-btn">CONTINUE</router-link>
  </div>

</template>

<script>


export default {
  name: 'ContinueDiv',
  components: {},
  data() {
    return {
      width: 54,
    }
  },
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/standard.scss";


</style>
