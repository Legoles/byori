<template>
  <div class="bento-card p-7 md:p-8 reveal flex flex-col justify-between">
    <div>
      <span class="chip">
        <span class="h-1.5 w-1.5 rounded-full bg-accent" />
        Testimonios
      </span>

      <blockquote class="mt-7 font-display text-xl md:text-2xl leading-snug">
        <span class="text-accent-soft">"</span>{{ active.quote }}<span class="text-accent-soft">"</span>
      </blockquote>
    </div>

    <div class="mt-8 flex items-center justify-between">
      <div>
        <p class="text-sm font-medium">{{ active.author }}</p>
        <p class="text-xs text-ink-mute">{{ active.role }}</p>
      </div>
      <div class="flex gap-1.5">
        <button v-for="(_, i) in site.testimonials" :key="i"
                @click="index = i"
                :aria-label="`testimonio ${i + 1}`"
                class="h-1.5 rounded-full transition-all"
                :class="i === index ? 'w-6 bg-accent' : 'w-1.5 bg-line-strong'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { site } from '~/config/site'

const index = ref(0)
const active = computed(() => site.testimonials[index.value])

let id: ReturnType<typeof setInterval> | null = null
onMounted(() => {
  id = setInterval(() => {
    index.value = (index.value + 1) % site.testimonials.length
  }, 5500)
})
onBeforeUnmount(() => id && clearInterval(id))
</script>
