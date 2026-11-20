// ─────────────────────────────────────────────────────────────
//  The "human" texts: Fernanda's voice, her story, the factory
//  floor and the doubts people have before importing.
//  Photos live in /public/images/photos — videos in /public/videos
// ─────────────────────────────────────────────────────────────

export const human = {
  es: {
    hello: 'Hola, soy Fernanda',
    heroSub:
      'Te ayudo a encontrar productos, comprarlos directo de la fábrica y traerlos hasta tu negocio. Viví seis años en China y trabajé en comercio internacional; hoy pongo esa experiencia a tu servicio, paso a paso y en español.',
    heroCaption: 'En un almacén en China, revisando mercancía',

    chooser: {
      kicker: 'Empecemos por ti',
      title: '¿Qué te gustaría lograr?',
      options: [
        {
          icon: 'store',
          label: 'Tengo un puesto o una tienda',
          text: 'Te ayudo a encontrar lo que se está vendiendo y a comprarlo más barato, directo de la fábrica. Empieza por la guía: ahí ves lo más vendido y puedes buscar la fábrica con una foto.',
          cta: 'Abrir la guía', href: 'guia',
        },
        {
          icon: 'rocket',
          label: 'Quiero empezar un negocio extra',
          text: 'Empieza con calma y con números claros. Antes de invertir, calcula cuánto te cuesta traer un producto hasta tu ciudad: producto, flete e impuestos.',
          cta: 'Calcular mi costo', href: 'cotizador',
        },
        {
          icon: 'cart',
          label: 'Vendo al mayoreo o en línea',
          text: 'Producto propio, mejor margen y la logística resuelta hasta tu bodega. Cuéntame qué quieres traer y te mando tu cotización en menos de 24 horas.',
          cta: 'Pedir cotización', href: 'solicitud',
        },
        {
          icon: 'book',
          label: 'Primero quiero aprender',
          text: 'Muy buena decisión. En el blog comparto lo que aprendí en seis años en China y en la Organización Mundial del Comercio, explicado de forma sencilla.',
          cta: 'Leer el blog', href: 'blog',
        },
      ],
      call: '¿Prefieres platicarlo?',
    },

    story: {
      kicker: 'Mi historia',
      title: 'De México al mundo, y de regreso',
      chapters: [
        {
          tag: 'Raíces',
          title: 'Mexicana de corazón',
          text: 'Crecí en México rodeada de comercio: mis papás empezaron vendiendo en un mercado local. De ahí viene mi cariño por los negocios que se construyen con esfuerzo.',
          photo: '/images/photos/embajada-mexico-china.webp',
          caption: 'En la Embajada de México en China',
        },
        {
          tag: '2017 – 2023',
          title: 'Seis años en China',
          text: 'Me fui a estudiar a China y regresé con una maestría y una certeza: las fábricas que surten al mundo están más cerca de lo que creemos.',
          photo: '/images/photos/graduacion-birrete.webp',
          caption: 'Mi graduación en la Universidad Xi’an Jiaotong',
        },
        {
          tag: 'El mundo',
          title: 'De la OMC a 30 países',
          text: 'Trabajé en la Organización Mundial del Comercio y en proyectos en más de 30 países. Vi cómo las grandes plataformas crecen sin fronteras… y cómo los pequeños negocios se quedan atrás.',
          photo: '/images/photos/banco-mundial.webp',
          caption: 'En el Grupo Banco Mundial, con traje tradicional mexicano',
        },
        {
          tag: 'Hoy',
          title: 'InnovationsMX',
          text: 'Regresé para poner todo eso al servicio de los negocios de Latinoamérica: comprar directo de fábrica, conocer el costo real y competir con mejores servicios.',
          photo: '/images/photos/almacen-china.webp',
          caption: 'Revisando mercancía en un almacén',
        },
      ],
      more: 'Conoce mi historia completa',
    },

    floor: {
      kicker: 'Así trabajamos',
      title: 'Vamos a la fábrica para que tú no tengas que adivinar',
      sub: 'Visitamos fábricas, revisamos muestras y procesos, y acompañamos la mercancía hasta México. Esto es lo que no ves cuando compras en línea.',
      items: [
        { type: 'video', src: '/videos/inspeccion-suelas.mp4', poster: '/images/photos/poster-suelas.jpg', caption: 'Inspección de suelas en la línea de producción' },
        { type: 'photo', src: '/images/photos/muestra-plantilla.webp', caption: 'Revisando una muestra de plantilla' },
        { type: 'video', src: '/videos/inspeccion-camaras-aire.mp4', poster: '/images/photos/poster-camaras.jpg', caption: 'Revisión de cámaras de aire para calzado' },
        { type: 'photo', src: '/images/photos/centro-logistico-mx.webp', caption: 'Visita a un centro logístico en México' },
      ],
    },

    fears: {
      kicker: 'Dudas comunes al empezar',
      title: 'Si te sientes así, no eres el único',
      items: [
        { q: 'Me da miedo que me llegue algo diferente a lo que pedí.', a: 'Por eso visitamos fábricas y revisamos muestras antes de que tu mercancía viaje.' },
        { q: 'No sé cuánto me va a costar en total.', a: 'Con el cotizador y tu cotización conoces el costo completo antes de invertir un peso.' },
        { q: 'Nunca he importado y no sé por dónde empezar.', a: 'Te acompaño paso a paso, en español, desde la primera llamada hasta que recibes tu mercancía.' },
        { q: '¿Cómo sé que puedo confiar?', a: 'Agenda una llamada y conóceme. Hablas con una persona, no con un bot.' },
      ],
      clients: 'Conoce a nuestros clientes',
    },

    letter: {
      kicker: 'Una carta para ti',
      greeting: 'Querida emprendedora, querido emprendedor:',
      paragraphs: [
        'Sé lo que cuesta sacar adelante un negocio: cada peso cuenta y cada decisión importa.',
        'Hoy el comercio no tiene fronteras, y eso puede sentirse como una amenaza. Yo creo que también es una oportunidad: la misma fábrica que surte a las grandes plataformas puede surtir tu negocio.',
        'InnovationsMX existe para acompañarte en ese camino, con información clara, trato humano y la experiencia de quien ha estado del otro lado del mundo.',
      ],
      closing: 'Con cariño,',
      sign: 'Fernanda',
      role: 'Fundadora de InnovationsMX',
    },

    contactHuman: 'Hablas con una persona, no con un bot.',

  },

  en: {
    hello: "Hi, I'm Fernanda",
    heroSub:
      'I help businesses across Latin America source directly from manufacturers and bring their goods home. Six years in China and a career in international trade — now working for you, with clarity at every step.',
    heroCaption: 'At a warehouse in China, checking goods',

    chooser: {
      kicker: 'Start with you',
      title: 'Where are you starting from?',
      options: [
        {
          icon: 'store',
          label: 'I run a retail business',
          text: "Find what's selling and buy it for less, directly from the factory. Start with the importer guide: see best sellers and find the factory from a single photo.",
          cta: 'Open the guide', href: 'guia',
        },
        {
          icon: 'rocket',
          label: "I'm launching a new venture",
          text: 'Start with clear numbers. Before investing, estimate the full landed cost of a product — goods, freight and duties.',
          cta: 'Estimate my cost', href: 'cotizador',
        },
        {
          icon: 'cart',
          label: "I'm scaling wholesale or e-commerce",
          text: 'Your own product line, stronger margins and logistics handled to your warehouse. Tell us what you need and receive a quotation within 24 hours.',
          cta: 'Request a quotation', href: 'solicitud',
        },
        {
          icon: 'book',
          label: 'I want to learn first',
          text: 'Smart move. Our insights share what I learned in six years in China and at the World Trade Organization — in plain language.',
          cta: 'Read insights', href: 'blog',
        },
      ],
      call: 'Rather talk it through?',
    },

    story: {
      kicker: 'My story',
      title: 'From Mexico to the world — and back',
      chapters: [
        {
          tag: 'Roots',
          title: 'Mexican at heart',
          text: 'I grew up in Mexico surrounded by commerce — my parents started out selling at a local market. That is where my respect for hard-built businesses comes from.',
          photo: '/images/photos/embajada-mexico-china.webp',
          caption: 'At the Embassy of Mexico in China',
        },
        {
          tag: '2017 – 2023',
          title: 'Six years in China',
          text: 'I moved to China to study and came back with a master’s degree and a conviction: the factories that supply the world are closer than we think.',
          photo: '/images/photos/graduacion-birrete.webp',
          caption: 'Graduating from Xi’an Jiaotong University',
        },
        {
          tag: 'The world',
          title: 'From the WTO to 30+ countries',
          text: 'I worked at the World Trade Organization and on projects in more than 30 countries. I saw global platforms grow without borders — and small businesses fall behind.',
          photo: '/images/photos/banco-mundial.webp',
          caption: 'At the World Bank Group, in traditional Mexican dress',
        },
        {
          tag: 'Today',
          title: 'InnovationsMX',
          text: 'I came back to put all of that at the service of Latin American businesses: factory-direct sourcing, full cost visibility and the strategy to compete through better service.',
          photo: '/images/photos/almacen-china.webp',
          caption: 'Checking goods at a warehouse',
        },
      ],
      more: 'Read my full story',
    },

    floor: {
      kicker: 'On the factory floor',
      title: 'We go to the factory so you don’t have to guess',
      sub: 'We visit manufacturers, review samples and processes, and follow your goods all the way to Mexico. This is what you never see when you buy online.',
      items: [
        { type: 'video', src: '/videos/inspeccion-suelas.mp4', poster: '/images/photos/poster-suelas.jpg', caption: 'Inspecting soles on the production line' },
        { type: 'photo', src: '/images/photos/muestra-plantilla.webp', caption: 'Reviewing an insole sample' },
        { type: 'video', src: '/videos/inspeccion-camaras-aire.mp4', poster: '/images/photos/poster-camaras.jpg', caption: 'Checking air units for footwear' },
        { type: 'photo', src: '/images/photos/centro-logistico-mx.webp', caption: 'Visiting a logistics hub in Mexico' },
      ],
    },

    fears: {
      kicker: 'Common concerns',
      title: 'If this is how you feel, you’re not alone',
      items: [
        { q: 'What if I receive something different from what I ordered?', a: 'That’s why we visit factories and review samples before your goods ship.' },
        { q: 'I don’t know what it will cost in total.', a: 'Our calculator and quotation show the full landed cost before you invest.' },
        { q: 'I’ve never imported before.', a: 'We guide you step by step, from the first call until your goods arrive.' },
        { q: 'How do I know I can trust you?', a: 'Book a call and meet me. You talk to a person, not a bot.' },
      ],
      clients: 'Meet our clients',
    },

    letter: {
      kicker: 'A note from the founder',
      greeting: 'Dear entrepreneur,',
      paragraphs: [
        'I know what it takes to build a business: every peso counts and every decision matters.',
        'Commerce today has no borders, and that can feel like a threat. I believe it is also an opportunity: the same factory that supplies global platforms can supply your business.',
        'InnovationsMX exists to walk that path with you — with clear information, a human approach and the experience of someone who has been on the other side of the world.',
      ],
      closing: 'Warmly,',
      sign: 'Fernanda',
      role: 'Founder, InnovationsMX',
    },

    contactHuman: 'You talk to a person, not a bot.',

  },
} as const;
