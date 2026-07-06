<template>
  <section id="top" class="relative min-h-[100svh] flex items-center pt-32 pb-20">
    <div class="mx-auto max-w-7xl w-full px-5 md:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-7 reveal">
          <div class="flex items-center gap-2 mb-7">
            <span class="pulse-dot" />
            <span class="text-xs uppercase tracking-[0.22em] text-ink-dim">{{ site.now }}</span>
          </div>

          <h1 class="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.92] tracking-tight">
            <span class="block">Hola, soy</span>
            <span class="block italic gradient-text">Oriana Sosa.</span>
          </h1>

          <p class="mt-8 max-w-xl text-lg md:text-xl text-ink-dim leading-relaxed">
            {{ site.tagline }}
          </p>

          <div class="mt-10 flex flex-wrap items-center gap-3">
            <a ref="ctaRef" :href="`mailto:${site.email}`" class="btn-primary group">
              Trabajemos juntos
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="#trabajos" class="btn-ghost">Ver trabajos</a>
          </div>

          <div class="mt-14 flex items-center gap-8 text-ink-mute text-sm">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 22s-8-7.5-8-13a8 8 0 1116 0c0 5.5-8 13-8 13z" stroke-linecap="round"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              <span>{{ site.location.split('·')[0].trim() }}</span>
            </div>
            <div class="hidden sm:flex items-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 6l8 6 8-6M4 6v12h16V6"/>
              </svg>
              <a :href="`mailto:${site.email}`" class="hover:text-ink">{{ site.email }}</a>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 reveal">
          <div class="relative aspect-[4/5] w-full max-w-md mx-auto">
            <div class="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-accent/30 via-accent-deep/10 to-transparent blur-2xl" />
            <div class="relative overflow-hidden rounded-[2.5rem] border border-line ring-1 ring-line-soft h-full">
              <img :src="site.avatar" :alt="site.name"
                   class="absolute inset-0 h-full w-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
              <div class="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div>
                  <p class="text-xs uppercase tracking-[0.22em] text-ink-dim">Marketing · Brand · Content</p>
                  <p class="font-display text-2xl mt-1">{{ site.role.split('·')[0].trim() }}</p>
                </div>
                <div class="grid place-items-center h-10 w-10 rounded-full bg-accent/90 backdrop-blur text-white">
                  <svg class="w-4 h-4 -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="absolute -top-4 -left-4 rounded-full bg-bg-card/80 backdrop-blur-md border border-line px-3 py-2 text-xs flex items-center gap-2 shadow-card">
              <span class="pulse-dot" />
              <span class="text-ink-dim">Aceptando colaboraciones</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 flex items-center justify-between text-[11px] tracking-[0.3em] uppercase text-ink-mute">
        <span>scroll para explorar</span>
        <span class="hidden md:inline">{{ site.role }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { site } from '~/config/site'

const ctaRef = ref<HTMLElement | null>(null)
useMagnetic(ctaRef, 0.3)
</script>
