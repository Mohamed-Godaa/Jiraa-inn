import React from 'react';
import { Wifi, Car, Coffee, Monitor, Key, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Wifi,
    title: 'Ultra-Fast WiFi',
    description: 'Stream, work, and play with our dedicated fiber connection available in all units.'
  },
  {
    icon: Car,
    title: 'Free Parking',
    description: 'Secure, underground parking included with every reservation at no extra cost.'
  },
  {
    icon: Coffee,
    title: 'Fully Equipped',
    description: 'From coffee makers to fresh linens, we provide everything you need for a comfortable stay.'
  },
  {
    icon: Monitor,
    title: 'Smart Living',
    description: 'Smart TVs with Netflix, digital thermostats, and keyless entry for your convenience.'
  },
  {
    icon: Key,
    title: 'Self Check-in',
    description: 'Arrive at your leisure with our secure, automated code-based entry system.'
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure',
    description: '24/7 building surveillance and secure access points for your peace of mind.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-4">
            Curated for Comfort
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We've thought of everything so you don't have to. Enjoy a seamless living experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-brand-50/50 hover:bg-brand-50 border border-transparent hover:border-brand-100 transition-all duration-300 group">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;