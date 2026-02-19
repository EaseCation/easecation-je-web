<template>
  <section class="highlights">
    <h2 class="section-title">我们在做什么</h2>
    <div class="highlights-grid">
      <component
        v-for="item in highlights"
        :key="item.title"
        :is="item.link ? 'a' : 'div'"
        :href="item.link"
        :target="item.link ? '_blank' : undefined"
        :rel="item.link ? 'noopener' : undefined"
        class="highlight-card"
        :class="{ 'highlight-link': item.link }"
      >
        <div class="card-icon" v-html="item.icon"></div>
        <div class="card-body">
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
        </div>
      </component>
    </div>
  </section>
</template>

<script setup>
const highlights = [
  {
    title: '跨版本内容桥接',
    desc: '在 ViaProxy 与 ViaBedrock 的基础上持续深耕，大幅扩展了跨版本内容的翻译兼容覆盖范围，让更多游戏内容得以无缝呈现。',
    // 桥梁/连接图标
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square">
      <path d="M4 20V16C4 13 7 10 12 10C17 10 20 13 20 16V20"/>
      <line x1="4" y1="20" x2="4" y2="20"/>
      <line x1="20" y1="20" x2="20" y2="20"/>
      <rect x="2" y="6" width="4" height="4"/>
      <rect x="18" y="6" width="4" height="4"/>
      <line x1="4" y1="10" x2="4" y2="16"/>
      <line x1="20" y1="10" x2="20" y2="16"/>
    </svg>`,
  },
  {
    title: '生物动画引擎',
    desc: '以 ViaBedrockUtility 为起点，自主实现了完整的实体渲染控制器、动画系统、动画控制器与贴图管线，并同步完成大量底层性能调优。',
    // 播放/动画图标
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square">
      <rect x="3" y="3" width="18" height="18"/>
      <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none"/>
    </svg>`,
  },
  {
    title: '极致帧率体验',
    desc: '针对实体渲染链路专项攻坚，覆盖距离 LOD 动画刷新、视野剔除、HashMap 优化等，实测帧率相比基岩版提升数倍。',
    // 闪电/性能图标
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square">
      <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>`,
  },
  {
    title: '自研 UI 渲染引擎',
    desc: '独立打造的 Java 版 ModUI 渲染引擎，相比中国版拥有更高的渲染性能、更稳定的表现效果和更精细的控制能力。',
    // 画笔/渲染图标
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square">
      <path d="M12 20H4V12L14 2L22 10L12 20Z"/>
      <line x1="10" y1="6" x2="18" y2="14"/>
    </svg>`,
  },
  {
    title: 'Java 正版验证',
    desc: '当前已开放 Minecraft Java 正版账号登录，更多验证方式正在积极规划中，敬请期待。',
    // 盾牌/验证图标
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square">
      <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>`,
  },
  {
    title: '全部开源',
    desc: '所有项目与 Mod 均已在 GitHub 开源，欢迎社区参与贡献与反馈。',
    link: 'https://github.com/EaseCation',
    // GitHub 图标
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-1.02-.01-1.86-2.51.46-3.16-.61-3.36-1.17-.11-.29-.6-1.17-1.02-1.41-.35-.19-.85-.65-.01-.66.79-.01 1.35.72 1.54 1.02.9 1.52 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.33 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .26.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
    </svg>`,
  },
]
</script>

<style scoped>
.highlights {
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 48px 64px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 32px;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.highlight-card {
  display: flex;
  gap: 16px;
  background: var(--bg-card);
  border-left: 4px solid var(--accent-green-light);
  border-radius: var(--radius);
  padding: 20px 24px;
}

.card-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: var(--accent-green);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 8px;
}

.card-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.card-body {
  flex: 1;
  min-width: 0;
}

.card-body h4 {
  font-size: 1.05rem;
  margin-bottom: 6px;
}

.card-body p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
  margin: 0;
}

.highlight-link {
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s, filter 0.15s;
}

.highlight-link:hover {
  border-left-color: #fff;
  filter: brightness(1.1);
  text-decoration: none;
}

@media (max-width: 640px) {
  .highlights {
    padding: 32px 20px 48px;
  }

  .highlights-grid {
    grid-template-columns: 1fr;
  }
}
</style>
