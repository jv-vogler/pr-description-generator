import React from 'react'

export const Footer = () => {
  return (
    <footer className="flex justify-center gap-2 bg-slate-700 py-3 text-lg text-white">
      <span>
        &copy; {new Date().getFullYear()} Made by
        <a
          href="https://github.com/jv-vogler"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b-4 border-teal-500 font-bold transition-colors duration-300 hover:text-teal-500"
        >
          {' '}
          JV
        </a>
      </span>
      -
      <span>
        <a
          href="https://github.com/jv-vogler/pr-description-generator"
          target="_parent"
          rel="noopener noreferrer"
          className="border-b-4 border-teal-500 font-bold transition-colors duration-300 hover:text-teal-500"
        >
          Source code
        </a>
      </span>
    </footer>
  )
}
