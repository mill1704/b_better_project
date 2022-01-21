<template>
  <NuxtLink
    :to="link"
    class="text-sm font-medium transition-all duration-300 flex items-center w-max mx-auto my-6"
    :class="setTheme"
  >
    {{ text }}
    <ArrowRightIcon v-if="icon && icon === 'arrow-right'" size="18" class="ml-1" />
  </NuxtLink>
</template>

<script>
export default {
  name: 'ButtonLink',
  props: {
    link: {
      type: String,
      default: '/',
    },
    theme: {
      type: String,
      default: 'default',
    },
    text: {
      type: String,
      default: 'title',
    },
    icon: {
        type: String,
        default: null
    }
  },
  computed: {
    setTheme() {
      let theme = ''
      if (this.theme === 'default') theme = 'text-gray-900 hover:text-primary dark:text-white dark:hover:text-primary'
      return theme
    },
  },
}
</script>

<style></style>
