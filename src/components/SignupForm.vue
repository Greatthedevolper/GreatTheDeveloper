<template>
  <div class="form">
    <div class="login-form">
      <div class="input-wrapper">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Fullname" />
        </div>

        <div class="form-group">
          <input type="email" class="form-control" placeholder="Email" />
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <router-link type="submit" to="/login" class="btn-style formBtn"
        >Join now</router-link
      >
      <ul class="social-list">
        <li v-for="item in socialIcons" :key="item.id">
          <router-link
            :to="item.link"
            target="_blank"
            class="btn-style icon-btn"
            :class="item.className"
            ><i :class="item.class"></i>
          </router-link>
        </li>
      </ul>
      <p class="account-text">Have an Account <router-link to="/login">Login</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupForm",
  components: {},
  data() {
    return {
      socialIcons: [
        {
          class: "fa-brands fa-facebook-f",
          link: "#",
          className: "facebook",
        },
        {
          class: "fa-brands fa-twitter",
          link: "#",
          className: "twitter",
        },
        {
          class: "fa-brands fa-google",
          link: "#",
          className: "google",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
