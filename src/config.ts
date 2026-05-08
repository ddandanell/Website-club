// ============================================================================
// Private Members Lifestyle Club — Site Configuration
// ============================================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Private Members Lifestyle Club",
  description: "A private members club for selected individuals who want access, privacy, comfort and execution at the highest level.",
  language: "en",
};

// ============================================================================
// Navigation
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  items: NavItem[];
}

export const navigationConfig: NavigationConfig = {
  logo: "PMLC",
  items: [
    { label: "The Club", href: "#concept" },
    { label: "Membership", href: "#membership" },
    { label: "Destinations", href: "#destinations" },
    { label: "Experience", href: "#experience" },
    { label: "Apply", href: "#apply" },
  ],
};

// ============================================================================
// Hero Section
// ============================================================================

export interface HeroConfig {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  copyright: string;
}

export const heroConfig: HeroConfig = {
  eyebrow: "PRIVATE MEMBERS LIFESTYLE CLUB",
  headline: "The world handled",
  subheadline: "A private members club for selected individuals who want access, privacy, comfort and execution at the highest level.",
  ctaPrimary: "Apply for Membership",
  ctaSecondary: "Explore the Club",
  copyright: "\u00A9 2025 Private Members Lifestyle Club",
};

// ============================================================================
// Concept Section (About)
// ============================================================================

export interface StatItem {
  value: string;
  label: string;
}

export interface ConceptConfig {
  eyebrow: string;
  headline: string;
  body: string;
  stats: StatItem[];
  cta: string;
  image: string;
  imageAlt: string;
}

export const conceptConfig: ConceptConfig = {
  eyebrow: "THE CONCEPT",
  headline: "This is not a travel agency. This is not a booking service. This is a private club for people who want the world handled for them.",
  body: "Members do not search, compare, negotiate or waste time trying to figure things out locally. They send one message. We handle the rest.",
  stats: [
    { value: "15+", label: "Years of Excellence" },
    { value: "500+", label: "Selected Members" },
    { value: "40+", label: "Global Destinations" },
  ],
  cta: "Discover Membership",
  image: "/concept-villa.jpg",
  imageAlt: "Luxury private villa interior",
};

// ============================================================================
// Core Values Section (Four Pillars)
// ============================================================================

export interface PillarItem {
  title: string;
  description: string;
  icon: string;
}

export interface PillarsConfig {
  eyebrow: string;
  headline: string;
  pillars: PillarItem[];
}

export const pillarsConfig: PillarsConfig = {
  eyebrow: "OUR FOUR PILLARS",
  headline: "Access. Trust. Discretion. Execution.",
  pillars: [
    {
      title: "Access",
      description: "Members get access to places, people and experiences not easily available to the public.",
      icon: "Key",
    },
    {
      title: "Trust",
      description: "Every villa, restaurant, driver and experience is personally checked before being offered.",
      icon: "Shield",
    },
    {
      title: "Discretion",
      description: "Private, controlled and professional. Members do not need to explain themselves.",
      icon: "EyeOff",
    },
    {
      title: "Execution",
      description: "The value is not only in knowing what is good. The value is making it happen properly.",
      icon: "CheckCircle",
    },
  ],
};

// ============================================================================
// Services Section
// ============================================================================

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface ServicesConfig {
  eyebrow: string;
  headline: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  eyebrow: "WHAT MEMBERS GET",
  headline: "One private team. Everything handled.",
  services: [
    {
      title: "Luxury Stays",
      description: "Private villas, members-only homes, premium hotels, personal estates",
      icon: "Home",
    },
    {
      title: "Private Transport",
      description: "Drivers, premium cars, airport pickup, helicopter transfers",
      icon: "Car",
    },
    {
      title: "Dining & Nightlife",
      description: "Restaurant reservations, private dining, VIP tables, beach clubs",
      icon: "UtensilsCrossed",
    },
    {
      title: "Yacht & Sea",
      description: "Yacht days, boat trips, private charters, coastal experiences",
      icon: "Anchor",
    },
    {
      title: "Events & Entertainment",
      description: "Private parties, celebrations, social introductions, custom experiences",
      icon: "Calendar",
    },
    {
      title: "Full Journey Management",
      description: "20-day luxury journeys, multi-country trips, complete itinerary planning",
      icon: "Globe",
    },
  ],
};

// ============================================================================
// Experience Section
// ============================================================================

export interface ExperienceStep {
  number: string;
  label: string;
}

export interface ExperienceConfig {
  quote: string;
  subtext: string;
  steps: ExperienceStep[];
  backgroundImage: string;
}

export const experienceConfig: ExperienceConfig = {
  quote: "I am coming to Bali next Friday with four friends. Handle the full trip.",
  subtext: "The member approves the plan. The club executes it.",
  steps: [
    { number: "01", label: "Send Your Request" },
    { number: "02", label: "We Plan Everything" },
    { number: "03", label: "You Approve" },
    { number: "04", label: "We Execute" },
    { number: "05", label: "You Arrive" },
    { number: "06", label: "Everything Ready" },
  ],
  backgroundImage: "/experience-bg.jpg",
};

// ============================================================================
// Membership Tiers Section
// ============================================================================

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
}

export interface MembershipConfig {
  eyebrow: string;
  headline: string;
  subhead: string;
  plans: PricingPlan[];
}

