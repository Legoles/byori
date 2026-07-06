<template>
  <div class="bento-card p-7 md:p-8 reveal">
    <div class="flex items-center justify-between mb-7">
      <span class="chip">
        <span class="h-1.5 w-1.5 rounded-full bg-accent" />
        Audiencia
      </span>
      <span class="text-xs text-ink-mute">{{ totalReach }} total</span>
    </div>

    <div class="space-y-4">
      <a v-for="s in site.social" :key="s.platform" :href="s.url" target="_blank" rel="noopener"
         class="group flex items-center justify-between rounded-2xl bg-white/[0.02] border border-line-soft px-4 py-3 hover:border-accent/40 hover:bg-white/[0.04] transition-all">
        <div class="flex items-center gap-3">
          <span class="grid place-items-center h-9 w-9 rounded-xl bg-bg-elev border border-line text-ink-dim group-hover:text-accent transition">
            <component :is="iconMap[s.platform]" class="w-4 h-4" />
          </span>
          <div>
            <p class="text-sm font-medium capitalize">{{ s.platform }}</p>
            <p class="text-xs text-ink-mute">{{ s.handle }}</p>
          </div>
        </div>
        <div class="text-right">
          <p class="font-display text-2xl tracking-tight">{{ s.followers || '—' }}</p>
          <p class="text-[10px] uppercase tracking-[0.2em] text-ink-mute">followers</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h, computed } from 'vue'
import { site } from '~/config/site'

const totalReach = computed(() => {
  const parse = (v?: string) => {
    if (!v) return 0
    const n = parseFloat(v)
    if (v.toUpperCase().includes('K')) return n * 1_000
    if (v.toUpperCase().includes('M')) return n * 1_000_000
    return n
  }
  const total = site.social.reduce((acc, s) => acc + parse(s.followers), 0)
  if (total >= 1_000_000) return (total / 1_000_000).toFixed(1) + 'M'
  if (total >= 1_000) return Math.round(total / 1_000) + 'K'
  return String(total)
})

const Icon = (paths: () => any) => () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.6' }, paths())

const iconMap = {
  instagram: Icon(() => [
    h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 5 }),
    h('circle', { cx: 12, cy: 12, r: 4 }),
    h('circle', { cx: 17.5, cy: 6.5, r: 0.6, fill: 'currentColor' })
  ]),
  tiktok: Icon(() => [
    h('path', { d: 'M14 4v8.5a3.5 3.5 0 11-3.5-3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
    h('path', { d: 'M14 4c.5 2.5 2 4 4.5 4.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
  ]),
  youtube: Icon(() => [
    h('rect', { x: 2.5, y: 5.5, width: 19, height: 13, rx: 3 }),
    h('path', { d: 'M10 9.5l5 2.5-5 2.5z', fill: 'currentColor' })
  ]),
  linkedin: Icon(() => [
    h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 3 }),
    h('path', { d: 'M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4M11 17v-7', 'stroke-linecap': 'round' })
  ]),
  twitter: Icon(() => [
    h('path', { d: 'M4 4l7 9L4 20h2l6-6 5 6h3l-7.5-9L20 4h-2l-5 5-4-5z', 'stroke-linejoin': 'round' })
  ]),
  spotify: Icon(() => [
    h('circle', { cx: 12, cy: 12, r: 9 }),
    h('path', { d: 'M7 10c3-1 7-1 10 1M7.5 13c2.5-1 5.5-1 8 0.5M8 16c2-.7 4.5-.7 6.5.5', 'stroke-linecap': 'round' })
  ])
} as const
</script>
