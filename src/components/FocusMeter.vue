<template>
  <div class="focus-meter-wrapper">
    <div class="focus-meter-head">
      <router-link to="/progress" class="btn-style submit-btn"><i class="fa-solid fa-arrow-left"></i></router-link>
      <h4>Focus meter</h4>
    </div>
    <div class="meter-wrapper">
<!--      <img src="../assets/images/focus-meter.svg" alt="focus">-->
      <VueSvgGauge
          :start-angle="-90"
          :end-angle="90"
          :value="100"
          :separator-step="3"
          :separator-thickness="1"
          :scale-interval="0"
          :inner-radius="85"
          :gauge-color="[{ offset: 0, color: 'red'}, { offset: 50, color: 'yellow'}, { offset: 100, color: 'green'}]"
      >
      </VueSvgGauge>
      <div class="meter-reading-div d-flex justify-content-between">
        <strong>Poor</strong>
        <strong>Good</strong>
      </div>
    </div>
  </div>
</template>

<script>
import { VueSvgGauge } from 'vue-svg-gauge'
export default {
  name: 'FocusMeter',
  components: {VueSvgGauge},
  data: function() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/standard.scss";



</style>