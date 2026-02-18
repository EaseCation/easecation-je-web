<template>
  <section class="hero">
    <div class="hero-content">
      <img :src="logoUrl" alt="EaseCation" class="hero-logo" />
      <p class="hero-subtitle">Java 版测试服务器</p>
    </div>
    <div class="hero-screenshot">
      <img :src="heroUrl" alt="EaseCation 游戏截图" class="screenshot-img" />
    </div>
  </section>
</template>

<script setup>
import logoUrl from '../assets/logo.png'
import heroUrl from '../assets/hero.png'
</script>

<style scoped>
.hero {
  padding: 60px 20px 40px;
  text-align: center;
}

.hero-content {
  margin-bottom: 40px;
}

.hero-logo {
  max-width: 400px;
  width: 80%;
  height: auto;
  image-rendering: pixelated;
}

.hero-subtitle {
  margin-top: 12px;
  font-size: 1.25rem;
  color: var(--text-secondary);
  letter-spacing: 0.05em;
}

.hero-screenshot {
  max-width: 800px;
  margin: 0 auto;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.screenshot-img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 640px) {
  .hero {
    padding: 40px 16px 24px;
  }

  .hero-logo {
    max-width: 280px;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-screenshot {
    border-radius: var(--radius-sm);
  }
}
</style>
