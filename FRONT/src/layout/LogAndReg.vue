<style scoped>
 @import '@/assets/styles/login.css';
</style>

<template>
    <header class="main-header">
        <nav>
            <router-link v-if="$route.path !== '/'" to="/">Home</router-link>
            <router-link v-else to="/exam">Exam</router-link>
        </nav>
    </header>
    <main class="app-main">
        <router-view />
    </main>
    <footer class="app-footer">
        <p>© All are practices</p>
    </footer>
</template>