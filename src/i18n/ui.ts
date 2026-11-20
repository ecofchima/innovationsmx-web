export type Lang = 'es' | 'en';

// ─────────────────────────────────────────────────────────────
//  All page texts. Spanish (es) speaks to small businesses;
//  English (en) presents InnovationsMX as a trade consultancy.
// ─────────────────────────────────────────────────────────────

export const ui = {
  es: {
    htmlLang: 'es-MX',
    metaTitle: 'InnovationsMX · Importa directo de fábrica',
    metaDesc:
      'Encuentra productos nuevos, cómpralos directo a la fábrica y recíbelos en tu puerta. Guía, cotizador y asesoría para emprendedores y PyMEs en México y Latinoamérica.',
    nav: { services: 'Herramientas', blog: 'Blog', clients: 'Clientes', about: 'Sobre mí', contact: 'Contacto' },
    switchLabel: 'English',
    switchShort: 'EN',
    bookCall: 'Agenda una llamada',
    whatsapp: 'Escríbenos por WhatsApp',
    whatsappShort: 'WhatsApp',
    whatsappMsg: 'Hola InnovationsMX, quiero una cotización urgente.',
    inSpanish: '',
    toolLang: '',

    hero: {
      eyebrow: 'Directo de fábrica · Hasta tu puerta',
      title: ['Tecnología del mañana,', 'hoy en tus manos.'],
      sub: 'Te ayudamos a encontrar productos nuevos, comprarlos directo a la fábrica y traerlos hasta tu negocio. Paso a paso, sin intermediarios y en tu idioma.',
      cta: 'Empieza aquí',
      trust: ['Respuesta en 24 h', 'Envío aéreo o marítimo', 'Asesoría personal'],
    },

    proof: [
      { v: '8+', l: 'años de consultoría internacional' },
      { v: '30+', l: 'países con experiencia en proyectos' },
      { v: '6', l: 'años viviendo en China' },
      { v: 'OMC', l: 'experiencia en la Organización Mundial del Comercio' },
    ],

    who: {
      kicker: 'Para quién es',
      title: 'Importar ya no es solo para grandes empresas',
      items: [
        { icon: 'store', title: 'Vendes en tianguis o mercado', text: 'Encuentra lo que se está vendiendo y cómpralo más barato, directo de la fábrica.' },
        { icon: 'rocket', title: 'Quieres un negocio extra', text: 'Empieza con un presupuesto claro y conoce tu costo total antes de comprar.' },
        { icon: 'cart', title: 'Vendes al mayoreo o en línea', text: 'Más margen con producto propio para Mercado Libre o tu tienda, con la logística resuelta.' },
      ],
    },

    path: {
      kicker: 'Cómo funciona',
      title: 'Tu camino en 4 pasos',
      steps: [
        { title: 'Aprende', text: 'Lee el blog y entiende cómo funciona importar.', href: '#blog', icon: 'book' },
        { title: 'Elige', text: 'Descubre qué se vende y encuentra la fábrica.', href: '#herramientas', icon: 'compass' },
        { title: 'Calcula', text: 'Conoce tu costo real antes de invertir.', href: '#herramientas', icon: 'calc' },
        { title: 'Recibe', text: 'Pide tu cotización y te lo llevamos.', href: '#cotizacion', icon: 'box' },
      ],
    },

    blog: {
      kicker: 'Blog',
      title: 'Ideas para competir mejor',
      sub: 'Análisis claros sobre importación, comercio digital y cómo hacer crecer tu negocio.',
      all: 'Ver todos los artículos',
      empty: 'Muy pronto publicaremos los primeros artículos.',
      read: 'Leer artículo',
      back: 'Volver al blog',
      indexTitle: 'Blog',
      indexSub: 'Comercio internacional, importación y estrategia para PyMEs, escrito desde México con experiencia en China.',
      min: 'min de lectura',
      ctaTitle: '¿Quieres aplicar esto a tu negocio?',
      ctaText: 'Agenda una llamada de 20 minutos y lo platicamos.',
      allCats: 'Todos',
      by: 'Por',
      featured: 'Artículo destacado',
      readIn: 'Read in English',
      related: 'Sigue leyendo',
      authorRole: 'Fundadora de InnovationsMX',
      authorMore: 'Conoce a Fernanda',
    },

    tools: {
      kicker: 'Herramientas gratuitas',
      title: 'Elige tu producto y calcula tu costo',
      sub: 'Dos herramientas que creamos para que tomes decisiones con información, antes de invertir un solo peso.',
      guia: {
        step: 'Paso 2 · Elige',
        title: 'Guía para primeros importadores',
        text: 'Descubre qué se vende hoy y encuentra la fábrica con solo una foto del producto.',
        points: ['Lo más vendido por categoría', 'Busca la fábrica con una foto', 'Ejemplos reales y asesoría'],
        cta: 'Abrir la guía',
      },
      cotizador: {
        step: 'Paso 3 · Calcula',
        title: 'Cotizador de importación',
        text: 'Busca tu producto por nombre o código y obtén al instante tu costo total desglosado.',
        points: ['Producto, flete e impuestos', 'Compara por país de origen', 'Estimado de referencia'],
        cta: 'Abrir el cotizador',
      },
    },

    quote: {
      kicker: 'Paso 4 · Recibe',
      title: '¿Listo? Pide tu cotización',
      sub: 'Cuéntanos qué quieres traer y en menos de 24 horas te enviamos tu cotización completa: producto, flete y entrega.',
      need: 'Solo necesitas',
      needs: ['Una foto o la liga del producto', 'Cuántas piezas quieres', 'Tu código postal'],
      min: 'Los pedidos mínimos varían según el producto y la fábrica. Te decimos el tuyo en tu cotización.',
      cta: 'Solicitar cotización',
      shipTitle: 'Enviamos a',
      main: 'México',
      list: ['Perú', 'Colombia', 'Panamá', 'Chile'],
      far: 'Norteamérica y Europa bajo pedido',
    },

    aboutTeaser: {
      kicker: 'Sobre mí',
      title: 'Hola, soy Fernanda',
      text: 'Soy economista, viví seis años en China y he trabajado en más de 30 países, incluida la Organización Mundial del Comercio. Creé InnovationsMX para que cualquier negocio en Latinoamérica pueda comprar directo de fábrica y competir con mejores servicios.',
      cta: 'Conoce mi historia',
    },

    clientsTeaser: {
      kicker: 'Nuestros clientes',
      title: 'Trabajamos con negocios como el tuyo',
      cta: 'Ver clientes',
    },

    clients: {
      metaTitle: 'Nuestros clientes',
      kicker: 'Nuestros clientes',
      title: 'Negocios reales que crecen comprando directo de fábrica',
      sub: 'Desde un puesto en el mercado hasta empresas que buscan nuevos proveedores: adaptamos cada importación al tamaño y la meta de cada cliente.',
      segments: [
        { icon: 'store', title: 'Comerciantes de mercado', text: 'Zapaterías, ropa, accesorios y novedades que buscan mejor precio y producto nuevo cada temporada.' },
        { icon: 'rocket', title: 'Emprendedores', text: 'Personas que invierten en un negocio extra y necesitan empezar con poco riesgo y números claros.' },
        { icon: 'cart', title: 'Mayoristas y vendedores en línea', text: 'Negocios en Mercado Libre y tiendas en línea que quieren producto propio y mejor margen.' },
        { icon: 'briefcase', title: 'Empresas y PyMEs', text: 'Compañías que buscan nuevos proveedores, diversificar su origen o mejorar su estrategia frente al comercio digital.' },
      ],
      testiTitle: 'Lo que dicen nuestros clientes',
      testiEmpty: 'Muy pronto compartiremos aquí las historias de nuestros clientes.',
      howKicker: 'Cómo trabajamos',
      howTitle: 'Un proceso claro, de principio a fin',
      how: [
        { title: 'Platicamos', text: 'Una llamada para entender tu negocio, tu presupuesto y tu meta.' },
        { title: 'Buscamos', text: 'Investigamos el producto y encontramos la fábrica adecuada.' },
        { title: 'Cotizamos', text: 'Te damos tu costo completo antes de que inviertas.' },
        { title: 'Entregamos', text: 'Coordinamos el envío aéreo o marítimo hasta tu puerta.' },
      ],
      ctaTitle: '¿Quieres ser nuestro próximo caso de éxito?',
      ctaText: 'Cuéntanos qué te gustaría vender y armamos tu plan.',
    },

    about: {
      metaTitle: 'Sobre mí · Fernanda Chima',
      kicker: 'Sobre mí',
      role: 'Fundadora de InnovationsMX',
      highlightsTitle: 'Trayectoria',
      socialTitle: 'Sígueme en redes',
      socialSub: 'Comparto productos que se están vendiendo, tips de importación y lo que aprendo del comercio entre China y Latinoamérica.',
      ctaTitle: '¿Platicamos sobre tu negocio?',
      ctaText: 'Agenda una llamada de 20 minutos conmigo.',
    },

    social: {
      kicker: 'Síguenos',
      title: 'Ideas de productos, todas las semanas',
      follow: 'Seguir',
      watch: 'Ver más en TikTok',
      notes: { instagram: 'Reels y productos', tiktok: 'Videos y tips', facebook: 'Comunidad', linkedin: 'Para empresas' },
    },

    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Cuál es el pedido mínimo?', a: 'Varía según el producto y la fábrica. Cuando nos mandas tu solicitud te decimos el mínimo exacto para lo que quieres traer.' },
        { q: '¿En cuánto tiempo me responden?', a: 'Te enviamos tu cotización en menos de 24 horas. Si es urgente, escríbenos por WhatsApp.' },
        { q: '¿Envío aéreo o marítimo?', a: 'Para cargas pequeñas (menos de 20 kg) suele convenir el aéreo; para cargas más grandes, el marítimo. Si no sabes, te recomendamos la mejor opción.' },
        { q: '¿Puedo traer productos de marca?', a: 'Los productos de marca tienen restricciones. Te sugerimos alternativas sin marca o puedes escribirnos para revisar tu caso.' },
        { q: '¿Entregan fuera de la Ciudad de México?', a: 'Sí. El estimado base es a CDMX y calculamos el envío a tu ciudad. También enviamos a Perú, Colombia, Panamá, Chile y otros países.' },
      ],
    },

    contact: {
      kicker: 'Contacto',
      title: 'Hablemos de tu próximo producto',
      callTitle: 'Agenda una llamada',
      callText: '20 minutos para resolver tus dudas y armar tu plan de importación.',
      waTitle: 'Escríbenos por WhatsApp',
      waText: 'Para cotizaciones urgentes. Te respondemos lo antes posible.',
      email: 'O escríbenos a',
    },

    footer: { made: 'Creado por Fernanda Chima', explore: 'Explora', contact: 'Contacto', follow: 'Redes', quote: 'Solicitar cotización' },
  },

  en: {
    htmlLang: 'en',
    metaTitle: 'InnovationsMX · Cross-border trade & sourcing consultancy',
    metaDesc:
      'InnovationsMX is a trade consultancy connecting Latin American businesses with manufacturers in China: market research, factory sourcing, landed-cost analysis and door-to-door logistics.',
    nav: { services: 'Services', blog: 'Insights', clients: 'Clients', about: 'About', contact: 'Contact' },
    switchLabel: 'Español',
    switchShort: 'ES',
    bookCall: 'Book a consultation',
    whatsapp: 'Text us on WhatsApp',
    whatsappShort: 'WhatsApp',
    whatsappMsg: 'Hi InnovationsMX, I need an urgent quote.',
    inSpanish: 'In Spanish',
    toolLang: 'Tool in Spanish',

    hero: {
      eyebrow: 'Trade & sourcing consultancy · Latin America ↔ China',
      title: ["Tomorrow's technology,", 'in your hands today.'],
      sub: 'We help companies across Latin America source directly from manufacturers, understand their true landed cost and build a competitive edge in an era of borderless e-commerce.',
      cta: 'Start here',
      trust: ['Factory-direct sourcing', 'Landed-cost analysis', 'Door-to-door logistics'],
    },

    proof: [
      { v: '8+', l: 'years of international consulting' },
      { v: '30+', l: 'countries of project experience' },
      { v: '6', l: 'years on the ground in China' },
      { v: 'WTO', l: 'experience at the World Trade Organization' },
    ],

    services: {
      kicker: 'Services',
      title: 'End-to-end support, from idea to delivery',
      sub: 'One partner for the whole import cycle — combining market intelligence, supplier access and logistics with a strategic view of trade.',
      items: [
        { icon: 'chart', title: 'Market & product intelligence', text: 'Identify what is selling in your target market and where it is manufactured.', tool: 'guia' },
        { icon: 'search', title: 'Factory sourcing', text: 'Locate and compare manufacturers directly — even from a single product photo.', tool: 'guia' },
        { icon: 'calc', title: 'Landed-cost analysis', text: 'A full breakdown of product, freight and duties before you commit capital.', tool: 'cotizador' },
        { icon: 'ship', title: 'Door-to-door logistics', text: 'Air or sea freight coordinated from the factory floor to your warehouse.', tool: 'solicitud' },
        { icon: 'briefcase', title: 'Strategy & advisory', text: 'Helping SMEs compete with cross-border platforms by rethinking the services around their products.', tool: 'call' },
      ],
      toolLabel: { guia: 'Importer guide', cotizador: 'Cost calculator', solicitud: 'Request a quote', call: 'Book a consultation' },
    },

    blog: {
      kicker: 'Insights',
      title: 'Perspectives on trade and digital commerce',
      sub: 'Analysis on sourcing, cross-border e-commerce and how small businesses can stay competitive.',
      all: 'All insights',
      empty: 'Our first insights are coming soon.',
      read: 'Read',
      back: 'Back to insights',
      indexTitle: 'Insights',
      indexSub: 'Trade, sourcing and strategy for Latin American businesses — written from Mexico with years of experience in China.',
      min: 'min read',
      ctaTitle: 'Want to apply this to your business?',
      ctaText: 'Book a 20-minute consultation.',
      allCats: 'All',
      by: 'By',
      featured: 'Featured insight',
      readIn: 'Leer en español',
      related: 'Keep reading',
      authorRole: 'Founder, InnovationsMX',
      authorMore: 'About Fernanda',
    },

    tools: {
      kicker: 'Client tools',
      title: 'Proprietary tools for better decisions',
      sub: 'Free tools we built so our clients can research products and estimate costs before investing.',
      guia: {
        step: 'Research',
        title: 'First-time importer guide',
        text: "See what's selling today and find the factory with just a photo of the product.",
        points: ['Best sellers by category', 'Factory search by photo', 'Real examples and support'],
        cta: 'Open the guide',
      },
      cotizador: {
        step: 'Estimate',
        title: 'Import cost calculator',
        text: 'Search a product by name or code and get an instant, itemized landed-cost estimate.',
        points: ['Product, freight and duties', 'Compare by country of origin', 'Reference estimate'],
        cta: 'Open the calculator',
      },
    },

    quote: {
      kicker: 'Get started',
      title: 'Request a quotation',
      sub: "Tell us what you want to source and we'll send a full quotation within 24 hours: product, freight and delivery.",
      need: 'What we need',
      needs: ['A product photo or link', 'Target quantity', 'Delivery postal code'],
      min: 'Minimum order quantities vary by product and manufacturer; we confirm yours in the quotation.',
      cta: 'Request a quotation',
      shipTitle: 'We deliver to',
      main: 'Mexico',
      list: ['Peru', 'Colombia', 'Panama', 'Chile'],
      far: 'North America and Europe on request',
    },

    aboutTeaser: {
      kicker: 'Founder',
      title: 'Led by Fernanda Chima',
      text: 'A development economist with six years in China, project experience in 30+ countries and a background at the World Trade Organization. Fernanda founded InnovationsMX to give Latin American businesses direct access to global manufacturing — and the strategy to compete.',
      cta: 'Read her story',
    },

    clientsTeaser: {
      kicker: 'Our clients',
      title: 'Who we work with',
      cta: 'See our clients',
    },

    clients: {
      metaTitle: 'Our clients',
      kicker: 'Our clients',
      title: 'Businesses that grow by sourcing direct',
      sub: 'From family retailers to established companies seeking new suppliers, every engagement is tailored to the client’s scale and goals.',
      segments: [
        { icon: 'store', title: 'Independent retailers', text: 'Market and street retailers looking for better prices and new products every season.' },
        { icon: 'rocket', title: 'Entrepreneurs & investors', text: 'First-time importers launching a side business who need low risk and clear numbers.' },
        { icon: 'cart', title: 'Wholesalers & online sellers', text: 'Mercado Libre and e-commerce sellers building their own product lines and margins.' },
        { icon: 'briefcase', title: 'Companies & SMEs', text: 'Firms diversifying suppliers or rethinking their strategy against cross-border platforms.' },
      ],
      testiTitle: 'What our clients say',
      testiEmpty: 'Client stories will be shared here soon.',
      howKicker: 'How we work',
      howTitle: 'A clear process, end to end',
      how: [
        { title: 'Discovery', text: 'A call to understand your business, budget and objectives.' },
        { title: 'Sourcing', text: 'Product research and manufacturer selection.' },
        { title: 'Costing', text: 'A full landed-cost quotation before you invest.' },
        { title: 'Delivery', text: 'Air or sea freight coordinated to your door.' },
      ],
      ctaTitle: 'Ready to be our next success story?',
      ctaText: "Tell us what you'd like to source and we'll design your plan.",
    },

    about: {
      metaTitle: 'About · Fernanda Chima',
      kicker: 'About',
      role: 'Founder, InnovationsMX',
      highlightsTitle: 'Background',
      socialTitle: 'Follow along',
      socialSub: 'Products that are selling, import tips and what I learn about trade between China and Latin America.',
      ctaTitle: "Let's talk about your business",
      ctaText: 'Book a 20-minute consultation with me.',
    },

    social: {
      kicker: 'Follow us',
      title: 'Product ideas and insights, every week',
      follow: 'Follow',
      watch: 'More on TikTok',
      notes: { instagram: 'Reels & products', tiktok: 'Videos & tips', facebook: 'Community', linkedin: 'For businesses' },
    },

    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'What is the minimum order?', a: 'It varies by product and manufacturer. We confirm the exact minimum in your quotation.' },
        { q: 'How quickly do you respond?', a: "Quotations are delivered within 24 hours. For urgent requests, text us on WhatsApp." },
        { q: 'Air or sea freight?', a: 'Air usually suits small loads (under 20 kg); sea freight suits larger volumes. We recommend the best option for each shipment.' },
        { q: 'Can you source branded products?', a: 'Branded goods are subject to restrictions. We can propose unbranded alternatives or review your case.' },
        { q: 'Which countries do you serve?', a: 'Mexico is our main market. We also deliver to Peru, Colombia, Panama and Chile, and to North America and Europe on request.' },
      ],
    },

    contact: {
      kicker: 'Contact',
      title: "Let's discuss your next project",
      callTitle: 'Book a consultation',
      callText: '20 minutes to understand your goals and outline a sourcing plan.',
      waTitle: 'Text us on WhatsApp',
      waText: 'For urgent quotations. We reply as soon as possible.',
      email: 'Or email us at',
    },

    footer: { made: 'Created by Fernanda Chima', explore: 'Explore', contact: 'Contact', follow: 'Social', quote: 'Request a quotation' },
  },
} as const;

export const paths = {
  es: { home: '/', blog: '/blog/', about: '/sobre-mi/', clients: '/clientes/', mission: '/mision-china/' },
  en: { home: '/en/', blog: '/en/blog/', about: '/en/about/', clients: '/en/clients/', mission: '/en/china-mission/' },
};
