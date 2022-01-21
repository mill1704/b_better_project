<template>
  <div class="font-medium dark:text-white mb-2" :class="setTextSize">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'TextHeader',
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    textSize: {
      type: String,
      default: 'base',
    },
  },
  computed: {
    setTextSize() {
        return this.textSize && `text-${ this.textSize }`
    },
  },
}
</script>

<style>
</style>