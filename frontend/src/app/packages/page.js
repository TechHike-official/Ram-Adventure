export default function Packages() {
  return (
    <div className="text-white bg-black">

      {/* HERO BANNER */}
      <div className="relative w-full h-[35vh] bg-[url('/jeep.png')] bg-cover bg-center ">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            Jeep Safari Packages
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto py-16 px-6 space-y-12">

        <h2 className="text-3xl font-semibold text-center text-white">
          Choose Your Munnar Adventure
        </h2>

        {/* GRID OF PACKAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* PACKAGE 1 */}
          <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800 hover:border-red-600 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              Premium Munnar Sunrise Safari
            </h3>

            <p className="text-gray-300 mb-4">
              Witness the breathtaking Munnar sunrise from the highest peaks while exploring misty hills and tea estates.
            </p>

            <ul className="text-sm text-gray-400 space-y-2 mb-4">
              <li>🌄 Kolukkumalai Sunrise View</li>
              <li>🌿 Tea Plantation Walk</li>
              <li>🏔 Off-road Mountain Trails</li>
              <li>🕒 Duration: 4–5 hours</li>
            </ul>

            <p className="text-xl font-bold text-white mb-4">₹1,899 per person</p>

            <a
              href="/booking"
              className="inline-block w-full text-center bg-red-600 hover:bg-red-700 transition py-2 rounded-lg text-sm font-semibold"
            >
              Book Now
            </a>
          </div>

          {/* PACKAGE 2 */}
          <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800 hover:border-red-600 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              Munnar Eco Jungle Safari
            </h3>

            <p className="text-gray-300 mb-4">
              Explore dense forests, waterfalls, wildlife spotting points, and untouched natural landscapes of Munnar.
            </p>

            <ul className="text-sm text-gray-400 space-y-2 mb-4">
              <li>🌳 Deep Forest Trails</li>
              <li>🐾 Wildlife Observation Points</li>
              <li>💦 Secret Waterfalls</li>
              <li>🕒 Duration: 3–4 hours</li>
            </ul>

            <p className="text-xl font-bold text-white mb-4">₹1,499 per person</p>

            <a
              href="/booking"
              className="inline-block w-full text-center bg-red-600 hover:bg-red-700 transition py-2 rounded-lg text-sm font-semibold"
            >
              Book Now
            </a>
          </div>

          {/* PACKAGE 3 */}
          <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800 hover:border-red-600 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              Munnar Top Station Adventure Drive
            </h3>

            <p className="text-gray-300 mb-4">
              A thrilling off-road route leading to panoramic viewpoints overlooking the Western Ghats.
            </p>

            <ul className="text-sm text-gray-400 space-y-2 mb-4">
              <li>🌫 Top Station Viewpoint</li>
              <li>🌋 Rocky Off-road Trails</li>
              <li>🌾 Tea Gardens & Valley Views</li>
              <li>🕒 Duration: 4 hours</li>
            </ul>

            <p className="text-xl font-bold text-white mb-4">₹1,699 per person</p>

            <a
              href="/booking"
              className="inline-block w-full text-center bg-red-600 hover:bg-red-700 transition py-2 rounded-lg text-sm font-semibold"
            >
              Book Now
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
