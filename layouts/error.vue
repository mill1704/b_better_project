<template>
  <div class="page-error">
    <div class="main-layout text-center !pt-12">
      <AlertCircleIcon size="80" class="mx-auto stroke-gray-900 dark:stroke-white stroke-1" />
      <p class="text-2xl font-medium dark:text-white mt-4 mb-2">Sorry !</p>
      <div class="text-sm text-gray-800 dark:text-gray-700">
        <span v-if="error.statusCode === 404">The Page You're Looking For Was Not Found</span>
        <span v-else>{{ error.message }}</span>
      </div>
      <ButtonPrimary
        text="Back"
        theme="btn-outline-primary"
        icon="arrow-left"
        class="mt-12"
        @action="getBack()"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>