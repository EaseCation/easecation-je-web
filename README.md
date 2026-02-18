# EaseCation Java 版测试服务器落地页

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

## 部署

推送到 `master` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。

线上地址：https://easecation.github.io/easecation-je-web/

如需绑定自定义域名，将 `vite.config.js` 中的 `base` 改为 `'/'`。
