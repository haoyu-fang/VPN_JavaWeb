import {createApp} from 'vue'            // 從 Vue 套件中引入「建立應用程式」的函式
import './assets/styles/main.css'        // 引入全站的樣式檔（選擇性）
import App from './app.vue'            // 引入最頂層的根組件 App.vue  
//<-------------------引入router與Pinia------------------>
import  router from './router'           // 引入 router
import {createPinia} from 'pinia'        // 引入 Pinia
import ELementPlus from 'element-plus'   // 引入 Element Plus
import 'element-plus/dist/index.css'     // 引入 Element Plus 的樣式檔 
const app = createApp(App)              // 建立 Vue 實例
app.use(router)                          // 使用 router
app.use(createPinia())                   // 使用 Pinia
app.use(ELementPlus)                     // 使用 Element Plus
app.mount('#WebAndApp')                  // 將 Vue 應用程式「掛載」到 index.html 裡面 id 為 app 的 div 上