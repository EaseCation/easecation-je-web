<template>
  <footer class="footer">
    <div class="open-source">
      <p class="os-title">开源项目</p>
      <div class="os-links">
        <a v-for="repo in repos" :key="repo.name" :href="repo.url" target="_blank" rel="noopener" class="os-link">
          <svg class="gh-icon" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          {{ repo.name }}
        </a>
      </div>
    </div>
    <div class="legal">
      <p class="copyright">&copy;2026 宁波易什网络科技有限公司 版权所有</p>
      <p class="icp">
        ICP备案/许可证号:
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">浙ICP备2022033471号-1</a>
      </p>
    </div>
  </footer>
</template>

<script setup>
const repos = [
  { name: 'ViaProxy', url: 'https://github.com/EaseCation/ViaProxy' },
  { name: 'ViaBedrock', url: 'https://github.com/EaseCation/ViaBedrock' },
  { name: 'ViaBedrockUtility', url: 'https://github.com/EaseCation/ViaBedrockUtility' },
  { name: 'ViaProxyVBUCheck', url: 'https://github.com/EaseCation/ViaProxyVBUCheck' },
  { name: 'FabricRock', url: 'https://github.com/EaseCation/FabricRock' },
  { name: 'ModUIClient', url: 'https://github.com/EaseCation/ModUIClient' },
]
</script>

<style scoped>
.footer {
  padding: 32px 20px 24px;
  border-top: 1px solid var(--border-color);
}

.open-source {
  text-align: center;
  margin-bottom: 24px;
}

.os-title {
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 12px;
}

.os-links {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.os-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  font-size: 0.8rem;
  color: var(--text-secondary);
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  text-decoration: none;
  transition: color 0.15s, border-color 0.15s;
}

.os-link:hover {
  color: var(--text-primary);
  border-color: var(--text-secondary);
  text-decoration: none;
}

.gh-icon {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.legal {
  text-align: center;
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
