<template>
  <div class="soft-loading">
    <beat-loader :loading="loading" :color="color" :size="size"></beat-loader>
  </div>
</template>

<script>
export default {
  name: 'SoftLoadingWebsite',
  props: {
    loading: Boolean,
    size: {
      type: String,
      default: '15px',
    },
  },
  data() {
    return {
      color: '#E884C1',
    }
  },
}
</script>

<style>
</style>