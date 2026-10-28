export type PropertyPurpose = 'buy' | 'rent' | 'offplan' | 'commercial';

export type PropertyCategoryType =
  | 'apartment'
  | 'villa'
  | 'penthouse'
  | 'townhouse'
  | 'commercial'
  | 'offplan'
  | 'retail'
  | 'land';

export interface PropertyAgent {
  name: string;
  brn: string;
  title: string;
  initials: string;
  whatsapp?: string;
  phone?: string;
  avatar?: string;
}

export interface Property {
  id: string;
  title: string;
  location: string;
  community: string;
  city: string;
  purpose: PropertyPurpose;
  category: PropertyCategoryType;
  priceAED: number;
  pricePerSqFtAED: number;
  beds: number;
  baths: number;
  sqft: number;
  furnished: string;
  images: string[];
  imageCount: number;
  verified: boolean;
  featured: boolean;
  permitNumber: string;
  tag?: string;
  yieldPercent?: number;
  agent: PropertyAgent;
  description?: string;
  amenities?: string[];
  handoverYear?: number;
  createdAt: string;
}

export interface OffPlanLaunch {
  id: string;
  title: string;
  developer: string;
  location: string;
  entryPriceAED: number;
  paymentPlan: string;
  handover: string;
  description: string;
  image: string;
  brochureUrl?: string;
}

export interface AssetCategory {
  id: string;
  title: string;
  countLabel: string;
  icon: string;
  type: PropertyCategoryType;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  initials: string;
}

export interface SearchFilters {
  purpose: PropertyPurpose;
  community: string;
  category: string;
  bedrooms: string;
  minPrice: number;
  maxPrice: number;
  naturalQuery?: string;
}
