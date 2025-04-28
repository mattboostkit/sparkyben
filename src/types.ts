export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
  shortDescription: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  services: Service[];
}

export interface PricingItem {
  id: string;
  service: string;
  price: string;
  unit?: string;
  description?: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

export interface ResponsiveImageProps {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}