<template>
  <el-affix>1</el-affix>
  <el-autocomplete></el-autocomplete>
</template>

<script setup>
watchEffect(() => {
  ElMessage.success('Welcome')
})
</script>

<style lang="scss" scoped></style>
