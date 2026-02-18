<template>
  <div class="app">
    <HeroSection />
    <div class="content-overlay">
      <div class="gradient-bg"></div>
      <ServerAddress />
      <DownloadButtons />
      <TutorialSection />
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import HeroSection from './components/HeroSection.vue'
import ServerAddress from './components/ServerAddress.vue'
import DownloadButtons from './components/DownloadButtons.vue'
import TutorialSection from './components/TutorialSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style scoped>
.app {
  min-height: 100vh;
}

.content-overlay {
  position: relative;
  z-index: 2;
  padding-top: 280px;
  /* 毛玻璃 */
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  /* 多段渐变背景：顶部从全透明缓慢过渡到半透明深色 */
  background: linear-gradient(
    to bottom,
    rgba(40, 40, 42, 0) 0%,
    rgba(40, 40, 42, 0.3) 40px,
    rgba(40, 40, 42, 0.6) 100px,
    rgba(40, 40, 42, 0.85) 200px,
    rgba(40, 40, 42, 0.9) 400px
  );
  /* 顶部渐变遮罩让 backdrop-filter 也跟着渐入 */
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0,0,0,0.3) 40px,
    rgba(0,0,0,0.7) 120px,
    black 240px
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0,0,0,0.3) 40px,
    rgba(0,0,0,0.7) 120px,
    black 240px
  );
}

/* 巨大模糊渐变色块背景 */
.gradient-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    /* 左上：Logo 绿色调 */
    radial-gradient(
      ellipse 80% 60% at 10% 8%,
      rgba(62, 138, 46, 0.18) 0%,
      transparent 70%
    ),
    /* 右侧偏中：Logo 黄/金色调 */
    radial-gradient(
      ellipse 70% 50% at 85% 30%,
      rgba(200, 160, 40, 0.12) 0%,
      transparent 70%
    ),
    /* 中下：深绿微光 */
    radial-gradient(
      ellipse 90% 50% at 40% 75%,
      rgba(46, 100, 60, 0.14) 0%,
      transparent 70%
    ),
    /* 右下角：暖橙微光 */
    radial-gradient(
      ellipse 50% 40% at 90% 90%,
      rgba(180, 100, 40, 0.08) 0%,
      transparent 70%
    );
}
</style>
