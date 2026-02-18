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
  padding: 32px 20px;
  text-align: center;
}

.label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.address-box {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: var(--bg-input);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
  max-width: 100%;
}

.address-text {
  font-size: 1.2rem;
  font-family: "SF Mono", "Fira Code", "Cascadia Code", monospace;
  color: var(--accent-green);
  user-select: all;
}

.copy-btn {
  background: var(--accent-green);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
  min-width: 64px;
}

.copy-btn:hover {
  background: var(--accent-green-hover);
}

@media (max-width: 640px) {
  .address-box {
    flex-direction: column;
    gap: 8px;
    width: 90%;
  }

  .address-text {
    font-size: 1rem;
  }
}
</style>
