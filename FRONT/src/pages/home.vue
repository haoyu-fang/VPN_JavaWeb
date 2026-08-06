<template>
  <Header></Header>
  <div class="Home-container">
    <h1>🎉 Docker test！</h1>
    <p>目前的點擊次數：{{ count }}</p>
    <button @click="increment">點我加 1</button>
  </div>
</template>

<script setup>
import HeaderCellRenderer from 'element-plus/es/components/table-v2/src/renderers/header-cell.mjs';
import { ref } from 'vue'

// 宣告一個響應式變數 count，初始值為 0
const count = ref(0)

// 宣告點擊按鈕時執行的函式
function increment() {
  count.value++
}
</script>


<style scoped>
@import '../assets/styles/Default_Layout.css';
</style>