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
            点击上方「下载整合包」一键获取，或点击「下载 Mod」手动获取 Mod 文件。
          </p>
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
  </section>
</template>

<style scoped>
.tutorial {
  max-width: 720px;
  margin: 0 auto;
  padding: 48px 20px 64px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 32px;
  text-align: center;
}

.requirements {
  background: var(--bg-card);
  border-radius: var(--radius-sm);
  padding: 20px 24px;
  margin-bottom: 32px;
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
  content: "•";
  color: var(--accent-green);
  margin-right: 8px;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.step {
  display: flex;
  gap: 16px;
}

.step-number {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  background: var(--accent-green);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
}

.step-content {
  flex: 1;
  min-width: 0;
}

.step-content h4 {
  font-size: 1.05rem;
  margin-bottom: 6px;
}

.step-content p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
}

.step-content code {
  background: var(--bg-input);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.85rem;
  color: var(--accent-green);
}

.tip {
  margin-top: 8px;
  padding: 10px 14px;
  background: var(--bg-input);
  border-left: 3px solid var(--accent-green);
  border-radius: 4px;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.address-highlight {
  display: inline-block;
  margin-top: 8px;
  padding: 6px 14px;
  font-size: 0.95rem;
}

@media (max-width: 640px) {
  .tutorial {
    padding: 32px 16px 48px;
  }

  .step {
    gap: 12px;
  }

  .step-number {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }
}
</style>
