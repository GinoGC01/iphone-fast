export const siteConfig = {
  // Meta & SEO
  siteName: "iPhone Fast",
  siteTagline: "El Atelier Digital",
  siteDescription:
    "Galería premium de iPhones de alto rendimiento. Nuevos y usados. Experimenta el lujo sostenible en tecnología.",

  // Datos del Negocio
  whatsappNumber: "+595985590906", // Placeholder - Cambiar por real
  whatsappMessage:
    "Hola, me interesa un iPhone del Iphone Fast. Podrían asesorarme?",
  email: "concierge@iphonefast.com",
  address: "Felix Bogado, Asuncion, Paraguay",

  // Navegación
  nav: {
    links: [
      { name: "Tienda", href: "#shop" },
      { name: "Nuevos Ingresos", href: "#new-arrivals" },
      { name: "Reacondicionados", href: "#pre-owned" },
      { name: "Soporte", href: "#support" },
    ],
  },

  // Hero Section
  hero: {
    badge: "Edición Limitada - Titanio",
    title: "La Cumbre del Rendimiento",
    subtitle:
      "Descubre el iPhone 17 Pro Max. Reingenierizado en titanio. Diseñado para el Atelier Digital.",
    ctas: [
      { text: "COMPRAR AHORA", href: "#shop", primary: true },
      {
        text: "EXPLORAR NUEVOS INGRESOS",
        href: "#new-arrivals",
        primary: false,
      },
    ],
    image: "/assets/iphone17promax1.png",
  },

  // Trust Badges
  trustBadges: [
    {
      title: "Excelencia Certificada",
      description:
        "Cada dispositivo pasa por una revisión diagnóstica de 90 puntos para asegurar que cumple con nuestro estándar de 'Condición Excelente'.",
      icon: "check-circle",
    },
    {
      title: "Garantía de Precisión",
      description:
        "Respaldamos nuestra curaduría. Cada iPhone vendido incluye una garantía completa de 12 meses.",
      icon: "shield-check",
    },
    {
      title: "Lujo Sostenible",
      description:
        "Extender la vida útil de la tecnología de alto rendimiento es nuestra contribución a un futuro más sostenible.",
      icon: "leaf",
    },
  ],

  // New Arrivals
  newArrivals: {
    title: "Nuevos Ingresos",
    viewAllLink: "#shop",
    products: [
      {
        id: "ip17",
        name: "iPhone 17",
        price: "999",
        color: "todos los colores",
        image: "/assets/iphone17all.png",
        badge: "Nuevo",
      },
      {
        id: "ip16promax",
        name: "iPhone 16 Pro Max",
        price: "799",
        color: "todos los colores",
        image: "/assets/iphone16all.png",
      },
    ],
    editorial: {
      title: "El Nuevo Estándar.",
      description:
        "Descubre el futuro de la inteligencia móvil con la serie iPhone 17 Pro.",
      image: "/assets/editorial-1.png",
    },
  },

  // Certified Pre-Owned
  preOwned: {
    title: "Reacondicionados Certificados",
    filterLabel: "Condición: Excelente / Como Nuevo",
    spotlight: {
      name: "iPhone 16 Todos los colores",
      description:
        "Condición impecable, salud de batería al 100%. Una de nuestras piezas curadas más solicitadas.",
      price: "849",
      image: "/assets/iphone16allcomun.png",
    },
    products: [
      {
        id: "ip15pro",
        name: "iPhone 15 Pro",
        price: "599",
        color: "todos los colores",
        image: "/assets/ip15pro.png",
      },
      {
        id: "ip15",
        name: "iPhone 15",
        price: "449",
        color: "todos los colores",
        image: "/assets/iphone15all.png",
      },
    ],
  },

  // Contacto WhatsApp
  contact: {
    sectionTitle: "Soporte Iphone Fast",
    sectionDescription:
      "Nuestros expertos están disponibles para consultas personalizadas, soporte técnico y reservas premium a través de WhatsApp.",
    whatsappCtaText: "Contactanos",
  },

  // Benefits Bar
  benefits: [
    { title: "Envío Global", icon: "truck" },
    { title: "Devoluciones en 14 días", icon: "rotate-ccw" },
    { title: "Soporte de Expertos Atelier", icon: "headset" },
    { title: "Pago Seguro", icon: "lock" },
  ],

  // Footer
  footer: {
    socials: [
      { name: "X", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "LinkedIn", href: "#" },
      { name: "Facebook", href: "#" },
    ],
    legalLinks: [
      { name: "Política de Privacidad", href: "#" },
      { name: "Términos del Servicio", href: "#" },
      { name: "Información de Garantía", href: "#" },
      { name: "Contacto", href: "#" },
    ],
    copyright: "© 2026 iPhone Fast. Todos los derechos reservados.",
  },
};
