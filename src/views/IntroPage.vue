<template>
  <div class="intro-wrapper">
    <router-link to="/start" class="intro-logo">
      <img src="../assets/images/azeem-white-logo.png" alt="logo"/>
    </router-link>
    <Vue3Lottie :animationData="LoaderJason"  class="intro-lottie" />
  </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import LoaderJason from '@/assets/json/infinity-loader.json'

export default {
  name: "IntroPage",
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      interval: null,
      LoaderJason
    };
  },
  methods: {

  },
  created() {
    this.interval = setTimeout(
      function () {
        this.$router.push({ path: "/start" });
      }.bind(this),
      4000
    );
  },
};
</script>

<style lang="scss" scoped></style>
