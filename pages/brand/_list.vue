<template>
  <div class="product-brand">
    <div class="main-layout">
      <Header type="brand" :result="brandName" filter @resultFilterProduct="getResultFilter" />
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
  name: 'AllBrandList',
  data() {
    return {
      softLoading: true,
      brandName: this.$route.query.brand,
      items: '',
      type: '',
      tag: '',
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
          `${this.$config.baseUrl}?brand=${this.brandName}&product_type=${this.type}&product_tags=${this.tag}`
        )
        this.items = resp
      } catch (error) {
      } finally {
        this.softLoading = false
      }
    },
    getResultFilter(category, type, brand, tag) {
      this.type = type === 'All' ? '' : type
      this.tag = tag === 'All' ? '' : tag
      this.getData()
    },
  },
}
</script>

<style>
</style>