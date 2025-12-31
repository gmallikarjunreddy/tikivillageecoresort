import React from 'react';
import { X, Send } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const BookingModal = () => {
  const { isBookingOpen, closeBooking } = useBooking();

  if (!isBookingOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const passType = e.target.passType.value;
    const message = e.target.message.value;
    
    const text = `Hi Tiki Village,%0A%0AMy name is ${name}.%0AI am interested in: ${passType}.%0A${message ? 'Details: ' + message : ''}`;
    
    window.open(`https://wa.me/917032360083?text=${text}`, '_blank');
    closeBooking();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeBooking}></div>
      <div className="relative bg-[#1a1816] border border-gray-800 rounded-2xl w-full max-w-lg p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={closeBooking}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-tiki-gold uppercase font-bold text-xs tracking-widest mb-2">Start Your Journey</h3>
        <h2 className="font-tribal text-3xl text-white mb-6">Book Your Experience</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
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

          <div className="space-y-2">
            <label className="text-gray-400 text-sm font-medium">Message (Optional)</label>
            <textarea name="message" rows="3" className="w-full bg-black/40 border border-gray-700 rounded-lg p-4 text-white focus:border-tiki-orange focus:outline-none transition-colors" placeholder="Dates, number of people, etc..."></textarea>
          </div>

          <button type="submit" className="w-full bg-tiki-orange text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-900/40 flex justify-center items-center gap-2">
            <Send className="w-5 h-5" /> Chat on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
