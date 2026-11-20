// ─────────────────────────────────────────────────────────────
//  InnovationsMX — all links and contact details live here.
//  Change a value, save, and the whole site updates.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'InnovationsMX',
  motto: {
    es: 'Tecnología del mañana, hoy en tus manos.',
    en: "Tomorrow's technology, in your hands today.",
  },
  // Your public web address once it's live on Vercel (used for share previews)
  url: 'https://innovationsmx-web.vercel.app',

  // Your tools
  tools: {
    guia: 'https://guia-importador.vercel.app/',
    cotizador: 'https://cotizador-importacion-mx.vercel.app/',
    solicitud: 'https://innovationsmx.vercel.app/',
  },

  contact: {
    // ⚠️ Replace with your real Calendly link
    calendly: 'https://calendly.com/innovationsmx-client/20min',
    whatsappNumber: '525516931100', // country code + number, no spaces or "+"
    whatsappDisplay: '+52 55 1693 1100',
    email: 'innovationsmx.client@gmail.com',
    hours: { es: 'Lunes a sábado · 11:00 a 20:00', en: 'Monday to Saturday · 11 am to 8 pm' },
  },

  social: {
    instagram: 'https://www.instagram.com/vendemx',
    instagramHandle: '@vendemx',
    tiktok: 'https://www.tiktok.com/@innovationsmx',
    tiktokHandle: '@innovationsmx',
    facebook: 'https://www.facebook.com/profile.php?id=61594913460750',
    linkedin: 'https://www.linkedin.com/company/133456419/',
  },

  // Fernanda's personal profiles (shown on the "About me" page)
  personal: {
    linkedin: 'https://www.linkedin.com/in/fernanda-chima-474b2514b/',
    instagram: 'https://www.instagram.com/fer_chima/',
    instagramHandle: '@fer_chima',
    facebook: 'https://www.facebook.com/fer.chima/',
    website: 'https://sites.google.com/view/fernandachima/home',
  },

  // TikTok videos to show on the page. Add the number at the end of the video link:
  // tiktok.com/@innovationsmx/video/7701557997666979093  →  '7701557997666979093'
  featuredTikToks: ['7701557997666979093'],
};

export const whatsappLink = (text: string) =>
  `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
