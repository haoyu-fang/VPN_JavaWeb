<template>
  <div class="main-container">
    <header class="app-header">
    <nav>
    <router-link v-if="$router.path !== '/'" to="/">Home</router-link>
    <router-link v-else to="/exam">exam</router-link>
    </nav>
    </header>
    <main class="app-main">
     <router-view />
    </main>
    <footer class="app-footer">
      <p>© All are practices</p>
      </footer>
  </div>
</template>
<style scoped>
 @import './assets/styles/layout.css';
</style>