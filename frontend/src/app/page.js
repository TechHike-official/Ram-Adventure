"use client"

import Image from "next/image"
import Jeep from "@/../public/jeep.png"
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative bg-black">

      {/* HERO SECTION */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <Image 
          src={Jeep} 
          alt="Jeep Safari" 
          fill 
          className="object-cover" 
          priority 
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* TEXT + CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 lg:px-32 max-w-5xl space-y-6 z-10">

          {/* LOCATION + RATING */}
          <div className="flex items-center gap-3 text-sm text-gray-200 bg-black/40 w-fit px-4 py-2 mt-10 rounded-full border border-white/20">
            <span>📍 Munnar, Kerala</span>
            <span className="text-red-400">★ 4.9 (500+ reviews)</span>
          </div>

          {/* MAIN HEADING */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-left text-white">
            CONQUER THE <span className="text-red-600">MUNNAR</span> MOUNTAINS
          </h1>

          {/* SUBTEXT */}
          <p className="text-gray-200 text-lg md:text-xl max-w-xl">
            Experience the ultimate off-road adventure through Kerala’s misty hills, tea plantations, and hidden waterfalls with our expert-guided jeep safaris.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-4">
            <Link href="/booking">
              <button className="bg-red-600 hover:bg-red-700 px-6 py-3 text-white font-semibold rounded-lg shadow-lg">
                BOOK YOUR SAFARI
              </button>
            </Link>

          
          </div>

        

        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-gray-300 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-red-500 text-2xl">▲</span> JEEP SAFARI
            </h2>
            <p className="text-sm mt-3">
              Experience the thrill of off-road adventures in the scenic hills of Munnar.
              Book your unforgettable Jeep Safari today.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-red-500 transition"><a href="/safari">Safaris</a></li>
              <li className="hover:text-red-500 transition"><a href="/booking">Book Now</a></li>
              <li className="hover:text-red-500 transition"><a href="/about">About</a></li>
              <li className="hover:text-red-500 transition"><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <p className="text-sm">📍 Munnar, Kerala, India</p>
            <p className="text-sm mt-1">📞 +91 98765 43210</p>
            <p className="text-sm mt-1">📧 info@jeepsafari.com</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-red-500 transition">📘</a>
              <a href="#" className="hover:text-red-500 transition">📸</a>
              <a href="#" className="hover:text-red-500 transition">🎥</a>
              <a href="#" className="hover:text-red-500 transition">🐦</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Jeep Safari Adventures — All rights reserved.
        </div>
      </footer>

    </div>
  )
}
