<template>
  <footer class="footer">
    <p class="copyright">&copy;2025 宁波易什网络科技有限公司 版权所有</p>
    <p class="icp">
      ICP备案/许可证号:
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">浙ICP备2022033471号-1</a>
    </p>
  </footer>
</template>

<style scoped>
.footer {
  padding: 24px 20px;
  text-align: center;
  border-top: 1px solid var(--border-color);
}

.copyright,
.icp {
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.icp a {
  color: var(--text-secondary);
}

.icp a:hover {
  color: var(--text-primary);
}
</style>
