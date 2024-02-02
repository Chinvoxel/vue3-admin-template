<template>
  <Transition name="slide-fade" mode="out-in">
    <div class="sidebar-logo-container" :key="collapse ? 'collapse' : 'expand'">
      <img class="sidebar-logo" :src="website.logo" />
      <span v-if="!collapse" class="sidebar-title">{{ $t(website.title) }}</span>
    </div>
  </Transition>
</template>

<script setup>
import website from '@/config/website'

defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.2s;
}

.slide-fade-leave-active {
  transition: all 0.2s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  overflow: hidden;
  line-height: 50px;
  background: #2b2f3a;

  .sidebar-logo {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .sidebar-title {
    flex-shrink: 0;
    min-width: 126px;
    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
  }
}
</style>
