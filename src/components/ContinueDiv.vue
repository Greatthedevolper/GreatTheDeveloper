<template>
  <div class="continue-div">
    <div class="continue-heading">
      <strong>Continue where you left..</strong>
    </div>
    <div class="continue-body">
      <div class="img-div custom-flex">
        <img src="../assets/images/continue-flash.svg" alt="flash">
      </div>
      <div class="content-div">
        <h3 class="small">{{ continued.Title }}</h3>
        <p class="small">{{ continued.LongTag }} {{ continued.LongTag }}</p>
      </div>
    </div>
    <div class="continue-foot">
      <div class="progress-out">
        <div class="progress-bar" :style="'width:'+continued.progress *100 + '% '">
        </div>
      </div>
      <strong class="small">{{ continued.progress * 100 }}% completed </strong>
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
      continued: {
        CourseID: "1",
        Title: "Power Focus",
        Time: "10",
        ShortTag: "Focus is power, power is focus",
        LongTag: "Getting distracted all the time? Lets get your focus straight",
        CourseIcon: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Target_Flat_Icon.svg",
        CourseTile: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-4.0.3&dl=paul-skorupskas-7KLa-xLbSXA-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
        CourseURL: "powerfocus",
        TrailerURL: "https://www.youtube.com/watch?v=Ym9a6kuoLVc",
        Modules: [
          "1a",
          "1b",
          "1c",
          "1d",
          "1e"
        ],
        NumModules: 5,
        progress: 0.7
      },
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/standard.scss";


</style>
