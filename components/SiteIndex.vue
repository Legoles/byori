<template>
  <div class="relative">
    <SiteHero />
    <div class="mx-auto max-w-7xl px-5 md:px-8 pb-32">
      <div class="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
        <SocialStats class="md:col-span-3" />
        <SiteReel class="md:col-span-3" />
        <Services class="md:col-span-4" />
        <NowCard class="md:col-span-2" />
        <CaseStudies class="md:col-span-6" />
        <BrandsMarquee class="md:col-span-6" />
        <AboutCard class="md:col-span-4" />
        <Testimonials class="md:col-span-2" />
        <ContactCard class="md:col-span-6" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useReveal()
</script>
