<style scoped>
 @import '@/assets/styles/login_layout.css';
</style>

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

        </div>
    </main>
    <footer class="app-footer"></footer>
</template>

<script setup>
import {ref, reactive} from 'vue'

const Data =reactive({
    account:'',
    password:''
})

const isloading = ref(false)
const submit = async()=>{
    if(Data.account==='' || Data.password===''){
        alert('請輸入帳號密碼')
        return
    }else if(!Data.account || !Data.password){
        alert('帳號密碼錯誤')
        return
    }
}
</script>


