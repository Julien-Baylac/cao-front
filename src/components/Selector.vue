<template>
    <div class="row selector">
      <router-link :to="route">
        <div class="col s3">
            <img class="icon_selector" :src="pathImage" alt="icon_badge">
        </div>
        <div class="col s9">
            <p class="title_selector"><span>{{ name }}</span></p>
            <p class="description_selector">{{ description }}</p>
        </div>
      </router-link>
    </div>
</template>

<script>

export default {
  name: 'SortPage',
  components: {

  },
  data () {
    return {
    }
  },
  props: {
    name: String,
    description: String,
    pathImage: String,
    route: String
  }
}
</script>

<style scoped>
    .row {
      margin-bottom: 9px;
    }
    p {
      margin: 0px;
      padding: 0px;
    }
    .selector {
        padding: 7px;
        border: 1px solid #DCD6D6;
        border-radius: 7px;
        min-height: 75px;
        padding-top: 11px;
    }
    .icon_selector {
        height: 35px;
        width: 35px;
        margin-top: 7px;
    }
    .title_selector {
        font-size: 12px;
        color: #4A4A4A;
    }
    .description_selector {
        font-size: 11px;
        color: #9D9D9D;
    }
</style>
