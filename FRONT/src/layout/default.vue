<script setup>
import pagefooter from './components/footer.vue'
import h from '@/layout/components/header.vue';
</script>

<template>

<div class="main">
  <h/>
    <main class="app-main">
     <router-view />
    </main>
    <pagefooter />
  </div>
</template>
<style scoped>
 @import '@/assets/styles/Default_Layout.css';
</style>