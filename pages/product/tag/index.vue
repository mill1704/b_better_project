<template>
  <div>
    {{ tag }}
    <h1 v-if="loading">Loading...</h1>
  </div>
</template>

<script>
export default {
  name: 'ProductTag',
  data() {
    return {
      tag: this.$route.query.tag,
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
        const resp = await this.$axios.$get(`${ this.$config.baseUrl }/products.json?product_tags=${this.tag}`)
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