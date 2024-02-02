<template>
  <div class="navbar">
    <Hamburger :is-active="store.collapsed" @toggle="toggleSideBar" />
    <Breadcrumb />
    <LangSelect class="language-container" />
    <AvatarIcon class="avatar-container" />
  </div>
</template>

<script setup>
import { useAppStore } from '@/store/app'
import LangSelect from '@comps/LangSelect/index.vue'
import Hamburger from './Hamburger.vue'
import Breadcrumb from './Breadcrumb.vue'
import AvatarIcon from './AvatarIcon.vue'

const store = useAppStore()

const toggleSideBar = () => {
  store.TOGGLE_SIDEBAR()
}
</script>

<style lang="scss" scoped>
.navbar {
  position: relative;
  z-index: 9;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding-right: 15px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  transition: width 0.28s;

  .language-container {
    margin-left: auto;
  }

  .avatar-container {
    margin-left: 20px;
  }
}
</style>
