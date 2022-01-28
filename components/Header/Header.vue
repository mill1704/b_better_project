<template>
  <div class="border-b border-gray-600 dark:border-gray-900 pb-4">
    <div class="py-6 text-2xl font-medium text-center dark:text-white">
      <p v-if="type === 'all'">All Products</p>
      <p v-else class="capitalize">Product {{ type }} : {{ result }}</p>
    </div>

    <HeaderFilter v-if="filter" :type="type" @resultFilter="getFilter" />
  </div>
</template>

<script>
export default {
  name: 'HeaderItem',
  transition: 'slide-down',
  props: {
    type: {
      type: String,
      default: 'type',
    },
    result: {
      type: String,
      default: '',
    },
    filter: Boolean,
    search: Boolean,
    resultFilterProduct: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      filterType: '',
      filterBrand: '',
      filterTag: '',
    }
  },
  mounted() {},
  methods: {
    getFilter(type, brand, tag) {
      this.filterType = type
      this.filterBrand = brand
      this.filterTag = tag
      this.$emit('resultFilterProduct', type, brand, tag)
    },
  },
}
</script>

<style></style>
