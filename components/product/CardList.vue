<template>
  <div :id="item.id" class="product-list-card p-3" @click="goToPage">
    <div class="image-wrap">
      <img :src="setImage" />
    </div>
    <div class="content text-left pt-3">
      <p class="name text-sm">{{ item.name }}</p>
      <p class="text-xs pt-2 mt-auto">Brand: {{ item.brand }}</p>
      <p class="text-xs">~{{ item.price }} {{ item.currency || 'USD' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardList',
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      emptyImage: 'https://via.placeholder.com/640x480',
    }
  },
  computed: {
    setImage() {
      return this.item.image_link || this.emptyImage
    },
  },
  methods: {
    goToPage() {
      //   this.$router.push(`/product/brand?brand=${this.item}`)
    },
  },
}
</script>

<style></style>
