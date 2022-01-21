<template>
  <div class="pb-32">
    <h1 v-if="loading">Loading...</h1>

    <div v-else>
      <div class="header border-b border-gray-600 dark:border-gray-900">
        <div class="container py-6 text-center">
          <Logo :width="100" align="center" disabled />
          <p class="mt-5 text-gray-800 dark:text-gray-700">
            Vero quisquam alias tempora. Vero ut id quis ut temporibus necessitatibus ipsam
            exercitationem. Officiis nemo animi et ad quos. Ea minus aut ut eos aperiam optio quidem
            magnam. Voluptatem fugit quis molestiae repudiandae reprehenderit.
          </p>
        </div>
      </div>
      <div class="product-type container text-center pt-12">
        <TextHeader title="Products Type" />
        <div class="flex flex-wrap lg:justify-center -mx-2">
          <div
            v-for="(type, index) in productType"
            :key="index"
            class="product-type-card-wrap px-2 my-2"
          >
            <ProductCardType :item="type" />
          </div>
        </div>
      </div>
      <div class="product-tag container text-center pt-10">
        <TextHeader title="Or maybe you are looking for these products ?" />
        <div class="flex flex-wrap justify-center mx-auto max-w-screen-md">
          <div
            v-for="(tag, index) in productTagsIndex"
            :key="index"
            class="product-tag-card-wrap px-2 my-2"
          >
            <ProductCardTag :item="tag" />
          </div>
        </div>
        <ButtonLink link="/" theme="default" text="View more" icon="arrow-right" />
      </div>
      <div class="product-brand bg-secondary dark:bg-dark pt-6 pb-4">
        <div class="container text-center">
          <TextHeader title="Brands" class="mb-0" />
          <p class="text-xs text-gray-800 dark:text-gray-700 mb-2">
            Est odit et officiis omnis corporis recusandae odio ipsam.
          </p>
          <div class="flex flex-wrap items-center justify-center mx-auto max-w-xl">
            <div
              v-for="(brand, index) in productBrandsIndex"
              :key="index"
              class="product-brand-card-wrap px-4 my-2"
            >
              <ProductCardBrand :item="brand" />
            </div>
          </div>
        </div>
      </div>
      <div class="product-list container text-center pt-6">
        <TextHeader title="All Products" />
        <div class="flex flex-wrap lg:justify-center -mx-2">
          <div v-for="(product, index) in productListsIndex" :key="index" class="product-list-card-wrap px-2 my-2">
            <ProductCardList :item="product" />        
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      loading: true,
    }
  },
  computed: {},
  mounted() {
    new Promise((resolve) => resolve())
      .then(this.getProductTags)
      .then(this.getProductBrands)
      .then(this.getProductsLists)
      .then(() => (this.loading = false))
  },
  methods: {
    getProductTags() {
      this.$shuffle('productTagsIndex', this.productTags, 10)
    },
    getProductBrands() {
      this.$shuffle('productBrandsIndex', this.productBrands, 10)
    },
    async getProductsLists() {
      await this.$getProduct()
      this.$shuffle('productListsIndex', this.productLists, 10)
    },
  },
}
</script>
