<template>
  <div class="border-b border-gray-600 dark:border-gray-900 px-4 pb-4">
    <div class="py-6 text-2xl font-medium text-center dark:text-white">
      <p v-if="type === 'all'">All Products</p>
      <p v-else class="capitalize">
        Product {{ type }} <span v-if="result">: {{ result }}</span>
      </p>
    </div>
    <HeaderFilter
      v-if="filter"
      :type="type"
      :categories="productCategory"
      @resultFilter="getFilter"
    />
    <HeaderSearch v-if="search" />
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
    productCategory: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      filterCategory: '',
      filterType: '',
      filterBrand: '',
      filterTag: '',
    }
  },
  mounted() {},
  methods: {
    getFilter(category, type, brand, tag) {
      this.filterCategory = category
      this.filterType = type
      this.filterBrand = brand
      this.filterTag = tag
      this.$emit('resultFilterProduct', category, type, brand, tag)
    },
  },
}
</script>

<style></style>
