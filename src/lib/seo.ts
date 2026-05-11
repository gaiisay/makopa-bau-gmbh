import type { Metadata, MetadataRoute } from "next";

const siteUrl = "https://www.makopa.de";
const defaultOgImage = "/opengraph-image";

type PageSeoEntry = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  priority: number;
  changeFrequency: NonNullable<
    MetadataRoute.Sitemap[number]["changeFrequency"]
  >;
  robots?: Metadata["robots"];
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

export const siteConfig = {
  name: "Makopa Bau GmbH",
  shortName: "Makopa Bau",
  siteUrl,
  defaultTitle: "Makopa Bau GmbH – Bauunternehmen in Pulheim",
  defaultDescription:
    "Makopa Bau GmbH – Ihr Partner für Baustellenmanagement, Erdarbeiten, Pflasterarbeiten, Abbruch und Vermietung in Pulheim, Köln und Umgebung.",
  ogImage: defaultOgImage,
  ogImageAlt: "Makopa Bau GmbH – Bauunternehmen in Pulheim",
  phone: "+49 2238 9356034",
  phoneDisplay: "+49 (0) 2238 9356034",
  email: "kontakt@makopa.de",
  areaServed: "Pulheim, Köln, Rhein-Erft-Kreis und Umgebung",
  address: {
    streetAddress: "Wolfhelmstr. 36",
    addressLocality: "Pulheim",
    postalCode: "50259",
    addressCountry: "DE",
  },
  yardAddress: {
    streetAddress: "Gleueler Straße 72",
    addressLocality: "Frechen",
    postalCode: "50226",
    addressCountry: "DE",
  },
};

