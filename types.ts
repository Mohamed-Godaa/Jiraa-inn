export interface Property {
  id: string;
  title: string;
  type: 'Studio' | '2-Bedroom';
  price: number;
  guests: number;
  size: string;
  description: string;
  amenities: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
  rating: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum PropertyType {
  STUDIO = 'Studio',
  TWO_BEDROOM = '2-Bedroom'
}