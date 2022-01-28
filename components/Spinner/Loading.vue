<template>
  <div class="main-loading">
    <grid-loader :loading="loading" :color="color" :size="size"></grid-loader>
  </div>
</template>

<script>
export default {
  name: 'LoadingWebsite',
  props: {
    loading: Boolean,
  },
  data() {
    return {
      color: '#E884C1',
      size: '20px',
    }
  },
}
</script>

<style>
</style>