<template>
  <div class="pb-32">
    <div class="header border-b border-gray-600 dark:border-gray-900">
      <div class="container py-6 text-center">
        <Logo :width="100" align="center" disabled />
        <p class="mt-5 text-gray-800 dark:text-gray-700">
          Vero quisquam alias tempora. Vero ut id quis ut temporibus
          necessitatibus ipsam exercitationem. Officiis nemo animi et ad quos.
          Ea minus aut ut eos aperiam optio quidem magnam. Voluptatem fugit quis
          molestiae repudiandae reprehenderit.
        </p>
      </div>
    </div>
    <div class="product-type container text-center pt-12">
      <div class="text-base dark:text-white mb-2">Products Type</div>
      <div class="flex flex-wrap items-center lg:justify-center -mx-2">
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
      <div class="text-base dark:text-white mb-2">
        Or maybe you are looking for these products ?
      </div>
      <div class="flex flex-wrap items-center justify-center mx-auto max-w-screen-md">
        <div
          v-for="(tag, index) in productTagsIndex"
          :key="index"
          class="product-tag-card-wrap px-2 my-2"
        >
        <ProductCardTag :item="tag" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {}
  },
  computed: {},
  mounted() {
    this.getProductTags()
  },
  methods: {
    getProductTags() {
      this.$shuffle('productTagsIndex', this.productTags, 10)
    },
  },
}
</script>
