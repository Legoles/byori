<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <div class="mx-auto max-w-7xl px-5 md:px-8 pt-5">
      <nav class="flex items-center justify-between rounded-full border border-line bg-bg-soft/60 backdrop-blur-xl px-4 md:px-5 py-2.5">
        <a href="#top" class="flex items-center gap-2 group">
          <span class="grid place-items-center h-8 w-8 rounded-full bg-accent text-white text-xs font-semibold tracking-tight shadow-glow group-hover:scale-105 transition-transform">
            {{ site.initials }}
          </span>
          <span class="text-sm font-medium tracking-tight">{{ site.name }}</span>
        </a>

        <ul class="hidden md:flex items-center gap-1 text-sm text-ink-dim">
          <li><a href="#servicios" class="px-3 py-1.5 rounded-full hover:text-ink transition">Servicios</a></li>
          <li><a href="#trabajos" class="px-3 py-1.5 rounded-full hover:text-ink transition">Trabajos</a></li>
          <li><a href="#sobre-mi" class="px-3 py-1.5 rounded-full hover:text-ink transition">Sobre mí</a></li>
          <li><a href="#contacto" class="px-3 py-1.5 rounded-full hover:text-ink transition">Contacto</a></li>
        </ul>

        <a :href="`mailto:${site.email}`"
           class="text-xs md:text-sm font-medium tracking-tight rounded-full bg-white/[0.06] hover:bg-accent hover:text-white border border-line-strong px-4 py-2 transition">
          Trabajemos juntos
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { site } from '~/config/site'
</script>
