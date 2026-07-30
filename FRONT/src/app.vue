<template>
  <div class="main-container">
    <header class="app-header">
    <nav>
    <router-link v-if="$route.path !== '/'" to="/">Home</router-link>
    <router-link v-else to="/exam">Exam</router-link>
    </nav>
    </header>
    <main class="app-main">
      <div></div>
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