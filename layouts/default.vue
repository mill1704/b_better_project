<template>
  <div :class="{ dark: isDarkMode }">
    <div class="wrapper">
      <Navbar />
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  head() {
    return {
      title: 'b better',
    }
  },
  watch: {
    isDarkMode(newVal, oldVal) {
      if(newVal && newVal !== oldVal) document.querySelector('body').classList.add('bg-black');
      else document.querySelector('body').classList.remove('bg-black');
    }
  },
}
</script>

<style>
</style>