<script setup>
const base = import.meta.env.BASE_URL
</script>

<template>
  <section id="tutorial" class="tutorial">
    <h2 class="section-title">安装教程</h2>

    <div class="requirements">
      <h3>环境要求</h3>
      <ul>
        <li><strong>Minecraft Java Edition</strong> 1.21.11</li>
        <li><strong>Fabric Loader</strong> 0.16.x 或更高版本</li>
      </ul>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h4>安装 Fabric Loader</h4>
          <p>
            前往
            <a href="https://fabricmc.net/use/installer/" target="_blank" rel="noopener">Fabric 官网</a>
            下载安装器，选择 Minecraft <strong>1.21.11</strong> 版本进行安装。
          </p>
        </div>
      </div>

      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h4>下载 Mod 文件</h4>
          <p>
            点击下方按钮下载 Mod 文件，或使用上方「下载整合包」一键获取。
          </p>
          <a :href="`${base}easecation-mods.zip`" download class="step-btn">下载 Mod</a>
        </div>
      </div>

      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h4>放入 mods 文件夹</h4>
          <p>
            将下载的 Mod 文件放入 Minecraft 的 <code>.minecraft/mods</code> 文件夹中。
            如果使用整合包，解压后直接使用即可。
          </p>
          <div class="tip">
            <strong>提示：</strong>Windows 用户可通过 <code>%appdata%/.minecraft/mods</code> 快速访问；
            macOS 用户路径为 <code>~/Library/Application Support/minecraft/mods</code>。
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step-number">4</div>
        <div class="step-content">
          <h4>启动游戏并连接</h4>
          <p>
            在 Minecraft 启动器中选择 <strong>Fabric 1.21.11</strong> 配置启动游戏。
            进入「多人游戏」，添加服务器地址：
          </p>
          <code class="address-highlight">je.easecation.net:25565</code>
        </div>
      </div>
    </div>

    <div class="notice">
      游戏数据与中国版正式服数据不互通，仅做技术测试
    </div>
  </section>
</template>

<style scoped>
.tutorial {
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 48px 64px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 32px;
}

.requirements {
  background: var(--bg-card);
  border-radius: var(--radius);
  padding: 20px 28px;
  margin-bottom: 36px;
  border-left: 4px solid var(--accent-green-light);
}

.requirements h3 {
  font-size: 1rem;
  margin-bottom: 12px;
  color: var(--text-secondary);
}

.requirements ul {
  list-style: none;
  padding: 0;
}

.requirements li {
  padding: 6px 0;
  font-size: 0.95rem;
}

.requirements li::before {
  content: "■";
  color: var(--accent-green-light);
  margin-right: 10px;
  font-size: 0.6rem;
  vertical-align: middle;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.step {
  display: flex;
  gap: 20px;
  background: var(--bg-card);
  padding: 24px 28px;
  border-radius: var(--radius);
}

.step-number {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: var(--accent-green);
  color: #fff;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
}

.step-content {
  flex: 1;
  min-width: 0;
}

.step-content h4 {
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.step-content p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
}

.step-content code {
  background: var(--bg-input);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  color: var(--accent-green-light);
}

.tip {
  margin-top: 12px;
  padding: 12px 16px;
  background: var(--bg-input);
  border-left: 3px solid var(--accent-green);
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.address-highlight {
  display: inline-block;
  margin-top: 8px;
  padding: 8px 16px;
  font-size: 0.95rem;
}

.step-btn {
  display: inline-block;
  margin-top: 12px;
  padding: 10px 24px;
  background: #3e8a2e;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 4px solid #2a5f1e;
  border-top: 2px solid #5eb34c;
  border-left: 2px solid #4a9e38;
  border-right: 2px solid #4a9e38;
  cursor: pointer;
  transition: filter 0.1s, border-bottom-width 0.05s, border-top-width 0.05s;
}

.step-btn:hover {
  filter: brightness(1.08);
  text-decoration: none;
}

.step-btn:active {
  border-bottom-width: 2px;
  border-top-width: 3px;
  filter: brightness(0.92);
}

.notice {
  margin-top: 36px;
  padding: 16px 24px;
  background: rgba(200, 120, 30, 0.2);
  border: 1px solid rgba(200, 120, 30, 0.4);
  color: #e8a735;
  font-size: 0.95rem;
  font-weight: 600;
  text-align: center;
}

@media (max-width: 640px) {
  .tutorial {
    padding: 32px 20px 48px;
  }

  .step {
    gap: 14px;
    padding: 18px 20px;
  }

  .step-number {
    width: 34px;
    height: 34px;
    font-size: 0.9rem;
  }
}
</style>
