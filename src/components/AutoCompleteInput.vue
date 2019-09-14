<template>
  <div class="input-field col s12">
    <input type="text" id="autocomplete-input" class="autocomplete">
    <label for="autocomplete-input">{{ text }}</label>
  </div>
</template>

<script>
export default {
  name: 'ButtonClose',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
    this.initAutocomplete()
  },
  methods: {
    initAutocomplete () {
      document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.autocomplete')
        var instances = M.Autocomplete.init(elems, options)
      })
    }
  },
  props: {
    text: String
  }
}
</script>

<style scoped>
  .button_close {
        background-image:linear-gradient(#7284FF, #84C3DE) !important;
        color: white;
        height: 40px;
        width: 40px;
  }
</style>
