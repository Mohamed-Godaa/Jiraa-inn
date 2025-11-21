import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyCard from './components/PropertyCard';
import Features from './components/Features';
import ChatWidget from './components/ChatWidget';
import { PROPERTIES, TESTIMONIALS } from './constants';
import { Star, MapPin, Mail, Phone, Instagram, Facebook, Twitter, Send } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-brand-50 text-slate-800 font-sans selection:bg-brand-200">
      <Navbar />
      
      <main>
        <Hero />

        {/* Accommodations Section */}
        <section id="accommodations" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-semibold tracking-widest uppercase text-xs mb-2 block">Stay with us</span>
            <h2 className="text-4xl font-serif font-bold text-brand-900">Our Accommodations</h2>
            <div className="w-24 h-1 bg-brand-200 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {PROPERTIES.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        <Features />

        {/* Location Teaser */}
        <section id="location" className="relative py-24 bg-brand-900 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")'}}></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <span className="text-brand-300 font-semibold tracking-widest uppercase text-xs mb-2 block">The Neighborhood</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Heart of the City</h2>
                    <p className="text-brand-100 mb-6 leading-relaxed">
                        Jiraa-inn is perfectly situated for exploration. We are steps away from the best coffee shops, art galleries, and the central park. Whether you're here for business or leisure, everything you need is within walking distance.
                    </p>
                    <ul className="space-y-3 text-brand-200 mb-8">
                        <li className="flex items-center gap-3">
                            <MapPin size={18} /> <span>5 min walk to Central Metro Station</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin size={18} /> <span>10 min walk to the Arts District</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin size={18} /> <span>15 min drive from the International Airport</span>
                        </li>
                    </ul>
                    <button className="bg-white text-brand-900 px-6 py-3 rounded-lg font-semibold hover:bg-brand-100 transition-colors">
                        Get Directions
                    </button>
                </div>
                <div className="flex-1 w-full h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                     {/* Mock Map Image */}
                    <img src="https://picsum.photos/id/1048/800/600" alt="Map location" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
            </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-brand-900">Guest Experiences</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map(t => (
                        <div key={t.id} className="bg-brand-50 p-8 rounded-xl shadow-sm relative">
                            <div className="flex text-yellow-500 mb-4">
                                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-slate-700 mb-6 italic">"{t.content}"</p>
                            <div className="flex items-center gap-4">
                                <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-bold text-brand-900 text-sm">{t.name}</h4>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Footer / Contact */}
        <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-6">Jiraa-inn</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Premium short-term rentals designed for the modern traveler. Experience comfort, style, and convenience in every stay.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20}/></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20}/></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20}/></a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-0.5 text-brand-500"/>
                                <span>123 Serenity Blvd, Suite 100<br/>Metropolis, NY 10012</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-brand-500"/>
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-brand-500"/>
                                <span>hello@jiraa-inn.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-brand-400 transition-colors">Home</a></li>
                            <li><a href="#accommodations" className="hover:text-brand-400 transition-colors">Accommodations</a></li>
                            <li><a href="#amenities" className="hover:text-brand-400 transition-colors">Amenities</a></li>
                            <li><a href="#reviews" className="hover:text-brand-400 transition-colors">Reviews</a></li>
                            <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Newsletter</h4>
                        <p className="text-slate-400 text-sm mb-4">Subscribe for exclusive offers.</p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your email" className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg w-full focus:outline-none focus:border-brand-500 text-sm" />
                            <button className="bg-brand-600 px-4 py-2 rounded-lg hover:bg-brand-500 transition-colors">
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
                
                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} Jiraa-inn Rentals. All rights reserved.</p>
                </div>
            </div>
        </footer>
      </main>

      <ChatWidget />
    </div>
  );
}

export default App;