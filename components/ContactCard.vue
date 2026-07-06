<template>
  <div id="contacto" class="bento-card relative p-8 md:p-14 reveal overflow-hidden">
    <div class="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent/30 blur-[100px] pointer-events-none" />
    <div class="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
      <div>
        <span class="chip">
          <span class="pulse-dot !h-1.5 !w-1.5" />
          Contacto
        </span>
        <h2 class="font-display text-5xl md:text-7xl leading-[1.02] mt-6">
          ¿Tenés una idea?
          <span class="block italic gradient-text">Hablemos.</span>
        </h2>
        <p class="mt-6 text-ink-dim max-w-md">
          Escribime y coordinamos una llamada para entender tu marca y proyecto. Respondo en menos de 24 hs.
        </p>
      </div>

      <div class="space-y-3">
        <a ref="emailBtn" :href="`mailto:${site.email}`"
           class="group flex items-center justify-between rounded-2xl bg-white/[0.03] border border-line-strong px-5 py-4 hover:border-accent/40 hover:bg-white/[0.06] transition">
          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-ink-mute">Email</p>
            <p class="font-medium mt-1">{{ site.email }}</p>
          </div>
          <svg class="w-5 h-5 text-ink-mute group-hover:text-accent group-hover:-rotate-45 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>

        <a :href="waLink" target="_blank" rel="noopener"
           class="group flex items-center justify-between rounded-2xl bg-white/[0.03] border border-line-strong px-5 py-4 hover:border-accent/40 hover:bg-white/[0.06] transition">
          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-ink-mute">WhatsApp</p>
            <p class="font-medium mt-1">{{ site.whatsapp }}</p>
          </div>
          <svg class="w-5 h-5 text-ink-mute group-hover:text-accent group-hover:-rotate-45 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>

        <div class="grid grid-cols-3 gap-3 pt-3">
          <a v-for="s in site.social.slice(0, 3)" :key="s.platform" :href="s.url" target="_blank" rel="noopener"
             class="rounded-2xl bg-white/[0.03] border border-line-strong px-4 py-4 text-center hover:border-accent/40 hover:bg-white/[0.06] transition">
            <p class="text-xs uppercase tracking-[0.2em] text-ink-mute capitalize">{{ s.platform }}</p>
            <p class="font-medium mt-1 text-sm">{{ s.handle }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { site } from '~/config/site'

const emailBtn = ref<HTMLElement | null>(null)
useMagnetic(emailBtn, 0.18)

const waLink = computed(() =>
  'https://wa.me/' + site.whatsapp.replace(/\D/g, '') + '?text=Hola%20Oriana%2C%20me%20gustar%C3%ADa%20coordinar%20una%20llamada.'
)
</script>
