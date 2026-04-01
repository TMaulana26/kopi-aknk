import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: 'Home',
      specials: 'The Daily Brew',
      about: 'Our Story',
      testimonials: 'Community',
      order: 'Order Now',
    },
    hero: {
      subtitle: 'KOPI AKNK',
      title1: 'Crafted with Soul,',
      title2: 'Poured with Passion',
      description:
        'From the misty peaks of Gayo to your midnight sanctuary. Experience the art of the perfect extraction, where every drop is a moment of pure clarity.',
      order: 'SECURE YOUR CUP',
      menu: 'EXPLORE THE BLENDS',
    },
    specials: {
      title: 'Barista’s Signature Choice',
      description:
        'A curated selection of seasonal beans and experimental brews, hand-crafted to elevate your coffee ritual.',
      viewAll: 'Discover the Full Menu',
      items: {
        kawung: {
          title: 'Kopi Gula Kawung',
          description:
            'A nostalgic fusion of bold espresso, creamy milk, and the earthy sweetness of local palm sugar.',
          category: 'Signature',
        },
        americano: {
          title: 'Classic Americano',
          description:
            'The purist’s choice. A clean, sophisticated double shot that highlights the beans’ true character.',
          category: 'Pure Espresso',
        },
        avocado: {
          title: 'The Avocado Bliss',
          description:
            'A decadent marriage of buttery avocado and espresso, finished with a velvet chocolate swirl.',
          category: 'Treats',
        },
        karamel: {
          title: 'Caramel Cloud Latte',
          description:
            'Smooth, silky latte infused with our house-made buttery caramel. Dessert in a cup.',
          category: 'Milk Based',
        },
        spanish: {
          title: 'Spanish Sunrise',
          description:
            'Bold espresso softened by the creamy sweetness of condensed milk. Perfectly balanced.',
          category: 'Milk Based',
        },
      },
      orderMessage: "I'd love to try the {name} ({price}). Can you prepare one for me?",
    },
    about: {
      subtitle: 'THE CRAFT',
      title1: 'A Sanctuary for the',
      title2: 'Night Owls & Early Risers.',
      description1:
        'To us, coffee isn’t just a caffeine kick—it’s an art form. Every roast profile is a labor of love, designed to bring out the hidden notes of the bean.',
      description2:
        "Whether you're chasing a deadline or just seeking a quiet moment of reflection, we pour our heart into every cup to make sure it's the highlight of your day.",
      stats: {
        roasts: 'Artisanal Roasts',
        satisfaction: 'Happy Brew-Hounds',
      },
      floating: 'Always Fresh, Never Ordinary',
    },
    testimonials: {
      subtitle: 'WHAT’S BREWING IN THE COMMUNITY',
      title: 'Voices of Kopi AKNK',
      instagram: "Caught a vibe? Tag us {'@'}kopiaknk",
      join: 'Join the Family',
      items: [
        {
          name: 'Sarah J.',
          role: 'Coffee Aficionado',
          text: "The aesthetic is unmatched, but the coffee is the real star. Best latte art I've seen in the city.",
        },
        {
          name: 'Michael R.',
          role: 'Digital Nomad',
          text: 'The perfect late-night hideout. Fast WiFi, killer beans, and staff that actually know their craft.',
        },
        {
          name: 'Emily L.',
          role: 'Local Regular',
          text: 'There’s a warmth here you don’t find in big chains. The Drip & Pour is literally a hug in a mug.',
        },
      ],
    },
    footer: {
      title1: 'Premium Coffee,',
      title2: 'Delivered to Your Door.',
      description:
        'Can’t make it to the shop? Let us bring the café experience to you. Freshly brewed and ready to go.',
      whatsapp: 'Chat & Order',
      orderMessage: 'Hi! I’d like to place a coffee order.',
      address: '123 Barista Lane, Espresso District',
      rights: '© 2026 Kopi AKNK. All rights reserved.',
    },
  },
  id: {
    nav: {
      home: 'Beranda',
      specials: 'Menu Spesial',
      about: 'Cerita Kami',
      testimonials: 'Kata Mereka',
      order: 'Pesan Sekarang',
    },
    hero: {
      subtitle: 'KOPI AKNK',
      title1: 'Sajian Murni,',
      title2: 'Diramu Dengan Hati',
      description:
        'Menelusuri rasa dari dataran tinggi Gayo hingga ke cangkir Anda. Nikmati ritual ekstraksi kopi yang jujur untuk menemani setiap momen kejernihan Anda.',
      order: 'PESAN ONLINE',
      menu: 'LIHAT MENU',
    },
    specials: {
      title: 'Racikan Istimewa Minggu Ini',
      description:
        'Eksplorasi rasa melalui pilihan biji kopi musiman yang dikurasi khusus oleh barista kami untuk Anda.',
      viewAll: 'Lihat Semua Menu',
      items: {
        kawung: {
          title: 'Kopi Gula Kawung',
          description:
            'Espresso signature kami dengan sentuhan manis autentik gula aren dan susu yang lembut.',
          category: 'Andalan',
        },
        americano: {
          title: 'Kopi Americano',
          description:
            'Double shot espresso yang bold dan bersih. Definisi rasa kopi yang sesungguhnya.',
          category: 'Hitam',
        },
        avocado: {
          title: 'Kopi Avocado',
          description:
            'Perpaduan mewah alpukat segar, lelehan cokelat, dan espresso. Creamy dan memanjakan.',
          category: 'Eksperimental',
        },
        karamel: {
          title: 'Kopi Karamel',
          description: 'Latte lembut dengan saus karamel homemade yang manisnya pas di lidah.',
          category: 'Berbasis Susu',
        },
        spanish: {
          title: 'Kopi Spanish Latte',
          description:
            'Favorit modern yang memadukan espresso kuat dengan manisnya susu kental manis.',
          category: 'Berbasis Susu',
        },
      },
      orderMessage: 'Halo, saya mau pesan {name} seharga {price} ya.',
    },
    about: {
      subtitle: 'DEDIKASI KAMI',
      title1: 'Rumah Bagi Para',
      title2: 'Pencari Inspirasi Malam.',
      description1:
        'Bagi kami, kopi adalah sebuah karya seni. Setiap biji yang kami sangrai adalah janji akan kualitas dan kedalaman rasa yang konsisten.',
      description2:
        'Entah itu untuk memulai pagi atau sekadar teman saat lembur malam, kami hadir untuk menyajikan seduhan yang personal bagi lidah Anda.',
      stats: {
        roasts: 'Varian Sangrai',
        satisfaction: 'Pelanggan Setia',
      },
      floating: 'Biji Kopi Fresh Setiap Hari',
    },
    testimonials: {
      subtitle: 'POJOK CERITA',
      title: 'Apa Kata Teman Kopi?',
      instagram: "Punya momen seru? Tag kami {'@'}kopiaknk",
      join: 'Gabung Komunitas',
      items: [
        {
          name: 'Sarah J.',
          role: 'Pencinta Kopi',
          text: 'Suasananya juara. Tempat paling pas buat cari inspirasi sambil menikmati latte art terbaik di kota.',
        },
        {
          name: 'Michael R.',
          role: 'Digital Nomad',
          text: 'WiFi kencang, kopinya mantap, dan baristanya ramah banget. Benar-benar pengalaman "Midnight Barista".',
        },
        {
          name: 'Emily L.',
          role: 'Warga Lokal',
          text: 'Setiap tegukan terasa personal. Menu Drip & Pour-nya benar-benar sebuah mahakarya.',
        },
      ],
    },
    footer: {
      title1: 'Kopi Premium,',
      title2: 'Hadir di Meja Anda.',
      description:
        'Siap merasakan seduhan terbaik dari rumah? Hubungi kami langsung dan biarkan kami mengantar kebahagiaan untuk Anda.',
      whatsapp: 'Pesan via WhatsApp',
      orderMessage: 'Halo, saya ingin memesan kopi.',
      address: 'Jl. Barista 123, Distrik Espresso',
      rights: '© 2026 Kopi AKNK. Hak cipta dilindungi.',
    },
  },
}

const getInitialLocale = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('locale')
    if (saved && (saved === 'en' || saved === 'id')) {
      return saved
    }
  }
  return 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'id',
  messages,
})

export default i18n
