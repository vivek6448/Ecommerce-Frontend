import React from 'react'

const getPages = (current, total) => {
  const pages = []
  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, '...', total)
    } else if (current >= total - 2) {
      pages.push(1, '...', total - 2, total - 1, total)
    } else {
      pages.push(1, '...', current - 1, current, current + 1, '...', total)
    }
  }
  return pages
}

const Pagination = ({ page, pageHandler, dynamicPage }) => {
  return (
    <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
      <button
        disabled={page === 1}
        className={`${
          page === 1 ? "bg-red-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
        } text-white px-3 py-1.5 rounded-md transition`}
        onClick={() => pageHandler(page - 1)}
      >
        Prev
      </button>

      {getPages(page, dynamicPage)?.map((item, index) => {
        return (
          <span
            key={index}
            onClick={() => typeof item === "number" && pageHandler(item)}
            className={`min-w-[32px] text-center px-2 py-1 rounded-md transition ${
              item === page
                ? "bg-red-500 text-white font-semibold"
                : "text-gray-700 hover:bg-gray-200"
            } ${typeof item !== "number" ? "cursor-default" : "cursor-pointer"}`}
          >
            {item}
          </span>
        )
      })}

      <button
        disabled={page === dynamicPage}
        className={`${
          page === dynamicPage
            ? "bg-red-400 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600"
        } text-white px-3 py-1.5 rounded-md transition`}
        onClick={() => pageHandler(page + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
