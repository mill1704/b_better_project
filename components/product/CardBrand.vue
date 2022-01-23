<template>
  <div class="product-brand-card" @click="goToPage">{{ item }}</div>
</template>

<script>
export default {
  name: 'ProductCardBrand',
  props: {
    item: {
      type: String,
      default: null,
    },
  },
  methods: {
    goToPage() {
      this.$router.push(`/brand/list?brand=${this.item}`)
    },
  },
}
</script>

<style>
</style>