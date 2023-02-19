<template>
  <div :class="[this.$route.name, themeClass]">
    <HeaderComponent @toggle="toggle()" @sh0w="shadowMenu()" @hide="hideMenu()"/>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      isActive: false,
      userDataRanking: null,
      dataLoaded: false,
      themeClass: localStorage.getItem("theme-class") || false,
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    toggle: function () {
      var PageName = this.$route.name;
      let appPage = document.querySelector("." + PageName);
      let inputBtn = document.querySelector("#checkbox");
      if (inputBtn.checked) {
        appPage.classList.remove("light");
        localStorage.setItem("theme-class", "");
        localStorage.setItem("checked", inputBtn.checked);
      } else {
        appPage.classList.add("light");
        localStorage.setItem("theme-class", "light");
        localStorage.setItem("checked", "");
      }
      this.themeClass = localStorage.getItem("theme-class");
    },

    shadowMenu: function () {
      let siteBody = document.body;
      siteBody.classList.add("active");
    },

    hideMenu: function () {
      let siteBody = document.body;
      siteBody.classList.remove("active");
    },
  },
  mounted: function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
    this.themeClass = localStorage.getItem("theme-class");
    let inputBtn = document.querySelector("#checkbox")
    inputBtn.checked = (localStorage.getItem("checked"))
    console.log(localStorage.getItem("checked"))
    inputBtn.checked = localStorage.getItem("checked") === null;
    if ((localStorage.getItem("theme-class")) === '') {
      inputBtn.checked = true
    }
  },
};
</script>
<style lang="scss" scoped></style>
