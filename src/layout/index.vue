<template>
  <div class="app-container">
    <Sidebar class="sidebar-container" />
    <section class="main-container">
      <Navbar />
      <AppMain />
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useGetters } from '@/store/getter'
import Navbar from './components/Navbar/index.vue'
import AppMain from './components/AppMain.vue'
import Sidebar from './components/Sidebar/index.vue'

const Getter = useGetters()
const sideBarWidth = computed(() => (Getter.collapsed ? '54px' : '210px'))
</script>

<style lang="scss" scoped>
.app-container {
  .sidebar-container {
    z-index: 1001;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: v-bind(sideBarWidth);
    transition: width 0.28s;
  }
  .main-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: v-bind(sideBarWidth);
    transition: left 0.28s;
  }
}
</style>
