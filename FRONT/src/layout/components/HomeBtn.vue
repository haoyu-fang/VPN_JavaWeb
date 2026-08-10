<script setup>  
import { useRouter } from 'vue-router'
const r = useRouter();
const back = () => {
    r.push({ name: 'home'})
}
</script>

<template>
<button class="backbtn" @click="back" aria-label="Home">
    <svg xmlns="http://www.w3.org/2000/svg" view-box="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
</button>
</template>
<style>
 @import "@/assets/styles/comp_css/Homebtn.css"
</style>