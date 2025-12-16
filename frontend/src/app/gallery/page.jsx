"use client"

import Image from "next/image"

export default function Gallery() {
  const images = [
    "/gallery/photo1.jpg",
    "/gallery/photo2.jpg",
    "/gallery/photo3.jpg",
    "/gallery/photo4.jpg",
    "/gallery/photo5.jpg",
    "/gallery/photo6.jpg",
    "/gallery/client1.jpg",
    "/gallery/client2.jpg",
    "/gallery/client3.jpg",
  ]

  return (
    <div className="text-white">

      {/* HERO HEADER */}
      <div className="relative w-full h-[35vh] bg-[url('/jeep.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            Safari Gallery
          </h1>
        </div>
      </div>

      {/* GALLERY GRID */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-8">Explore Moments from Munnar</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {images.map((src, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-xl shadow-lg">
              <Image
                src={src}
                alt="Safari Gallery"
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
