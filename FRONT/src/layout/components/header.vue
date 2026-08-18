<script setup>
import { useRouter,useRoute } from 'vue-router';
import { computed } from 'vue';
const route = useRoute();
const ishome = computed(() => route.path === '/' )
const r = useRouter();
const login = () =>{
    r.push({name: 'login'});
}
const gohome = () =>{
    r.push({name: 'home'});
}
const goexam = () =>{
    r.push({name: 'exam'});
}

</script>

<template>
    <header class="homeheader">
            <div class="Bigtitle">Avc
            </div>
            <div class="btngroup">
                <button class="changebtn" v-if="ishome" @click ="goexam">Exam</button>
                <button class="changebtn" v-else @click ="gohome">Home</button>
                <button class="changebtn" @click="login">login</button>
            </div>
    </header>
</template>

<style>
 @import'@/assets/styles/header.css'
</style>