export const membershipConfig: MembershipConfig = {
  eyebrow: "MEMBERSHIP",
  headline: "Selected. Not open to everyone.",
  subhead: "Application-based membership. We review every application to protect the quality of our network.",
  plans: [
    {
      name: "Private Member",
      price: "$5,000",
      period: "/year",
      description: "Entry-level private access",
      features: [
        "Private concierge access",
        "Hotel and villa planning",
        "Restaurant bookings",
        "Transport coordination",
        "Nightlife planning",
      ],
      cta: "Apply Now",
      featured: false,
    },
    {
      name: "Signature Member",
      price: "$25,000",
      period: "/year",
      description: "Dedicated lifestyle management",
      features: [
        "Everything in Private",
        "Dedicated lifestyle manager",
        "Priority support",
        "Full trip planning",
        "Private villa sourcing",
        "Social introductions",
      ],
      cta: "Apply Now",
      featured: false,
    },
    {
      name: "Elite Circle",
      price: "$100,000",
      period: "/year",
      description: "Complete private team access",
      features: [
        "Everything in Signature",
        "Dedicated private team",
        "Multi-country planning",
        "24/7 priority handling",
        "Helicopter pickup options",
        "Private security coordination",
        "Members-only experiences",
      ],
      cta: "Apply Now",
      featured: true,
    },
    {
      name: "Founder Circle",
      price: "Custom",
      period: "",
      description: "Bespoke global lifestyle",
      features: [
        "Everything in Elite",
        "Global lifestyle access",
        "Private property network",
        "Custom 20-day journeys",
        "Complimentary experiences",
        "Dedicated senior director",
      ],
      cta: "Request Invitation",
      featured: false,
    },
  ],
};

// ============================================================================
// Destinations Section
// ============================================================================

export interface DestinationItem {
  name: string;
  tagline: string;
  image: string;
}

export interface DestinationsConfig {
  eyebrow: string;
  headline: string;
  destinations: DestinationItem[];
}

export const destinationsConfig: DestinationsConfig = {
  eyebrow: "DESTINATIONS",
  headline: "The world opens faster when you are inside.",
  destinations: [
    { name: "Bali", tagline: "Where it all began", image: "/dest-bali.jpg" },
    { name: "Bangkok", tagline: "Urban luxury perfected", image: "/dest-bangkok.jpg" },
    { name: "Phuket", tagline: "Island exclusivity", image: "/dest-phuket.jpg" },
    { name: "Dubai", tagline: "The extraordinary", image: "/dest-dubai.jpg" },
    { name: "Singapore", tagline: "Precision and elegance", image: "/dest-singapore.jpg" },
    { name: "Vietnam", tagline: "Hidden luxury", image: "/dest-vietnam.jpg" },
  ],
};

// ============================================================================
// Testimonials Section
// ============================================================================

export interface TestimonialItem {
  quote: string;
  tier: string;
}

export interface TestimonialsConfig {
  eyebrow: string;
  headline: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  eyebrow: "MEMBER WORDS",
  headline: "Trusted by those who know the difference.",
  testimonials: [
    {
      quote: "They handled our full Bali trip — villa, driver, restaurants, yacht day, nightlife. I sent one message. Everything was ready when we landed.",
      tier: "Elite Circle",
    },
    {
      quote: "I travel constantly for business. Having one team that knows what I like, everywhere I go, is the difference between travel and living.",
      tier: "Founder Circle",
    },
    {
      quote: "The 20-day journey they planned for our family across Asia was the most seamless travel experience we have ever had.",
      tier: "Signature",
    },
  ],
};

// ============================================================================
// Application CTA Section
// ============================================================================

export interface CTAConfig {
  headline: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trustNote: string;
}

export const ctaConfig: CTAConfig = {
  headline: "Ready to move differently?",
  body: "Membership is application-based. We review every application to protect the quality of our network.",
  ctaPrimary: "Apply for Membership",
  ctaSecondary: "Contact via Email",
  trustNote: "Application review within 48 hours. No obligation.",
};

// ============================================================================
// Footer Configuration
// ============================================================================

export interface FooterConfig {
  brandName: string;
  description: string;
  membershipLinks: NavItem[];
  destinationLinks: NavItem[];
  contact: {
    email: string;
  };
  copyright: string;
  badge: string;
}

export const footerConfig: FooterConfig = {
  brandName: "PMLC",
  description: "Private Members Lifestyle Club — A private club for selected individuals who want the world handled for them.",
  membershipLinks: [
    { label: "Private Member", href: "#membership" },
    { label: "Signature Member", href: "#membership" },
    { label: "Elite Circle", href: "#membership" },
    { label: "Founder Circle", href: "#membership" },
  ],
  destinationLinks: [
    { label: "Bali", href: "#destinations" },
    { label: "Bangkok", href: "#destinations" },
    { label: "Phuket", href: "#destinations" },
    { label: "Dubai", href: "#destinations" },
    { label: "Singapore", href: "#destinations" },
    { label: "Vietnam", href: "#destinations" },
  ],
  contact: {
    email: "membership@pmlc.com",
  },
  copyright: "\u00A9 2026 Private Members Lifestyle Club. All rights reserved.",
  badge: "Application-only membership",
};

// ============================================================================
// Contact — Email only policy
// ============================================================================

export const contactConfig = {
  email: "membership@pmlc.com",
  label: "Contact",
};
