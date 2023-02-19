<template>
  <div class="setting-page-wrapper">
    <div class="setting-banner">
    </div>
    <div class="profile-setting-wrapper">
      <div class="container">
        <div class="profile-heading-wrapper">
          <div class="profile-setting-head">
            <div class="img-wrapper">
              <img src="../assets/images/profile-desktop-image.svg" alt="profile">
            </div>
            <div class="content-wrapper">
              <h2>Amanda Cooper</h2>
              <p>@Amanda Cooper</p>
            </div>
          </div>
          <div class="profile-setting-body">
            <div class="profile-setting-tabs">
              <ul class="tabs">
                <li v-for="(items,index) in tabName " :key="index"
                    :class="{ active: index===isActive }" @click="addActive(index)">
                  <router-link to="#" class="large"> {{ items.lang }}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="main-div-wrapper">
        <div class="side-bar">
          <ul class="sidebar-menu">
            <li v-for="(item,index) in sideBarMenu" :key="index" @click="anchorActive(index)">
              <router-link :to="item.link" :class="{ active: index===linkActive }"><span>
                <i :class='item.class'></i>{{ item.title }}
              </span></router-link>
            </li>
          </ul>
        </div>
        <div class="main-div">
          <div class="container">
            <div class="form profile-form">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>First name</label>
                    <input type="text" class="form-control" placeholder="Type here">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Last name</label>
                    <input type="text" class="form-control" placeholder="Type here">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class=" col-lg-6">
                  <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" placeholder="Type here">
                  </div>
                </div>
                <div class=" col-lg-6">
                  <div class="form-group">
                    <label>Phone number</label>
                    <input type="text" class="form-control" placeholder="Type here">
                  </div>
                </div>
              </div>

              <router-link to="#" class="btn-style">Save changes</router-link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SettingPage',
  components: {},

  data() {
    return {
      isActive: 0,
      linkActive: 0,
      tabName: [
        {lang: "General"},
        {lang: "Avatar settings"},
        {lang: "Subscription"},
        {lang: "Dashboard"},
      ],
      sideBarMenu: [
        {title: "General info", class: 'fa-regular fa-user', link: '#'},
        {title: "Language", class: 'fa-solid fa-language', link: '#'},
        {title: "Password", class: 'fa-solid fa-lock ', link: '#'},
        {title: "Privacy", class: 'fa-solid fa-shield', link: '#'},
        {title: "Advance settings", class: 'fa-solid fa-sliders', link: '#'},
        {title: "Logout", class: 'fa-solid fa-arrow-right-from-bracket', link: '#'},
      ],
    }
  },
  methods: {
    addActive(index) {
      this.isActive = index;
    },
    anchorActive(index) {
      this.linkActive = index;
    },

  },
  mounted() {


  }
}
</script>
<style lang="scss" scoped>
@import "./src/assets/scss/standard.scss";

.setting-page {
  @media only screen and (max-width: $screen-xs) {
    background: red;
  }

}

</style>
