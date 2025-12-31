import React from 'react';
import { Send, Instagram, Globe, MapPin } from 'lucide-react';

const Location = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const passType = e.target.passType.value;
    const message = e.target.message.value;
    
    const text = `Hi Tiki Village,%0A%0AMy name is ${name}.%0AI am interested in: ${passType}.%0A${message ? 'Details: ' + message : ''}`;
    
    window.open(`https://wa.me/917032360083?text=${text}`, '_blank');
  };

  return (
    <section id="location" className="py-24 bg-tiki-dark relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden bg-[#1a1816] shadow-2xl border border-gray-800">
          
          <div className="lg:w-1/2 p-8 lg:p-12 order-2 lg:order-1">
            <h3 className="text-tiki-gold uppercase font-bold text-xs tracking-widest mb-2">Get in Touch</h3>
            <h2 className="font-tribal text-3xl text-white mb-6">Send a Smoke Signal</h2>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm font-medium">Your Name</label>
                  <input type="text" name="name" className="w-full bg-black/40 border border-gray-700 rounded-lg p-4 text-white focus:border-tiki-orange focus:outline-none transition-colors" placeholder="Full Name" required />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm font-medium">Interested In</label>
                  <select name="passType" className="w-full bg-black/40 border border-gray-700 rounded-lg p-4 text-white focus:border-tiki-orange focus:outline-none transition-colors">
                    <option value="Camping">Camping Stay</option>
                    <option value="Day Outing">Day Outing</option>
                    <option value="Events">Events / Gathering</option>
                    <option value="Group Booking">Group Booking</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-sm font-medium">Message</label>
                <textarea name="message" rows="3" className="w-full bg-black/40 border border-gray-700 rounded-lg p-4 text-white focus:border-tiki-orange focus:outline-none transition-colors" placeholder="Any specific requirements..."></textarea>
              </div>
              <button type="submit" className="w-full bg-tiki-orange text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-900/40 flex justify-center items-center gap-2">
                <Send className="w-5 h-5" /> Chat on WhatsApp
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-gray-800 flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Direct Line</p>
                <a href="tel:7032360083" className="text-tiki-gold font-bold text-xl hover:text-white transition-colors">7032360083</a>
              </div>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/tikki_villageresort?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-tiki-orange hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
                <a href="https://www.google.com/travel/hotels/s/antmHY4RHTcT2cU57" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-tiki-orange hover:text-white transition-all"><Globe className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative h-[400px] md:h-[500px] lg:h-auto lg:min-h-[550px] order-1 lg:order-2">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.754159226925!2d77.86013347516244!3d17.279124683589703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc961a6742828d7%3A0x111601368177d46e!2sTiki%20village%20the%20Eco%20Resort!5e0!3m2!1sen!2sin!4v1766571050268!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }} 
              allowFullScreen="" 
              loading="lazy"
              title="Tiki Village Location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto bg-tiki-dark/90 backdrop-blur-md border border-white/10 text-white p-4 md:p-5 rounded-2xl shadow-2xl">
              <p className="font-bold text-tiki-gold text-base md:text-lg">Tiki Village Eco Resort</p>
              <p className="text-xs text-gray-400">Sarpanpally Lake, Godumguda, Vikarabad</p>
              <a href="https://maps.app.goo.gl/6uNuRFrLCUwQR4Vc7" target="_blank" rel="noopener noreferrer" className="mt-2 md:mt-3 inline-flex items-center gap-2 text-tiki-orange text-xs font-bold hover:underline">
                <MapPin className="w-3 h-3" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
