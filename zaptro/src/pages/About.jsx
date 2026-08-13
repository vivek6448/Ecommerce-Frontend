import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen py-8 sm:py-10 px-3 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur border border-white/10 rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-8 space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white">
          About Zaptro
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Welcome to <span className="font-semibold text-green-400">Zaptro</span>,
          your one-stop destination for the latest and greatest in electronics.
          From cutting-edge gadgets to must-have accessories, we’re here to
          power up your tech life with premium products and unbeatable service.
        </p>

        <div className="space-y-3 sm:space-y-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-400">
            Our Mission
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            At Zaptro, our mission is to make innovative technology accessible
            to everyone. We’re passionate about connecting people with the tools
            and tech they need to thrive in a digital world — all at competitive
            prices and delivered with speed and care.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-400">
            Why Choose Zaptro?
          </h2>
          <ul className="list-disc pl-5 sm:pl-6 text-gray-300 space-y-2 text-sm sm:text-base">
            <li>Top-quality electronic products from trusted brands</li>
            <li>Lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassle-free shopping experience</li>
          </ul>
        </div>

        <div className="space-y-3 sm:space-y-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-400">
            Our Vision
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            We envision a future where technology elevates everyday life. At
            Zaptro, we’re committed to staying ahead of the curve, offering
            cutting-edge solutions that are both practical and affordable.
          </p>
        </div>

        <div className="text-center pt-4 sm:pt-8">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-green-400 mb-2">
            Join the Zaptro Family
          </h3>
          <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
            Whether you’re a tech enthusiast, a professional, or just looking
            for something cool and functional — Zaptro has something for
            everyone.
          </p>
          <Link to={"/products"}>
            <button className="bg-green-500 text-white px-5 sm:px-6 py-2 rounded-full hover:bg-green-600 transition duration-300 text-sm sm:text-base">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
