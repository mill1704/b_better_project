<template>
  <div class="filter">
    <div class="section-first flex justify-center pb-2 mx-auto relative z-1 bg-white dark:bg-black">
      <PlusSquareIcon
        v-if="!isExpand"
        size="16"
        class="stroke-gray-900 dark:stroke-white mt-0.5 cursor-pointer relative right-8"
        @click="expandItem"
      />
      <MinusSquareIcon
        v-if="isExpand"
        size="16"
        class="stroke-gray-900 dark:stroke-white mt-0.5 cursor-pointer relative right-8"
        @click="expandItem"
      />
      <div v-if="type === 'type'" class="select-category flex items-start justify-center -ml-4">
        <p class="text-sm dark:text-white pr-2">Category :</p>
        <div class="text-sm flex-1">
          <span
            class="text-gray-800 cursor-pointer dark:text-gray-700"
            :class="{ '!text-primary font-medium': selectedCategory === 'All' }"
            @click="getCategory('All')"
            >All</span
          >
          <span v-for="(category, index) in categories" :key="index">
            <span class="px-2 dark:text-gray-700">|</span>
            <span
              class="text-gray-800 cursor-pointer dark:text-gray-700"
              :class="{ '!text-primary font-medium': selectedCategory === category }"
              @click="getCategory(category)"
              >{{ category.replace('_', ' ') }}</span
            >
          </span>
        </div>
      </div>
      <div v-else class="select-type flex items-start justify-between max-w-250px w-full -ml-4">
        <p class="text-sm dark:text-white">Type :</p>
        <v-select
          v-model="selectedType"
          :options="productType"
          :reduce="(productType) => productType.type"
          label="title"
          class="none-outline ml-2"
          :class="{ isAll: selectedType === 'All' }"
          @input="getFilter"
        ></v-select>
      </div>
    </div>

    <transition name="slide-down">
      <div v-if="isExpand" class="section-expand max-w-250px mt-2 mx-auto">
        <div v-if="type !== 'brand'" class="select-brand flex items-start justify-between mb-2">
          <p class="text-sm dark:text-white">Brand :</p>
          <v-select
            v-model="selectedBrand"
            :options="productBrands"
            class="none-outline ml-2"
            :class="{ isAll: selectedBrand === 'All' }"
            @input="getFilter"
          ></v-select>
        </div>
        <div v-if="type !== 'tag'" class="select-tag flex items-start justify-between mb-2">
          <p class="text-sm dark:text-white">Tag :</p>
          <v-select
            v-model="selectedTag"
            :options="productTags"
            class="none-outline ml-2"
            :class="{ isAll: selectedTag === 'All' }"
            @input="getFilter"
          ></v-select>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HeaderItem',
  transition: 'slide-down',
  props: {
    type: {
      type: String,
      default: 'type',
    },
    resultFilter: {
      type: Function,
      default: () => {},
    },
    categories: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isExpand: false,
      selectedCategory: 'All',
      selectedType: 'All',
      selectedBrand: 'All',
      selectedTag: 'All',
    }
  },
  mounted() {},
  methods: {
    expandItem() {
      this.isExpand = !this.isExpand
    },
    getCategory(category) {
      this.selectedCategory = category
      this.getFilter()
    },
    getFilter() {
      if (!this.selectedType) this.selectedType = 'All'
      else if (!this.selectedBrand) this.selectedBrand = 'All'
      else if (!this.selectedTag) this.selectedTag = 'All'
      this.$emit(
        'resultFilter',
        this.selectedCategory,
        this.selectedType,
        this.selectedBrand,
        this.selectedTag
      )
    },
  },
}
</script>

<style>
</style>