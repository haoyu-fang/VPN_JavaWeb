<script setup>
import { useRouter } from 'vue-router';
const r = useRouter();
const login = () =>{
    r.push({name: 'login'});
}

</script>

<template>
    <header class="app-header">
      <nav>
            <router-link v-if="$route.path !== '/'" to="/">Home</router-link>
            <router-link v-else to="/exam">Exam</router-link>
            
            <button class="changebtn" @click="login">login</button>
        </nav>
    </header>
</template>

<style>
 @import'@/assets/styles/header.css'
</style>