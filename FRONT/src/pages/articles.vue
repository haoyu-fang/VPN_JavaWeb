<template>
  <div class="Exam-container">
    <div v-if="loading">Loading...</div>
    <div v-else-if="notFound">⚠️ 無該篇文章</div>
    <div v-else class="markdown-body" v-html="renderedmd"></div>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { usemd } from '@/pages/js/usemarkdown.js';
import { setcopyblock } from '@/utils/copyblock.js';
const { renderedmd, notFound, loading } = usemd();

watch(renderedmd, () => {
  setcopyblock('.copyblock');
});
</script>