<template>
  <div class="app">
    <HeroSection />
    <ServerAddress />
    <DownloadButtons />
    <TutorialSection />
    <FooterSection />
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
  display: flex;
  flex-direction: column;
}
</style>
