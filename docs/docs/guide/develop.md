# Develop Guide

### install dependency and running

```cmd
pnpm install
pnpm dev
```

### develop new component

run command

```cmd
pnpm gen <component-name>

example: pnpm gen button
```

Will automatically create basic file configuration in `packages/components/src`和`playground/src/views`

run command，develop and debug components in playground

```cmd
pnpm dev:playground
```

### 文档

After component development，update component documentation in `docs`

```cmd
pnpm dev:docs
```

Add the corresponding md file to introduce the component in `docs/docs/components`,synchronize update of Chinese documents in `zh`

After finish add url to `sidebar` in `.vitepress/locales`
