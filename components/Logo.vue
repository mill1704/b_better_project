<template>
  <nuxt-link :to="path" :class="{ 'pointer-events-none': disabled }">
    <img
      :src="require(`~/assets/images/${isDarkMode ? 'logo-dark' : 'logo'}.png`)"
      :width="width"
      :class="alignment"
      alt="logo"
    />
  </nuxt-link>
</template>

<script>
export default {
  name: 'LogoTheme',
  props: {
    width: {
      type: Number,
      default: 80,
    },
    path: {
      type: String,
      default: '/',
    },
    disabled: {
      type: Boolean,
    },
    align: {
      type: String,
      default: 'left',
    },
  },
  computed: {
    alignment() {
      let align = ''
      if (this.align === 'center') align = 'mx-auto'
      else if (this.align === 'right') align = 'ml-auto'
      else align = null

      return align
    },
  },
}
</script>

<style>
</style>