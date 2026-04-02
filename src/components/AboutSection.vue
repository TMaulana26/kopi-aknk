<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Clock } from 'lucide-vue-next'
</script>

<template>
  <section id="about" class="py-16 md:py-24 overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div class="lg:col-span-5 space-y-8 order-2 lg:order-1">
          <p class="text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] text-primary uppercase">{{
            $t('about.subtitle') }}</p>
          <h2 class="text-4xl sm:text-5xl md:text-6xl font-serif font-medium leading-[1.1]">
            {{ $t('about.title1') }}<br />
            <span class="italic">{{ $t('about.title2') }}</span>
          </h2>
          <div class="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              {{ $t('about.description1') }}
            </p>
            <p>
              {{ $t('about.description2') }}
            </p>
          </div>

          <div class="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
            <div class="space-y-1">
              <p class="text-4xl font-serif font-bold">12</p>
              <p class="text-xs tracking-widest uppercase text-muted-foreground font-bold">{{ $t('about.stats.roasts')
                }}</p>
            </div>
            <div class="space-y-1">
              <p class="text-4xl font-serif font-bold">99.9%</p>
              <p class="text-xs tracking-widest uppercase text-muted-foreground font-bold">{{
                $t('about.stats.satisfaction') }}</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 relative order-1 lg:order-2">
          <div class="absolute -inset-4 bg-primary/10 blur-3xl rounded-[40px] opacity-20"></div>
          <AspectRatio :ratio="4 / 5" class="rounded-[40px] overflow-hidden border border-white/10 shadow-3xl">
            <img src="/product-02.webp" alt="Kopi AKNK Atmosphere - Artisanal Coffee Brewing" class="w-full h-full object-cover" />
          </AspectRatio>
          <!-- Floating element -->
          <div
            class="absolute -bottom-16 -left-8 bg-card/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl space-y-4 max-w-[200px] hidden md:block">
            <Clock class="w-8 h-8 text-primary" />
            <p class="text-sm font-medium leading-tight">{{ $t('about.floating') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
