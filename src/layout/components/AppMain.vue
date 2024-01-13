<template>
  <main class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="page" mode="out-in">
        <div class="container" :key="route.fullPath">
          <keep-alive>
            <component v-if="route.meta.keepAlive" :is="Component" />
          </keep-alive>

          <component v-if="!route.meta.keepAlive" :is="Component" />
        </div>
      </transition>
    </router-view>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  height: calc(100vh - 50px);
  padding: 20px;
  overflow: hidden;
  .container {
    width: 100%;
    height: 100%;
  }
}
</style>
