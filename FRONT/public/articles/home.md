# 🌿 Organic Tech | 個人技術實驗室

歡迎來到我的技術紀錄空間！這個網站是我在前端開發與系統架構上的實驗場，用於記錄學習歷程、實驗新技術以及存放開發筆記。

---

## 💡 系統與開發重點

> [!NOTE]
> 本站採用 **Headless Content Architecture** 架構設計。內容與程式碼完全解構，所有文章均以獨立的 Markdown 檔案儲存於 `public/articles/` 資料夾中，無需重新打包部署即可即時更新。

> [!TIP]
> 介面設計融合了 **Glassmorphism（磨砂玻璃）** 與暖木色調，打造沉浸且無負擔的閱讀體驗。

> [!WARNING]
> 部分實驗性功能與技術筆記仍在持續修訂中，範例程式碼僅供參考與測試使用。

---

## 🛠️ 技術棧架構 (Tech Stack)

| 模組分類 | 採用技術 / 套件 | 說明 |
| :--- | :--- | :--- |
| **前端框架** | Vue 3 (`<script setup>`) | Composition API 與響應式架構 |
| **路由管理** | Vue Router 4 | 動態 `:slug` 路由轉接機制 |
| **文章解析** | `marked` | 將原生 `.md` 轉譯為 HTML |
| **Logic Reuse** | Custom Composables (`usemd.js`) | 異步 Fetch 與自訂 Callouts 解析 |

---

## 📝 快速測試程式碼區塊

以下是本站核心數據流（Data Flow）的呼叫邏輯範例：

```javascript
// 核心 usemd Composable 解構使用範例
import { usemd } from '@/pages/js/usemarkdown.js';

const { renderedmd, notFound, loading } = usemd();