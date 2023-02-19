<template>
  <div class="chat-box">
    <div class="chat-input">
      <div class="message-div" v-for="item in chatMessages" :key="item.id">
        <strong>{{item.strong}} </strong><p> {{item.text}}</p>
      </div>
      <div class="form">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Send message">
          <router-link to="/review" class="btn-style submit-btn">
            <i class="fa-solid fa-paper-plane"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ChatBox',
  props: ['chatMember'],
  components: {},
  data() {
    return {
      chatMessages: [
        {strong:'Amanda Cooper: ', text: ' God Bless you'},
        {strong:'Jacob Moore: ', text: ' Please pray for me'},
        {strong:'Richard Miller: ', text: ' Amazing job'},
        {strong:'Jacob Moore: ', text: ' Please pray for me'},
        {strong:'Amanda Cooper: ', text: ' God Bless you'},

      ]
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/standard.scss";


</style>
