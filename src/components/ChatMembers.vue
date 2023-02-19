<template>
  <ul class="chat-member-wrapper">
    <li v-for="item in memberList" :key="item.index">
      <div class="img-wrapper">
        <img  :src="item.src" alt="profile">
      </div>
      <p>{{item.title}}</p>
    </li>
    <li>
      <p>234+</p>
    </li>
  </ul>
</template>

<script>


export default {
  name: 'ChatMember',
  components: {},
  data() {
    return {
      memberList: [
        {src: require(`../assets/images/attended-profile-1.svg`),title:'Jacob'},
        {src: require(`../assets/images/attended-profile-2.svg`),title:'Jacob'},
        {src: require(`../assets/images/attended-profile-3.svg`),title:'Jacob'},
        {src: require(`../assets/images/attended-profile-4.svg`),title:'Jacob'},
        {src: require(`../assets/images/attended-profile-5.svg`),title:'Jacob'},
        {src: require(`../assets/images/attended-profile-6.svg`),title:'Jacob'},
      ]
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/standard.scss";


</style>
