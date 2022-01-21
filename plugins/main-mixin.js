import Vue from 'vue'

Vue.mixin({
  computed: {
    isDarkMode() {
      return this.$getState('darkMode')
    },
    productLists() {
      return this.$getState('productLists')
    },
    productType() {
      return this.$getState('productType')
    },
    productTags() {
      return this.$getState('productTags')
    },
    productBrands() {
      return this.$getState('productBrands')
    },
    productTagsIndex() {
      return this.$getState('productTagsIndex')
    },
    productBrandsIndex() {
      return this.$getState('productBrandsIndex')
    },
    productListsIndex() {
      return this.$getState('productListsIndex')
    },
  },
})
