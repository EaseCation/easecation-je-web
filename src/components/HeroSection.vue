<template>
  <!-- 固定在视口底层的背景图 -->
  <div ref="bgRef" class="hero-bg">
    <div class="hero-inner" :style="{ transform: `translateY(${translateY}px)` }">
      <div class="hero-content" :style="{ opacity: contentOpacity, transform: `scale(${contentScale})` }">
        <img :src="logoUrl" alt="EaseCation" class="hero-logo" />
        <p class="hero-subtitle">Java Edition · 技术预览测试</p>
        <p class="hero-tag">基于 ViaProxy · Tech Preview · 部分玩法未适配</p>
      </div>
      <div class="hero-screenshot" :style="{ transform: `scale(${imageScale})`, transformOrigin: 'center center' }">
        <img ref="imgRef" :src="heroUrl" alt="EaseCation 游戏截图" class="screenshot-img" />
      </div>
    </div>
  </div>
  <!-- 占位空间，撑出滚动距离 -->
  <div class="hero-spacer" :style="{ height: spacerHeight + 'px' }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import logoUrl from '../assets/logo.png'
import heroUrl from '../assets/hero.png'

const bgRef = ref(null)
const imgRef = ref(null)
const spacerHeight = ref(0)
const translateY = ref(0)
const imageScale = ref(1)
const contentOpacity = ref(1)
const contentScale = ref(1)

let panDistance = 0

function measure() {
  if (!bgRef.value) return
  const innerEl = bgRef.value.querySelector('.hero-inner')
  const vh = window.innerHeight
  const contentHeight = innerEl.scrollHeight
  // 阶段1 滚动距离：让图片垂直居中于视口
  const imgEl = bgRef.value.querySelector('.hero-screenshot')
  const contentEl = bgRef.value.querySelector('.hero-content')
  const imgHeight = imgEl ? imgEl.offsetHeight : 0
  const contentTop = contentEl ? contentEl.offsetHeight + 24 : 0
  // 图片顶部位置 = padding-top(40) + logo区高度
  const imgTop = 40 + contentTop
  // 让图片中心对齐视口中心: translateY = -(imgTop - (vh - imgHeight) / 2)
  panDistance = Math.max(imgTop - (vh - imgHeight) / 2, 0)
  // 阶段2 滚动距离
  const isMobile = window.innerWidth <= 640
  const zoomDistance = vh * (isMobile ? 0.05 : 0.15)

  if (isMobile) {
    // 移动端：spacer 只占视口 55%，让正文在首屏底部 1/3 可见
    spacerHeight.value = vh * 0.55
  } else {
    // 桌面端：完整视差体验
    spacerHeight.value = vh + panDistance + zoomDistance
  }
}

function onScroll() {
  const scrollY = window.scrollY
  const vh = window.innerHeight
  const zoomDistance = vh
  const totalDistance = panDistance + zoomDistance

  // Logo 缩小+淡出：基于总滚动进度，前 40% 不变，40%~80% 缩小淡出
  const totalProgress = totalDistance > 0 ? Math.min(scrollY / totalDistance, 1) : 0
  const logoFadeStart = 0.15
  const logoFadeEnd = 0.5
  const logoProgress = Math.min(Math.max((totalProgress - logoFadeStart) / (logoFadeEnd - logoFadeStart), 0), 1)
  contentOpacity.value = 1 - logoProgress
  contentScale.value = 1 - logoProgress * 0.4 // 从 1 缩小到 0.6

  // 目标：放大到 120vw，根据图片实际宽度算 scale
  const imgEl = bgRef.value?.querySelector('.hero-screenshot')
  const imgWidth = imgEl ? imgEl.offsetWidth : window.innerWidth
  const maxScale = (window.innerWidth * 1.2) / imgWidth

  if (scrollY <= panDistance) {
    // 阶段1：平移，Logo+图片整体上移
    translateY.value = -scrollY
    imageScale.value = 1
  } else {
    // 阶段2：图片定住，开始缩放
    const zoomProgress = Math.min((scrollY - panDistance) / zoomDistance, 1)
    translateY.value = -panDistance
    imageScale.value = 1 + zoomProgress * (maxScale - 1)
  }
}

function onResize() {
  measure()
  onScroll()
}

onMounted(async () => {
  await nextTick()
  const img = imgRef.value
  if (img && !img.complete) {
    img.addEventListener('load', () => { measure(); onScroll() }, { once: true })
  }
  measure()
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
.hero-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
  background:
    radial-gradient(
      ellipse 80% 70% at 15% 15%,
      rgba(62, 138, 46, 0.15) 0%,
      transparent 70%
    ),
    radial-gradient(
      ellipse 60% 50% at 80% 20%,
      rgba(200, 160, 40, 0.10) 0%,
      transparent 70%
    ),
    radial-gradient(
      ellipse 70% 60% at 60% 85%,
      rgba(46, 100, 60, 0.12) 0%,
      transparent 70%
    ),
    #1a1a1a;
}

.hero-inner {
  padding: 40px 0 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  will-change: transform;
}

.hero-content {
  margin-bottom: 24px;
  flex-shrink: 0;
  padding: 0 24px;
  transform-origin: center top;
  will-change: transform, opacity;
}

.hero-logo {
  width: min(600px, 80vw);
  height: auto;
  image-rendering: pixelated;
}

.hero-subtitle {
  margin-top: 10px;
  font-size: 1.3rem;
  color: var(--text-primary);
  letter-spacing: 0.12em;
  font-weight: 600;
}

.hero-tag {
  margin-top: 6px;
  font-size: 0.8rem;
  color: var(--text-secondary);
  letter-spacing: 0.08em;
  opacity: 0.7;
}

.hero-screenshot {
  width: 95%;
  max-width: 1400px;
  will-change: transform;
}

.screenshot-img {
  width: 100%;
  height: auto;
  display: block;
}

.hero-spacer {
  position: relative;
  pointer-events: none;
}

@media (max-width: 640px) {
  .hero-inner {
    padding: 28px 0 0;
  }

  .hero-content {
    padding: 0 12px;
  }

  .hero-logo {
    width: min(400px, 85vw);
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-screenshot {
    width: 95%;
  }
}
</style>
