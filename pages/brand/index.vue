<template>
  <div class="page-brand-all">
    <div class="main-layout">
      <Header type="brands" search placeholder="Product Brands" @resultSearch="getResultSearch" />
      <div v-if="$_.isEmpty(items)">
        <SectionResultNotFound class="mt-12" />
      </div>
      <div v-else class="content">
        <div v-for="(keyword, index) in items" :key="index" class="mb-6">
          <p
            class="
              text-base
              font-medium
              uppercase
              pb-1
              mb-2
              border-b border-gray-600
              dark:border-gray-900 dark:text-gray-700
            "
          >
            {{ keyword.key }}
          </p>
          <div class="flex flex-wrap items-center -mx-2">
            <div
              v-for="(item, itemKey) in keyword.data"
              :key="itemKey"
              class="product-brand-card-wrap px-2 mt-2"
            >
              <ProductCardBrand :item="item.name" class="!bg-gray-600 dark:!bg-gray-900" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllBrand',
  data() {
    return {
      searchResult: '',
    }
  },
  computed: {
    itemResult() {
      return this.$_.filter(this.productBrands, (i) => {
        return i.toLowerCase().includes(this.searchResult.toLowerCase())
      })
    },
    items() {
      return this.$_.chain(this.itemResult)
        .map((i) => ({ key: i.substring(0, 1), name: i }))
        .groupBy('key')
        .map((value, key) => ({ key, data: value }))
        .value()
    },
  },
  methods: {
    getResultSearch(val) {
      this.searchResult = val
    },
  },
}
</script>

<style>
</style>