import React from 'react';
import { Users, Maximize, Wifi, Coffee } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold text-brand-800 shadow-sm">
          ${property.price} <span className="font-normal text-xs text-slate-500">/ night</span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-serif font-semibold text-brand-900 group-hover:text-brand-600 transition-colors">
            {property.title}
            </h3>
            <span className="bg-brand-100 text-brand-800 text-xs px-2 py-1 rounded uppercase tracking-wide font-semibold">
                {property.type}
            </span>
        </div>
        
        <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed">
          {property.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Users size={16} className="text-brand-500" />
            <span>Up to {property.guests} guests</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize size={16} className="text-brand-500" />
            <span>{property.size}</span>
          </div>
          <div className="flex items-center gap-2">
            <Wifi size={16} className="text-brand-500" />
            <span>Fast WiFi</span>
          </div>
           <div className="flex items-center gap-2">
            <Coffee size={16} className="text-brand-500" />
            <span>Amenities +</span>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-slate-100">
            <button className="w-full py-3 border-2 border-brand-600 text-brand-600 font-semibold rounded-lg hover:bg-brand-600 hover:text-white transition-colors">
                Book This Unit
            </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;