import Vue from 'vue'

Vue.mixin({
  computed: {
    isDarkMode() {
      return this.$getState('darkMode')
    },
    productType() {
      return this.$getState('productType')
    },
    productTags() {
      return this.$getState('productTags')
    },
    productTagsIndex() {
      return this.$getState('productTagsIndex')
    },
    productBrandsIndex() {
      return this.$getState('productBrandsIndex')
    },
  },
})
