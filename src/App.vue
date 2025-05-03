<script setup lang="ts">
import Sidebar from './components/sidebar.vue'
import Header from '@/components/header.vue'
</script>

<template>
 
  <Sidebar></Sidebar>
  <Header></Header>
  <router-view></router-view>
</template>

<style scoped>

</style>
