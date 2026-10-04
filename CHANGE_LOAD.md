# README.md 与实际代码目录差异记录

> 对比对象：根目录 [README.md](./README.md) 与 `html/`、`canvas/docs/`、`css-effects-snippets/` 实际文件结构
> 生成时间：2026-10-04

---

## 一、HTML 部分

### 1. 命名不一致（同一效果，README 名 vs 目录名）

| README 中的名称 | 实际目录/文件 | 说明 |
|---|---|---|
| `shootingStars`（满天星的特效） | `html/shootingStarts/` | 目录名拼写为 "Starts"（应为 Stars），README 与目录拼写不一致 |
| `Christmas`（节日表白） | `html/Christma/` | 目录名缺少末尾字母 `s` |
| `china-hq`（五星红旗） | `html/china-hq.html` | 实际为单个 `.html` 文件，而非文件夹 |

### 2. 分类归属差异

- **`animateCounter`（动画数字计数器）**：README 将其列在第 15 项「css-animation」分组下（位于 `canvas/docs/` 章节内），但实际目录位于 `html/animateCounter/`，应归属 HTML 部分。

### 3. README 缺失项

- HTML 部分第 16 条为空行（仅写了 `16.`，无实际内容），属于未完成的占位。

---

## 二、Canvas 部分（`canvas/docs/`）

### 1. README 中记录但实际目录缺失的项

| README 条目 | 实际情况 |
|---|---|
| Demo → `CSS 时钟` | `canvas/docs/demo/` 下不存在 `clock/` 目录；`canvas/docs/index.html` 第 73 行中对应链接也已被注释 |
| Demo → `zhihu_particle` 知乎粒子登录动态效果 | `canvas/docs/demo/particle/` 存在，但仅含 `particle.html`、`particle-move.html` 等，**不存在名为 `zhihu_particle` 的文件或目录**；README 中的外链 `https://scorpio-li.github.io/Canvas/demo/particle/particle.html` 指向的是 `Canvas` 仓库而非本仓库 `css-effect`，命名与路径均对不上 |
| css-animation → `star-sky` 星空 | `canvas/docs/css-animation/` 下无 `star-sky/` 目录；`canvas/docs/index.html` 第 53 行对应链接已被注释。实际存在的星空相关 demo 是 `canvas/docs/demo/star/`（穿梭星空/星星连线），与 README 描述的「star-sky 星空」名称不一致 |

### 2. 实际存在但 README 未记录的项

| 实际目录 | 内容 |
|---|---|
| `canvas/docs/canvas/ball/` | 模拟自由落体运动 / 帧率监视器 / 背景图片 等 |
| `canvas/docs/canvas/changeImage/kehe.html` | 科赫雪花 |
| `canvas/docs/animation/碰撞运动/` | 碰撞运动切换背景 |
| `canvas/docs/animation/鼠标移动/` | 鼠标移动动画 |
| `canvas/docs/demo/` 下的 `box`、`electrocardiogram`、`graphics`、`jQueryParallaxScrolling`、`label`、`left_menu`、`simple-example` 等 | 均未在 README 中列出 |
| `canvas/docs/echarts/`、`canvas/docs/File/`、`canvas/docs/form/` | Echarts 地图、文件上传、表单验证等，README 完全未提及 |
| `canvas/docs/css-animation/` 下的 `hover`、`move`、`page`、`picture`、`photo-album`、`cssfont`、`malfunction.html`、`water` 等 | 均未在 README 中列出 |

### 3. 名称描述不精确

- README 「canvas → 4. 图片转canvas编辑」实际对应 `canvas/docs/canvas/changeImage/`（目录名为 changeImage，内部含 `editImage.html` 图片编辑），README 未注明目录名，定位困难。
- README 「canvas → 6. 水滴」实际对应 `canvas/docs/canvas/dropWater/`；同时 `css-animation` 分类下 README 又列了「11. 水滴」，对应的实际目录为 `canvas/docs/css-animation/water/` —— 两处「水滴」指向不同实现，README 未作区分说明。

---

## 三、css-effects-snippets 部分

- README 末尾仅写了一行 `## css-effects-snippets(css动效合集)`，**下方没有任何条目说明**。
- 实际该项目为 Vue 工程（含 `src/App.vue`、`src/effects.js`、`src/components` 等），并带有独立的 `css-effects-snippets/README.md`，主 README 未列出其中任何动效条目，内容严重缺失。

---

## 四、其他问题

1. README 中 `html` 部分第 15 条「骨架屏 Skeleton 效果: (skeleton)」对应目录 `html/skeleton/` 存在 ✅，但 README 整体未对每个条目链接到实际文件路径，维护时容易产生上述偏差。
2. `canvas/docs/index.html` 中多处 demo 链接被注释（碰撞运动、模块拖动、CSS 时钟、大白、哆啦A梦、生日蛋糕、星空、三次贝塞尔曲线等），与 README 描述存在出入，建议以实际目录为准同步更新 README。