export const pageSeo = {
  home: {
    title:
      "Bauunternehmen in Pulheim – Baustellenmanagement, Erdarbeiten und Abbruch",
    description:
      "Makopa Bau GmbH vereint Baustellenmanagement, Erdarbeiten, Pflasterarbeiten, Abbruch und Vermietung unter einem Dach. Qualität, Effizienz und partnerschaftliches Arbeiten aus Pulheim für die Region.",
    path: "/",
    keywords: [
      "Bauunternehmen Pulheim",
      "Bauunternehmen Köln",
      "Baustellenmanagement",
      "Erdarbeiten",
      "Pflasterarbeiten",
      "Abbrucharbeiten",
      "Baustelleneinrichtung",
      "Makopa Bau",
    ],
    priority: 1,
    changeFrequency: "monthly",
  },
  baustellenmanagement: {
    title: "Baustellenmanagement – Organisation, Logistik und Koordination",
    description:
      "Professionelles Baustellenmanagement von Makopa Bau: Baustellenorganisation, Baustellenlogistik, Schnittstellenkoordination, Arbeitsschutz und projektspezifische Konzepte aus einer Hand.",
    path: "/baustellenmanagement",
    keywords: [
      "Baustellenmanagement",
      "Baustellenorganisation",
      "Baustellenlogistik",
      "Schnittstellenkoordination",
      "Arbeitsschutz Baustelle",
      "Baustellenkonzepte",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  erdarbeitenAussenanlagen: {
    title: "Erdarbeiten, Pflasterarbeiten und Außenanlagen",
    description:
      "Makopa Bau realisiert Erdarbeiten, Baugruben, Entwässerung, Pflasterarbeiten, Pflanzarbeiten und Außenanlagen strukturiert und zuverlässig. Ihr Partner für Tiefbau und Freiflächen in Pulheim und Köln.",
    path: "/erdarbeiten-aussenanlagen",
    keywords: [
      "Erdarbeiten",
      "Pflasterarbeiten",
      "Pflanzarbeiten",
      "Außenanlagen",
      "Baugruben",
      "Entwässerung",
      "Kanalanschlüsse",
      "Tiefbau Pulheim",
      "Terrassenbau",
      "Wegebau",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  spezialloesungenAbbruch: {
    title: "Abbruch und Speziallösungen – Rückbau, Entkernung und Sanierung",
    description:
      "Sicherer Gebäudeabbruch, fachgerechte Entkernung und Schadstoffsanierung. Dazu Speziallösungen wie Containeranlagen, Toranlagen und Arbeitsplatzinfrastruktur von Makopa Bau.",
    path: "/spezialloesungen-abbruch",
    keywords: [
      "Abbruch",
      "Rückbau",
      "Entkernung",
      "Schadstoffsanierung",
      "Gebäudeabbruch",
      "Containeranlagen",
      "Toranlagen",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  vermietung: {
    title:
      "Baustellenservices und Vermietung – Einrichtung, Geräte und Genehmigungen",
    description:
      "Baustelleneinrichtung mieten, Genehmigungen beantragen, Vermessungskonstruktionen und Baustellengeräte nutzen. Praxisgerechte Baustellenservices von Makopa Bau aus Pulheim.",
    path: "/vermietung",
    keywords: [
      "Baustelleneinrichtung mieten",
      "Baustellengeräte mieten",
      "Baustellenservices",
      "Genehmigungsmanagement Baustelle",
      "Schnurgerüst",
      "Vermessungskonstruktionen",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  projekte: {
    title: "Referenzprojekte – Einblicke in unsere Arbeit",
    description:
      "Unsere Projektgalerie befindet sich im Aufbau. Bald finden Sie hier Bilder und Details zu abgeschlossenen und laufenden Bauprojekten von Makopa Bau.",
    path: "/projekte",
    keywords: [
      "Referenzprojekte Bauunternehmen",
      "Bauprojekte Pulheim",
      "Bauprojekte Köln",
      "Makopa Bau Projekte",
    ],
    priority: 0.6,
    changeFrequency: "weekly",
  },
  team: {
    title: "Unser Team – Die Menschen hinter Makopa Bau",
    description:
      "Lernen Sie das Team von Makopa Bau kennen: erfahrene Geschäftsführer, qualifizierte Fachkräfte und ein starkes Team mit Leidenschaft für Qualität und Innovation im Bauwesen.",
    path: "/team",
    keywords: [
      "Makopa Bau Team",
      "Bauunternehmen Pulheim Team",
      "Geschäftsführer Marc Berger",
      "Geschäftsführer Johannes Bruns",
    ],
    priority: 0.5,
    changeFrequency: "monthly",
  },
  kontakt: {
    title: "Kontakt – Jetzt Anfrage stellen",
    description:
      "Kontaktieren Sie Makopa Bau GmbH in Pulheim: +49 (0) 2238 9356034, kontakt@makopa.de. Verwaltung in Pulheim, Betriebshof in Frechen. Wir freuen uns auf Ihre Anfrage.",
    path: "/kontakt",
    keywords: [
      "Makopa Bau Kontakt",
      "Bauunternehmen Pulheim Kontakt",
      "Baustellenmanagement Anfrage",
      "Erdarbeiten Anfrage",
    ],
    priority: 0.7,
    changeFrequency: "yearly",
  },
  impressum: {
    title: "Impressum",
    description:
      "Impressum der Makopa Bau GmbH. Geschäftsführer: Marc Berger und Johannes Bruns. Sitz: Wolfhelmstr. 36, 50259 Pulheim. HRB 103782, Amtsgericht Köln.",
    path: "/impressum",
    keywords: ["Impressum Makopa Bau", "Makopa Bau GmbH", "Pulheim"],
    robots: {
      index: true,
      follow: false,
    },
    priority: 0.3,
    changeFrequency: "yearly",
  },
  datenschutz: {
    title: "Datenschutzerklärung",
    description:
      "Datenschutzerklärung der Makopa Bau GmbH. Informationen zum Umgang mit Ihren personenbezogenen Daten.",
    path: "/datenschutz",
    keywords: ["Datenschutzerklärung Makopa Bau"],
    robots: {
      index: false,
      follow: false,
    },
    priority: 0.1,
    changeFrequency: "yearly",
  },
  agb: {
    title: "Allgemeine Geschäftsbedingungen",
    description: "Allgemeine Geschäftsbedingungen der Makopa Bau GmbH.",
    path: "/agb",
    keywords: ["AGB Makopa Bau"],
    robots: {
      index: false,
      follow: false,
    },
    priority: 0.1,
    changeFrequency: "yearly",
  },
} satisfies Record<string, PageSeoEntry>;

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function createMetadata(page: PageSeoEntry): Metadata {
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.path,
      siteName: siteConfig.name,
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [siteConfig.ogImage],
    },
    robots: page.robots,
    category: "construction",
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      logo: absoluteUrl("/favicon.ico"),
      email: siteConfig.email,
      telephone: siteConfig.phone,
      areaServed: siteConfig.areaServed,
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: siteConfig.siteUrl,
      name: siteConfig.name,
      inLanguage: "de-DE",
      publisher: {
        "@id": absoluteUrl("/#organization"),
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/#local-business"),
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      image: absoluteUrl(defaultOgImage),
      description: siteConfig.defaultDescription,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        ...siteConfig.address,
      },
      subOrganization: {
        "@type": "Place",
        name: "Betriebshof / Ausstellflächen",
        address: {
          "@type": "PostalAddress",
          ...siteConfig.yardAddress,
        },
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Wednesday",
          opens: "14:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "09:00",
          closes: "15:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "17:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: siteConfig.phone,
          email: siteConfig.email,
          areaServed: "DE",
          availableLanguage: ["German"],
        },
      ],
    },
  ],
};

export const serviceSchemas = {
  baustellenmanagement: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Baustellenmanagement",
    serviceType: "Baustellenmanagement",
    description:
      "Baustellenorganisation, Baustellenlogistik, Schnittstellenkoordination, Arbeitsschutz und projektspezifische Konzepte für einen reibungslosen Bauablauf.",
    areaServed: siteConfig.areaServed,
    provider: {
      "@id": absoluteUrl("/#organization"),
    },
  },
  erdarbeitenAussenanlagen: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Erdarbeiten und Außenanlagen",
    serviceType: "Erdarbeiten, Pflasterarbeiten und Außenanlagen",
    description:
      "Erdarbeiten, Baugruben, Entwässerung, Pflasterarbeiten, Pflanzarbeiten, Wegebau, Terrassenbau und Außenanlagen aus einer Hand.",
    areaServed: siteConfig.areaServed,
    provider: {
      "@id": absoluteUrl("/#organization"),
    },
  },
  spezialloesungenAbbruch: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Abbruch und Speziallösungen",
    serviceType: "Abbruch, Rückbau und Speziallösungen",
    description:
      "Gebäudeabbruch, Entkernung, Schadstoffsanierung, Abbruchlogistik sowie Containeranlagen, Toranlagen und Arbeitsplatzinfrastruktur.",
    areaServed: siteConfig.areaServed,
    provider: {
      "@id": absoluteUrl("/#organization"),
    },
  },
  vermietung: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Baustellenservices und Vermietung",
    serviceType: "Baustellenservices und Vermietung",
    description:
      "Vermietung von Baustelleneinrichtung und Geräten, Vermessungskonstruktionen und Genehmigungsmanagement für strukturierte Projektabläufe.",
    areaServed: siteConfig.areaServed,
    provider: {
      "@id": absoluteUrl("/#organization"),
    },
  },
};

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Kontakt Makopa Bau GmbH",
  url: absoluteUrl(pageSeo.kontakt.path),
  description: pageSeo.kontakt.description,
  mainEntity: {
    "@id": absoluteUrl("/#local-business"),
  },
};

export const rootViewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A3A63",
};

export const sitemapPages = [
  pageSeo.home,
  pageSeo.baustellenmanagement,
  pageSeo.erdarbeitenAussenanlagen,
  pageSeo.spezialloesungenAbbruch,
  pageSeo.vermietung,
  pageSeo.projekte,
  pageSeo.team,
  pageSeo.kontakt,
  pageSeo.impressum,
];
