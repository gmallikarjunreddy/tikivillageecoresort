import React from 'react';
import { Clock, Wine, ShieldAlert, ChevronDown } from 'lucide-react';

const Guidelines = () => {
  const faqs = [
    { q: "Is parking available?", a: "Yes, we have a designated parking area for both 2-wheelers and 4-wheelers." },
    { q: "Are washrooms available?", a: "Yes, we have clean, separate washrooms for men and women maintained regularly." },
    { q: "Is it safe for families/couples?", a: "Absolutely. We are a family-friendly eco-resort with security on site to ensure a safe environment for everyone." },
    { q: "Can we bring our own food?", a: "Outside food is generally not encouraged as we provide a full buffet. However, small snacks are allowed." },
  ];

  return (
    <section id="guidelines" className="py-20 bg-tiki-brown relative bg-jungle-pattern bg-blend-soft-light">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-tribal text-3xl md:text-5xl text-white mb-12 text-center">Tribe Guidelines & FAQ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-tiki-gold font-bold uppercase tracking-widest text-sm mb-4">Core Rules</h3>
            <div className="bg-black/40 p-6 rounded-xl reveal border-l-4 border-tiki-gold backdrop-blur-sm">
              <h4 className="text-tiki-gold font-bold mb-2 flex items-center gap-2"><Clock className="w-4 h-4" /> Check-in Info</h4>
              <p className="text-sm text-gray-300">Starts at 4:00 PM. Entry will not be permitted without a valid entry pass.</p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl reveal border-l-4 border-tiki-orange backdrop-blur-sm">
              <h4 className="text-tiki-gold font-bold mb-2 flex items-center gap-2"><Wine className="w-4 h-4" /> Liquor Policy</h4>
              <p className="text-sm text-gray-300">BYOB Allowed. Only Telangana State Liquor permitted. No sales at venue. No foreign/defence liquor.</p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl reveal border-l-4 border-red-600 backdrop-blur-sm">
              <h4 className="text-red-500 font-bold mb-2 flex items-center gap-2"><ShieldAlert className="w-4 h-4" /> Strictly Prohibited</h4>
              <p className="text-sm text-gray-300">Drugs and Hookah are strictly banned on premises. Zero tolerance policy.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-tiki-gold font-bold uppercase tracking-widest text-sm mb-4">Common Questions</h3>
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item reveal">
                <details className="bg-black/40 rounded-xl border border-white/5 open:bg-black/60 transition-colors">
                  <summary className="p-4 font-bold text-white cursor-pointer flex justify-between items-center">
                    {faq.q} <ChevronDown className="w-4 h-4 text-tiki-orange" />
                  </summary>
                  <div className="p-4 pt-0 text-sm text-gray-300">{faq.a}</div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;
