<template>
  <div class="bento-card p-7 md:p-8 reveal flex flex-col">
    <div class="flex items-center justify-between mb-7">
      <span class="chip">
        <span class="h-1.5 w-1.5 rounded-full bg-accent" />
        Reel destacado
      </span>
      <span class="text-xs text-ink-mute">2025</span>
    </div>

    <div class="relative aspect-[16/10] rounded-2xl overflow-hidden border border-line-soft group cursor-pointer">
      <div class="absolute inset-0 bg-gradient-to-br from-accent-deep via-bg-elev to-bg flex items-center justify-center">
        <div class="text-center">
          <div class="grid place-items-center h-16 w-16 mx-auto rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
            <svg class="w-6 h-6 ml-1 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <p class="mt-4 text-sm text-ink-dim">Ver showreel · 1:24</p>
        </div>
      </div>
      <div class="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-bg/60 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-ink-dim border border-line">
        <span class="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
        Highlight
      </div>
    </div>

    <div class="mt-6 grid grid-cols-3 gap-3 text-center">
      <div class="rounded-xl bg-white/[0.02] border border-line-soft py-3">
        <p class="font-display text-2xl">4.2M</p>
        <p class="text-[10px] uppercase tracking-[0.2em] text-ink-mute">Views</p>
      </div>
      <div class="rounded-xl bg-white/[0.02] border border-line-soft py-3">
        <p class="font-display text-2xl">312%</p>
        <p class="text-[10px] uppercase tracking-[0.2em] text-ink-mute">Engagement</p>
      </div>
      <div class="rounded-xl bg-white/[0.02] border border-line-soft py-3">
        <p class="font-display text-2xl">48h</p>
        <p class="text-[10px] uppercase tracking-[0.2em] text-ink-mute">Sold out</p>
      </div>
    </div>
  </div>
</template>
