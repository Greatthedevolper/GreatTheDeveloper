<template>
  <div class="focus-meter-wrapper">
    <div class="focus-meter-head">
      <router-link to="/progress" class="btn-style submit-btn"><i class="fa-solid fa-arrow-left"></i></router-link>
      <h4>Focus meter</h4>
    </div>
    <div class="meter-wrapper">
      <SpeedometerVue v-model="speed" :maxValue="50" color="red" />
      <div class="meter-reading-div d-flex justify-content-between">
        <strong>Poor</strong>
        <strong>Good</strong>
      </div>
    </div>
  </div>
</template>

<script>
import { SpeedometerVue } from 'speedometer-vue'

export default {
  name: 'FocusMeter',
  components: {
    SpeedometerVue
  },
  data: function() {
    return {
      speed: 50,
      maxValue: 70
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/standard.scss";



</style>