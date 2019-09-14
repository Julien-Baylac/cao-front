<template>
    <div class="row badge">
        <div class="col s3">
            <img class="icon_badges" :src="pathImage" alt="icon_badge">
        </div>
        <div class="col s9">
            <p class="">{{ name }}</p>
            <p class="">{{ description }}</p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'SortPage',
  components: {

  },
  data () {
    return {
      pathImage: '../static/icons/badges/lotus-flower.svg',
      name: 'Badges témoin',
      description: 'Les badges attestent des points positifs de l\'établissement'
    }
  }
}
</script>

<style scoped>
    p {
      margin: 0px;
    }
    .badge {
        padding: 7px;
        margin-bottom:10px;
        border: 1px solid #DCD6D6;
        border-radius: 7px;
        min-height: 75px;

    }
    .icon_badges {
        height: 35px;
        width: 35px;
        margin-top: 7px;
    }
</style>
