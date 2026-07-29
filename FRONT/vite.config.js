import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath , URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue() // 👈 關鍵：必須加入這行讓 Vite 解析 .vue 檔案
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // 設定 @ 代表 src 資料夾
    }
  }
})