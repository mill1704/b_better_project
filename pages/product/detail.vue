<template>
  <div class="product-detail">
    <SpinnerLoading v-if="loading" :loading="loading" />
    <div v-else class="main-layout">
      <div class="border-b border-gray-600 dark:border-gray-900 pb-4">
        <Header type="name" :result="item.name" class="border-transparent" />
        <img :src="setImage" class="mx-auto max-w-200px rounded-lg" />
        <div class="caption text-center text-sm dark:text-gray-700 py-4">
          <p class="py-1">{{ item.name }}</p>
          <p v-if="item.brand" class="pt-1 capitalize">
            <span class="font-medium">Brand:</span> {{ item.brand }}
          </p>
          <p v-if="item.product_type" class="pt-1 capitalize">
            <span class="font-medium">Type:</span> {{ item.product_type }}
          </p>
          <p v-if="item.category" class="pt-1 capitalize">
            <span class="font-medium">category:</span> {{ item.category }}
          </p>
          <p class="pt-4">
            <span class="font-medium">Price:</span> ~{{ item.price }} {{ item.currency || 'USD' }}
          </p>
        </div>
        <div
          class="
            color
            text-center
            dark:text-gray-700
            flex flex-wrap
            items-center
            justify-center
            max-w-3xl
            mx-auto
          "
        >
          <span class="text-sm font-medium">Color :</span>
          <span v-if="$_.isEmpty(item.product_colors)">-</span>
          <template v-for="(color, index) in item.product_colors">
            <div :key="index" class="flex items-center mx-2">
              <div class="w-4 h-4 rounded-full" :style="`background: ${color.hex_value}`"></div>
              <div class="text-xs pl-2">{{ color.colour_name }}</div>
            </div>
          </template>
        </div>
        <div class="description text-center pt-6 max-w-720px mx-auto">
          <p class="text-sm dark:text-gray-700 font-medium">Description</p>
          <p class="text-xs pt-2 text-gray-800 dark:text-gray-700">{{ item.description }}</p>
        </div>
        <div
          v-if="!$_.isEmpty(item.tag_list)"
          class="tag flex flex-wrap items-center justify-center pt-6"
        >
          <span class="text-sm dark:text-gray-700 font-medium">Tags :</span>
          <div class="flex flex-wrap justify-center">
            <div
              v-for="(tag, index) in item.tag_list"
              :key="index"
              class="product-tag-card-wrap px-2 my-2"
            >
              <ProductCardTag :item="tag" />
            </div>
          </div>
        </div>
        <p class="text-xs text-gray-800 dark:text-gray-700 text-center pt-7">
          Updated at: {{ $moment(item.updated_at).format('DD MMM YYYY') }}
        </p>
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
</template>

<script>
export default {
  name: 'DetailProduct',
  data() {
    return {
      product_id: this.$route.query.id,
      item: '',
      loading: true,
      emptyImage: 'https://via.placeholder.com/640x480',
    }
  },
  computed: {
    setImage() {
      return this.item.api_featured_image || this.item.image_link || this.emptyImage
    },
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        const resp = await this.$axios.$get(`${this.$config.ProductUrl}/${this.product_id}.json`)
        this.item = resp
      } catch (error) {
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style></style>
