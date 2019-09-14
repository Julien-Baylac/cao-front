<template>
  <div class="presentation">
      <p class="title">{{ title }}</p>
      <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Presentation',
  components: {
  },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  },
  props: {
    title: String,
    description: String
  }
}
</script>

<style scoped>
    .presentation {
      padding-left: 35px;
      padding-right: 30px;
    }
    p {
      margin: 0px;
    }
    .title {
      margin-top: 30px;
      font-size: 16px;
      color: #676767;
    }
    .description {
      margin-bottom: 15px;
      font-size: 12px;
      color: #8B8B8B;
    }
    .row {
      margin: 0px;
      padding: 0px;
    }
</style>
