<template>
  <div id="sobre-mi" class="bento-card p-7 md:p-10 reveal">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
      <div class="md:col-span-3">
        <span class="chip">
          <span class="h-1.5 w-1.5 rounded-full bg-accent" />
          Sobre mí
        </span>

        <h2 class="font-display text-4xl md:text-5xl mt-5 leading-[1.05]">
          {{ site.about.headline.split(',')[0] }},
          <span class="italic text-accent-soft">{{ site.about.headline.split(',').slice(1).join(',').trim() }}</span>
        </h2>

        <div class="mt-7 space-y-4 text-ink-dim leading-relaxed text-base max-w-2xl">
          <p v-for="(p, i) in site.about.body" :key="i">{{ p }}</p>
        </div>

        <div class="mt-8 flex flex-wrap gap-2 text-xs">
          <span v-for="t in tags" :key="t" class="chip">{{ t }}</span>
        </div>
      </div>

      <div class="md:col-span-2 space-y-4">
        <div v-for="h in site.about.highlights" :key="h.label"
             class="rounded-2xl bg-white/[0.02] border border-line-soft p-5">
          <p class="font-display text-5xl tracking-tight gradient-text">{{ h.value }}</p>
          <p class="mt-2 text-sm text-ink-dim">{{ h.label }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { site } from '~/config/site'

const tags = [
  'Marketing digital',
  'Brand strategy',
  'UGC',
  'Storytelling',
  'Social media',
  'Performance',
  'Lanzamientos'
]
</script>
