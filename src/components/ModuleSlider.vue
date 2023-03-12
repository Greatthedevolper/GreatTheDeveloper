<template>
  <div class="carousel-wrapper">
    <div class="slider-heading">
    </div>

    <carousel
        class="module-carousel"
        :breakpoints="breakpoints"
        :autoplay="false"
        :wrap-around="false"
    >
      <slide v-for="(item, index) in  modules" :key="index">
        <a :href="item.url" target="_blank" class="slider-wrapper">
          <div class="image-wrapper">
            <img :src="item.src" alt="">
          </div>
          <div class="content-wrapper">
            <h3 class="small">{{ item.Title }}</h3>
          </div>
        </a>
      </slide>
      <template #addons>
        <navigation/>
      </template>
    </carousel>


  </div>


</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Navigation, Slide} from 'vue3-carousel'

export default {
  name: 'ModuleSlider',
  props: ['title'],
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      breakpoints: {
        0: {
          itemsToShow: 1.1,
          snapAlign: 'start',
        },
      },
      modules: [
        {
          src: require(`../assets/images/portfolio-image-1.png`),
          Title: 'Wordpress Website',
          url: 'https://subtaindesigns.com/'
        },
        {
          src: require(`../assets/images/portfolio-image-1.png`),
          Title: 'Wordpress Website',
          url: 'https://subtaindesigns.com/'
        },
      ],
    }
  },
  mounted() {
  },
  methods: {}
}
</script>
<style lang="scss" scoped>


</style>