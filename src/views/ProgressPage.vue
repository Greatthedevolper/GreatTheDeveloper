<template>
  <div class="progress-page-wrapper">
    <div class="program-wrapper">
      <div class="container">
        <h2>Power focus</h2>
        <div class="heading">
          <div class="row ">
            <div class="col-xl-7 col-md-3 ">
              <div class="review-wrapper">
                <i class="fa-solid fa-star"></i>
                <p>4.7 (23 reviews)</p>
              </div>
            </div>
            <div class="col-xl-2 col-md-3 ">
              <div class="share-wrapper justify-content-end">
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
                <p><u>Share program</u></p>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 ">
              <div class="attended-profile-wrapper justify-content-end">
                <div class="img-wrapper">
                  <img v-for="item in memberList" :key="item.src"
                       :src="item.src" alt="profile">
                </div>
                <p><u>234 Attended</u></p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-8 ">
            <div class="video-wrapper">
              <video loop muted ref="videoPlayer">
                <source src="../assets/video/demo-video.mp4" type="video/mp4">
              </video>

              <button class="btn-style circleBtn" @click="pause" v-if="playing">
                <i class="fa-solid fa-pause"></i>
              </button>
              <button class="btn-style circleBtn" @click="play" v-else>
                <i class="fa-solid fa-play"></i>
              </button>
            </div>
          </div>
          <div class="col-lg-4 ">
            <div class="chat-wrapper">
              <div class="chat-heading">
                <strong>Class chat</strong>
              </div>
              <div class="chat-body">
                <div class="message-div">
                  <div class="content-wrapper">
                    <p class="chat">Sounds good man. See you there, they also have Tech Happy Hours that day so coffee
                      first, free cocktail later!!</p>
                  </div>
                </div>
                <div class="message-div">
                  <div class="img-wrapper">
                    <img src="../assets/images/chat-profile-image.svg" alt="profile">
                  </div>
                  <div class="content-wrapper">
                    <p class="chat">Haha yeah totally. Wednesday at 11 a.m work?</p>
                  </div>
                </div>

              </div>
              <div class="chat-footer">
                <form action="">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Write message...">
                  </div>
                  <router-link to="/chat" class="btn-style submit-btn">
                    <i class="fa-solid fa-paper-plane"></i>
                  </router-link>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="for-mobile-view">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="img-wrapper">
              <img src="../assets/images/slider-power-focus.png" alt="focus">
            </div>
          </div>
          <div class="col-9 align-self-end text-right">
            <div class="content-wrapper">
              <p><u>234 Attended</u></p>
              <div class="profile-img-wrapper">
                <img v-for="item in memberList" :key="item.src"
                     :src="item.src" alt="profile">
              </div>
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
          </div>
        </div>
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
        {src: require(`../assets/images/attended-profile-1.svg`)},
        {src: require(`../assets/images/attended-profile-2.svg`)},
        {src: require(`../assets/images/attended-profile-3.svg`)},
        {src: require(`../assets/images/attended-profile-4.svg`)},
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
