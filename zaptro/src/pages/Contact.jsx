import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-3 sm:px-4 py-8 sm:py-10">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl shadow-2xl p-5 sm:p-8 md:p-10 w-full max-w-5xl">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-10">
          Get in Touch with <span className="text-green-400">Zaptro</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="text-white space-y-4 sm:space-y-6 text-sm sm:text-base">
            <div>
              <h3 className="text-lg sm:text-2xl font-semibold">Contact Info</h3>
              <p className="text-gray-300 mt-1">
                Have a question or need support? We're here to help you with your electronics journey.
              </p>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <p><strong>📍 Address:</strong> 123, Delhi, India</p>
              <p><strong>📧 Email:</strong> support@zaptro.com</p>
              <p><strong>📞 Phone:</strong> +91 1234567890</p>
            </div>
          </div>

          <form className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-white mb-1 text-sm sm:text-base">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-3 sm:px-4 py-2 bg-white/20 border border-white/30 text-white rounded-lg sm:rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-white mb-1 text-sm sm:text-base">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-3 sm:px-4 py-2 bg-white/20 border border-white/30 text-white rounded-lg sm:rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-white mb-1 text-sm sm:text-base">Your Message</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full px-3 sm:px-4 py-2 bg-white/20 border border-white/30 text-white rounded-lg sm:rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 sm:py-2.5 rounded-full transition-all duration-300 text-sm sm:text-base"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
