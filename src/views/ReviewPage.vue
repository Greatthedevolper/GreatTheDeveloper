<template>
  <h1>Rewivw Page</h1>
</template>

<script>

export default {
  name: 'ReviewPage',
  components: {
  },

  data() {
    return {
      linkActive: 1,
      actionTitle: [
        {title: "No", link: '#'},
        {title: "Yes", link: '/video'},
        {title: "Maybe", link: '#'},
      ]
    }
  },
  methods: {
    addActive(index) {
      this.linkActive = index;
    },

  }
}
</script>
<style lang="scss" scoped>


</style>
