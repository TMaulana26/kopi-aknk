<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ArrowRight, MessageCircle, MoreHorizontal } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

const { t } = useI18n()

interface SpecialItem {
  id: string
  price: string
  tags: string[]
  image: string
}

const specials: SpecialItem[] = [
  {
    id: 'kawung',
    price: 'Rp14.000',
    tags: ['COFFEE', 'TRADITIONAL'],
    image: '/Kopi AKNK AI product 04 (Kopi Gula Kawung).png'
  },
  {
    id: 'americano',
    price: 'Rp14.000',
    tags: ['COFFEE', 'BOLD'],
    image: '/Kopi AKNK AI product 06 (Kopi Americano).png'
  },
  {
    id: 'avocado',
    price: 'Rp14.000',
    tags: ['COFFEE', 'FRUIT'],
    image: '/Kopi AKNK AI product 07 (Kopi Avocado).png'
  },
  {
    id: 'karamel',
    price: 'Rp14.000',
    tags: ['COFFEE', 'SWEET'],
    image: '/Kopi AKNK AI product 08 (Kopi Karamel).png'
  },
  {
    id: 'spanish',
    price: 'Rp14.000',
    tags: ['COFFEE', 'LATTE'],
    image: '/Kopi AKNK AI product 09 (Kopi Spanish Latte).png'
  }
]

const categories = ['Espresso', 'Milk Based', 'Manual Brew']

const getWhatsappUrl = (item: SpecialItem) => {
  const phoneNumber = '6281234567890'
  const itemName = t(`specials.items.${item.id}.title`)
  const message = t('specials.orderMessage', { name: itemName, price: item.price })
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}

const getItemsByCategory = (category: string) => {
  return specials.filter(item => t(`specials.items.${item.id}.category`) === category)
}
</script>

<template>
  <section id="specials" class="py-24 bg-card/50">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div class="space-y-4 max-w-xl">
          <h2 class="text-4xl md:text-5xl font-serif font-medium">{{ t('specials.title') }}</h2>
          <p class="text-muted-foreground text-lg leading-relaxed">
            {{ t('specials.description') }}
          </p>
        </div>

        <!-- All Menu Dialog -->
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="link"
              class="p-0 text-lg group h-auto uppercase tracking-widest font-bold underline-offset-8">
              {{ t('specials.viewAll') }}
              <ArrowRight class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </DialogTrigger>
          <DialogContent
            class="w-[95vw] sm:max-w-6xl max-h-[90vh] bg-black/80 backdrop-blur-2xl border-white/10 p-0 overflow-hidden rounded-[32px] md:rounded-[40px]">
            <DialogHeader class="p-6 md:p-8 border-b border-white/5 bg-white/5">
              <DialogTitle class="text-2xl md:text-3xl font-serif flex items-center gap-3">
                <MoreHorizontal class="text-primary" />
                {{ t('nav.specials') }}
              </DialogTitle>
            </DialogHeader>
            <ScrollArea class="h-[calc(90vh-100px)] p-4 md:p-8">
              <div class="space-y-12">
                <div v-for="category in categories" :key="category" class="space-y-6">
                  <h3 class="text-xs font-bold tracking-[0.3em] text-primary uppercase opacity-80">{{ category }}</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div v-for="item in getItemsByCategory(category)" :key="item.id"
                      class="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all group">
                      <div class="w-20 h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden shrink-0">
                        <img :src="item.image" :alt="t(`specials.items.${item.id}.title`)"
                          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="flex justify-between items-baseline gap-2">
                          <h4 class="font-serif text-lg md:text-xl">{{ t(`specials.items.${item.id}.title`) }}</h4>
                          <span class="text-primary font-bold text-sm md:text-base">{{ item.price }}</span>
                        </div>
                        <p class="text-sm md:text-base text-muted-foreground mt-1">{{ t(`specials.items.${item.id}.description`) }}
                        </p>
                        <a :href="getWhatsappUrl(item)" target="_blank"
                          class="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-primary mt-2 group-hover:underline">
                          {{ t('footer.whatsapp') }}
                          <ArrowRight class="w-3 h-3 -translate-y-px" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>

      <!-- Specials Carousel -->
      <Carousel :opts="{
        align: 'start',
        loop: true
      }" class="w-full relative group">
        <CarouselContent class="-ml-4 md:-ml-10">
          <CarouselItem v-for="(item, index) in specials" :key="index"
            class="pl-4 md:pl-10 basis-full sm:basis-1/2 lg:basis-1/3">
            <Card
              class="bg-black/20 border-white/5 overflow-hidden group/card hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
              <CardHeader class="p-0">
                <AspectRatio :ratio="1">
                  <img :src="item.image" :alt="t(`specials.items.${item.id}.title`)"
                    class="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700" />
                </AspectRatio>
              </CardHeader>
              <CardContent class="p-6 md:p-8 space-y-4">
                <div class="flex items-center gap-2">
                  <Badge v-for="tag in item.tags" :key="tag" variant="secondary"
                    class="bg-white/5 border-white/5 text-[10px] tracking-widest font-bold">{{ tag }}</Badge>
                </div>
                <div class="flex justify-between items-baseline gap-2">
                  <CardTitle class="text-xl md:text-2xl font-serif">{{ t(`specials.items.${item.id}.title`) }}</CardTitle>
                  <span class="text-lg md:text-xl font-bold text-primary">{{ item.price }}</span>
                </div>
                <CardDescription class="text-sm md:text-base text-muted-foreground leading-relaxed h-12 line-clamp-2">
                  {{ t(`specials.items.${item.id}.description`) }}
                </CardDescription>
              </CardContent>
              <CardFooter class="p-6 md:p-8 pt-0">
                <Button as="a" :href="getWhatsappUrl(item)" target="_blank" variant="outline"
                  class="w-full h-10 md:h-12 text-xs md:text-sm uppercase tracking-widest font-bold transition-all bg-[#25D366]/10 hover:bg-[#25D366] hover:text-white border-white/10 group flex items-center justify-center gap-2">
                  <MessageCircle class="w-4 h-4" />
                  {{ t('footer.whatsapp') }}
                </Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <div class="hidden md:block">
          <CarouselPrevious
            class="-left-12 lg:-left-16 bg-white/5 border-white/10 text-white hover:bg-primary hover:border-primary transition-all opacity-0 group-hover:opacity-100" />
          <CarouselNext
            class="-right-12 lg:-right-16 bg-white/5 border-white/10 text-white hover:bg-primary hover:border-primary transition-all opacity-0 group-hover:opacity-100" />
        </div>
      </Carousel>
    </div>
  </section>
</template>
