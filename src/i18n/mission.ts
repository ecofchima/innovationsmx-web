// ─────────────────────────────────────────────────────────────
//  Misión comercial a China (Canton Fair + fábricas)
//  Edit dates, price and itinerary here. Photos: /public/images/mision
// ─────────────────────────────────────────────────────────────

export const missionLinks = {
  // Landing page of the past mission (autumn 2026)
  pastSite: 'https://misioncomercialchina.netlify.app/',
  partner: 'https://kerngrosse.com.mx',
  // ⚠️ Put the April price here when it is confirmed (leave '' to show "por confirmar")
  priceApril: '',
};

export const mission = {
  es: {
    nav: 'Misión China',
    metaTitle: 'Misión comercial a China · Canton Fair',
    metaDesc: 'Viaja con InnovationsMX y Kern Grosse a la Canton Fair y a fábricas en China. Próxima misión: 13 al 23 de abril de 2027.',
    kicker: 'Misión comercial a China',
    title: 'Ven conmigo a la Canton Fair y a las fábricas',
    sub: 'Viajamos en grupo pequeño a la feria comercial más grande de China, visitamos fábricas y negociamos directo con los fabricantes, con traductor y con la logística de importación resuelta desde el primer día.',
    next: 'Próxima misión',
    dates: '13 – 23 de abril de 2027',
    datesShort: '13–23 abr 2027',
    phase: 'Canton Fair · Fase 1 de primavera',
    cities: 'Guangzhou · Shenzhen o Yiwu',
    seats: 'Grupo reducido · cupo limitado',
    cta: 'Quiero apartar mi lugar',
    ctaInfo: 'Pedir información',
    waMsg: 'Hola Fernanda, me interesa la misión comercial a China del 13 al 23 de abril de 2027.',
    pastLink: 'Ver la misión de otoño 2026',
    teaserCta: 'Conoce la misión',

    sectorsTitle: '¿Qué vas a encontrar?',
    sectorsNote: 'La Fase 1 de primavera suele dedicarse a estos sectores. Las fechas oficiales de la feria se confirman cuando el organizador publica su calendario.',
    sectors: ['Electrónica y electrodomésticos', 'Maquinaria y herramientas', 'Ferretería y materiales de construcción', 'Nuevas energías y solar', 'Vehículos y autopartes', 'Iluminación'],

    itineraryTitle: 'Itinerario preliminar',
    itineraryNote: 'Itinerario de referencia; los detalles finales se confirman al registrarte.',
    itinerary: [
      { day: '13 abr', title: 'Salida desde Ciudad de México', text: 'Nos reunimos en el aeropuerto y volamos juntos rumbo a China.' },
      { day: '14 abr', title: 'Llegada a Guangzhou', text: 'Check-in, cena de bienvenida y briefing: cómo negociar y cómo verificar proveedores.' },
      { day: '15 – 17 abr', title: 'Canton Fair · Fase 1', text: 'Recorrido guiado por los pabellones, reuniones con fabricantes de tu sector y primeras cotizaciones.' },
      { day: '18 abr', title: 'Visitas a fábricas', text: 'Conocemos la producción por dentro: procesos, calidad y capacidad del proveedor.' },
      { day: '19 – 21 abr', title: 'Shenzhen o Yiwu', text: 'Shenzhen para tecnología y electrónica; Yiwu para mercancía general y volumen. Showrooms y más fábricas.' },
      { day: '22 abr', title: 'Cierre y cotización de importación', text: 'Verificación final de proveedores y cotización de flete y despacho aduanal antes de regresar.' },
      { day: '23 abr', title: 'Regreso a México', text: 'Vuelves con proveedores verificados, muestras y un plan de importación.' },
    ],

    includesTitle: '¿Qué incluye?',
    includes: [
      'Vuelo redondo desde Ciudad de México',
      'Traslados y vuelos o tren dentro de China',
      'Hotel cerca de la feria y de las zonas de compra',
      'Guía-traductor español–mandarín todo el viaje',
      'Registro como comprador en la Canton Fair',
      'Visitas a fábricas y verificación de proveedores',
      'Carta de invitación para tu visa de negocios',
      'Cotización de importación con Kern Grosse',
    ],
    price: 'Inversión',
    priceTbd: 'Por confirmar · pregúntanos por WhatsApp',
    priceRef: 'Referencia: la misión de otoño 2026 fue de $5,500 USD por persona en habitación doble.',

    reqTitle: 'Requisitos',
    reqs: [
      'Visa de negocios tipo M para China. Te damos la carta de invitación; el trámite y su costo son tuyos.',
      'Pasaporte vigente al menos 6 meses después del regreso.',
      'Ganas de aprender y de negociar: el resto lo resolvemos en equipo.',
    ],

    pastKicker: 'Así fue la misión de otoño 2026',
    pastTitle: 'Feria, fábricas y mucha mesa compartida',
    pastSub: 'En octubre de 2026 viajamos con un grupo de empresarios mexicanos a la Canton Fair en Guangzhou y a fábricas de la región.',
    gallery: [
      { src: '/images/mision/acuerdo-canton-fair.webp', caption: 'Cerrando acuerdos en la Canton Fair, pabellón de nuevas energías' },
      { src: '/images/mision/recorrido-fabrica.webp', caption: 'Recorrido por una fábrica de calzado con el grupo' },
      { src: '/images/mision/maquina-inyeccion.webp', caption: 'Revisando una máquina de inyección de suelas' },
      { src: '/images/mision/carga-exportacion.webp', caption: 'Mercancía lista para exportación' },
      { src: '/images/mision/comida-negocios.webp', caption: 'Comida de negocios a la mesa redonda' },
      { src: '/images/mision/cena-grupo.webp', caption: 'Cenas con el grupo: la confianza también se construye en la mesa' },
      { src: '/images/mision/noche-grupo.webp', caption: 'Noches en Guangzhou con el grupo' },
      { src: '/images/mision/guangzhou-noche.webp', caption: 'Guangzhou de noche, junto al río Perla' },
      { src: '/images/mision/apec-china-2026.webp', caption: 'China, sede de APEC 2026' },
    ],

    partnerTitle: 'En alianza con Kern Grosse',
    partnerText: 'Kern Grosse, empresa mexicana de logística de importación y despacho aduanal, nos acompaña para verificar proveedores y cotizar tu importación antes de que termine el viaje. Así lo que negocias en China llega de verdad a tu bodega.',

    faqTitle: 'Preguntas sobre la misión',
    faq: [
      { q: '¿Necesito hablar chino?', a: 'No. Un guía-traductor español–mandarín nos acompaña todo el viaje.' },
      { q: '¿Es mi primer viaje de compras, me sirve?', a: 'Sí. La misión está pensada también para quien viaja a China por primera vez a buscar proveedores.' },
      { q: '¿Cómo importo lo que negocie?', a: 'Kern Grosse cotiza el flete y el despacho aduanal antes del regreso, para que sepas tu costo completo.' },
      { q: '¿Shenzhen o Yiwu?', a: 'Shenzhen para tecnología y manufactura especializada; Yiwu para mercancía general, regalos y volumen.' },
    ],
  },

  en: {
    nav: 'China Mission',
    metaTitle: 'Trade mission to China · Canton Fair',
    metaDesc: 'Join InnovationsMX and Kern Grosse at the Canton Fair and factories in China. Next mission: April 13–23, 2027.',
    kicker: 'Trade mission to China',
    title: 'Join me at the Canton Fair and on the factory floor',
    sub: 'A small-group sourcing trip to China’s largest trade fair, with factory visits and direct negotiations with manufacturers — interpreter included and import logistics handled from day one.',
    next: 'Next mission',
    dates: 'April 13 – 23, 2027',
    datesShort: 'Apr 13–23, 2027',
    phase: 'Canton Fair · Spring Phase 1',
    cities: 'Guangzhou · Shenzhen or Yiwu',
    seats: 'Small group · limited seats',
    cta: 'Reserve my seat',
    ctaInfo: 'Request information',
    waMsg: 'Hi Fernanda, I’m interested in the China trade mission, April 13–23, 2027.',
    pastLink: 'See the autumn 2026 mission',
    teaserCta: 'Explore the mission',

    sectorsTitle: 'What you’ll find',
    sectorsNote: 'Spring Phase 1 typically covers these sectors. Official fair dates are confirmed once the organizer publishes its calendar.',
    sectors: ['Electronics & appliances', 'Machinery & tools', 'Hardware & building materials', 'New energy & solar', 'Vehicles & parts', 'Lighting'],

    itineraryTitle: 'Preliminary itinerary',
    itineraryNote: 'Reference itinerary; final details are confirmed at registration.',
    itinerary: [
      { day: 'Apr 13', title: 'Departure from Mexico City', text: 'We meet at the airport and fly to China together.' },
      { day: 'Apr 14', title: 'Arrival in Guangzhou', text: 'Check-in, welcome dinner and briefing on negotiation and supplier verification.' },
      { day: 'Apr 15 – 17', title: 'Canton Fair · Phase 1', text: 'Guided pavilion tour, meetings with manufacturers in your sector and first quotations.' },
      { day: 'Apr 18', title: 'Factory visits', text: 'See production from the inside: processes, quality and supplier capacity.' },
      { day: 'Apr 19 – 21', title: 'Shenzhen or Yiwu', text: 'Shenzhen for tech and electronics; Yiwu for general merchandise and volume. Showrooms and more factories.' },
      { day: 'Apr 22', title: 'Wrap-up and import quote', text: 'Final supplier verification and a freight and customs quotation before heading home.' },
      { day: 'Apr 23', title: 'Return to Mexico', text: 'Come home with verified suppliers, samples and an import plan.' },
    ],

    includesTitle: 'What’s included',
    includes: [
      'Round-trip flight from Mexico City',
      'Transfers and domestic flights or train in China',
      'Hotels near the fair and sourcing districts',
      'Full-time Spanish–Mandarin guide-interpreter',
      'Canton Fair buyer registration',
      'Factory visits and supplier verification',
      'Business invitation letter for your visa',
      'Import quotation with Kern Grosse',
    ],
    price: 'Investment',
    priceTbd: 'To be confirmed · ask us on WhatsApp',
    priceRef: 'Reference: the autumn 2026 mission was USD 5,500 per person, double occupancy.',

    reqTitle: 'Requirements',
    reqs: [
      'Chinese M (business) visa for Mexican passports. We provide the invitation letter; the application and its fee are yours.',
      'Passport valid for at least 6 months after return.',
      'Willingness to learn and negotiate — we handle the rest as a team.',
    ],

    pastKicker: 'Autumn 2026 mission',
    pastTitle: 'Trade fair, factories and plenty of shared tables',
    pastSub: 'In October 2026 we travelled with a group of Mexican business owners to the Canton Fair in Guangzhou and to factories in the region.',
    gallery: [
      { src: '/images/mision/acuerdo-canton-fair.webp', caption: 'Closing deals at the Canton Fair, new energy pavilion' },
      { src: '/images/mision/recorrido-fabrica.webp', caption: 'Touring a footwear factory with the group' },
      { src: '/images/mision/maquina-inyeccion.webp', caption: 'Inspecting a sole injection machine' },
      { src: '/images/mision/carga-exportacion.webp', caption: 'Goods ready for export' },
      { src: '/images/mision/comida-negocios.webp', caption: 'Business lunch at the round table' },
      { src: '/images/mision/cena-grupo.webp', caption: 'Group dinners: trust is also built at the table' },
      { src: '/images/mision/noche-grupo.webp', caption: 'Evenings in Guangzhou with the group' },
      { src: '/images/mision/guangzhou-noche.webp', caption: 'Guangzhou at night, by the Pearl River' },
      { src: '/images/mision/apec-china-2026.webp', caption: 'China, host of APEC 2026' },
    ],

    partnerTitle: 'In partnership with Kern Grosse',
    partnerText: 'Kern Grosse, a Mexican import logistics and customs brokerage firm, verifies suppliers with us and quotes your import before the trip ends — so what you negotiate in China actually reaches your warehouse.',

    faqTitle: 'Mission FAQ',
    faq: [
      { q: 'Do I need to speak Chinese?', a: 'No. A Spanish–Mandarin guide-interpreter travels with us the whole time.' },
      { q: 'Is it suitable for a first sourcing trip?', a: 'Yes. The mission is designed for first-time buyers in China too.' },
      { q: 'How do I import what I negotiate?', a: 'Kern Grosse quotes freight and customs before we return, so you know your full landed cost.' },
      { q: 'Shenzhen or Yiwu?', a: 'Shenzhen for technology and specialised manufacturing; Yiwu for general merchandise, gifts and volume.' },
    ],
  },
} as const;
