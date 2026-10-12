export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface InternalLinkRecommendation {
  anchorText: string;
  destinationPage: string;
  reason: string;
}

export interface ImageSEORecommendation {
  purpose: string;
  filename: string;
  altText: string;
  dimensions: string;
  format: string;
}

export interface TechnicalChecklistItem {
  id: string;
  item: string;
  status: 'passed' | 'warning' | 'pending';
  details: string;
  category: 'Indexing' | 'Speed & CWV' | 'Structure' | 'Security';
}

export interface SEOQualityItem {
  criterion: string;
  status: boolean;
  notes: string;
}
