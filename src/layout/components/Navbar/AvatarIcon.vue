<template>
  <el-dropdown class="avatar-container" trigger="click">
    <el-avatar :src="website.logo" :size="40" />

    <template #dropdown>
      <el-dropdown-menu>
        <router-link to="/login">
          <el-dropdown-item>Action 1</el-dropdown-item>
        </router-link>
        <router-link to="/login">
          <el-dropdown-item>Action 1</el-dropdown-item>
        </router-link>
        <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useRouter } from 'vue-router'
import website from '@/config/website'
import { useUserStore } from '@/store/user'

const store = useUserStore()
const router = useRouter()

const logout = () => {
  store.FedLogout().then(() => {
    router.replace({ name: 'Login' })
  })
}
</script>

<style lang="scss" scoped></style>
