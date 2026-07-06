<template>
  <div aria-hidden="true" class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    <div class="mesh-blob animate-float"
         style="top: -10%; left: -10%; width: 60vw; height: 60vw; background: radial-gradient(circle at center, #B14EFF 0%, transparent 60%);" />
    <div class="mesh-blob animate-pulse-soft"
         style="top: 30%; right: -15%; width: 55vw; height: 55vw; background: radial-gradient(circle at center, #7A1FCC 0%, transparent 65%); animation-delay: -2s;" />
    <div class="mesh-blob"
         style="bottom: -10%; left: 20%; width: 45vw; height: 45vw; background: radial-gradient(circle at center, #4D0F8A 0%, transparent 60%); opacity: 0.35;" />
    <div class="absolute inset-0 grain" />
    <div class="absolute inset-0"
         style="background: radial-gradient(ellipse at top, transparent 0%, #0A0A0F 75%);" />
  </div>
</template>
