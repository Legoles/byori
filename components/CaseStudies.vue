<template>
  <div id="trabajos" class="bento-card p-7 md:p-10 reveal">
    <div class="flex items-end justify-between mb-10 flex-wrap gap-4">
      <div>
        <span class="chip">
          <span class="h-1.5 w-1.5 rounded-full bg-accent" />
          Trabajos seleccionados
        </span>
        <h2 class="font-display text-4xl md:text-5xl mt-5 leading-[1.05]">
          Resultados que <span class="italic text-accent-soft">se ven, se sienten y se miden.</span>
        </h2>
      </div>
      <p class="text-sm text-ink-mute max-w-xs">
        Una selección de campañas y proyectos donde estrategia y contenido se encontraron.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <a v-for="(c, i) in site.caseStudies" :key="c.title" href="#"
         class="group relative block rounded-2xl border border-line-soft bg-bg-elev/40 overflow-hidden hover:border-accent/30 transition-all">
        <div class="aspect-[16/10] overflow-hidden">
          <div class="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
               :style="caseBg(i)">
            <div class="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/30 to-transparent" />
            <span class="absolute top-5 left-5 chip !bg-bg/60 !backdrop-blur-md">{{ c.category }}</span>
            <span class="absolute top-5 right-5 text-xs text-ink-dim font-mono">{{ c.year }}</span>
          </div>
        </div>
        <div class="p-6 flex items-end justify-between gap-4 relative">
          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-ink-mute">{{ c.brand }}</p>
            <h3 class="font-display text-2xl mt-1 leading-tight">{{ c.title }}</h3>
          </div>
          <div class="text-right shrink-0">
            <p class="font-display text-xl text-accent-soft">{{ c.metric }}</p>
            <svg class="w-5 h-5 ml-auto mt-1 text-ink-mute group-hover:text-accent group-hover:-rotate-45 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </a>
    </div>

    <div class="mt-10 flex items-center justify-between text-sm text-ink-mute">
      <span>{{ site.caseStudies.length }} proyectos · {{ site.about.highlights[1].value }} marcas</span>
      <a href="#contacto" class="hover:text-ink-dim">Ver todo →</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { site } from '~/config/site'

const palettes = [
  'linear-gradient(135deg, #B14EFF 0%, #4D0F8A 60%, #15151E 100%)',
  'linear-gradient(135deg, #E0A8FF 0%, #7A1FCC 60%, #15151E 100%)',
  'linear-gradient(135deg, #FF6BA8 0%, #B14EFF 60%, #15151E 100%)',
  'linear-gradient(135deg, #7A1FCC 0%, #C77BFF 60%, #15151E 100%)'
]

const caseBg = (i: number) => ({ backgroundImage: palettes[i % palettes.length] })
</script>
