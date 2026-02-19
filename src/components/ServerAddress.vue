<template>
  <section class="server-address">
    <p class="label">服务器地址</p>
    <div class="address-box">
      <span class="address-text">je.easecation.net:25565</span>
      <button class="copy-btn" @click="copyAddress">
        {{ copied ? '已复制 ✓' : '复制' }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const copied = ref(false)
let timer = null

function copyAddress() {
  navigator.clipboard.writeText('je.easecation.net:25565').then(() => {
    copied.value = true
    clearTimeout(timer)
    timer = setTimeout(() => { copied.value = false }, 2000)
  })
}
</script>

<style scoped>
.server-address {
  padding: 40px 48px;
  text-align: center;
}

.label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.address-box {
  display: inline-flex;
  align-items: center;
  gap: 0;
  background: var(--bg-input);
  border: 2px solid var(--border-color);
  border-radius: var(--radius);
  overflow: hidden;
}

.address-text {
  font-size: 1.3rem;
  font-family: "SF Mono", "Fira Code", "Cascadia Code", monospace;
  color: var(--text-primary);
  user-select: all;
  padding: 14px 24px;
}

.copy-btn {
  background: #3e8a2e;
  color: #fff;
  border: none;
  border-radius: 0;
  padding: 12px 24px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  min-width: 72px;
  align-self: stretch;
  border-bottom: 4px solid #2a5f1e;
  border-top: 2px solid #5eb34c;
  transition: filter 0.1s, border-bottom-width 0.05s, border-top-width 0.05s;
}

.copy-btn:hover {
  filter: brightness(1.08);
}

.copy-btn:active {
  border-bottom-width: 2px;
  border-top-width: 3px;
  filter: brightness(0.92);
}

@media (max-width: 640px) {
  .server-address {
    padding: 32px 20px;
  }

  .address-text {
    font-size: 1rem;
    padding: 12px 16px;
  }

  .copy-btn {
    display: none;
  }
}
</style>
