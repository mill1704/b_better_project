<template>
  <div class="product-type">
    <SpinnerLoading v-if="loading" :loading="loading" />
    <div class="main-layout">
      <Header
        type="type"
        :result="dataType.title"
        :product-category="dataType.category"
        filter
        @resultFilterProduct="getResultFilter"
      />
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
  name: 'TypeList',
  data() {
    return {
      loading: true,
      softLoading: true,
      typeName: this.$route.query.type,
      dataType: [],
      items: [],
      category: '',
      brand: '',
      tag: '',
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
        if (i.type === this.typeName) this.dataType = i
      })
      this.loading = false
    },
    async getData() {
      try {
        this.softLoading = true
        const resp = await this.$axios.$get(
          `${this.$config.baseUrl}?product_type=${this.typeName}&product_category=${this.category}&brand=${this.brand}&product_tags=${this.tag}`
        )
        this.items = resp
      } catch (error) {
      } finally {
        this.softLoading = false
      }
    },
    getResultFilter(category, type, brand, tag) {
      this.category = category === 'All' ? '' : category
      this.brand = brand === 'All' ? '' : brand
      this.tag = tag === 'All' ? '' : tag
      this.getData()
    },
  },
}
</script>

<style></style>
