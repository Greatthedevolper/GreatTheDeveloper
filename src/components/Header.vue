<template>
  <header id="header">
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-5 align-self-center">
          <router-link to="/" class="white-logo">
            <img src="../assets/images/azeem-white-logo.png" alt="logo">
          </router-link>
          <router-link to="/" class="black-logo">
            <img src="../assets/images/black-logo.svg" alt="logo">
          </router-link>
        </div>
        <div class="col-md-10  col-7 align-self-center">
          <div class="menu-wrapper">
            <div class="row">
              <div class=" col-8 ">
                <i class="material-icons">menu</i>
                <div class="navbar-menu" :class="{active: isActive}">
                  <ul class="menu">
                    <i class="fa-solid fa-xmark" @click="hideMenu()"></i>
                    <li v-for="item in menuLinks" :key="item.id" @click="hideMenu()">
                      <router-link :to="item.link">{{ item.title }}</router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class=" col-4 align-self-center ">
                <div class="action-div custom-flex">
                  <div class="profile-div">
                    <div class="img-div custom-flex ">
                      <img src="../assets/images/mine-profile-image.jpg" alt="profile" @click="showMenu()">
                    </div>
                    <div class="content-div">

                      <router-link to="#">
                        <strong class="d-block head-small">Hire me</strong>
                      </router-link>
                    </div>
                  </div>
                  <div class="theme-switch-btn">
                    <input type="checkbox" id="checkbox" @change="$emit('toggle')" v-if="checked" :checked="true">
                    <label for="checkbox">
                      <img src="../assets/images/light-theme-icon.svg" alt="theme">
                      <i class="fa-regular fa-moon"></i>

                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </header>
</template>

<script>


export default {
  name: 'HeaderComponent',
  props: ['courseMenu', 'mode'],
  components: {},
  data() {
    return {
      isMenuOpen: true,
      menu: false,
      isActive_el: 1,
      isActive: false,
      checked: true,
      menuLinks: [
        {title: 'Services', link: '/course'},
        {title: 'Portfolio', link: '/progress'},
        {title: 'Contact', link: '/setting'},
      ]
    }
  },
  methods: {
    login() {
      this.menu = true
    },
    showMenu() {
      this.isActive = !this.isActive
      this.$emit("sh0w")
    },
    hideMenu() {
      this.isActive = !this.isActive
      this.$emit("hide")
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
