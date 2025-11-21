import { Property, PropertyType, Testimonial } from './types';

export const APP_NAME = "Jiraa-inn";

export const PROPERTIES: Property[] = [
  {
    id: 'unit-1',
    title: 'The Serene Studio',
    type: 'Studio',
    price: 85,
    guests: 2,
    size: '450 sq ft',
    description: 'A cozy, light-filled haven perfect for solo travelers or couples. Features a queen-sized bed, kitchenette, and a dedicated workspace.',
    amenities: ['High-speed WiFi', 'Kitchenette', 'Smart TV', 'Work Desk', 'Rain Shower'],
    imageUrl: 'https://picsum.photos/id/1040/800/600'
  },
  {
    id: 'unit-2',
    title: 'Grand Horizon Suite',
    type: '2-Bedroom',
    price: 160,
    guests: 4,
    size: '1100 sq ft',
    description: 'Spacious luxury with panoramic city views. Includes a full chef\'s kitchen, two bathrooms, private balcony, and a master suite with a king bed.',
    amenities: ['Full Kitchen', 'Private Balcony', '2 Bathrooms', 'Washer/Dryer', '55" 4K TV'],
    imageUrl: 'https://picsum.photos/id/1029/800/600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Digital Nomad',
    content: 'The WiFi was incredibly fast, and the studio was silent. Perfect for getting work done while enjoying the city.',
    avatarUrl: 'https://picsum.photos/id/64/100/100',
    rating: 5
  },
  {
    id: 't2',
    name: 'Marcus & Elena',
    role: 'Vacationers',
    content: 'Jiraa-inn exceeded our expectations. The 2-bedroom suite felt like a real home. We loved cooking in the kitchen.',
    avatarUrl: 'https://picsum.photos/id/91/100/100',
    rating: 5
  },
  {
    id: 't3',
    name: 'David Chen',
    role: 'Business Traveler',
    content: 'Clean, modern, and the check-in process was seamless. The location is unbeatable.',
    avatarUrl: 'https://picsum.photos/id/177/100/100',
    rating: 4
  }
];

export const AI_SYSTEM_INSTRUCTION = `
You are 'Jiraa', the virtual concierge for Jiraa-inn. 
Jiraa-inn is a premium short-term rental business offering high-quality Studio and 2-Bedroom apartments.

Here is the property data you have access to:
1. Studio ("The Serene Studio"): $85/night, 2 guests, 450 sq ft. Amenities: WiFi, Kitchenette, Smart TV. Great for couples.
2. 2-Bedroom ("Grand Horizon Suite"): $160/night, 4 guests, 1100 sq ft. Amenities: Full Kitchen, Balcony, Washer/Dryer. Great for families.

General Policies:
- Check-in: 3:00 PM
- Check-out: 11:00 AM
- No pets allowed.
- No smoking inside.
- Quiet hours: 10:00 PM - 7:00 AM.
- Location: Downtown district, 5 mins walk from Central Station.

Your goal is to assist potential guests with booking inquiries, amenity questions, and local recommendations.
Be polite, professional, warm, and concise. Do not invent details not provided here. If you don't know, suggest they contact support@jiraa-inn.com.
`;