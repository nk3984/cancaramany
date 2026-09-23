import type { PropertyId } from "@/data/properties";

export type InterestOptionKey =
  | "Private Purchase"
  | "Family Estate"
  | "Investment"
  | "Development"
  | "Advisory"
  | "Other";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    descriptor: string;
    proposition: string;
    tortoiseNote: string;
    locationLine: string;
    rights: string;
  };
  nav: {
    items: { label: string; href: string }[];
    enquire: string;
    menu: string;
    close: string;
    navigate: string;
    legal: string;
  };
  legalLinks: { label: string; href: string }[];
  hero: {
    eyebrow: string;
    lead: string;
    meta: string;
    cta: string;
    scroll: string;
  };
  statement: {
    eyebrow: string;
    headline: string;
    p1: string;
    p2: string;
  };
  estateStats: {
    land: string;
    properties: string;
    heritage: string;
    location: string;
  };
  masterplan: {
    eyebrow: string;
    headline: string;
    lead: string;
  };
  project: {
    eyebrow: string;
    headline: string;
    lead: string;
    points: { title: string; copy: string }[];
    closing: string;
    footnote: string;
  };
  propertiesSection: {
    eyebrow: string;
    headline: string;
    lead: string;
  };
  heritage: {
    eyebrow: string;
    headline: string;
    p1: string;
    p2: string;
    cta: string;
    stages: {
      existing: { label: string; note: string | null };
      study: { label: string; note: string };
      vision: { label: string; note: string };
    };
  };
  landscape: {
    eyebrow: string;
    headline: string;
    lead: string;
    captions: {
      fields: string;
      planting: string;
      path: string;
      oaks: string;
      wall: string;
    };
  };
  residences: {
    eyebrow: string;
    headline: string;
    subhead: string;
    lead: string;
    explore: string;
    closing: string;
    disclaimer: string;
    legalLink: string;
  };
  infrastructure: {
    eyebrow: string;
    headline: string;
    historicEyebrow: string;
    cta: string;
    modalTitle: string;
    pillars: {
      water: { title: string; headline: string; copy: string };
      power: { title: string; headline: string; copy: string };
      access: { title: string; headline: string; copy: string };
    };
    wastewaterHistoric: string;
  };
  location: {
    eyebrow: string;
    headline: string;
    p1: string;
    p2: string;
    loadingMap: string;
    estateLabel: string;
    estateSubtitle: string;
    filters: Record<
      | "all"
      | "everyday"
      | "coast"
      | "marina"
      | "golf"
      | "sport"
      | "culture"
      | "airport",
      string
    >;
    editorials: {
      coast: { title: string; copy: string };
      sport: { title: string; copy: string };
      golf: { title: string; copy: string };
      access: { title: string; copy: string };
    };
  };
  dataRoom: {
    eyebrow: string;
    headline: string;
    lead: string;
    cta: string;
    modalTitle: string;
    categoriesLabel: string;
    documents: string[];
    dossierLabel: string;
    dossierCta: string;
    dossierHref: string;
    dossierGateTitle: string;
    dossierGateBody: string;
    dossierGateCta: string;
  };
  closing: {
    line: string;
    cta: string;
    modalTitle: string;
  };
  enquiry: {
    intro: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    country: string;
    interest: string;
    interestPlaceholder: string;
    message: string;
    consentBefore: string;
    consentLink: string;
    consentAfter: string;
    submit: string;
    sending: string;
    thanksTitle: string;
    thanksBody: string;
    interests: Record<InterestOptionKey, string>;
  };
  disclaimers: {
    conceptual: string;
    visualization: string;
    historicDrawings: string;
    areaCaveat: string;
  };
  properties: Record<
    PropertyId,
    {
      label: string;
      headline: string;
      projectLine: string;
      descriptors: string[];
      overview: string;
      landscape: string;
      architecture: string;
      infrastructure: string;
      cta: string;
      imageAlt: string;
      specialLabel?: string;
      areaNote?: string;
    }
  >;
  residencesCards: Record<
    PropertyId,
    {
      title: string;
      copy: string;
      captions: [string, string, string, string];
      alts: [string, string, string, string];
    }
  >;
  drawings: {
    eyebrowPermit: string;
    eyebrowRehab: string;
    title: string;
    introPermit: string;
    introRehab: string;
    close: string;
    previous: string;
    next: string;
    lightboxEyebrow: string;
    lightboxMeta: string;
    drawingAlt: string;
    categories: {
      all: string;
      elevation: string;
      section: string;
      roof: string;
      outbuilding: string;
    };
  };
  propertyIii: {
    eyebrow: string;
    headline: string;
    lead: string;
    overview: string;
    facts: { label: string; value: string }[];
    factsNote: string;
    existing: { eyebrow: string; title: string; copy: string };
    vision: {
      eyebrow: string;
      title: string;
      copy: string;
      points: string[];
    };
    living: {
      eyebrow: string;
      title: string;
      intro: string;
      levels: { label: string; title: string; copy: string }[];
      figures: { value: string; label: string }[];
      figuresNote: string;
    };
    land: { eyebrow: string; title: string; copy: string };
    cta: { eyebrow: string; title: string; copy: string; button: string };
  };
  propertyPage: {
    overview: string;
    landscape: string;
    architecture: string;
    architectureFormerPermit: string;
    architectureFormerHeadline: string;
    infrastructure: string;
    gallery: string;
    positionEyebrow: string;
    positionHeadline: string;
    positionHeadlineIii: string;
    historicEyebrow: string;
    historicHeadline: string;
    historicCopy: string;
    existing: string;
    originalProposal: string;
    privateDocs: string;
    requestInfo: string;
    otherProperties: string;
    backToEstate: string;
    landToday: string;
    historicApprovalsNote: string;
    enquireAbout: string;
  };
  legal: {
    updatedLabel: string;
    updated: string;
    imprint: {
      title: string;
      metaDescription: string;
      intro: string;
      operator: string;
      seat: string;
      shareholder: string;
      administrator: string;
      adminUnverified: string;
      contact: string;
      contactPending: string;
      project: string;
    };
    privacy: {
      title: string;
      metaDescription: string;
      draftNote: string;
      sections: { heading: string; body: string[] }[];
    };
    disclaimer: {
      title: string;
      metaDescription: string;
      draftNote: string;
      paragraphs: string[];
      operatorHeading: string;
      operatorBody: string;
    };
  };
};
