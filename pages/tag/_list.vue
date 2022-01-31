<template>
  <div class="product-tag">
    <div class="main-layout">
      <Header type="tag" :result="tagName" filter @resultFilterProduct="getResultFilter" />
      <div class="container mt-4">
        <SpinnerSoftLoading v-if="softLoading" :loading="softLoading" class="text-center my-8" />
        <div v-else>
          <div v-if="$_.isEmpty(items)">
            <SectionResultNotFound class="mt-12" />
          </div>
          <div v-else>
            <ProductItemLength :length="items.length" />
            <div class="flex flex-wrap -mx-2">
              <div
                v-for="(product, index) in items"
                :key="index"
                class="product-list-card-wrap px-2 my-3"
              >
                <ProductCardItem :item="product" />
              </div>
            </div>
          </div>
          <ButtonPrimary
            text="Back"
            theme="btn-outline-primary"
            icon="arrow-left"
            class="mt-12"
            @action="getBack()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllTagList',
  data() {
    return {
      softLoading: true,
      tagName: this.$route.query.tag,
      items: '',
      type: '',
      brand: '',
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        this.softLoading = true
        const resp = await this.$axios.$get(
          `${this.$config.baseUrl}?product_tags=${this.tagName}&product_type=${this.type}&brand=${this.brand}`
        )
        this.items = resp
      } catch (error) {
      } finally {
        this.softLoading = false
      }
    },
    getResultFilter(category, type, brand, tag) {
      this.type = type === 'All' ? '' : type
      this.brand = brand === 'All' ? '' : brand
      this.getData()
    },
  },
}
</script>

<style>
</style>