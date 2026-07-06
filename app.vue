<!--
  Pantalla temporal "Sitio en desarrollo".
  El sitio completo sigue intacto en los componentes (SiteIndex, SiteHero, etc.).
  Para restaurarlo: volver a renderizar <SiteNav/> + <main><SiteIndex/></main> + <SiteFooter/>
  (ver commit inicial 81bf5ae).
-->
<template>
  <div class="relative min-h-[100svh] overflow-x-hidden">
    <GradientMesh />

    <main class="relative z-10 min-h-[100svh] flex flex-col items-center justify-center px-5 text-center">
      <div class="max-w-2xl mx-auto">
        <!-- Marca -->
        <div class="mb-9 flex items-center justify-center gap-3">
          <span class="grid place-items-center h-11 w-11 rounded-full border border-line bg-bg-card/70 font-display text-lg backdrop-blur-md">
            {{ site.initials }}
          </span>
          <span class="text-sm uppercase tracking-[0.28em] text-ink-dim">{{ site.name }}</span>
        </div>

        <!-- Chip de estado -->
        <div class="chip mb-9">
          <span class="pulse-dot" />
          Sitio en desarrollo
        </div>

        <!-- Título -->
        <h1 class="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
          <span class="block">Estamos construyendo</span>
          <span class="block italic gradient-text">algo especial.</span>
        </h1>

        <p class="mt-8 mx-auto max-w-lg text-lg text-ink-dim leading-relaxed">
          Muy pronto vas a conocer el trabajo de {{ site.name }}.
          Estamos afinando cada detalle — gracias por la paciencia.
        </p>

        <!-- CTA -->
        <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a :href="`mailto:${site.email}`" class="btn-primary group">
            Escribime
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>

        <!-- Redes -->
        <div v-if="site.social.length" class="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-ink-mute">
          <a v-for="s in site.social" :key="s.platform" :href="s.url" target="_blank" rel="noopener noreferrer"
             class="hover:text-accent-soft transition-colors">
            {{ s.handle }}
          </a>
        </div>
      </div>

      <footer class="absolute bottom-6 left-0 right-0 text-center text-[11px] tracking-[0.28em] uppercase text-ink-mute">
        {{ site.footer.credits }}
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { site } from '~/config/site'
</script>
