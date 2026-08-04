<script setup>
import pagefooter from './components/footer.vue'
</script>

<template>
<div class="main">
    <header class="app-header">
      <nav>
            <router-link v-if="$route.path !== '/'" to="/">Home</router-link>
            <router-link v-else to="/exam">Exam</router-link>
        </nav>
    </header>
    <main class="app-main">
     <router-view />
    </main>
    <pagefooter />
  </div>
</template>
<style scoped>
 @import '@/assets/styles/Default_Layout.css';
</style>