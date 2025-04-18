# Graphic Line Wave

## 簡介
一個使用 HTML Canvas 實現的簡單優雅的波浪線動畫。波浪線會隨機生成，並自然地從右向左流動，呈現出平滑、連續的波動效果。

## 功能特點
- 全屏顯示的波浪線動畫
- 波浪線會自然、平滑地從右向左流動
- 每次載入頁面時，波浪線都會以隨機的振幅、頻率和位置生成
- 使用 `requestAnimationFrame` 實現高效流暢的動畫
- 精細的線條寬度控制（0.5px）

## 使用方式
1. 克隆此倉庫：
   ```bash
   git clone https://github.com/chenweichiang/Graphic-Line-Wave.git
   ```
2. 在瀏覽器中打開 `index.html` 文件。

## 開發過程中使用的提示
- "把 index 改成只顯示全畫面的 main.js"
- "我想要讓 main 中的波浪是同一條線自然的隨機波動像波浪一樣"
- "讓線彎曲的曲率減少 50%"

## 更新日誌
### Version 1.2.0 (2024-04-20)
- 優化波浪線的曲率控制
- 調整波浪線的彎曲程度，使其更加自然
- 添加垂直方向的飄浮效果，增強視覺動感
- 完善波形參數的隨機生成範圍

### Version 1.1.0 (2024-04-20)
- 將線條寬度從 2.5px 減少到 0.5px，實現更精緻的視覺效果
- 優化了波浪線的顯示效果，使其更加細緻優雅

### Version 1.0.0
- 初始版本發布