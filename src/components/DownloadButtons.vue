<template>
  <section class="download-section">
    <div class="buttons">
      <a href="#" class="btn btn-primary">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
        </svg>
        下载整合包
      </a>
      <a href="#tutorial" class="btn btn-secondary">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
        下载 Mod + 安装教程
      </a>
    </div>
  </section>
</template>

<style scoped>
.download-section {
  padding: 8px 20px 48px;
  text-align: center;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: var(--radius-sm);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, transform 0.1s;
  cursor: pointer;
}

.btn:hover {
  text-decoration: none;
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
}

.btn-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.btn-primary {
  background: var(--accent-green);
  color: #fff;
}

.btn-primary:hover {
  background: var(--accent-green-hover);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background: var(--bg-card);
}

@media (max-width: 640px) {
  .buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 80%;
    justify-content: center;
  }
}
</style>
