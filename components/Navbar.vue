<template>
  <div class="navbar bg-white dark:bg-black shadow-base">
    <div class="container flex items-center">
      <div class="nav-toggle md:hidden" @click="expandMenu">
        <MenuIcon size="20" class="mr-6 stroke-gray-800 dark:stroke-white" />
      </div>
      <div class="nav-logo pr-2">
        <Logo />
      </div>
      <div class="nav-menu" :class="{ isExpanded: isExpanded, 'isExpanded-dark': isDarkMode }">
        <div class="hide-menu md:hidden" @click="hideMenu">
          <XIcon size="26" class="stroke-gray-800 dark:stroke-white stroke-1" />
        </div>
        <template v-for="(menu, index) in menus">
          <nuxt-link
            :key="index"
            :to="menu.path"
            class="px-4 text-sm hover:text-primary transition-all duration-200 dark:text-white dark:hover:text-primary"
            >{{ menu.name }}</nuxt-link
          >
        </template>
      </div>
      <div class="nav-item ml-auto flex items-center">
        <div class="switch-mode" @click="switchMode">
          <input id="mode" v-model="webMode" type="checkbox" name="mode" />
          <div class="switch-toggle bg-gray-600 dark:bg-gray-800" :class="{ isDarkMode: isDarkMode }">
            <div class="dot bg-white dark:bg-gray-900">
              <SunIcon v-if="!isDarkMode" size="14" class="stroke-gray-800" />
              <MoonIcon v-else size="14" class="stroke-gray-800 dark:stroke-primary" />
            </div>
          </div>
        </div>
        <div class="flex items-center cursor-pointer">
          <img
            src="https://i.pravatar.cc/150?img=1"
            alt="profile"
            width="30"
            class="rounded-full"
          />
          <ChevronDownIcon size="16" class="ml-2 stroke-gray-800 dark:stroke-white" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarWebsite',
  props: {
    mode: {
      type: Boolean,
    },
  },
  data() {
    return {
      menus: [
        {
          name: 'Lorem',
          path: '/',
        },
        {
          name: 'Lorem',
          path: '/',
        },
        {
          name: 'Lorem',
          path: '/',
        },
        {
          name: 'Lorem',
          path: '/',
        },
      ],
      webMode: false,
      isExpanded: false,
    }
  },
  mounted() {
    this.webMode = this.isDarkMode
  },
  methods: {
    switchMode() {
      this.$setState('darkMode', this.webMode = !this.webMode);
    },
    expandMenu() {
      this.isExpanded = !this.isExpanded
    },
    hideMenu() {
      this.isExpanded = false
    },
  },
}
</script>

<style></style>
