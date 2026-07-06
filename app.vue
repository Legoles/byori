<template>
  <div class="relative min-h-screen overflow-x-hidden">
    <GradientMesh />
    <SiteNav />
    <main class="relative z-10">
      <SiteIndex />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(async () => {
  const { start } = useLenis()
  start()
})
</script>
