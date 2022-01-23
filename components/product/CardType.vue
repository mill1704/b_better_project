<template>
  <div class="product-type-card flex items-center" @click="goToPage">
    <img
      :src="require(`~/assets/images/type-product/${item.type}${ isDarkMode ? '-white' : '' }.png`)"
      alt="product type"
      width="40"
      height="40"
    />
    <p class="text-sm pl-3 dark:text-gray-700">{{ item.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductCardType',
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  methods: {
    goToPage() {
      this.$router.push(`/type/list?type=${ this.item.type }`)
    }
  }
}
</script>

<style>
</style>