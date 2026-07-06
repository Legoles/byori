<template>
  <div class="bento-card p-7 md:p-8 reveal overflow-hidden">
    <div class="flex items-center justify-between mb-6">
      <span class="chip">
        <span class="h-1.5 w-1.5 rounded-full bg-accent" />
        Marcas con las que trabajé
      </span>
      <p class="text-xs text-ink-mute hidden md:block">Selección</p>
    </div>

    <div class="relative -mx-7 md:-mx-8 overflow-hidden"
         style="mask-image: linear-gradient(to right, transparent, #000 12%, #000 88%, transparent);">
      <div class="flex w-max animate-marquee">
        <div v-for="loop in 2" :key="loop" class="flex items-center gap-12 px-8 shrink-0">
          <span v-for="b in site.brands" :key="loop + b.name"
                class="font-display text-3xl md:text-4xl text-ink-dim hover:text-ink transition whitespace-nowrap">
            {{ b.name }}
            <span class="text-accent">·</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { site } from '~/config/site'
</script>
