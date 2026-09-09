<template>
  <div class="Exam-container">
    <div v-if="notFound">⚠️ 無該篇文章</div>
    <div v-else class="markdown-body" v-html="renderedmd"></div>
  </div>
</template>

<script setup>
import { usemd } from '@/pages/js/usemarkdown.js';
const { renderedHtml, notFound, loading } = usemd();

</script>