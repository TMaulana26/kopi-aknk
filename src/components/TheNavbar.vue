<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Coffee, Globe, Menu, X } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onUnmounted, watch } from 'vue'

const { locale } = useI18n()
const activeSection = ref('hero')

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'id' : 'en'
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', locale.value)
  }
}

watch(isMenuOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

let observer: IntersectionObserver | null = null

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, options)

  const sections = ['hero', 'specials', 'about', 'testimonials']
  sections.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer?.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <nav class="fixed top-0 w-full z-50 border-b border-white/5 bg-background/50 backdrop-blur-xl">
    <div class="container mx-auto px-6 h-20 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
          <Coffee class="w-5 h-5 text-primary" />
        </div>
        <span class="text-xl font-serif font-bold tracking-tight">KOPI AKNK</span>
      </div>
      <div
        class="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest leading-none">
        <a href="#hero" 
          :class="['transition-all duration-300 relative py-2', activeSection === 'hero' ? 'text-primary' : 'text-muted-foreground hover:text-foreground']">
          {{ $t('nav.home') }}
          <span v-if="activeSection === 'hero'" class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full blur-[1px]"></span>
        </a>
        <a href="#specials" 
          :class="['transition-all duration-300 relative py-2', activeSection === 'specials' ? 'text-primary' : 'text-muted-foreground hover:text-foreground']">
          {{ $t('nav.specials') }}
          <span v-if="activeSection === 'specials'" class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full blur-[1px]"></span>
        </a>
        <a href="#about" 
          :class="['transition-all duration-300 relative py-2', activeSection === 'about' ? 'text-primary' : 'text-muted-foreground hover:text-foreground']">
          {{ $t('nav.about') }}
          <span v-if="activeSection === 'about'" class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full blur-[1px]"></span>
        </a>
        <a href="#testimonials" 
          :class="['transition-all duration-300 relative py-2', activeSection === 'testimonials' ? 'text-primary' : 'text-muted-foreground hover:text-foreground']">
          {{ $t('nav.testimonials') }}
          <span v-if="activeSection === 'testimonials'" class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full blur-[1px]"></span>
        </a>
      </div>
      <div class="flex items-center gap-2">
        <Button variant="ghost" size="icon" @click="toggleLanguage" class="rounded-full hover:bg-white/10 relative">
          <Globe class="w-5 h-5 text-muted-foreground" />
          <span class="sr-only">Toggle Language</span>
          <span class="absolute -bottom-1 text-[8px] font-bold uppercase">{{ locale }}</span>
        </Button>
        <Button variant="outline" size="sm" class="hidden md:flex uppercase tracking-tighter font-bold">
          <a href="#order">{{ $t('nav.order') }}</a>
        </Button>
        <Button variant="ghost" size="icon" @click="toggleMenu" class="md:hidden rounded-full hover:bg-white/10">
          <Menu v-if="!isMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </Button>
      </div>

      <!-- Mobile Menu Overlay -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-[-10px]"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-[-10px]"
      >
        <div v-if="isMenuOpen" class="fixed inset-0 top-20 bg-background/95 backdrop-blur-3xl z-40 md:hidden flex flex-col p-8 space-y-8 text-2xl font-serif">
          <a href="#hero" @click="closeMenu"
            :class="[activeSection === 'hero' ? 'text-primary' : 'text-muted-foreground']">
            {{ $t('nav.home') }}
          </a>
          <a href="#specials" @click="closeMenu"
            :class="[activeSection === 'specials' ? 'text-primary' : 'text-muted-foreground']">
            {{ $t('nav.specials') }}
          </a>
          <a href="#about" @click="closeMenu"
            :class="[activeSection === 'about' ? 'text-primary' : 'text-muted-foreground']">
            {{ $t('nav.about') }}
          </a>
          <a href="#testimonials" @click="closeMenu"
            :class="[activeSection === 'testimonials' ? 'text-primary' : 'text-muted-foreground']">
            {{ $t('nav.testimonials') }}
          </a>
          <div class="pt-8 mt-auto border-t border-white/10">
            <Button variant="outline" size="xl" class="w-full uppercase tracking-widest font-black" @click="closeMenu">
              <a href="#order" class="w-full text-center">{{ $t('nav.order') }}</a>
            </Button>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>
