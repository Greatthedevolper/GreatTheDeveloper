<template>
  <div class="course-page-wrapper">
    <div class="course-banner">
      <div class="container">
        <div class="row">
          <div class="col-md-6 order-md-2">
            <IntelligenceDiv/>
          </div>
          <div class="col-md-6 order-md-1">
            <ContinueDiv/>
          </div>

        </div>
      </div>
    </div>
    <div class="slider-wrapper-div">
      <div class="container">
        <ProgramSlider title="Popular Programs"/>
      </div>
      <div class="container">
        <FeaturedSlider title="Featured"/>
      </div>
    </div>
  </div>
</template>

<script>
import ContinueDiv from '@/components/ContinueDiv'
import ProgramSlider from '@/components/ProgramSlider'
import FeaturedSlider from '@/components/FeaturedSlider'
import IntelligenceDiv from '@/components/IntelligenceDiv'

export default {
  name: 'CoursePage',
  components: {
    ContinueDiv,
    ProgramSlider,
    FeaturedSlider,
    IntelligenceDiv,
  },
  data() {
    return {
      userDataRanking: null,
      dataLoaded: false,
      courseMenu: true
    };
  },
  methods: {
    youAPI() {
      this.dataLoaded = true
    },
  },

  created() {
  },
  computed: {},
  mounted() {

  },
  watch: {},
}
</script>

<style lang="scss" scoped>

</style>
