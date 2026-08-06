<script setup>
import {ref, reactive} from 'vue'
import regModal from '@/layout/components/regModal.vue'
const showRegModal = ref(false);

const Data =reactive({
    email:'',
    password:''
})

const isloading = ref(false);
const submit = async()=>{
    if(Data.email==='' || Data.password===''){
        alert('請輸入帳號密碼')
        return
    }else if(!Data.email || !Data.password){
        alert('帳號密碼錯誤')
        return
    }
}
</script>

<template>
    <header></header>
    <main class="log-main-container">
        <div class = "card">
            <h2 class="title_font">會員登入</h2>
            <div class="card_inner"> 
                <div class="left_Card">
                    帳號
                </div>
                <div class="right_card">
                    adva
                </div>
            </div>
            <div class="card_inner"> 
                <div class="left_Card">
                    密碼
                </div>
                <div class="right_card">
                    adva
                </div>
            </div>
            <div class="btn_inner">
                <button class="r_btn" @click="showRegModal = true">加入會員</button>
                <button class="l_btn">登入</button>
            </div>
        </div>
    </main>
    <regModal :is-open="showRegModal" 
    @close="showRegModal=false"
    @success="showRegModal=false"
    />

    <footer class="app-footer"></footer>
</template>

<style scoped>
 @import '@/assets/styles/login_layout.css';

</style>