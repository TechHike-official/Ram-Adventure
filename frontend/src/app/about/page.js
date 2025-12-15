export default function About() {
  return (
    <div className="text-white bg-black">

      {/* HERO SECTION */}
      <div className="relative w-full h-[40vh] bg-[url('/jeep.png')] bg-black bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            About Jeep Safari Adventures
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto py-16 px-6 space-y-12 text-gray-300">

        {/* INTRO */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">Who We Are</h2>
          <p className="text-lg leading-relaxed">
            At <span className="text-red-500 font-semibold">Jeep Safari – Munnar Adventures</span>, 
            we bring you the most thrilling and scenic off-road experiences in the Western Ghats.
            Our expert drivers, premium vehicles, and deep knowledge of the terrain ensure your 
            journey is safe, exciting, and unforgettable.
          </p>
        </section>

        {/* OUR MISSION */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            We aim to deliver authentic, eco-friendly, and breathtaking adventure tours that allow 
            our guests to witness the true beauty of Munnar’s forests, waterfalls, wildlife, and 
            mountain peaks.
          </p>
        </section>

        {/* HIGHLIGHTS */}
        <section>
          <h2 className="text-3xl font-semibold text-white mb-6">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-800 hover:border-red-600 transition">
              <h3 className="text-xl font-bold text-red-500 mb-2">Professional Guides</h3>
              <p>
                Our drivers are trained, certified, and deeply familiar with Munnar’s off-road trails.
              </p>
            </div>

            <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-800 hover:border-red-600 transition">
              <h3 className="text-xl font-bold text-red-500 mb-2">Safe & Maintained Jeeps</h3>
              <p>
                We use only well-maintained 4×4 vehicles equipped for steep and rugged terrains.
              </p>
            </div>

            <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-800 hover:border-red-600 transition">
              <h3 className="text-xl font-bold text-red-500 mb-2">Unmatched Views</h3>
              <p>
                Enjoy panoramic views of mountains, tea plantations, waterfalls, and wildlife habitats.
              </p>
            </div>

          </div>
        </section>

        {/* CLOSING STATEMENT */}
        <section className="text-center py-10">
          <h2 className="text-3xl font-semibold mb-4 text-white">Your Adventure Awaits</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Whether you're a thrill-seeker, a nature lover, or a family looking for memorable moments,
            our Jeep Safari tours promise an experience like no other.  
            Join us and conquer the mountains of Munnar.
          </p>
        </section>

      </div>
    </div>
  )
}
