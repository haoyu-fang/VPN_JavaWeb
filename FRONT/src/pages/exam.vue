<template>
  <div class="Exam-container">
    <h1>🎉 我的第2個 Vue 3 應用程式！</h1>
    <p>目前的點擊次數：{{ count }}</p>
    <button @click="increment">點我加 1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 宣告一個響應式變數 count，初始值為 0
const count = ref(100)

// 宣告點擊按鈕時執行的函式
function increment() {
  count.value++
}

</script>

<style scoped>
.main-container {
  padding: 30px;
  text-align: center;
  font-family: sans-serif;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}
</style>