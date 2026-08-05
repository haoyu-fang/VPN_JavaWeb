<script setup>
import {ref, reactive} from 'vue'
const props=defineProps({
    isOpen:{
        type:Boolean,
        default:false
    }
})
const form=reactive({
    account:'',
    password:'',
    confirmPassword:''
})
const handleClose=()=>{
    emit('close')
}
const handleSubmit=async()=>{
    if(form.account==='' || form.password==='' || form.confirmPassword===''){
        alert('請輸入帳號密碼')
        return
    }else if(form.password!==form.confirmPassword){
        alert('密碼不一致')
        return
    }
}

</script>

<template>
    <header>
    </header>
</template>