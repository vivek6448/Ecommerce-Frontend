import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 text-gray-200 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Link to="/">
            <h1 className="text-green-500 text-2xl font-bold">Zaptro</h1>
          </Link>
          <p className="mt-2 text-sm leading-relaxed">
            Powering Your World with the Best in Electronics.
          </p>
          <p className="mt-2 text-sm">123 Electronics , New Delhi ,110037</p>
          <p className="text-sm">Email: support@Zaptro.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold">Customer Service</h3>
          <ul className="mt-3 text-sm space-y-2">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Shipping & Returns</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Order Tracking</li>
            <li className="hover:text-white cursor-pointer">Size Guide</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-4 text-xl">
            <FaFacebook className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
            <FaTwitterSquare className="cursor-pointer hover:text-white" />
            <FaPinterest className="cursor-pointer hover:text-white" />
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold">Stay in the Loop</h3>
          <p className="mt-2 text-sm leading-relaxed">
            Subscribe to get special offers, free giveaways, and more
          </p>
          <form className="mt-4 flex w-full">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 text-sm sm:text-base rounded-l-full bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 text-sm sm:text-base rounded-r-full hover:bg-green-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs sm:text-sm">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-green-500">Zaptro</span>. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
