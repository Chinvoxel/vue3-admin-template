<template>
  <el-menu
    class="custom-menu-container"
    :class="{ 'no-expand-menu-container': collapse }"
    :default-active="activeMenu"
    :collapse="collapse"
    :collapse-transition="false"
    :router="true"
    background-color="#304156"
    active-text-color="#409EFF"
    mode="vertical"
  >
    <template v-for="route in formattedRoutes">
      <template v-if="!route.children">
        <!-- 渲染单个子路由 -->
        <el-menu-item :index="route.path" :key="route.path">
          <component :is="route.meta.icon" class="menu-icon"></component>
          <template #title>{{ translateText(route.meta.title) }}</template>
        </el-menu-item>
      </template>

      <!-- 渲染包含多子路由的菜单 -->
      <template v-else>
        <el-sub-menu :index="route.path" :key="route.path" popper-class="custom-popper">
          <template #title>
            <component :is="route.meta.icon" class="menu-icon"></component>
            <span>{{ translateText(route.meta.title) }}</span>
          </template>
          <el-menu-item
            v-for="childRoute in route.children"
            class="nest-menu"
            :index="childRoute.path"
            :key="childRoute.path"
          >
            <component :is="childRoute.meta.icon" class="menu-icon"></component>
            <template #title>{{ translateText(childRoute.meta.title) }}</template>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </template>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import currentRoutes from '@/router/routes'
import { translateText } from '@/utils/i18n'

defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})

const currentRoute = useRoute()

const activeMenu = computed(() => currentRoute.path)
const formattedRoutes = computed(() => formatRoutes(currentRoutes))

// 格式化路由函数
const formatRoutes = (routes, parentPath = '') => {
  return routes
    .filter(route => !route.hidden)
    .map(route => {
      const formattedRoute = {
        ...route,
        path: route.redirect ? route.redirect : resolvePath(parentPath, route.path),
        children: route.children ? formatRoutes(route.children, route.path) : null
      }

      if (formattedRoute.children && formattedRoute.children.length === 1) {
        // 如果只有一个子路由，将子路由的属性合并到父级路由
        const childRoute = formattedRoute.children[0]
        formattedRoute.meta = {
          ...formattedRoute.meta,
          ...childRoute.meta
        }
        formattedRoute.children = null
      }

      return formattedRoute
    })
}

// 解析并拼接基础路径和路由路径，生成菜单链接
const resolvePath = (basePath, routePath) => {
  if (!basePath) return routePath
  if (basePath.endsWith('/')) return `${basePath}${routePath}`
  return `${basePath}/${routePath}`
}
</script>

<style lang="scss" scoped>
/* 折叠悬浮弹窗样式 */
.custom-popper {
  .nest-menu.el-menu-item {
    color: $color-gray;
    /* 菜单图标样式 */
    .menu-icon {
      flex-shrink: 0;
      width: 18px;
      height: 18px;
      margin-right: 16px;
      color: $color-gray;
    }
    &.is-active {
      color: $color-blue;
      .menu-icon {
        color: $color-blue;
      }
    }
  }
}
.custom-menu-container {
  /* 菜单图标样式 */
  .menu-icon {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin-right: 16px;
    color: $color-gray;
  }

  /* 收缩菜单样式 */
  &.no-expand-menu-container {
    width: auto;
    .menu-icon {
      margin: 0;
    }
  }
}

.custom-menu-container.el-menu {
  border-right: none;
  :deep {
    .el-menu-item {
      padding: 0 18px;
      color: $color-gray;
      background-color: $menuBg;
      &:hover {
        background-color: $menuHover !important;
      }
      &.is-active {
        color: $color-blue;
        .menu-icon {
          color: $color-blue;
        }
      }
      .el-menu-tooltip__trigger {
        padding: inherit;
      }
    }

    .el-sub-menu {
      background-color: $color-dark;
      .el-sub-menu__title {
        padding: 0 18px;
        color: $color-gray;
        &:hover {
          background-color: $menuHover !important;
        }
      }
      .el-submenu__icon-arrow {
        color: #909399;
      }
      .nest-menu.el-menu-item {
        padding: 0 45px;
        background-color: $subMenuBg !important;
        &:hover {
          background-color: $subMenuHover !important;
        }
      }
    }
  }
}
</style>
