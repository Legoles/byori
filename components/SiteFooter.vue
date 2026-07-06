<template>
  <footer class="relative z-10 border-t border-line mt-10">
    <div class="mx-auto max-w-7xl px-5 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-ink-mute">
      <p>{{ site.footer.copy }}</p>
      <p>{{ site.footer.credits }}</p>
      <div class="flex items-center gap-5">
        <a v-for="s in site.social" :key="s.platform" :href="s.url" target="_blank" rel="noopener"
           class="hover:text-ink capitalize">{{ s.platform }}</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { site } from '~/config/site'
</script>
