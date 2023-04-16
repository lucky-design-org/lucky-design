# lucky-design

<p align="center">
  <img height="160px" src="https://lucky-design.vercel.app/icon.png">
  <h2 align="center" style="font-weight: 600">Lucky Design</h2>
</p>

<p align="center">
  Lucky Design 可在 vue3 应用程序中快速构建交互界面，简洁, 强大, 美观, 高效
</p>

## ✨ 特性

- 🪐 n+ 常用组件
- 💪 使用 Vue.js 最新特性开发
- 🐆 全面基于 Vite，速度够快
- 🤟 极致的开发体验
- 🥇 超详细的 JSDoc 注释
- ✂️ 完善的代码提示
- 🏆 支持完整引入和按需引入
- ✅ 使用 TypeScript + Template 编写
- 🖍️ 严格的 TypeScript 类型
- ✔️ 配置简单，上手容易
- 🚩 单元测试
- 👍 社区团队维护
- ❤️ 根据实际需求开发
- 📃 优质详细的文档
- ☝️ 提出需求，不断完善
- 🛠 更多特性开发中

## 使用

安装lucky-design
```cmd
# 选择一个你喜欢的包管理器

# NPM
$ npm install lucky-design --save

# Yarn
$ yarn add lucky-design --save

# pnpm
$ pnpm add lucky-design --save
```

在项目中引入

```ts
// main.ts
import { createApp } from 'vue'
import LuckyDesign from 'lucky-design'
import 'lucky-design/dist/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(LuckyDesign)
app.mount('#app')
```

## 开发文档

### 目录说明
- .github 工作流
- .husky git hook
- docs 组件库文档
- packages
  - common 工具方法和常量
  - components 开发组件的位置
  - preset 预设
- playground 调试操场
- scripts 脚本
### 安装依赖

```cmd
pnpm install
pnpm dev
```

### 开发新组件

运行命令

```cmd
pnpm gen <component-name>

例: pnpm gen button
```

会自动在`packages/components/src`和`playground/src/views`下创建基础文件配置

运行命令，在playground中开发调试组件

```cmd
pnpm dev:playground
```

### 文档
组件开发完成后，在`docs`中更新组件文档

```cmd
pnpm dev:docs
```

`docs/docs/components`中添加对应的md文件介绍组件，在`zh`下同步更新中文文档

编写完成后在`.vitepress/locales`中对应的文件中的添加到`sidebar`上
