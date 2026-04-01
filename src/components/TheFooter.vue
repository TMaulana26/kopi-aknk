<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { MapPin, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-vue-next'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const whatsappUrl = computed(() => {
  const phoneNumber = '6281234567890'
  const message = t('footer.orderMessage')
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
})
</script>

<template>
  <footer class="pt-20 md:pt-32 pb-12 relative overflow-hidden" id="order">
    <!-- Dark overlay with small image pattern -->
    <div class="absolute inset-0 z-0 opacity-10 grayscale">
      <img src="https://placehold.co/1920x800/111111/444444?text=Coffee+Drip+Pattern" alt="Footer Background"
        class="w-full h-full object-cover" />
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div
        class="max-w-4xl mx-auto bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[60px] p-12 md:p-24 text-center space-y-10">
        <h2 class="text-4xl sm:text-5xl md:text-7xl font-serif font-medium leading-tight">
          {{ $t('footer.title1') }}<br />
          {{ $t('footer.title2') }}
        </h2>
        <p class="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
          {{ $t('footer.description') }}
        </p>
        <div class="pt-4 drop-shadow-2xl">
          <Button 
            as="a"
            :href="whatsappUrl"
            target="_blank"
            size="xl" 
            class="h-16 md:h-20 rounded-full px-8 md:px-12 text-sm md:text-base uppercase tracking-[0.2em] font-bold shadow-2xl hover:scale-105 transition-all bg-[#25D366] hover:bg-[#20bd5a] text-white"
          >
            <MessageCircle class="w-5 h-5 md:w-6 md:h-6 mr-2" />
            {{ $t('footer.whatsapp') }}
          </Button>
        </div>
      </div>

      <div class="mt-20 md:mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="space-y-4 text-center md:text-left">
          <p class="text-2xl font-serif font-bold">KOPI AKNK</p>
          <p class="text-muted-foreground text-sm flex items-center justify-center md:justify-start gap-2">
            <MapPin class="w-4 h-4" /> {{ $t('footer.address') }}
          </p>
        </div>

        <div class="flex gap-6">
          <a href="#"
            class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
            <Instagram class="w-5 h-5" />
          </a>
          <a href="#"
            class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
            <Twitter class="w-5 h-5" />
          </a>
          <a href="#"
            class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
            <Facebook class="w-5 h-5" />
          </a>
        </div>

        <p class="text-muted-foreground text-sm uppercase tracking-widest font-bold">
          {{ $t('footer.rights') }}
        </p>
      </div>
    </div>
  </footer>
</template>
