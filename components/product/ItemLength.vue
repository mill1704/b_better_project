<template>
  <div class="text-right text-sm text-gray-800 dark:text-gray-700">
    <span class="text-primary">{{ length }}</span> items
  </div>
</template>

<script>
export default {
  name: 'ProductItemLength',
  props: {
    length: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>
</style>