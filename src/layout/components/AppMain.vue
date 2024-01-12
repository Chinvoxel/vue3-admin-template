<template>
  <main class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <div :key="route.path">
          <keep-alive>
            <component :is="Component" v-if="$route.meta.keepAlive" />
          </keep-alive>
          <component :is="Component" v-if="!$route.meta.keepAlive" />
        </div>
      </transition>
    </router-view>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  padding: 20px;
  overflow: hidden;
}
</style>
