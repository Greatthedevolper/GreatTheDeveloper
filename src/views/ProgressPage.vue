<template>
  <div class="progress-page-wrapper">
    <div class="program-wrapper">
      <div class="container">
        <h2>Best Sites Created</h2>
      </div>
    </div>
    <div class="slider-wrapper-div">
      <div class="container">
        <ModuleSlider title="Modules"/>
        <ModuleComponent title="Modules"/>
      </div>
    </div>
  </div>
</template>

<script>
import ModuleSlider from '@/components/ModuleSlider'
import ModuleComponent from '@/components/ModuleComponent'

export default {
  name: 'ProgressPage',
  components: {
    ModuleSlider,
    ModuleComponent,

  },
  data() {
    return {
      playing: false,
      courseMenu: true,
      memberList: [
        // {src: require(`../assets/images/attended-profile-1.svg`)},
        // {src: require(`../assets/images/attended-profile-2.svg`)},
        // {src: require(`../assets/images/attended-profile-3.svg`)},
        // {src: require(`../assets/images/attended-profile-4.svg`)},
        // {src: require(`../assets/images/attended-profile-5.svg`)},
        // {src: require(`../assets/images/attended-profile-6.svg`)},
      ]
    }
  },
  methods: {
    play() {
      this.$refs.videoPlayer.play();
      this.playing = true
    },
    pause() {
      this.$refs.videoPlayer.pause();
      this.playing = false
    },
  }
}
</script>

<style lang="scss" scoped>


</style>
