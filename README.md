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

推送到 `master` 分支后，GitHub Actions 自动构建并上传到阿里云 OSS，随后刷新阿里云 CDN。

线上地址：https://je.easecation.net/

部署需要在 GitHub 仓库中配置以下变量和密钥：

- Variable `OSS_BUCKET`：目标 OSS bucket 名称
- Secret `ALIYUN_ACCESS_KEY_ID`：阿里云 AccessKey ID
- Secret `ALIYUN_ACCESS_KEY_SECRET`：阿里云 AccessKey Secret
