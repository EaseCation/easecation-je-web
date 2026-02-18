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
  padding: 8px 48px 56px;
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
  gap: 10px;
  padding: 12px 32px;
  border-radius: var(--radius);
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: none;
  position: relative;
  /* 凸起厚度：底部深色边模拟立体感 */
  border-bottom: 4px solid;
  border-top: 2px solid;
  transition: border-bottom-width 0.05s, border-top-width 0.05s, padding 0.05s, filter 0.1s;
}

.btn:hover {
  text-decoration: none;
  filter: brightness(1.08);
}

/* 按下：厚度消失，按钮下沉 */
.btn:active {
  border-bottom-width: 2px;
  border-top-width: 3px;
  filter: brightness(0.92);
}

.btn-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

/* 主按钮：绿色 */
.btn-primary {
  background: #3e8a2e;
  color: #fff;
  border-bottom-color: #2a5f1e;
  border-top-color: #5eb34c;
  border-left: 2px solid #4a9e38;
  border-right: 2px solid #4a9e38;
}

.btn-primary:active {
  background: #367a27;
  border-top-color: #2a5f1e;
  border-bottom-color: #5eb34c;
}

/* 次按钮：浅灰 */
.btn-secondary {
  background: #c8c8c8;
  color: #313233;
  border-bottom-color: #8e8e8e;
  border-top-color: #e8e8e8;
  border-left: 2px solid #b0b0b0;
  border-right: 2px solid #b0b0b0;
}

.btn-secondary:active {
  background: #b8b8b8;
  border-top-color: #8e8e8e;
  border-bottom-color: #e8e8e8;
}

@media (max-width: 640px) {
  .download-section {
    padding: 8px 20px 40px;
  }

  .buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    justify-content: center;
    padding: 12px 24px;
  }
}
</style>
