"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const { data: session } = useSession()
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/90 shadow-lg backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">

        {/* LEFT LOGO AREA */}
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold tracking-wider flex items-center gap-2">
            Ram Adventure
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-red-500 transition">HOME</Link>
          <Link href="/about" className="hover:text-red-500 transition">ABOUT</Link>
          <Link href="/packages" className="hover:text-red-500 transition">PACKAGES</Link>
          <Link href="/gallery" className="hover:text-red-500 transition">GALLERY</Link>
          <Link href="/contact" className="hover:text-red-500 transition">CONTACT</Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* LOGIN / USER */}
          {!session?.user ? (
            <Link href="/login" className="flex items-center gap-1 text-sm hover:text-red-400 transition">
              <span className="text-lg">👤</span> Login
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <img src={session.user.image} className="w-8 h-8 rounded-full" />
              <span className="text-sm font-medium">{session.user.name}</span>
            </div>
          )}

          {/* BOOK NOW BUTTON (Hide ONLY on /packages ) */}
          {pathname !== "/packages" && (
            <Link
              href="/packages"
              className="px-4 py-2 bg-red-600 hover:bg-red-700 transition rounded-full text-sm font-semibold"
            >
              BOOK NOW
            </Link>
          )}

        </div>
      </div>
    </header>
  )
}
