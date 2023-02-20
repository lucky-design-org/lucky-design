# 开发指南

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

`docs/docs/components`中添加对应的md文件介绍组件，在`zh-CN`下同步更新中文文档

编写完成后在`.vitepress/locales`对应的文件中的添加url到`sidebar`上
