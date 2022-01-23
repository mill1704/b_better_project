<template>
  <div class="footer container mt-auto flex flex-col sm:flex-row justify-center sm:justify-between py-2 text-xs dark:text-gray-700">
    <p class="text-center sm:text-left">
      Makeup API from
      <a href="http://makeup-api.herokuapp.com" target="_blank">http://makeup-api.herokuapp.com</a>
    </p>
    <button type="button" class="btn-back-to-top flex items-center justify-center order-first sm:order-last py-3 sm:py-0" @click="backToTop">
      Back to top
      <ArrowUpIcon size="12" class="ml-1" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'FooterWebsite',
  methods: {
    backToTop() {
        document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
    },
  },
}
</script>

<style>
</style>