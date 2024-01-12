<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
import elementZhLocale from 'element-plus/dist/locale/zh-cn.mjs'
import elementEnLocale from 'element-plus/dist/locale/en.mjs'
import { computed } from 'vue'
import { useGetters } from '@/store/getter'

const locales = {
  zh: elementZhLocale,
  en: elementEnLocale
}

const Getter = useGetters()
const locale = computed(() => locales[Getter.language])
</script>

<style lang="scss" scoped></style>
