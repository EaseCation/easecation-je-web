<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const base = import.meta.env.BASE_URL
</script>

<template>
  <section id="tutorial" class="tutorial">
    <h2 class="section-title">{{ t('tutorial.title') }}</h2>

    <div class="mod-purpose">
      {{ t('tutorial.modPurpose') }}
    </div>

    <div class="requirements">
      <h3>{{ t('tutorial.requirements.title') }}</h3>
      <ul>
        <li><strong>Minecraft Java Edition</strong> 1.21.11</li>
        <li><strong>Fabric Loader</strong> 0.18.4+</li>
      </ul>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h4>{{ t('tutorial.step1.title') }}</h4>
          <p>{{ t('tutorial.step1.desc') }}</p>
          <a :href="`${base}easecation-modpack.zip`" download class="step-btn">{{ t('tutorial.step1.btn') }}</a>
        </div>
      </div>

      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h4>{{ t('tutorial.step2.title') }}</h4>

          <div class="install-method">
            <h5>{{ t('tutorial.step2.thirdParty.title') }}</h5>
            <p v-html="t('tutorial.step2.thirdParty.desc')"></p>
          </div>

          <div class="install-method">
            <h5>{{ t('tutorial.step2.official.title') }}</h5>
            <ol>
              <li v-html="t('tutorial.step2.official.step1')"></li>
              <li v-html="t('tutorial.step2.official.step2')"></li>
              <li v-html="t('tutorial.step2.official.step3')"></li>
            </ol>
            <div class="tip" v-html="t('tutorial.step2.official.tip')"></div>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h4>{{ t('tutorial.step3.title') }}</h4>
          <p v-html="t('tutorial.step3.desc')"></p>
          <code class="address-highlight">je.easecation.net:25565</code>
        </div>
      </div>
    </div>

    <div class="notice">
      {{ t('tutorial.notice') }}
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

.mod-purpose {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 24px;
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

.step-content :deep(code) {
  background: var(--bg-input);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  color: var(--accent-green-light);
}

.step-content code {
  background: var(--bg-input);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  color: var(--accent-green-light);
}

.step-content ol {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
  padding-left: 20px;
  margin: 8px 0 0;
}

.step-content ol li {
  padding: 4px 0;
}

.step-content :deep(a) {
  color: var(--accent-green-light);
}

.install-method {
  margin-top: 16px;
  padding: 16px 20px;
  background: var(--bg-input);
  border-radius: var(--radius-sm);
}

.install-method + .install-method {
  margin-top: 12px;
}

.install-method h5 {
  font-size: 0.95rem;
  margin-bottom: 8px;
  color: var(--accent-green-light);
}

.install-method p {
  margin: 0;
}

.tip {
  margin-top: 12px;
  padding: 12px 16px;
  background: var(--bg-secondary);
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
