<template>
<div class="headerPage">
    <div class="row div_header">
        <div class="col s12 content_header">
            <p class="name_birdhouse">{{ name }}</p>
            <p class="type_birdhouse">{{ description }}</p>
        </div>
    </div>
    <div class="row">
        <div class="col s3 offset-s9">
            <ButtonClose class="btn_close" :path="path"></ButtonClose>
        </div>
    </div>
</div>
 </template>

<script>
import ButtonClose from '../components/ButtonClose.vue'

export default {
  name: 'HeaderPage',
  components: {
    ButtonClose
  },
  data () {
    return {
    }
  },
  props: {
    path: String,
    name: String,
    description: String
  }
}
</script>

<style scoped>
    p {
      margin: 0px;
    }
    .name_birdhouse {
      margin-top: 30px;
      font-size: 22px;
      color: #2D2D41;
    }
    .type_birdhouse {
      margin-bottom: 15px;
      font-size: 13px;
      color: #2D2D41;
    }
    .btn_close {
      margin-top: -20px;
    }
    .div_header {
        border-bottom: 1px solid #979797;
    }
    .content_header {
      padding-left: 40px;
    }
    .row {
      margin: 0px;
      padding: 0px;
    }
</style>
