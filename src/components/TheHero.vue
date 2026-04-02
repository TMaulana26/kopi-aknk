<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0B]">
    <!-- Background Image Layer -->
    <div class="absolute inset-0 z-0">
      <img src="/product-03.webp" alt="Kopi AKNK Hero - Freshly Roasted Coffee Cup"
        class="w-full h-full object-cover object-center scale-105 opacity-70" />
      <!-- Dimming Overlay: Radial and Linear gradients for a premium feel -->
      <div class="absolute inset-0 bg-linear-to-r from-[#0A0A0B] via-[#0A0A0B]/60 to-transparent z-10"></div>
      <div class="absolute inset-0 bg-radial-gradient from-transparent to-[#0A0A0B]/60 z-10"></div>
    </div>

    <div class="container mx-auto px-6 relative z-20">
      <div class="max-w-3xl space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-12 duration-1000">
        <p
          class="text-[10px] md:text-sm font-bold tracking-[0.3em] md:tracking-[0.4em] text-muted-foreground uppercase opacity-80">
          {{ $t('hero.subtitle') }}
        </p>
        <h1
          class="text-4xl sm:text-6xl md:text-8xl font-serif font-medium leading-[1.1] md:leading-[1.05] tracking-tight text-white">
          {{ $t('hero.title1') }}<br />
          <span class="text-muted-foreground italic font-light tracking-normal">{{ $t('hero.title2') }}</span>
        </h1>
        <p class="text-base md:text-xl text-muted-foreground max-w-xl leading-relaxed font-light">
          {{ $t('hero.description') }}
        </p>

        <div class="flex flex-col sm:flex-row items-center gap-6 pt-4">
          <Button size="xl"
            class="w-full sm:w-auto text-sm px-10 h-16 rounded-lg group uppercase tracking-widest font-black shadow-2xl shadow-primary/20">
            <a href="#order" class="flex items-center gap-2">
              {{ $t('hero.order') }}
              <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="xl" variant="outline"
            class="w-full sm:w-auto text-sm px-10 h-16 rounded-lg uppercase tracking-widest font-black border-white/20 hover:bg-white/10 backdrop-blur-sm">
            <a href="#specials">{{ $t('hero.menu') }}</a>
          </Button>
        </div>
      </div>
    </div>

    <!-- Animated Steam Effect (Overlayed on the background cup position) -->
    <div
      class="absolute top-[30%] right-[25%] w-48 h-64 z-15 pointer-events-none opacity-30 mix-blend-screen hidden lg:block">
      <div v-for="n in 3" :key="n" class="steam-particle absolute bottom-0 left-1/2 bg-white/20 blur-2xl rounded-full"
        :style="{
          width: `${50 + n * 20}px`,
          height: `${100 + n * 40}px`,
          left: `${40 + (n - 1) * 15}%`,
          animationDelay: `${n * 0.8}s`,
          animationDuration: `${4 + n}s`
        }"></div>
    </div>
  </section>
</template>

<style scoped>
@keyframes steam {
  0% {
    transform: translateY(0) scaleX(1) rotate(0deg);
    opacity: 0;
  }

  20% {
    opacity: 0.5;
  }

  50% {
    transform: translateY(-80px) scaleX(1.4) rotate(8deg);
    opacity: 0.2;
  }

  100% {
    transform: translateY(-160px) scaleX(2) rotate(-8deg);
    opacity: 0;
  }
}

.steam-particle {
  animation: steam 6s ease-in-out infinite;
  transform-origin: bottom center;
}

.bg-radial-gradient {
  background: radial-gradient(circle at center, transparent, var(--tw-gradient-to));
}
</style>
