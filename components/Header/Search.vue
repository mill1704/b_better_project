<template>
  <div class="search pb-2">
    <div class="search-field mx-auto md:max-w-375px">
      <SearchIcon size="16" class="stroke-gray-800 dark:stroke-gray-700 icon" />
      <input
        type="text"
        class="form-input border-gray-900 dark:border-gray-800"
        :placeholder="placeholder"
        @input="onSearch"
      />
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'
export default {
  name: 'SearchItem',
  props: {
    placeholder: {
      type: String,
      default: 'Enter some word',
    },
    resultSearch: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    onSearch: debounce(function(e) {
      this.$emit('resultSearch', e.target.value)
    }, 1000),
  },
}
</script>

<style></style>
