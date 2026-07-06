// Edita aquí todos los datos del sitio. Sin tocar componentes.

export interface SocialLink {
  platform: 'instagram' | 'tiktok' | 'youtube' | 'linkedin' | 'twitter' | 'spotify'
  handle: string
  url: string
  followers?: string
}

export interface Service {
  title: string
  description: string
  icon: string
}

export interface Brand {
  name: string
  logo?: string // path to /public or null para mostrar el nombre
}

export interface CaseStudy {
  title: string
  brand: string
  category: string
  image: string
  metric?: string
  year: string
}

export const site = {
  name: 'Oriana Sosa',
  initials: 'OS',
  role: 'Content Creator · Marketing Strategist',
  tagline: 'Construyo marcas que se sienten humanas y campañas que se quedan en la memoria.',
  intro:
    'Estratega de marca y creadora de contenido. Combino marketing digital, narrativa visual y data para que las marcas conecten de verdad con su audiencia.',
  location: 'Disponible para proyectos · LATAM & remoto',
  email: 'hola@orianasosa.com',
  whatsapp: '+598 99 000 000',
  cv: '/cv-oriana-sosa.pdf',
  avatar: '/oriana_sosa.jpeg',

  social: <SocialLink[]>[
    { platform: 'instagram', handle: '@orianasosa', url: 'https://instagram.com/', followers: '45K' },
    { platform: 'tiktok', handle: '@orianasosa', url: 'https://tiktok.com/', followers: '78K' },
    { platform: 'youtube', handle: 'Oriana Sosa', url: 'https://youtube.com/', followers: '12K' },
    { platform: 'linkedin', handle: 'Oriana Sosa', url: 'https://linkedin.com/' }
  ],

  services: <Service[]>[
    {
      title: 'Content Creation',
      description: 'UGC, reels y series episódicas con storytelling que convierte.',
      icon: 'sparkles'
    },
    {
      title: 'Brand Strategy',
      description: 'Posicionamiento, tono de voz y arquitectura de marca.',
      icon: 'compass'
    },
    {
      title: 'Social Media',
      description: 'Estrategia de canal, calendarios, growth y community.',
      icon: 'feed'
    },
    {
      title: 'Consultoría 1:1',
      description: 'Mentorías a creadoras y founders que quieren profesionalizar su marca.',
      icon: 'spark'
    }
  ],

  brands: <Brand[]>[
    { name: 'NIVEA' },
    { name: 'Coca-Cola' },
    { name: 'L\'Oréal' },
    { name: 'Adidas' },
    { name: 'Spotify' },
    { name: 'Mercado Libre' },
    { name: 'Samsung' },
    { name: 'Sephora' }
  ],

  caseStudies: <CaseStudy[]>[
    {
      title: 'Reposicionamiento de marca',
      brand: 'Marca A',
      category: 'Brand Strategy',
      image: '/case-01.jpg',
      metric: '+312% engagement',
      year: '2025'
    },
    {
      title: 'Campaña UGC multi-canal',
      brand: 'Marca B',
      category: 'Content',
      image: '/case-02.jpg',
      metric: '4.2M views',
      year: '2025'
    },
    {
      title: 'Lanzamiento producto skincare',
      brand: 'Marca C',
      category: 'Launch',
      image: '/case-03.jpg',
      metric: 'Sold out 48 hs',
      year: '2024'
    },
    {
      title: 'Serie de reels educativos',
      brand: 'Marca D',
      category: 'Content',
      image: '/case-04.jpg',
      metric: '+18K followers',
      year: '2024'
    }
  ],

  about: {
    headline: 'Marketing con propósito, contenido con personalidad.',
    body: [
      'Soy Oriana, comunicadora y estratega. Estudié marketing y llevo años traduciendo objetivos de negocio en piezas de contenido que la gente realmente quiere ver.',
      'Trabajé con marcas de consumo masivo, startups y proyectos personales. Lo que me motiva: ideas claras, ejecución prolija y resultados medibles.'
    ],
    highlights: [
      { label: 'Años en marketing', value: '6+' },
      { label: 'Marcas trabajadas', value: '40+' },
      { label: 'Proyectos entregados', value: '120+' }
    ]
  },

  testimonials: [
    {
      quote: 'Oriana entendió la marca en una reunión. El resultado superó cualquier brief.',
      author: 'Lucía M.',
      role: 'Brand Manager'
    },
    {
      quote: 'Profesional, creativa y obsesionada con el detalle. Vuelve a trabajar con nosotros siempre.',
      author: 'Diego R.',
      role: 'Founder'
    }
  ],

  now: 'Aceptando colaboraciones para Q2 2026',

  footer: {
    copy: '© 2026 Oriana Sosa. Diseñado con cuidado.',
    credits: 'Hecho con Nuxt · Tailwind · GSAP'
  }
}

export type Site = typeof site
