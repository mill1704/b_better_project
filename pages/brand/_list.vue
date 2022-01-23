<template>
  <div>
    {{ brand }}
    <h1 v-if="loading">Loading...</h1>
  </div>
</template>

<script>
export default {
  name: 'AllBrandList',
  data() {
    return {
      brand: this.$route.query.brand,
      items: '',
      loading: false,
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        this.loading = true
        const resp = await this.$axios.$get(`${ this.$config.baseUrl }?brand=${this.brand}`)
        this.items = resp
      } catch (error) {
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style>
</style>