import React from 'react'
import { FaTruck, FaLock, FaUndo, FaRegClock } from 'react-icons/fa'

const features = [
  { icon: FaTruck, text: 'Free Shipping', subtext: 'On orders over $100' },
  { icon: FaLock, text: 'Secure Payment', subtext: '100% protected payments' },
  { icon: FaUndo, text: 'Easy Returns', subtext: '30-day return policy' },
  { icon: FaRegClock, text: '24/7 Support', subtext: 'Dedicated customer service' },
]

const Features = () => {
  return (
    <div className="py-6 sm:py-8 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start text-center sm:text-left bg-white/10 backdrop-blur border border-white/10 rounded-xl p-4 sm:p-5 shadow-sm hover:bg-white/15 transition-colors duration-200"
              >
                <feature.icon className="flex-shrink-0 h-9 w-9 sm:h-10 sm:w-10 text-green-400" aria-hidden="true" />
                <div className="mt-2 sm:mt-0 sm:ml-4">
                  <p className="text-sm sm:text-base font-semibold text-white">
                    {feature.text}
                  </p>
                  <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-400">
                    {feature.subtext}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Features
