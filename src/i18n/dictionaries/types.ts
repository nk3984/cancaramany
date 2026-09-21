export type PropertyId =
  | "property-i"
  | "property-ii"
  | "property-iii"
  | "property-iv";

export type InterestOption = {
  value: string;
  label: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type PropertyCopy = {
  label: string;
  specialLabel?: string;
  headline: string;
  projectLine: string;
  descriptors: string[];
  overview: string;
  landscape: string;
  architecture: string;
  infrastructure: string;
  cta: string;
  imageLabel: string;
  imageAlt: string;
  areaNote?: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    proposition: string;
    descriptor: string;
  };
  brand: {
    homeAria: string;
    tortoiseNote: string;
  };
  nav: {
    items: NavItem[];
    enquire: string;
    enquireTitle: string;
    menuOpen: string;
    menuClose: string;
    language: string;
  };
  footer: {
    navigate: string;
    legal: string;
    rights: string;
    locationLine: string;
    estateLine: string;
  };
  legalNav: NavItem[];
  common: {
    scroll: string;
    loadingMap: string;
    visualizationCaption: string;
    conceptualDisclaimer: string;
    historicLabel: string;
    historicApprovalsNote: string;
    areaCaveat: string;
    privacyConsentBefore: string;
    privacyConsentLink: string;
    privacyConsentAfter: string;
  };
  interestOptions: InterestOption[];
  form: {
    intro: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    country: string;
    interest: string;
    interestPlaceholder: string;
    property: string;
    propertyPlaceholder: string;
    message: string;
    submit: string;
    sending: string;
    successTitle: string;
    successBody: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    support: string;
    facts: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  offer: {
    eyebrow: string;
    headline: string;
    p1: string;
    p2: string;
    stats: {
      estate: string;
      land: string;
      properties: string;
      finca: string;
    };
  };
  masterplan: {
    eyebrow: string;
    headline: string;
    support: string;
    explore: string;
    selectHint: string;
  };
  properties: {
    eyebrow: string;
    headline: string;
    support: string;
    available: string;
    enquire: string;
  };
  planning: {
    eyebrow: string;
    headline: string;
    p1: string;
    p2: string;
    pillars: {
      title: string;
      copy: string;
    }[];
    note: string;
    cta: string;
  };
  infrastructure: {
    eyebrow: string;
    headline: string;
    support: string;
    pillars: {
      title: string;
      headline: string;
    }[];
    historicTitle: string;
    historicCopy: string;
    cta: string;
    modalTitle: string;
  };
  opportunity: {
    eyebrow: string;
    headline: string;
    p1: string;
    p2: string;
    closing: string;
    tagline: string;
  };
  location: {
    eyebrow: string;
    headline: string;
    p1: string;
    p2: string;
  };
  dataRoom: {
    eyebrow: string;
    headline: string;
    support: string;
    cta: string;
    modalTitle: string;
    categoriesLabel: string;
    documents: string[];
  };
  closing: {
    line: string;
    cta: string;
    modalTitle: string;
  };
  propertyPage: {
    overview: string;
    landscape: string;
    landToday: string;
    positionEyebrow: string;
    positionHeadline: string;
    architectureEyebrow: string;
    architectureHeadline: string;
    architectureEyebrowFinca: string;
    architectureHeadlineFinca: string;
    fincaEyebrow: string;
    fincaHeadline: string;
    fincaCopy: string;
    existing: string;
    originalProposal: string;
    infrastructure: string;
    gallery: string;
    privateDocs: string;
    requestInfo: string;
    enquireAbout: string;
    otherProperties: string;
    backToEstate: string;
    enquireModal: string;
  };
  propertyCopy: Record<PropertyId, PropertyCopy>;
  imprint: {
    title: string;
    updated: string;
    intro: string;
    operator: string;
    seat: string;
    shareholder: string;
    administrator: string;
    contact: string;
    project: string;
  };
  privacy: {
    title: string;
    updated: string;
  };
  legal: {
    title: string;
    updated: string;
  };
};
