<template>
 <div class="login-wrapper">
  <div class="container ">
    <div class="row">
       <div class="col-lg-8 order-lg-2">
         <Vue3Lottie :animationData="SchoolJason"  class="school-lottie" />
      </div>
      <div class="col-lg-4 order-lg-1 px-0 px-md-2">
        <LoginForm/>
      </div>
    
    </div>
  </div>
 </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import SchoolJason from '@/assets/json/school-background-removed.json'


export default {
  name: 'LoginPage', 
  components: {
    LoginForm,
    Vue3Lottie
  },
  data() {
    return {
      SchoolJason
    }
  },
  methods: {
   
  },
}
</script>

<style lang="scss" scoped>

</style>
