import { getData } from '../context/DataContext'

const Catagory = () => {
  const { categoryOnlyData } = getData()

  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center sm:justify-around py-4 sm:py-6">
          {categoryOnlyData?.map((category, index) => (
            <button
              key={index}
              className="uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base whitespace-nowrap hover:scale-105 transition-transform duration-200"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Catagory
