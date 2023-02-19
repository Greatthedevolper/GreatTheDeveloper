<template>
  <div class="form">
    <div class="login-form">
      <p>Welcome back!</p>
      <h2>Please login</h2>
      <div class="input-wrapper">
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Email" />
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" />
        </div>
      </div>
      <router-link to="#" class="d-block text-end forgot-text"
        >Forgot Password</router-link
      >
      <router-link type="submit" to="/course" class="btn-style formBtn"
        >Login</router-link
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
      <p class="account-text">Don't have an account? <router-link to="/signup">Create</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
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
          link: "#m",
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
