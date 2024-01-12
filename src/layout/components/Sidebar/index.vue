<template>
  <div class="sidebar-container">
    <AppLogo :collapse="isCollapse" />

    <el-scrollbar wrap-class="scrollbar-wrapper">
      <AppMenu :collapse="isCollapse" />
    </el-scrollbar>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useGetters } from '@/store/getter'
import AppLogo from './Logo.vue'
import AppMenu from './Menu.vue'

const Getter = useGetters()
const isCollapse = computed(() => Getter.collapsed)
</script>

<style lang="scss" scoped>
.sidebar-container {
  width: 100%;
  height: 100vh;
  background-color: #304156;

  :deep {
    .el-scrollbar {
      height: calc(100vh - 50px);

      .scrollbar-wrapper {
        overflow-x: hidden !important;
      }
    }
  }
}
</style>
