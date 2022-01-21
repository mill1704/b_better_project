<template>
  <div>
    <p>product type : {{ dataType }}</p>
    <h1 v-if="loading">Loading...</h1>
    <div v-for="(category, index) in dataType.category" :key="index">
      {{ category }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductType',
  data() {
    return {
      type: this.$route.query.type,
      dataType: '',
      items: '',
      loading: false,
    }
  },
  mounted() {
    new Promise((resolve) => resolve())
      .then(this.getData)
      .then(this.getDataType)
      .then(() => (this.loading = false))
  },
  methods: {
    getDataType() {
      this.loading = true
      this.$_.filter(this.productType, (i) => {
        if (i.type === this.type) this.dataType = i
      })
      this.loading = false
    },
    async getData() {
      try {
        this.loading = true
        const resp = await this.$axios.$get(`${ this.$config.baseUrl }?product_type=${this.type}`)
        this.items = resp
      } catch (error) {
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style></style>
