<template>
  <div class="chat-page-wrapper">
    <ChatMember/>
    <ChatBox/>
  </div>
</template>

<script>
import ChatBox from '@/components/ChatBox'
import ChatMember from '@/components/ChatMembers'

export default {
  name: 'ChatPage',
  components: {
    ChatBox,
    ChatMember,
  },

  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
@import "./src/assets/scss/standard.scss";

a.white-logo {
  width: 58px;
  position: absolute;
  display: block;
  right: 28px;
  bottom: 24px;
  z-index: 9999;
  @media only screen and (max-width: $screen-xs) {
    display: none;
  }

  img {
    width: 100%;
  }
}
</style>
