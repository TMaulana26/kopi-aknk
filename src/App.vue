<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import TheNavbar from '@/components/TheNavbar.vue'
import TheHero from '@/components/TheHero.vue'
import SpecialsSection from '@/components/SpecialsSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen dark bg-background text-foreground font-sans selection:bg-primary/30 overflow-x-hidden">
    <TheNavbar />

    <main>
      <TheHero id="hero" />

      <Separator class="opacity-10" />

      <SpecialsSection id="specials" />

      <AboutSection id="about" />

      <TestimonialsSection id="testimonials" />
    </main>

    <TheFooter id="order" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

:root {
  --font-sans: 'Outfit', sans-serif;
  --font-serif: 'Playfair Display', serif;
}

body {
  font-family: var(--font-sans);
}

.font-serif {
  font-family: var(--font-serif);
}

/* Custom shadow for premium feel */
.shadow-3xl {
  box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.5), 0 30px 60px -30px rgba(0, 0, 0, 0.7);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
