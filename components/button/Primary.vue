<template>
  <button
    :class="setTheme"
    class="text-sm font-medium transition-all duration-300 flex items-center justify-center w-max mx-auto min-w-130px"
    @click="btnAction"
  >
    <ArrowLeftIcon v-if="icon && icon === 'arrow-left'" size="18" class="mr-1" />
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ButtonPrimary',
  props: {
    text: {
      type: String,
      default: 'button name',
    },
    action: {
        type: Function,
        default: () => {}
    },
    theme: {
      type: String,
      default: 'default',
    },
    icon: {
      type: String,
      default: null,
    },
  },
  computed: {
    setTheme() {
      let theme = ''
      if (this.theme === 'btn-outline-primary') theme = 'text-primary border-2 border-primary rounded-full py-1.5 px-5 hover:text-white hover:bg-primary'
      return theme
    },
  },
  methods: {
    btnAction() {
      this.$emit('action')
    },
  },
}
</script>

<style></style>
