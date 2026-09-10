
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { marked } from 'marked';

const route = useRoute();
const renderedHtml = ref('');
const notFound = ref(false);

const parsemarkdown = (content) =>{
    if(!content) return '';
    return content
    .replace(/<blockquote>\s*<p>\[!NOTE\]/g, '<div class ="article article-note"><div class = "article-title">筆記</div><p>')
    .replace(/<blockquote>\s*<p>\[!TIP\]/g, '<div class ="article article-tip"><div class = "article-title">提示</div><p>')
    .replace(/<blockquote>\s*<p>\[!WARNING\]/g, '<div class ="article article-warning"><div class = "article-title">警告</div><p>')
    .replace(/<\/p>\s*<\/blockquote>/g, '</p></div>')
}


export function useMarkdown() {
    const renderedHtml = ref('');
    const notFound = ref(false);
    const loading = ref(false);

    watchEffect(async () => {
       const slug = route.params.slug || 'vpn';
       notFound.value = false;
       loading.value = true;

       try {
        const res = await fetch('/articles/${slug}.md');
        if(!res.ok)throw new Error('Not Found');
        const mdText = await res.text();
        const rawHtml = marked.parse(mdText);
        renderedHtml.value = parsemarkdown(rawHtml);
       } catch(err){
            console.error('文章載入失敗:',err);
           notFound.value = true;
       } finally {
           loading.value = false;
       }
       return { renderedHtml, notFound, loading };
    });

}