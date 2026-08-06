<script setup>
import {ref, reactive} from 'vue'
const props=defineProps({
    isOpen:{
        type:Boolean,
        default:false
    }
})
const emit = defineEmits(['close','success'])
const isloading = ref(false)

const form=reactive({
    email:'',
    password:'',
    confirmpassword:''
})

const handleClose=()=>{
    emit('close')
}
const handleSubmit=async()=>{
    if(form.email==='' || form.password==='' || form.confirmpassword===''){
        alert('請輸入帳號密碼')
        return
    }else if(form.password!==form.confirmpassword){
        alert('密碼不一致')
        return
    }
    isloading.value=true

    try{
        await new Promise((reslove)=>setTimeout(reslove,500))
        alert('註冊成功')
        emit('success')
        handleClose()
    }catch(error){
        alert('註冊失敗')
    }finally{
        if(isloading.value){
            isloading.value=false
        }
    }
}
</script>

<template>
    <Teleport to="body">
        <Transition name="Fade">
            <div v-if="isOpen" class="modal-overlay" @click.self="handleClose">
                <div class="modal-card">
                    <button class="closebtn" @click="handleClose">&times;</button>
                    <h2 class="title_font">會員註冊</h2>
                    <form @submit.prevent="handleSubmit" class="form_container">
                        <div>
                            <div class="insertcard">
                            <label>帳號</label>
                            <input v-model="form.email" type="email" required placeholder="請輸入Email" />
                            </div>
                            <div class="insertcard">
                            <label>密碼</label>
                            <input v-model="form.password" type="password" required placeholder="請輸入密碼" />
                            </div>
                            <div class="insertcard">
                            <label>確認密碼</label>
                            <input v-model="form.confirmpassword" type="password" required placeholder="請確認密碼" />
                            </div>
                            <div class="btncard">
                            <button type="submit" class="submitbtn" :disabled="isloading">{{ isloading ? '註冊中...' : '確認註冊' }}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
 @import '@/assets/styles/comp_css/overlay.css';
 @import '@/assets/styles/comp_css/reg.css';
</style>