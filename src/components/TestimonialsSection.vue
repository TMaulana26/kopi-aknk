<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Star, Instagram } from 'lucide-vue-next'
</script>

<template>
  <section id="testimonials" class="py-16 md:py-24 bg-card/20 border-y border-white/5">
    <div class="container mx-auto px-6 text-center">
      <p class="text-xs font-bold tracking-[0.4em] text-muted-foreground uppercase mb-6 italic">{{
        $t('testimonials.subtitle') }}</p>
      <h2 class="text-3xl sm:text-4xl md:text-6xl font-serif font-medium mb-12 md:mb-16">{{ $t('testimonials.title') }}</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        <Card v-for="(_, i) in 3" :key="i" 
          class="bg-white/5 border-white/5 p-6 md:p-8 rounded-3xl space-y-4 md:space-y-6 hover:scale-105 transition-all duration-500 hover:bg-white/10 hover:border-primary/30 group">
          <div class="flex gap-1 group-hover:scale-110 transition-transform origin-left duration-500">
            <Star v-for="s in 5" :key="s" class="w-4 h-4 fill-primary text-primary" />
          </div>
          <p class="text-base md:text-lg leading-relaxed italic text-muted-foreground group-hover:text-foreground transition-colors duration-500">"{{ $t(`testimonials.items.${i}.text`) }}"</p>
          <div class="space-y-1">
            <p class="font-bold tracking-tight">{{ $t(`testimonials.items.${i}.name`) }}</p>
            <p class="text-xs text-muted-foreground uppercase tracking-widest font-bold">{{
              $t(`testimonials.items.${i}.role`) }}</p>
          </div>
        </Card>
        
        <!-- Additional dynamic card -->
        <Card
          class="bg-primary/10 border-primary/20 p-6 md:p-8 rounded-3xl flex flex-col justify-center items-center text-center space-y-4 hover:scale-105 transition-all duration-500 hover:bg-primary/20 group">
          <Instagram class="w-10 h-10 text-primary group-hover:rotate-12 transition-transform duration-500" />
          <p class="font-bold group-hover:text-primary transition-colors duration-500">{{ $t('testimonials.instagram') }}</p>
          <Button variant="link" class="text-primary font-bold uppercase tracking-widest p-0 h-auto">
            <a href="https://www.instagram.com/kopiaknk/" target="_blank" class="flex items-center">
              {{ $t('testimonials.join') }}
            </a>
          </Button>
        </Card>
      </div>
    </div>
  </section>
</template>
