<template>
  <div class="bento-card p-7 md:p-8 reveal flex flex-col justify-between min-h-[260px]">
    <div>
      <span class="chip">
        <span class="pulse-dot !h-1.5 !w-1.5" />
        Now
      </span>

      <h3 class="font-display text-3xl mt-7 leading-tight">
        Q2 <span class="italic text-accent-soft">2026</span>
      </h3>
      <p class="mt-3 text-sm text-ink-dim leading-relaxed">
        Aceptando 2-3 proyectos nuevos. Brand strategy, lanzamientos y series de contenido.
      </p>
    </div>

    <a :href="`mailto:${site.email}`"
       class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-soft hover:text-accent-glow group">
      Reservar llamada
      <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
        <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
import { site } from '~/config/site'
</script>
