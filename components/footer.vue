<template>
  <div class="footer container mt-auto flex justify-between py-2 text-xs dark:text-gray-700">
    <p>
      Makeup API from
      <a href="http://makeup-api.herokuapp.com" target="_blank">http://makeup-api.herokuapp.com</a>
    </p>
    <button type="button" class="btn-back-to-top flex items-center" @click="backToTop">
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