<template>
  <div id="servicios" class="bento-card p-7 md:p-8 reveal">
    <div class="flex items-center justify-between mb-7">
      <span class="chip">
        <span class="h-1.5 w-1.5 rounded-full bg-accent" />
        Servicios
      </span>
      <p class="text-xs text-ink-mute hidden md:block">04 áreas</p>
    </div>

    <h2 class="font-display text-3xl md:text-4xl leading-tight max-w-2xl">
      Estrategia, contenido y narrativa <span class="italic text-accent-soft">para marcas que quieren crecer.</span>
    </h2>

    <ul class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
      <li v-for="(s, i) in site.services" :key="s.title"
          class="group relative rounded-2xl bg-white/[0.02] border border-line-soft p-5 hover:border-accent/40 hover:bg-white/[0.04] transition-all">
        <div class="flex items-start gap-4">
          <span class="text-xs font-mono text-ink-mute mt-1 tabular-nums">{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="flex-1">
            <h3 class="font-medium text-base flex items-center justify-between">
              {{ s.title }}
              <svg class="w-4 h-4 text-ink-mute group-hover:text-accent group-hover:-rotate-45 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </h3>
            <p class="mt-1.5 text-sm text-ink-dim leading-relaxed">{{ s.description }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { site } from '~/config/site'
</script>
