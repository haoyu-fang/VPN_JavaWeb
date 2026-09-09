<template>
  <div class="bento-main">
    <!-- 卡片 1：占 2 欄的「暖木主卡片」 -->
    <div class="bento-card wood-card col-span-2">
      <div class="card-badge">✨ 熱門模組</div>
      <p>目前的點擊次數：{{ count }}</p>
      <button @click="increment">點我加 1</button>
    </div>

    <!-- 卡片 2：高亮玻璃卡片 -->
    <div class="bento-card glass-card">
      <span class="stat-number">99.9%</span>
      <p class="stat-label">系統穩定度</p>
    </div>

    <!-- 卡片 3：點綴色卡片 -->
    <div class="bento-card highlight-card">
      <h3>快速開始 ➔</h3>
      <p>立即體驗流暢的互動功能</p>
    </div>
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
@import '@/assets/styles/home.css';
</style>