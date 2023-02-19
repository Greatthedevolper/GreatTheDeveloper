<template>
  <div class="intelligence-div-wrapper">
    <a href="#" class="btn-style intelligent-btn"><p>New New New</p></a>
    <carousel class="emotional-carousel"
              :autoplay="false"
              :wrap-around="true"
              :breakpoints="breakpoints"
    >
      <slide v-for="slide in 3" :key="slide">
        <div class="row">
          <div class="col-8 align-self-center pe-0"
          >
            <div class="content-wrapper">
              <h3>Emotional intelligence</h3>
              <p class="small">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmo</p>
            </div>
          </div>
          <div class="col-4 align-self-center ps-0">
            <div class="img-wrapper">
              <img src="../assets/images/emotional-brain.svg" alt="brain">
            </div>
          </div>
        </div>
      </slide>

      <template #addons>
        <pagination/>
      </template>
    </carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Pagination, Slide} from 'vue3-carousel'

export default {
  name: "IntelligenceDiv",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      breakpoints: {
        0: {
          itemsToShow: 1,
          snapAlign: 'start',
        },
        450: {
          itemsToShow: 1,
          snapAlign: 'start',
        },
        580: {
          itemsToShow: 1,
          snapAlign: 'start',
        },
        660: {
          itemsToShow: 1,
          snapAlign: 'start',
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/standard.scss";

</style>